// models
const User = require("../models/User");

// middleware
const asyncHandler = require("../middlewares/async");

// utils
const ErrorResponse = require("../utils/errorResponse");

// @desc get All Users
// @route POST /api/v1/auth/users
// @access private/Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc get single user
// @route GET /api/v1/auth/users/:id
// @access private/Admin
exports.getSingleUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc create User
// @route POST /api/v1/auth/users/:id
// @access private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});

// @desc Update User
// @route put /api/v1/auth/users/:id
// @access private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc Delete user
// @route DELETE /api/v1/auth/users/:id
// @access private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});
