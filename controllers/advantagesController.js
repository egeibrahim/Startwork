const asyncErrorWrapper = require("express-async-handler");
const Advantage = require("../models/advantageModel");

const createAdvantage = asyncErrorWrapper(async (req, res) => {
  const information = req.body;
  const advantage = await Advantage.create({
    userId: req.user.id,
    profile_image: req.savedProfileImage,
    ...information,
  });

  return res.status(200).json({
    success: true,
    data: advantage,
  });
});

const getAllAdvantage = asyncErrorWrapper(async (req, res) => {
  const advantage = await Advantage.find().sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    data: advantage,
  });
});

const getSingleAdvantage = asyncErrorWrapper(async (req, res) => {
  const { id } = req.params;
  const advantage = await Advantage.findById(id);

  return res.status(200).json({
    success: true,
    data: advantage,
  });
});

module.exports = {
  createAdvantage,
  getAllAdvantage,
  getSingleAdvantage,
};
