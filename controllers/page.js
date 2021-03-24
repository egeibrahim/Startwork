const asyncErrorWrapper = require("express-async-handler");
const Page = require("../models/Page");

const createPage = asyncErrorWrapper(async (req, res) => {
  const information = req.body;

  const page = await Page.create({
    userId: req.user.id,
    ...information,
  });

  return res.status(200).json({
    success: true,
    data: page,
  });
});

const getPageByType = asyncErrorWrapper(async (req, res) => {
  const { type } = req.params;
  const page = await Page.find({ profileType: type });

  return res.status(200).json({
    success: true,
    data: page,
  });
});

const getPage = asyncErrorWrapper(async (req, res) => {
  const { id } = req.params;

  const page = await Page.findById(id);

  return res.status(200).json({
    success: true,
    data: page,
  });
});

const getAllPages = asyncErrorWrapper(async (req, res) => {
  const pages = await Page.find();
  return res.status(200).json({
    success: true,
    data: pages,
  });
});

const editPage = asyncErrorWrapper(async (req, res) => {
  const { id } = req.params;
  const information = req.body;

  const page = await Page.findByIdAndUpdate(id, information, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({
    success: true,
    data: page,
  });
});

const getOwnPage = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.user;
  Page.find({ userId: id }, (err, data) => {
    if (!err) {
      return res.status(200).json({
        success: true,
        data,
      });
    } else {
      return next();
    }
  });
});

module.exports = {
  createPage,
  getPage,
  getAllPages,
  editPage,
  getOwnPage,
  getPageByType,
};
