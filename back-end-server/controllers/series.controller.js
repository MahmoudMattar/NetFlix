const Series = require('../models/series');

// Create and Save a new series
exports.create = (req, res) => {
  //validate request
  if (!req.body.title) {
    res.status(400).send({ message: 'content can not be empty!' });
    return;
  }

  //Create a Series
  const series = new Series({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
    maturity: req.body.maturity,
    slug: req.body.slug,
  });
  //save serie to DB
  series
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

// Retrieve all series from the database.
exports.findAll = (req, res) => {
  Series.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'some error ocurred while retrieving series',
      });
    });
};

// Find a single series with an id
exports.findOne = (req, res) => {
  Series.findById(req.params.id)
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
  Series.findByIdAndUpdate(id, req.body, { useFindAndModfiy: false }).then(
    (data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `can not update serie with id : ${id} Maybe serie not found `,
          })
          .catch((err) => {
            res
              .status(500)
              .send({ message: `ErrorUpdating serie with id : ${id}` });
          });
      } else {
        res.send({ message: 'updated' });
      }
    }
  );
};

// Delete a series with the specified id in the request
exports.deleteSeries = (req, res) => {
  const id = req.params.id;
  Series.findByIdAndRemove(id, { useFindAndModify: false })
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

// Delete all Series from the database.
exports.deleteAll = (req, res) => {
  Series.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deleteCount} Series were deleted successfully`,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Error occurred' });
    });
};
