import express from "express";
import registerUser from "../controller/user/registerUser.js";
import signInUser from "../controller/user/signInUser.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/sign_in", signInUser);

export default router;
