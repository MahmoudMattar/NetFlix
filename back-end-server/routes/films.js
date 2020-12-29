var router = require('express').Router();
const {
  create,
  findAll,
  findOne,
  update,
  deleteFilm,
  deleteAll,
} = require('../controllers/films.controller');
const authJwt = require('../middleware/authJwt');

router.use(authJwt.verifyToken);
router.use(authJwt.isAdmin);

//Create a new Movie
router.post('/create', create);
// Retrieve all Movies from the database.
router.get('/getAllFilms', findAll);
// Find a single Movie with an id
router.get('/getOneFilm/:id', findOne);
//update a movies with id
router.put('/updateFilm/:id', update);
//delete a movie with id
// router.delete("/:id", deleteFilm);
// delete all movies
router.delete('/deleteAll/:id', deleteAll);

module.exports = router;
