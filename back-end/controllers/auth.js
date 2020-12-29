const User = require("../models/User");
const crypto = require("crypto");
// middleware
const asyncHandler = require("../middlewares/async");

// utils
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

// Register User
// POST /api/v1/auth/register

exports.register = asyncHandler(async (req, res, next) => {
  const { email, name, password, role, movie } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    role,
    movie,
  });

  // create token
  sendTokenResponse(user, 201, res);
});

// login User
// POST /api/v1/auth/login

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // validate email and password
  if (!email || !password) {
    return next(new ErrorResponse("please enter and email and password", 400));
  }

  // check if user with given email
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  // check if password matches
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  sendTokenResponse(user, 200, res);
});

// get logged in user info
// POST /api/v1/auth/me
exports.getMe = asyncHandler(async (req, res, next) => {
  res.json({
    success: true,
    data: req.user,
  });
});

// log out user/ clear cookie
//GET /api/v1/auth/logout

exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now + 10),
    httpOnly: true,
  });

  res.json({
    success: true,
  });
});

// update password
// put /api/v1/auth/updatepassword

exports.updatePassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  // check current password
  const passwordMatch = await user.matchPassword(req.body.currentPassword);

  if (!passwordMatch) {
    return next(new ErrorResponse(`password is incorrect`, 401));
  }

  user.password = req.body.newPassword;
  await user.save();

  sendTokenResponse(user, 200, res);
});

// update user details
// POST /api/v1/auth/updatedetails

exports.updateDetails = asyncHandler(async (req, res, next) => {
  const fieldsToUpdate = {
    name: req.body.name,
    email: req.body.email,
  };
  const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
    new: true,
    runValidators: true,
  });

  res.json({
    success: true,
    data: user,
  });
});

// forgot password
// POST /api/v1/auth/forgetpassword

exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorResponse(`There is no user with that email`, 404));
  }

  // get reset token
  const resetToken = user.getResetPasswordToken();

  await user.save();

  const resetUrl = `${req.protocol}://${req.get("host")}/api/v1/auth/resetpassword/${resetToken}`;
  console.log(resetUrl);

  const message = `this is an email for your request to reset password, please make a put request to ${resetUrl}`;

  try {
    await sendEmail({
      //send user mail to mailtrap
      email: user.email,
      subject: "password reset token",
      message,
    });
    res.status(200).json({
      //200 request is successful
      success: true,
      data: "email sent",
    });
  } catch (err) {
    console.log(err);
    user.getResetPasswordToken = undefined;
    user.resetPasswordExpiration = undefined;
    await user.save({ validateBeforeSave: false });

    return next(new ErrorResponse(`email could not be sent`, 500));
  }
});

// Reset password
// POST /api/v1/auth/resetPassword/:resetToken

exports.resetPassword = asyncHandler(async (req, res, next) => {
  const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetPasswordToken).digest("hex");

  console.log(0, req.params.resetPasswordToken);
  console.log(1, resetPasswordToken);
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpiration: { $gt: Date.now() },
  });
  if (!user) {
    return next(new ErrorResponse(`Invalid Token or expired`), 400);
  }

  // set new password
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpiration = undefined;
  await user.save();

  sendTokenResponse(user, 200, res);
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();

  // cookie expiration date in days
  const expirationDate = new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000);

  const options = {
    expires: expirationDate,
    httpOnly: true,
  };

  // only set secure flag to true in production
  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
};

/////////////////////////// Video //////////////////////////////////

//return user list of videos
exports.returnUserVideoList = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      console.log("An error occurred");
    }
    let movieList = user.videos.map((video) => {
      return JSON.parse(video);
    });
    res.json(movieList);
  });
};

//test route
exports.testRouteController = (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      console.log("An error occurred");
    }
    res.json(result);
  });
};

// check if the video is exist or not
exports.checkVideoPresence = (userMoviesList, reqMovies) => {
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

//add video to use list
exports.addToUserList = (req, res, next) => {
  // console.log(req.body)
  var videoDetails = req.body.videos;
  var result = "";
  User.findById(req.params.id, (err, user) => {
    if (err) {
      return next(err);
    }
    if (user) {
      let userMovies = user.videos.map((video) => {
        return JSON.parse(video);
      });
      if (!checkVideoPresence(userMovies, videoDetails)) {
        User.findByIdAndUpdate(
          req.params.id,
          {
            $push: {
              videos: JSON.stringify(videoDetails),
            },
          },
          function (err, response) {
            if (err) {
              return next(err);
            }
            res.json({
              success: "true",
              video: response,
            });
          }
        );
      } else {
        res.json({
          error: "Video Already Exists",
        });
      }
    }
  });
};
