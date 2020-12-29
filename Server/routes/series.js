module.exports = (app) => {
  var router = require('express').Router();
  const series = require('../controllers/series.controllers');
  app.use('/api/series', router);
  //Create a new Movie
  router.post('/', series.create);
  // Retrieve all Movies from the database.
  router.get('/', series.findAll);
  // Find a single Movie with an id
  router.get('/:id', series.findOne);
  //update a movies with id
  router.put('/:id', series.update);
  //delete a movie with id
  router.delete('/:id', series.delete);
  // delete all movies
  router.delete('/:id', series.deleteAll);
};

//-------------------------------------------------
//-------------------------------------------
// const express = require("express");

// const router = express.Router();
// const Movies = require("../models/movies");

// //list all Movies

// router.get("/", (req, res) => {
//   res.send("Welcometo movies api");
// });

// router.get("/list", async (req, res) => {
//   try {
//     const movies = await Movies.find();
//     res.json(movies);
//   } catch (err) {
//     res.send("Error", err);
//   }
// });

// //get a movie with  id
// router.get("/findmovie/:id", async (req, res) => {
//   try {
//     const movie = await Movies.findById(req.params.id);
//     res.json(movie);
//   } catch (err) {
//     res.send("Error", err);
//   }
// });

// //add new movie
// router.post("/addnew", async (req, res) => {
//   const movie = new Movies({
//     title: req.body.title,
//     poster: req.body.poster,
//     storyline: req.body.description,
//   });
//   try {
//     const m1 = await movie.save();
//     res.json(m1);
//   } catch (err) {
//     res.send("error", err);
//   }
// });

// //edit a movie with  id
// router.patch("/edit/:id", async (req, res) => {
//   try {
//     const movie = await Movies.findById(req.params.id);
//     movie.title = req.body.title;
//     movie.description = req.body.description;
//     movie.poster = req.body.poster;
//     const m1 = await movie.save();
//     res.json(m1);
//   } catch (err) {
//     res.send("Error", err);
//   }
// });

// // delete the movie with id
// router.delete("/delete/:id", async (req, res) => {
//   try {
//     const movie = await Movies.findById(req.params.id);
//     const m1 = await movie.remove();
//     res.json(m1);
//   } catch (err) {
//     res.send("Error", err);
//   }
// });

// module.exports = router;
