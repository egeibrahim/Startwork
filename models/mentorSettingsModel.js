const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MentorSettingsSchema = Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User",
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  isMentor: {
    type: Boolean,
    required: true,
    default: false,
  },
  portfolio: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Portfolio",
    },
  ],
  availableMentor: {
    type: Boolean,
    required: true,
    default: false,
  },
  hasMentorChoice: {
    type: Boolean,
    required: true,
    default: false,
  },
  mentorshipProgram: [
    {
      type: String,
    },
  ],
  mentorshipInvestment: {
    type: Boolean,
    default: false,
  },
  mentorshipInvestStage: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Mentor", MentorSettingsSchema);
