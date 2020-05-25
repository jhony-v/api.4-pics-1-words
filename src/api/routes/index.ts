import { Router } from "express";
import WordRouter from "../../modules/Word/WordRouter";
import UserRouter from "../../modules/User/UserRouter";

const router = Router();

router.use("/words", new WordRouter().initialize());
router.use("/users", new UserRouter().initialize());

export default router;
