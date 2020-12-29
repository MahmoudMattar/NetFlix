const User = require('../models/user');
const verify = require('../middleware/authJwt');
const { json } = require('express');

const getMovie = (req, res) => {
  //   res.json({ movies: { title: "my first video", description: "random video you should not access" } });
  res.send(req.user);
};

const returnUserMovieList = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      console.log('An error occurred');
    }
    let movieList = user.movie.map((movie) => {
      return movie;
    });
    res.json(movieList);
  });
};

const testRouteController = (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      console.log('An error occurred');
    }
    res.json(result);
  });
};

const checkMoviePresence = (userMoviesList, reqMovies) => {
  var flag = 0;
  for (var i = 0; i < userMoviesList.length; i++) {
    if (userMoviesList[i].id === reqMovies.id) {
      flag = 1;
    } else {
      flag = 0;
    }
  }
  if (flag === 1) {
    return true;
  } else {
    return false;
  }
};

const addToUserList = (req, res, next) => {
  console.log(req.body.movie);
  var movieDetails = req.body.movie;
  // console.log(User.movie);

  var result = '';
  User.findById(req.params.id, (err, user) => {
    if (err) {
      return next(err);
    }
    if (user) {
      // console.log(user.movie);
      // let userMovies = user.movie.map((mov) => {
      //   // console.log(typeof mov);
      //   console.log(mov);
      //   // return JSON.parse(mov);
      //   return mov;
      // });
      let userMovies = user.movie;
      if (!checkMoviePresence(userMovies, movieDetails)) {
        User.findByIdAndUpdate(
          req.params.id,
          {
            $push: {
              movie: JSON.stringify(movieDetails),
              // movie: movieDetails,
            },
          },
          (err, response) => {
            if (err) {
              return next(err);
            }
            res.json({
              success: 'true',
              movie: response,
            });
          }
        );
      } else {
        res.json({
          error: 'Movie Already Exists',
        });
      }
    }
  });
};

module.exports.getMovie = getMovie;
module.exports.returnUserMovieList = returnUserMovieList;
module.exports.testRouteController = testRouteController;
module.exports.addToUserList = addToUserList;
