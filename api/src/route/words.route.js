const express = require('express');
const router = express.Router();
const {getRandomWords} = require('./../controller/index');

router.get("/words", getRandomWords);

module.exports = router;