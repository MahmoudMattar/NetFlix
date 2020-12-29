const Films = require('../models/films');

// Create and Save a new movie
exports.create = (req, res) => {
  //validate request
  if (!req.body.title) {
    res.status(400).send({ message: 'content can not be empty!' });
    return;
  }

  //Create a Films
  const films = new Films({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
    maturity: req.body.maturity,
    slug: req.body.slug,
  });
  //save films to DB
  films
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'some error occurred while creating the series',
      });
    });
};

// Retrieve all films from the database.
exports.findAll = (req, res) => {
  Films.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'some error occurred while retrieving series',
      });
    });
};

// Find a single films with an id
exports.findOne = (req, res) => {
  Films.findById(req.params.id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: 'Not found series with id' + req.params.id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: 'Error Retrieving series with id ' + req.params.id });
    });
};

// Update a series by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to be updated can not be Empty!',
    });
  }
  const id = req.params.id;
  Films.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(
    (data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `can not update films with id : ${id} Maybe films not found `,
          })
          .catch((err) => {
            res
              .status(500)
              .send({ message: `ErrorUpdating films with id : ${id}` });
          });
      } else {
        res.send({ message: 'updated' });
      }
    }
  );
};

// Delete a films with the specified id in the request
exports.deleteFilm = (req, res) => {
  const id = req.params.id;
  Films.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Can not delete serie with id ${id}` });
      } else {
        res.send({ message: 'Serie was deleted!' });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `can not delete with id ${id}` });
    });
};

// Delete all Films from the database.
exports.deleteAll = (req, res) => {
  Films.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deleteCount} Films were deleted successfully`,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Error occurred' });
    });
};
