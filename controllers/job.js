const asyncErrorWrapper = require("express-async-handler");
const Job = require("../models/job");

const createJob = asyncErrorWrapper(async (req, res) => {
  const information = req.body;
  const job = await Job.create({
    userId: req.user.id,
    profile_image: req.savedProfileImage,
    ...information,
  });

  return res.status(200).json({
    success: true,
    data: job,
  });
});

const getAllJobs = asyncErrorWrapper(async (req, res) => {
  const job = await Job.find().sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    data: job,
  });
});

module.exports = {
  createJob,
  getAllJobs,
};
