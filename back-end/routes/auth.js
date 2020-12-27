// imports
const router = require("express").Router();

// controller
const { register, login, getMe, forgotPassword, resetPassword, updateDetails, updatePassword, logout } = require("../controllers/auth");

// middlewares
const { protect } = require("../middlewares/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/me", protect, getMe);
router.post("/forgotPassword", forgotPassword);
router.put("/resetpassword/:resetPasswordToken", resetPassword);
router.put("/updatedetails", protect, updateDetails);
router.put("/updatePassword", protect, updatePassword);

module.exports = router;
