const mongoose = require("mongoose");
const User = require("./userModel");
const CustomError = require("../helpers/error/CustomError");

const Schema = mongoose.Schema;

const InvestmentSettingsSchema = Schema({
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
  isInvestor: {
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
  availableInvestor: {
    type: Boolean,
    required: true,
    default: false,
  },
  hasInvestorChoice: {
    type: Boolean,
    required: true,
    default: false,
  },
  mainInvestments: [
    {
      type: String,
    },
  ],
  hasInvestmentOption: {
    type: Boolean,
    required: true,
    default: false,
  },
  investmentOptions: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Investment", InvestmentSettingsSchema);
