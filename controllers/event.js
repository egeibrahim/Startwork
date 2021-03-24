const asyncErrorWrapper = require("express-async-handler");
const Event = require("../models/Event");

const createEvent = asyncErrorWrapper(async (req, res) => {
  const information = req.body;
  const event = await Event.create({
    userId: req.user.id,
    profile_image: req.savedProfileImage,
    ...information,
  });

  return res.status(200).json({
    success: true,
    data: event,
  });
});

const getAllEvents = asyncErrorWrapper(async (req, res) => {
  const event = await Event.find();
  return res.status(200).json({
    success: true,
    data: event,
  });
});

const getSingleEvent = asyncErrorWrapper(async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id);

  return res.status(200).json({
    success: true,
    data: event,
  });
});

module.exports = {
  createEvent,
  getAllEvents,
  getSingleEvent,
};
