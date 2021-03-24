const express = require("express");
const {
  createEvent,
  getAllEvents,
  getSingleEvent,
} = require("../controllers/event");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const uploadImage = require("../middlewares/libraries/uploadImage");
const router = express.Router();

router.get("/:id", getAccessToRoute, getSingleEvent);
router.get("/", getAccessToRoute, getAllEvents);
router.post(
  "/create",
  [getAccessToRoute, uploadImage.single("profile_image")],
  createEvent
);

module.exports = router;
