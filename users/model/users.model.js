const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;