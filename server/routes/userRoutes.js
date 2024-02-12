import express from "express";
import getProfileDataController from "../controller/user/getProfileDataController.js";
import registerUser from "../controller/user/registerUser.js";
import signInUser from "../controller/user/signInUser.js";

const router = express.Router();

router.post("/register", registerUser);

router.get("/sign_in", signInUser);
router.get("/get_profile", getProfileDataController);


export default router;
