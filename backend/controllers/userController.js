import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.json("auth user");
});

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.json(" register user");
});

// @desc Logout user/ clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.json("logout user");
});

// @desc get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.json("get user profile");
});

// @desc get user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.json("update user profile");
});

// @desc get users
// @route GET/api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.json("get users");
});

// @desc get user by ID
// @route GET/api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.json("get user by id");
});

// @desc Delete users
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.json("delete user");
});

// @desc Update user by id
// @route PUT /api/users/:id
// @access Private/Admin
const updateUserById = asyncHandler(async (req, res) => {
  res.json("update user by id");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserById,
  deleteUser,
  updateUserById,
  getUsers,
  updateUserProfile,
  getUserProfile,
};
