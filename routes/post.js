const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  title: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("post", postSchema);
