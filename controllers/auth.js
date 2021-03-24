const User = require("../models/User");
const Mentor = require("../models/MentorSettings");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers");
const {
  validateUserInput,
  comparePassword,
} = require("../helpers/input/inputHelpers");
const sendEmail = require("../helpers/libraries/sendEmail");

const register = asyncErrorWrapper(async (req, res) => {
  const { name, username, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    username,
    password,
  });
  sendJwtToClient(user, res);
});

const getUser = asyncErrorWrapper(async (req, res) => {
  const { id } = req.user;
  const user = await User.findById(id).populate({
    path: "following",
    populate: [{ path: "User" }, { path: "Page" }],
  });
  return res.json({
    success: true,
    data: user,
  });
});

const login = asyncErrorWrapper(async (req, res, next) => {
  const { username, password } = req.body;

  if (!validateUserInput(username, password)) {
    return next(
      new CustomError("Lütfen girmiş olduğunuz bilgileri kontrol ediniz", 400)
    );
  }
  const user = await User.findOne({ username }).select("+password");
  if (!comparePassword(password, user.password)) {
    return next(new CustomError("Lütfen bilgilerinizi kontrol ediniz", 400));
  }

  sendJwtToClient(user, res);
});

const logout = asyncErrorWrapper(async (req, res) => {
  const { NODE_ENV } = process.env;

  return res
    .status(200)
    .cookie({
      httpOnly: true,
      expires: new Date(Date.now()),
      secure: NODE_ENV === "development" ? false : true,
    })
    .json({
      success: true,
      message: "Çıkış işlemi başarılı",
    });
});

const editDetails = asyncErrorWrapper(async (req, res) => {
  const editInformation = req.body;

  const user = await User.findByIdAndUpdate(req.user.id, editInformation, {
    new: true,
    runValidators: true,
  });
  return res.status(200).json({
    success: true,
    data: user,
  });
});

const imageUpload = asyncErrorWrapper(async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      profile_image: req.savedProfileImage,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    success: true,
    message: "Resim yüklenmesi başarılı",
    data: user,
  });
});

const forgotPassword = asyncErrorWrapper(async (req, res, next) => {
  const resetEmail = req.body.email;

  const user = await User.findOne({ email: resetEmail });

  if (!user) {
    return next(new CustomError("There is no user with that email", 400));
  }
  const resetPasswordToken = user.getResetPasswordTokenFromUser();

  await user.save();

  const resetPasswordUrl = `http://localhost:5000/api/auth/resetpassword?resetPasswordToken=${resetPasswordToken}`;

  const emailTemplate = `
    <h3>Reset your password</h3>
    <p>This <a href='${resetPasswordUrl}' target='_blank'>link</a> will expire in 1 hour</p>
    `;

  try {
    await sendEmail({
      from: process.env.SMTP_USER,
      to: resetEmail,
      subject: "Reset your password",
      html: emailTemplate,
    });
    res.status(200).json({
      success: true,
      message: "Token sent to your email",
    });
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    return next(new CustomError("Email could not be send", 500));
  }
});

const resetPassword = asyncErrorWrapper(async (req, res, next) => {
  const { resetPasswordToken } = req.query;
  const { password } = req.body;

  if (!resetPasswordToken) {
    return next(new CustomError("Please provide a valid token", 400));
  }

  let user = await User.findOne({
    resetPasswordToken: resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(new CustomError("Invalid token or session expired", 404));
  }

  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  return res.status(200).json({
    success: true,
    message: "Reset password process successfull",
  });
});

const addToNetwork = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user.id;
  const user = await User.findByIdAndUpdate(
    userId,
    { $addToSet: { following: id } },
    {
      new: true,
      runValidators: true,
    }
  );
  await User.findByIdAndUpdate(
    id,
    { $addToSet: { followers: userId } },
    {
      new: true,
      runValidators: true,
    }
  );
  return res.status(200).json({
    success: true,
    data: user,
  });
});

const removeFromNetwork = asyncErrorWrapper(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const user = await User.findByIdAndUpdate(
    userId,
    { $pull: { following: id } },
    {
      new: true,
      runValidators: true,
    }
  );
  await User.findByIdAndUpdate(
    id,
    { $pull: { followers: userId } },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.status(200).json({
    success: true,
    data: user,
  });
});

const getUserById = asyncErrorWrapper(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  return res.status(200).json({
    success: true,
    data: user,
  });
});

module.exports = {
  register,
  login,
  logout,
  getUser,
  editDetails,
  imageUpload,
  forgotPassword,
  resetPassword,
  addToNetwork,
  getUserById,
  removeFromNetwork,
};
