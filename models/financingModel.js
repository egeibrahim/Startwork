const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FinanceSchema = Schema({
    profileId: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    investmentType:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    angelInvestor: {
        type: String
    },
    investorCompany:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now,
        required: true
    },
    newsAddress:{
        type: String
    },
    aboutInvestment:{
        type: String,
        required: true
    },
    totalEvaluation:{
        type: Number
    },
    totalInvestment:{
        type: Number
    },
    seedInvestmentAmount:{
        type: Number
    },
    totalInvestorNumber:{
        type: Number
    }
});

module.exports = mongoose.model("Finance", FinanceSchema);