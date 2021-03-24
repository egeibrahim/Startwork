const asyncErrorWrapper = require("express-async-handler");
const Conversation = require("../models/Conversation");
const Discussion = require("../models/Discussion");
const User = require("../models/User");

const createConversation = asyncErrorWrapper(async (req, res) => {
  const information = req.body;
  const conversation = await Conversation.create({
    userId: req.user.id,
    ...information,
  });

  return res.status(200).json({
    success: true,
    data: conversation,
  });
});

const getAllConversation = asyncErrorWrapper(async (req, res) => {
  const conversation = await Conversation.find()
    .populate({
      path: "userId",
      select: ["profile_image", "name", "username"],
    })
    .sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    data: conversation,
  });
});

const getSingleConversation = asyncErrorWrapper(async (req, res) => {
  const { id } = req.params;
  const conversation = await Conversation.findById(id).populate({
    path: "comments",
    select: "comment",
    populate: {
      path: "userId",
      select: ["profile_image", "name", "username"],
    },
  });

  return res.status(200).json({
    success: true,
    data: conversation,
  });
});

const createDiscussion = asyncErrorWrapper(async (req, res) => {
  const { postId } = req.params;
  const information = req.body;

  const discussion = await Discussion.create({
    userId: req.user.id,
    conversation: postId,
    ...information,
  });

  return res.status(200).json({
    success: true,
    data: discussion,
  });
});

module.exports = {
  createConversation,
  getAllConversation,
  getSingleConversation,
  createDiscussion,
};
