import { Router } from "express";
import * as user from "../controllers/user.controller";

const router = Router();

// create new user
router.post("/", user.createUser);
// check if exists the user
router.post("/exists", user.checkIfExists);
//update username
router.put("/", user.updateUsername);

export default router;
