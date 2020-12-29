var router = require('express').Router();
const {
  create,
  findAll,
  findOne,
  update,
  deleteSeries,
  deleteAll,
} = require('../controllers/series.controller');
const authJwt = require('../middleware/authJwt');

router.use(authJwt.verifyToken);
router.use(authJwt.isAdmin);

//Create a new Movie
router.post('/create', create);
// Retrieve all Movies from the database.
router.get('/getAll', findAll);
// Find a single Movie with an id
router.get('/getOneSeries/:id', findOne);
//update a movies with id
router.put('/updateSeries/:id', update);
//delete a movie with id

// router.delete("/:id", deleteSeries);
// delete all movies
router.delete('/:id', deleteAll);

module.exports = router;
