import { Router } from "express";
import WordRoute from "./WordRoute";
import UserRoute from "./UserRoute";

const router = Router();

router.use("/word", new WordRoute().initialize());
router.use("/user", new UserRoute().initialize());

export default router;
