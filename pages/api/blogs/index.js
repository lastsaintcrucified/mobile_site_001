import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import onError from "../../../midllewares/errors";
import { allBlogs, newBlog } from "../../../controllers/blogController";

const handler = nc({ onError });
dbConnect();
handler.get(allBlogs);
handler.post(newBlog);

export default handler;
