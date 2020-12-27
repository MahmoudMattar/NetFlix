// imports
const router = require("express").Router();

// controller
const { getUsers, getSingleUser, updateUser, deleteUser, createUser } = require("../controllers/users");

// User model
const User = require("../models/User");

// middlewares
const { protect, authorize } = require("../middlewares/auth");
const advancedResults = require("../middlewares/advancedResults");

router.use(protect);
router.use(authorize("admin"));

router.route("/").get(advancedResults(User), getUsers).post(createUser);

router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
