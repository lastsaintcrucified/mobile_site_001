import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { allBlogs, newBlog } from "../../../controllers/blogController";

const handler = nc();
dbConnect();
handler.get(allBlogs);
handler.post(newBlog);

export default handler;
