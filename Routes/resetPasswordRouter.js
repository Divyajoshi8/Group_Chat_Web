const express = require("express");
const router = express.Router();
const resetPasswordController = require("../Controllers/resetPasswordController");

router.get("/forgotPasswordPage", resetPasswordController.forgotPasswordPage);
router.post("/sendMail", resetPasswordController.sendMail);
router.get("/resetPasswordPage/:requestId",resetPasswordController.resetPasswordPage);

router.use("/resetPassword/:resetpasswordid", resetPasswordController.updatePassword);

module.exports = router;