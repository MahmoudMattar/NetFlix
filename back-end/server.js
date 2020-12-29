const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const xssClean = require("xss-clean");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const fileupload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const expressMongoSanitize = require("express-mongo-sanitize");

// load env vars
dotenv.config({ path: "./config/config.env" });

const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error");
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
const filmsRoutes = require("./routes/films");
const seriesRoutes = require("./routes/series");
const videosRoutes = require("./routes/videos");

// connect to db
connectDB();

// routes
const app = express();

// enable cors
app.use(cors());

// helmet for security headers
app.use(helmet());

// cookie parser
app.use(cookieParser());

// json body parser
app.use(express.json());

// express file upload
app.use(fileupload());

// sanatize data to prevent noSql injection
app.use(expressMongoSanitize());

// prevent xss attack
app.use(xssClean());

// rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 200,
});
app.use(limiter);

// prevent http param pollution
app.use(hpp());

// loggin middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// set public folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/films", filmsRoutes);
app.use("/api/v1/series", seriesRoutes);
app.use("/api/v1/videos", videosRoutes);

// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} env on port ${PORT}`.yellow.bold));

// handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red.underline);
  server.close(() => {
    process.exit(1);
  });
});
