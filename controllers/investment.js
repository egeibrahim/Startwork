const Investment = require("../models/InvestmentSettings");
const asyncErrorWrapper = require("express-async-handler");

const updateInvestmentSettings = asyncErrorWrapper(async (req, res) => {
  const information = req.body;
  const investment = await Investment.findOneAndUpdate(
    { userId: req.user.id },
    information,
    {
      new: true,
      runValidators: true,
    }
  );

  return res.status(200).json({
    success: true,
    data: investment,
  });
});

const getInvestmentSettings = asyncErrorWrapper(async (req, res) => {
  const { id } = req.user;

  const investment = await Investment.find({ userId: id });

  return res.status(200).json({
    success: true,
    data: investment,
  });
});

module.exports = {
  updateInvestmentSettings,
  getInvestmentSettings,
};
