const express = require("express");
const postSubmit = require('../controllers/submitController')
const router = express.Router();

router.post('/', postSubmit);
module.exports = router;