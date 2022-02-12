import nc from "next-connect";
import { allMobiles } from "../../../controllers/mobileControllers";

const handler = nc();
handler.get(allMobiles);
export default handler;
