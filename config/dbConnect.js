import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connect.readyState >= 1) {
    return;
  }
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useUnifiedTopology: true,
    })
    .then((con) => console.log("Connected to database....."));
};

export default dbConnect;
