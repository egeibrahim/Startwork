const express = require("express");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const {
  updateInvestmentSettings,
  getInvestmentSettings,
} = require("../controllers/investmentController");

const router = express.Router();

router.use(getAccessToRoute);

router.put("/edit", updateInvestmentSettings);
router.get("/profile-investment-settings", getInvestmentSettings);

module.exports = router;
