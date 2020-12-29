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

//   const Films = mongoose.model('films', schema);
//   return Films;
// };

const mongoose = require('mongoose');

const films = new mongoose.Schema(
  {
    genre: String,

    maturity: String,

    slug: String,

    title: String,

    description: String,
  },
  { timestamps: {} }
);

module.exports = mongoose.model('films', films);
