const express = require("express");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const uploadImage = require("../middlewares/libraries/uploadImage");
const {
  createPost,
  getSinglePost,
  getAllPosts,
  getAllUserPosts,
} = require("../controllers/post");

const router = express.Router();

router.post("/create", getAccessToRoute, createPost);
router.get("/:id", getSinglePost);
router.get("/", getAccessToRoute, getAllPosts);
router.get("/user/:userId", getAllUserPosts);

module.exports = router;
