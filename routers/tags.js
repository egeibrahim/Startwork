const express = require("express");
const { searchTag } = require("../controllers/tagsController");
const router = express.Router();

router.get("/:key", searchTag);

module.exports = router;
