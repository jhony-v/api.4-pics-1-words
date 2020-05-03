import { Router } from "express";
import Word from "./WordRoute";
import User from "./UserRoute";

const router = Router();

router.use("/word", new Word().initialize());
router.use("/user", new User().initialize());

export default router;
