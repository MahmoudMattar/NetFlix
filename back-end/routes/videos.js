const express = require("express");
const router = express.Router();
const { returnUserVideoList, testRouteController, addToUserList } = require("../controllers/auth");

const User = require("../models/User");

router.get("/getUsersMovieList/:id", returnUserVideoList);
router.get("/testRoute", testRouteController);
router.put("/addToUserList/:id", addToUserList);

module.exports = router;
