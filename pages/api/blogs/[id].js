import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import onError from "../../../midllewares/errors";

import {
  getSingleBlog,
  updateBlog,
  deleteBlog,
} from "../../../controllers/blogController";

const handler = nc({ onError });
dbConnect();
handler.get(getSingleBlog);
handler.put(updateBlog);
handler.delete(deleteBlog);

export default handler;
