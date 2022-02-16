import Blogs from "../models/blogs";

const allBlogs = (rew, res) => {
  res.status(200).json({
    success: true,
    message: "All Blogs",
  });
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

export { allBlogs, newBlog };
