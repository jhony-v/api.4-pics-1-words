import { Router } from "express";
import WordRoute from "./WordRoute";
import UserRoute from "./UserRoute";

const router = Router();

router.use("/words", new WordRoute().initialize());
router.use("/users", new UserRoute().initialize());

export default router;
