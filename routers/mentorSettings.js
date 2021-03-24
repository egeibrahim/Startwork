const express = require("express");
const {
  updateMentorSettings,
  getMentorSettings,
} = require("../controllers/mentorController");
const { getAccessToRoute } = require("../middlewares/authorization/auth");

const router = express.Router();

router.use(getAccessToRoute);

router.put("/edit", updateMentorSettings);
router.get("/profile-mentor-settings", getMentorSettings);

module.exports = router;
