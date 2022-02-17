const Blogs = require("../models/blogs");
const blogs = require("../data/blogs.json");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mobile_site", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
  })
  .then((con) => console.log("Connected to database....."));

const seedBlogs = async () => {
  try {
    await Blogs.deleteMany();
    console.log("All blogs are deleted!!");

    await Blogs.insertMany(blogs);
    console.log("New blogs are added!!");
  } catch (err) {
    console.log(err.message);
    process.exit();
  }
};

seedBlogs();
