const mongoose = require("mongoose");

const seriesSchema = mongoose.Schema(
  {
    genre: String,

    maturity: String,

    slug: String,

    title: String,

    description: String,
  },
  { timestamps: true }
);

seriesSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Series = mongoose.model("Series", seriesSchema);

module.exports = Series;
