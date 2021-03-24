const asyncErrorWrapper = require("express-async-handler");
const FinancingController = require("../models/financingModel");

const createFinancing = asyncErrorWrapper(async (req, res) => {
  const { id } = req.params;
  const information = req.body;

  const financing = await FinancingController.create({
    profileId: id,
    ...information,
  });

  return res.status(200).json({
    success: true,
    data: financing,
  });
});

const editFinancing = asyncErrorWrapper(async (req, res) => {
  const { id } = req.params;
  const information = req.body;

  const financing = await FinancingController.findByIdAndUpdate(
    id,
    information,
    {
      new: true,
      runValidators: true,
    }
  );

  return res.status(200).json({
    success: true,
    data: financing,
  });
});

const getFinancing = asyncErrorWrapper(async (req, res) => {
  const { id } = req.params;
  const financing = await FinancingController.findOne({ profileId: id });

  return res.status(200).json({
    success: true,
    data: financing,
  });
});

module.exports = {
  createFinancing,
  editFinancing,
  getFinancing,
};
