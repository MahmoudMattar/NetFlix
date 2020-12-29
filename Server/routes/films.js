module.exports = (app) => {
  var router = require('express').Router();
  const films = require('../controllers/films.controllers');
  app.use('/api/films', router);
  //Create a new Movie
  router.post('/', films.create);
  // Retrieve all Movies from the database.
  router.get('/', films.findAll);
  // Find a single Movie with an id
  router.get('/:id', films.findOne);
  //update a movies with id
  router.put('/:id', films.update);
  //delete a movie with id
  router.delete('/:id', films.delete);
  // delete all movies
  router.delete('/:id', films.deleteAll);
};
