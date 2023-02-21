const express = require('express');
const router = express.Router();
const {calculateRank} = require('./../controller/index');

router.post("/rank",calculateRank);

module.exports = router;