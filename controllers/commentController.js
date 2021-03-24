const asyncErrorWrapper = require("express-async-handler");
const CommentController = require("../models/commentModel");
const CustomError = require("../helpers/error/CustomError");

const createComment = asyncErrorWrapper(async (req, res) => {
  const { postId } = req.params;
  const information = req.body;
  const comment = await CommentController.create({
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
  const comment = await CommentController.findById(postId);

  return res.status(200).json({
    success: true,
    data: comment,
  });
});

const editComment = asyncErrorWrapper(async (req, res) => {
  const { id } = req.params;
  const information = req.body;

  const comment = await CommentController.findByIdAndUpdate(id, information, {
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
  const comment = await CommentController.findByIdAndDelete(id);
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
