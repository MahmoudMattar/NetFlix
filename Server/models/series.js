// module.exports = (mongoose) => {
//   var schema = mongoose.Schema(
//     {
//       genre: String,

//       maturity: String,

//       slug: String,

//       title: String,

//       description: String,
//     },
//     { timestamps: true }
//   );

//   schema.method('toJSON', function () {
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
//   });

//   return mongoose.model('series', schema);
// };

const mongoose = require('mongoose');

const series = new mongoose.Schema(
  {
    genre: String,

    maturity: String,

    slug: String,

    title: String,

    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('series', series);
