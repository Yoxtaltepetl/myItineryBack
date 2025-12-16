import { Router } from "express";
import {allUsers} from "../controllers/users/read.js";
import register from "../controllers/users/register.js";
import validator from "../middlewares/userCreateValidation.js";
import schema from "../schemas/users/create.js";
import accountExist from "../middlewares/accountExists.js"
import createHash from "../middlewares/createHash.js";
const router = Router();

router.get('/all', allUsers);
router.post('/register', validator(schema),accountExist,createHash,register);

export default router;