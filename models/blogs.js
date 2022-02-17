const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  category: {
    type: String,
    required: [true, "Please enter blog category"],
    trim: true,
    maxLength: [100, "Category name cannot exceeds 100 character"],
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: false,
  },
  title: {
    type: String,
    required: [true, "Please enter blog category"],
    trim: true,
    maxLength: [1000, "Title  cannot exceeds 1000 character"],
  },
  subTitle: {
    type: String,
    trim: true,
  },
  contentIntro: {
    type: String,
    required: [true, "Please enter Content Intro"],
    trim: true,
  },
  contentCore: {
    type: String,
    required: [true, "Please enter Content core"],
    trim: true,
  },
  contentConclusion: {
    type: String,
    required: [true, "Please enter Content conclusion"],
    trim: true,
  },
  image: {
    placeHolder: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: false,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);
