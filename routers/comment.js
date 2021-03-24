const express = require("express");
const {
  createComment,
  editComment,
  deleteComment,
  getComment,
} = require("../controllers/commentController");
const { getAccessToRoute } = require("../middlewares/authorization/auth");

const router = express.Router();

router.post("/create/:postId", getAccessToRoute, createComment);
router.get("/get/:postId", getAccessToRoute, getComment);
router.put("/edit/:id", getAccessToRoute, editComment);
router.delete("/delete/:id", getAccessToRoute, deleteComment);

module.exports = router;
