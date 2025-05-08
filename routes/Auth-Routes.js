import express from 'express';
import { register, login, logout, getMe, updateDetails, updatePassword } from '../controllers/Auth-Controller.js'

const router = express.Router()

router.post("/register", register);
router.post("/login", login)
router.get("/logout", logout)
router.get("/me", getMe)
router.put("/updatedetails",  updateDetails)
router.put("/updatepassword", updatePassword)

export default router;
