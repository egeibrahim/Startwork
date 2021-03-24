const express = require("express");
const { searchTag } = require("../controllers/tags");
const router = express.Router();

router.get("/:key", searchTag);

module.exports = router;
