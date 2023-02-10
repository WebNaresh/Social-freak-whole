const express = require('express');
const { test, register, getAllUser } = require('../controller/testController');
const router = express.Router();
router.route('/test').get(test);
router.route('/register').post(register);
router.route('/getAllUser').post(getAllUser);

module.exports = router;