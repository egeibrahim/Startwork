const express = require("express");
const {
  createApply,
  getAllApply,
  getSingleApply,
} = require("../controllers/applyController");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const uploadImage = require("../middlewares/libraries/uploadImage");
const router = express.Router();

router.post(
  "/create",
  [getAccessToRoute, uploadImage.single("profile_image")],
  createApply
);
router.get("/", getAllApply);
router.get("/:id", getSingleApply);
module.exports = router;
