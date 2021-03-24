const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PageSchema = Schema({
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
    default: "default_profile.jpg",
  },
  profileType: {
    type: String,
    required: true,
  },
  profileName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  images: [
    {
      type: String,
    },
  ],
  city: {
    type: String,
  },
  country: {
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
  linkedin: {
    type: String,
    match: [
      /(?<=^|(?<=[^a-zA-Z0-9-_\.]))@([A-Za-z]+[A-Za-z0-9-_]+)/,
      "Lütfen geçerli bir linkedin ismini giriniz",
    ],
  },
  twitter: {
    type: String,
    match: [
      /(?<=^|(?<=[^a-zA-Z0-9-_\.]))@([A-Za-z]+[A-Za-z0-9-_]+)/,
      "Lütfen geçerli bir twitter ismini giriniz",
    ],
  },
  companyName: {
    type: String,
  },
  companyCreated: {
    type: Date,
    default: Date.now,
    required: true,
  },
  about: {
    type: String,
  },
  workersAmount: {
    type: Number,
  },
  phoneNumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  focusDepartment: [
    {
      type: String,
    },
  ],
  programType: [
    {
      type: String,
    },
  ],
  investmentStage: [
    {
      type: String,
    },
  ],
  businessModel: [
    {
      type: String,
    },
  ],
  typeOfEnterprise: [
    {
      type: String,
    },
  ],
  lookingFor: [
    {
      type: String,
    },
  ],
  addFounder: [
    {
      type: String,
    },
  ],
  addTeam: [
    {
      type: String,
    },
  ],
  addMentor: [
    {
      type: String,
    },
  ],
  addInvestor: [
    {
      type: String,
    },
  ],
  addProgram: [
    {
      type: String,
    },
  ],
  addPartner: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Page", PageSchema);
