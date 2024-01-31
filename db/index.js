const mongoose = require("mongoose");
mongoose.connect("");

const userSchema = mongoose.Schema({
  name: String,
  description: String,
  interests: [String],
});

const userModel = mongoose.model("user", userSchema);
module.exports = { userModel };
