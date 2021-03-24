const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConversationSchema = Schema({
  title: {
    type: String,
    required: true,
  },
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
  comments: [
    {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Discussion",
    },
  ],
});

module.exports = mongoose.model("Conversation", ConversationSchema);
