import { response } from "express";
import Itinerary from "../../models/Itinerary.js";
import "../../models/Activity.js";

let allItineraries= async(req, res, next) =>{
    try {
        let all = await Itinerary.find();
        return res.status(200).json({res:all})
    } catch (error) {
        next(error)
    }
}

let itinerariesByCity = async(req, res,next) =>{
    try {
        let city = req.params.city;
        let allItinerariesByCity = await Itinerary.find({city : city})
        return res.status(200).json({res:allItinerariesByCity})
    } catch (error) {
        next(error)
    }
}

let itinerariesById =  async (req,res) => {
    try {

        let cityId = req.params.id;
        let city = await  Itinerary.findById(cityId)
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        next(error)
    }        
}

export {allItineraries, itinerariesByCity, itinerariesById}