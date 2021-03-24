const asyncErrorWrapper = require("express-async-handler");
const Comment = require("../models/Comment");
const CustomError = require("../helpers/error/CustomError");

const createComment = asyncErrorWrapper(async (req, res) => {
  const { postId } = req.params;
  const information = req.body;
  const comment = await Comment.create({
    userId: req.user.id,
    post: postId,
    ...information,
  });

  return res.status(200).json({
    success: true,
    data: comment,
  });
});

const getComment = asyncErrorWrapper(async (req, res) => {
  const { postId } = req.params;
  const comment = await Comment.findById(postId);

  return res.status(200).json({
    success: true,
    data: comment,
  });
});

const editComment = asyncErrorWrapper(async (req, res) => {
  const { id } = req.params;
  const information = req.body;

  const comment = await Comment.findByIdAndUpdate(id, information, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({
    success: true,
    data: comment,
  });
});

const deleteComment = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const comment = await Comment.findByIdAndDelete(id);
  if (comment) {
    return res.status(200).json({
      success: true,
      message: "Silme işlemi gerçekleştirildi",
    });
  } else {
    return next(
      new CustomError("Silme işlemi başarısız. Öyle bir yorum yok", 404)
    );
  }
});

module.exports = {
  createComment,
  editComment,
  deleteComment,
  getComment,
};
