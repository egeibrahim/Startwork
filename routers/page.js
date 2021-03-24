const express = require("express");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const uploadImage = require("../middlewares/libraries/uploadImage");
const {
  createPage,
  getPage,
  getAllPages,
  editPage,
  getOwnPage,
  getPageByType,
} = require("../controllers/pageController");

const router = express.Router();

router.post("/create", getAccessToRoute, createPage);
router.put("/edit/:id", getAccessToRoute, editPage);
router.get("/page/:id", getPage);
router.get("/", getAllPages);
router.get("/own", getAccessToRoute, getOwnPage);
router.get("/page/type/:type", getPageByType);

module.exports = router;
