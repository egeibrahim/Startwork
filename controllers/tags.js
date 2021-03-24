const asyncErrorWrapper = require("express-async-handler");
const User = require("../models/User");

const searchTag = asyncErrorWrapper(async (req, res) => {
  let { key } = req.params;
  const user = await User.find({ abilities: key });
  return res.status(200).json({
    success: true,
    data: user,
  });
});

module.exports = {
  searchTag,
};
