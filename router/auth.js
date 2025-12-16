import { Router } from "express";
import singIn from "../controllers/auth/singIn.js";
import accountNoExists from "../middlewares/accountNoExists.js";
import passwordIsOk from "../middlewares/passwordIsOk.js";
const router = Router();

router.post('/signin', accountNoExists, passwordIsOk, singIn)
export default router