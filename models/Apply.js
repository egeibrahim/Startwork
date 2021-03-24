const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ApplySchema = Schema({
  projectName: {
    type: String,
    required: true,
  },
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
  begins: {
    type: Date,
    default: Date.now,
    required: true,
  },
  ends: {
    type: Date,
    default: Date.now,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  profile_image: {
    type: String,
    required: true,
    default: "default_profile.png",
  },
});

module.exports = mongoose.model("Apply", ApplySchema);
