// sendMessage a User
const ErrorHandler = require('../utils/errorHandler');
const catchAssyncError = require('../middleware/catchAssyncError');
const Message = require('../models/messageSchema');
const jwtMaker = require('../utils/jwtMaker');


exports.sendMessage = catchAssyncError(async (req, res, next) => {
    const array = req.body;
    const storedMessage = await Message.insertMany(array);
    res.status(201).json({ success: true });

});
// getMessage a User

exports.getMessage = catchAssyncError(async (req, res, next) => {
    const { reciever, from } = req.body;
    let messages = await Message.find({ reciever, from });
    // if (messages === null) {
    //     messages = [];
    // }
    res.status(201).json({ success: true, messages });

});