const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: String,
  isCompleted: Boolean,
  synced: Boolean,
});

const model = mongoose.model("Todo", schema);

module.exports = model;
