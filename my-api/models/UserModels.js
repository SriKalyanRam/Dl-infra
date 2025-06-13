const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, requied: true, unique: true },
  name: { type: String, requied: true },
  pass: { type: String, requied: true },
});

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;
