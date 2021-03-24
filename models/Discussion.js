const mongoose = require("mongoose");
const Conversation = require("./Conversation");

const Schema = mongoose.Schema;

const DiscussionSchema = Schema({
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
  conversation: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Conversation",
  },
  comment: {
    type: String,
    required: true,
  },
});

DiscussionSchema.post("save", function (next) {
  Conversation.findByIdAndUpdate(
    this.conversation,
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

module.exports = mongoose.model("Discussion", DiscussionSchema);
