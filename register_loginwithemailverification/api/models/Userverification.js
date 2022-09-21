const mongoose = require('mongoose');

const UserVerificationSchema = new mongoose.Schema({
    userId:String,
    uniqueString:String,
    createdAt:String,
    expireAt:Date,
  
})

module.exports = mongoose.model("UserVerification", UserVerificationSchema);