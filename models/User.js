const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Mentor = require("./MentorSettings");
const Investment = require("./InvestmentSettings");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  profile_image: {
    type: String,
    required: true,
    default: "default_profile.jpg",
  },
  following: [
    {
      type: mongoose.Schema.ObjectId,
    },
  ],
  followers: [
    {
      type: mongoose.Schema.ObjectId,
    },
  ],
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Lütfen geçerli bir email giriniz",
    ],
  },
  password: {
    type: String,
    minlength: [6, "Lütfen geçerli bir şifre giriniz"],
    required: true,
    select: false,
  },
  website: {
    type: String,
  },
  posts: [
    {
      type: mongoose.Schema.ObjectId,
    },
  ],
  linkedin: {
    type: String,
    match: [
      /(?<=^|(?<=[^a-zA-Z0-9-_\.]))@([A-Za-z]+[A-Za-z0-9-_]+)/,
      "Lütfen geçerli bir linkedin ismini giriniz",
    ],
  },
  twitter: {
    type: String,
    match: [
      /(?<=^|(?<=[^a-zA-Z0-9-_\.]))@([A-Za-z]+[A-Za-z0-9-_]+)/,
      "Lütfen geçerli bir twitter ismini giriniz",
    ],
  },
  department: {
    type: String,
  },
  study: {
    type: String,
  },
  positionIn: {
    type: String,
  },
  workArea: {
    type: String,
  },
  bio: {
    type: String,
  },
  entrepreneur: {
    required: true,
    type: Boolean,
    default: false,
  },
  mentor: {
    required: true,
    type: Boolean,
    default: false,
  },
  investor: {
    required: true,
    type: Boolean,
    default: false,
  },
  abilities: [
    {
      type: String,
    },
  ],
  lookingFor: [
    {
      type: String,
    },
  ],
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpire: {
    type: Date,
  },
});

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    next();
  }

  Mentor.create({
    userId: this._id,
    isMentor: false,
  });

  Investment.create({
    userId: this._id,
    isInvestor: false,
  });

  bcrypt.genSalt(10, (err, salt) => {
    if (err) next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) next(err);
      this.password = hash;
      next();
    });
  });
});

UserSchema.methods.generateJwtFromUser = function () {
  const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;
  const payload = {
    id: this._id,
    name: this.name,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE,
  });

  return token;
};

UserSchema.methods.getResetPasswordTokenFromUser = function () {
  const { RESET_PASSWORD_EXPIRE } = process.env;
  const randomHexString = crypto.randomBytes(15).toString("hex");

  const resetPasswordToken = crypto
    .createHash("SHA256")
    .update(randomHexString)
    .digest("hex");

  this.resetPasswordToken = resetPasswordToken;
  this.resetPasswordExpire = Date.now() + parseInt(RESET_PASSWORD_EXPIRE);

  return resetPasswordToken;
};

module.exports = mongoose.model("User", UserSchema);
