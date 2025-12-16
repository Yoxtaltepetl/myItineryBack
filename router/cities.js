import { Router } from "express";
import { allCities, cityById } from "../controllers/cities/read.js";
import { create, createMany } from "../controllers/cities/create.js";
import { update } from "../controllers/cities/update.js";
import { deleteOne } from "../controllers/cities/delete.js";
const router = Router();

router.get('/all', allCities);
router.get('/id/:id', cityById);
router.post('/create',create);
router.post('/createMany', createMany);
router.put('/update', update);
router.delete('/deleteOne', deleteOne);

export default router;