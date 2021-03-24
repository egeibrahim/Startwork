const express = require("express");
const {
  register,
  login,
  logout,
  getUser,
  editDetails,
  imageUpload,
  forgotPassword,
  resetPassword,
  addToNetwork,
  getUserById,
  removeFromNetwork,
  getFollowingList,
} = require("../controllers/authController");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const uploadImage = require("../middlewares/libraries/uploadImage");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgotpassword", forgotPassword);
router.post(
  "/uploads",
  [getAccessToRoute, uploadImage.single("profile_image")],
  imageUpload
);
router.put("/add/:id", getAccessToRoute, addToNetwork);
router.put("/remove/:id", getAccessToRoute, removeFromNetwork);
router.put("/edit", getAccessToRoute, editDetails);
router.put("/resetpassword", resetPassword);
router.get("/profile", getAccessToRoute, getUser);
router.get("/logout", getAccessToRoute, logout);
router.get("/profile/:id", getUserById);

module.exports = router;
