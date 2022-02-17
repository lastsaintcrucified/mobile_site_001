import Blogs from "../models/blogs";
import ErrorHandler from "../utils/errorHandler";

//get all blogs =>  api/blogs
const allBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find();
    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

//get blog details =>  api/blogs/:id
const getSingleBlog = async (req, res, next) => {
  try {
    const singleBlog = await Blogs.findById(req.query.id);
    if (!singleBlog) {
      // return res.status(404).json({
      //   success: false,
      //   error: "OOPS!! Blog was not found with that ID!!",
      // });
      return next(
        new ErrorHandler("OOPS!! Blog was not found with that ID!!", 404)
      );
    }
    res.status(200).json({
      success: true,
      singleBlog,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

//create new blog =>  api/blogs
const newBlog = async (req, res) => {
  try {
    const blog = await Blogs.create(req.body);
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

//update a blog  =>  api/blogs/:id
const updateBlog = async (req, res, next) => {
  try {
    const blog = await Blogs.findById(req.query.id);
    if (!blog) {
      // return res.status(404).json({
      //   success: false,
      //   error: "OOPS!! Blog was not found with that ID!!",
      // });
      return next(
        new ErrorHandler("OOPS!! Blog was not found with that ID!!", 404)
      );
    }
    const singleBlog = await Blogs.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      singleBlog,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

//delete a blog  =>  api/blogs/:id
const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blogs.findById(req.query.id);
    if (!blog) {
      // return res.status(404).json({
      //   success: false,
      //   error: "OOPS!! Blog was not found with that ID!!",
      // });
      return next(
        new ErrorHandler("OOPS!! Blog was not found with that ID!!", 404)
      );
    }
    blog.remove();
    res.status(200).json({
      success: true,
      message: "Blog is deleted",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
export { allBlogs, newBlog, getSingleBlog, updateBlog, deleteBlog };
