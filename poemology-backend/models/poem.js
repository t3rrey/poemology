const mongoose = require("mongoose");

const poemSchema = new mongoose.Schema({
  title: {
    type: String,
    requried: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("poem", poemSchema);
