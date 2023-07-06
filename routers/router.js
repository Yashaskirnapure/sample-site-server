const {getMembers, postFeedback, getFeedback} = require('../controllers/controller');

const express = require('express');
const router = express.Router();

router.route('/feedback').get(getFeedback).post(postFeedback);
router.route('/members').get(getMembers);

module.exports = {router};