const mongoose = require("mongoose");

const filmsSchema = mongoose.Schema(
  {
    genre: String,

    maturity: String,

    slug: String,

    title: String,

    description: String,
  },
  { timestamps: true }
);

filmsSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Films = mongoose.model("Films", filmsSchema);

module.exports = Films;
