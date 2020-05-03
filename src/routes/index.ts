import { Router } from "express";
import Word from "./word";
import User from "./user";

const router = Router();

router.use("/word", new Word().initialize());
router.use("/user", new User().initialize());

export default router;
