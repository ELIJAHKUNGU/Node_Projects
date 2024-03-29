const {
    signUpController,
    resetPasswordRequestController,
    resetPasswordController,
  } = require("../controllers/auth.controllers");
  
  const router = require("express").Router();
  
  router.post("/auth/signup", signUpController);
  router.post("/auth/requestResetPassword", resetPasswordRequestController);
  router.post("/auth/resetPassword", resetPasswordController);
  
  module.exports = router;