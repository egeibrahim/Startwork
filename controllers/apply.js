const asyncErrorWrapper = require("express-async-handler");
const Apply = require("../models/Apply");

const createApply = asyncErrorWrapper(async (req, res) => {
  const information = req.body;
  const apply = await Apply.create({
    userId: req.user.id,
    profile_image: req.savedProfileImage,
    ...information,
  });

  return res.status(200).json({
    success: true,
    data: apply,
  });
});

const getAllApply = asyncErrorWrapper(async (req, res) => {
  const apply = await Apply.find().sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    data: apply,
  });
});

const getSingleApply = asyncErrorWrapper(async (req, res) => {
  const { id } = req.params;
  const apply = await Apply.findById(id);

  return res.status(200).json({
    success: true,
    data: apply,
  });
});

module.exports = {
  createApply,
  getAllApply,
  getSingleApply,
};
