// testController a User
const ErrorHandler = require("../utils/errorHandler");
const catchAssyncError = require("../middleware/catchAssyncError");
const User = require("../models/userSchema");
const sendToken = require("../utils/sendToken");
const jwt = require("jsonwebtoken");

exports.test = catchAssyncError(async (req, res, next) => {
  res.status(200).json({ message: "Route is  working " });
  // const {  } = req.body
});

exports.register = catchAssyncError(async (req, res, next) => {
  const { userName, userEmail, password, userImage } = req.body;
  const existed = await User.find({ userName, userEmail }).populate("userName");

  if (existed.length === 1) {
    existed[0].password = null;
    return sendToken(existed[0], res, 201);
  } else {
    const user = await User.create({
      userName,
      userEmail,
      userImage,
      password,
    });

    user.password = null;
    sendToken(user, res, 200);
  }
});
// getAllUser a User

exports.getAllUser = catchAssyncError(async (req, res, next) => {
  const { userId } = req.body;
  let users = await User.find({ _id: { $ne: userId } }).select([
    "userName",
    "userEmail",
    "userImage",
    "_id",
    "lastMessage",
    "lastMessageTime",
    "msgCondition",
  ]);

  users = await jwt.sign({ users }, process.env.jWT_SECRETE, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  res.status(200).json({
    success: true,
    users,
  });
});

// update user
exports.updateUser = catchAssyncError(async (req, res, next) => {
  // const {  } = req.body
});

// delete user
// get a user
// follow user
// unfollow user
