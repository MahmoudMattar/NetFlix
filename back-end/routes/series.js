var router = require("express").Router();
const { create, findAll, findOne, update, deleteSeries, deleteAll } = require("../controllers/series");

//model
const Series = require("../models/series");

// middlewares
const { protect, authorize } = require("../middlewares/auth");

router.use(protect);
router.use(authorize("admin"));

//Create a new Movie
router.post("/", create);
// Retrieve all Movies from the database.
router.get("/", findAll);
// Find a single Movie with an id
router.get("/:id", findOne);
//update a movies with id
router.put("/:id", update);
//delete a movie with id
// router.delete("/:id", deleteSeries);
// delete all movies
router.delete("/:id", deleteAll);

module.exports = router;
