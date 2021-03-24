const express = require("express");
const {
  createAdvantage,
  getAllAdvantage,
  getSingleAdvantage,
} = require("../controllers/advantagesController");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const uploadImage = require("../middlewares/libraries/uploadImage");
const router = express.Router();

router.post(
  "/create",
  [getAccessToRoute, uploadImage.single("profile_image")],
  createAdvantage
);
router.get("/", getAllAdvantage);
router.get("/:id", getSingleAdvantage);

module.exports = router;
