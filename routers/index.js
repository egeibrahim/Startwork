const express = require("express");
const auth = require("./auth");
const mentor = require("./mentorSettings");
const investment = require("./investmentSettings");
const page = require("./page");
const post = require("./post");
const comment = require("./comment");
const financing = require("./financing");
const apply = require("./apply");
const job = require("./job");
const advantage = require("./advantages");
const event = require("./event");
const tags = require("./tags");
const conversation = require("./conversation");

const router = express.Router();

router.use("/auth", auth);
router.use("/mentor", mentor);
router.use("/investment", investment);
router.use("/page", page);
router.use("/post", post);
router.use("/comment", comment);
router.use("/financing", financing);
router.use("/apply", apply);
router.use("/job", job);
router.use("/advantage", advantage);
router.use("/event", event);
router.use("/search", tags);
router.use("/conversation", conversation);

module.exports = router;
