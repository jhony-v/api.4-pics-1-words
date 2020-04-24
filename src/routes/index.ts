import { Router, Request, Response } from "express";
import word from "./word";
import user from "./user";

const router = Router();

router.use("/word",word);
router.use("/user",user);

export default router;