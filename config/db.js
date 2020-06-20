const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongodb connected"))
    .catch(() => console.log("mongodb not connected error"));
};
module.exports = connectDB;
