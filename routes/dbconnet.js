const mongoose = require("mongoose");
require("dotenv").config();

const DBconnect = async () => {
  console.log(process.env.MONGO_URL);
  try {
    const result = await mongoose.connect(process.env.MONGO_URL);
    console.log("base de donnés y5dm");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DBconnect;
