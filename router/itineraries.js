import { Router } from "express";
import { allItineraries, itinerariesByCity, itinerariesById } from "../controllers/itineraries/read.js";
import { create, createMany } from "../controllers/itineraries/create.js";
import { update } from "../controllers/itineraries/update.js";
import { deleteOne } from "../controllers/itineraries/delete.js";
const router = Router();

router.get('/all', allItineraries);
router.get('/id/:id', itinerariesById);
router.get('/city/:city', itinerariesByCity);
router.post('/create', create);
router.post('/createMany', createMany);
router.put('/update', update)
router.delete('/deleteOne', deleteOne)
export default router;