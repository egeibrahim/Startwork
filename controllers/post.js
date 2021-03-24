const asyncErrorWrapper = require("express-async-handler");
const Post = require("../models/Post");
const User = require("../models/User");

const createPost = asyncErrorWrapper(async (req, res) => {
  const information = req.body;
  const post = await Post.create({
    userId: req.user.id,
    ...information,
  });

  return res.status(200).json({
    success: true,
    data: post,
  });
});

const getSinglePost = asyncErrorWrapper(async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);

  return res.status(200).json({
    success: true,
    data: post,
  });
});

const getAllPosts = asyncErrorWrapper(async (req, res) => {
  const userId = req.user.id;
  const following = await User.findById(userId).select("following");
  const followList = following.following;
  followList.push(userId);
  const posts = await Post.find({ userId: followList })
    .populate({
      path: "userId",
      select: ["profile_image", "name", "username"],
    })
    .populate({
      path: "comments",
      select: "comment",
    })
    .sort({ createdAt: -1 });
  return res.status(200).json({
    success: true,
    data: posts,
  });
});

const getAllUserPosts = asyncErrorWrapper(async (req, res) => {
  const { userId } = req.params;
  const posts = await Post.find({ userId: userId });

  return res.status(200).json({
    success: true,
    data: posts,
  });
});

module.exports = {
  createPost,
  getSinglePost,
  getAllPosts,
  getAllUserPosts,
};
