const router = require("express").Router();

const { returnUserMovieList, testRouteController, addToUserList } = require("../controllers/movie.controller");
const authJwt = require("../middleware/authJwt");
router.get("/getUsersMovieList/:id", authJwt.verifyToken, returnUserMovieList);
router.get("/testRoute", authJwt.verifyToken, testRouteController);
router.put("/addToUserList/:id", authJwt.verifyToken, addToUserList);

module.exports = router;
