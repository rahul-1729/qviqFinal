const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
MONGO_URL=process.env.MONGO_URL;
const dbConnect = async () => {
  await mongoose.connect(MONGO_URL);
  console.log("Mongo DB Conneted");
};

module.exports = dbConnect;
