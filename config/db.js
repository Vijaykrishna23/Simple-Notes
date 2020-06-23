const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify : true
    })
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log("mongodb not connected error" + err));
};
module.exports = connectDB;
