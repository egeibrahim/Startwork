const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JobSchema = new Schema({
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
  jobTitle: {
    type: String,
    required: true,
  },
  workingType: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
    minlength: 100,
  },
  address: {
    type: String,
  },
  references: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Lütfen geçerli bir email giriniz",
    ],
  },
  jobSalary: {
    type: Number,
  },
  keyWord: [
    {
      type: String,
    },
  ],
  profile_image: {
    type: String,
    required: true,
    default: "default_profile.png",
  },
  url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Job", JobSchema);
