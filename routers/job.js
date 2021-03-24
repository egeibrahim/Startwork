const express = require("express");
const { createJob, getAllJobs } = require("../controllers/jobController");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const uploadImage = require("../middlewares/libraries/uploadImage");

const router = express.Router();

router.post(
  "/create",
  [getAccessToRoute, uploadImage.single("profile_image")],
  createJob
);
router.get("/", getAllJobs);

module.exports = router;
