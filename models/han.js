const mongoose = require("mongoose");

const schema = mongoose.Schema;
const haniSchema = new schema({
  name: String,
  LastName: String,
  age: Number,
});

const Hanen = mongoose.model("gmail", haniSchema);

module.exports = Hanen;
