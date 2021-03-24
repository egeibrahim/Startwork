const express = require("express");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const {
  createConversation,
  getAllConversation,
  getSingleConversation,
  createDiscussion,
} = require("../controllers/conversation");

const router = express.Router();

router.post("/create", getAccessToRoute, createConversation);
router.post("/comment/:postId", getAccessToRoute, createDiscussion);
router.get("/", getAccessToRoute, getAllConversation);
router.get("/:id", getAccessToRoute, getSingleConversation);

module.exports = router;
