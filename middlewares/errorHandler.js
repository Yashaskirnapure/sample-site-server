const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    return res.status(500).json({message : "Something went wrong"});
}

module.exports = {
    errorHandler
}