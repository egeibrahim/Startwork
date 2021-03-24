const mongoose = require("mongoose");
const Post = require("../models/Post");

const Schema = mongoose.Schema;

const CommentSchema = Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
  ],
  post: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Post",
  },
  comment: {
    type: String,
    required: true,
  },
});

CommentSchema.post("save", function (next) {
  Post.findByIdAndUpdate(
    this.post,
    {
      $push: { comments: this._id },
    },
    (err) => {
      if (err) {
        return next(new CustomError("Bir hata oluştu", 500));
      }
    }
  );
});

module.exports = mongoose.model("Comment", CommentSchema);
