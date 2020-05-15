import { Router, Request, Response } from "express";
import WordRoute from "./WordRoute";
import UserRoute from "./UserRoute";

const router = Router();

router.use("/words", new WordRoute().initialize());
router.use("/users", new UserRoute().initialize());

router.get("*", (req: Request, res: Response) => {
    res.status(404).json("jhony")
});

export default router;
