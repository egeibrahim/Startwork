const Mentor = require("../models/MentorSettings");
const asyncErrorWrapper = require("express-async-handler");

const updateMentorSettings = asyncErrorWrapper(async (req, res) => {
  const information = req.body;
  const mentor = await Mentor.findOneAndUpdate(
    { userId: req.user.id },
    information,
    {
      new: true,
      runValidators: true,
    }
  );

  return res.status(200).json({
    success: true,
    data: mentor,
  });
});

const getMentorSettings = asyncErrorWrapper(async (req, res) => {
  const { id } = req.user;

  const mentor = await Mentor.find({ userId: id });

  return res.status(200).json({
    status: true,
    data: mentor,
  });
});

module.exports = {
  updateMentorSettings,
  getMentorSettings,
};
