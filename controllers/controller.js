const { Member } = require('../models/member');
const { Feedback } = require('../models/feedback');

const getMembers = async(req, res) => {
    const query = await Member.find({});
    return res.status(200).json({query, hits: query.length});
}

const postFeedback = async(req, res) => {
    const query = await Feedback.create(req.body);
    return res.status(201).json({query});
}

module.exports = {
    getMembers,
    postFeedback
};