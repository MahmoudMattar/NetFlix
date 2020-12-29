const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const DbConfig = require('./config/db.config');
const app = express();
const cors = require('cors');

//-----------------
const passport = require('passport');
const users = require('./routes/users');
const movies = require('./routes/movies');
//-----------------
//mongoose connection
mongoose
  .connect(DbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('connected to the database!');
  })
  .catch((err) => {
    console.log('Error', err);
    process.exit();
  });
app.use(passport.initialize());

//-----Local Host connection
app.get('/', (req, res) => {
  res.send('welcome to Your server');
});

//Admin Route Only
const adminRouter = require('./routes/admin.router');
app.use('/admin', adminRouter);

//Api Routes
app.use(express.json());
const SeriesRouter = require('./routes/series');
const FilmsRouter = require('./routes/films');
SeriesRouter(app);
FilmsRouter(app);
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/series', SeriesRouter);
app.use('/films', FilmsRouter);

require('./config/passport')(passport);
app.use('/api/users', users);
app.use('/api/movies', movies);

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log('server started on port', PORT);
});
