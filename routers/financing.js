const express = require("express");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const {
  createFinancing,
  editFinancing,
  getFinancing,
} = require("../controllers/financingController");

const router = express.Router();
router.use(getAccessToRoute);

router.post("/create/:id", createFinancing);
router.put("/edit/:id", editFinancing);
router.get("/:id", getFinancing);

module.exports = router;
