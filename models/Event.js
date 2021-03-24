const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  profile_image: {
    type: String,
    required: true,
    default: "default_event.jpg",
  },
  eventName: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
  },
  eventStarts: {
    type: Date,
    required: true,
  },
  eventEnds: {
    type: Date,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  url: {
    type: String,
  },
});

module.exports = mongoose.model("Event", EventSchema);
