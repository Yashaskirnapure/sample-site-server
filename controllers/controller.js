const { Member } = require('../models/member');
const { Feedback } = require('../models/feedback');

const getMembers = async(req, res) => {
    try{
        const query = await Member.find({}).limit(10);
        return res.status(200).json({query, hits: query.length, success: true});
    }catch(err){
        console.log("error in getting members");
        return res.status(500).json({error: "something went wrong", success: false});
    }
}

const postFeedback = async(req, res) => {
    try{
        const query = await Feedback.create(req.body);
        return res.status(200).json({msg : "post succesful", success: true});
    }catch(err){
        console.log("error posting");
        return res.status(500).json({msg: "Something went wrong", success: false});
    }
}

const getFeedback = async(req, res) => {
    try{
        const query = await Feedback.find({}).limit(10);
        return res.status(200).json({query, hits: query.length});
    }catch(err){
        console.log("error in getting feedback");
        return res.status(500).json({error : "Something went wrong", success: false});
    }
}

module.exports = {
    getMembers,
    postFeedback,
    getFeedback
};