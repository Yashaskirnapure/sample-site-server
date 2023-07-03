const {getMembers, postFeedback} = require('../controllers/controller');

const express = require('express');
const router = express.Router();

router.route('/feedback').post(postFeedback);
router.route('/members').get(getMembers);

module.exports = {router};