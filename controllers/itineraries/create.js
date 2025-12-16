import Itinerary from "../../models/Itinerary.js";

let create = async(req, res, next) => {
    try {
        let itinerary = req.body;
        let newItineray = await Itinerary.create(itinerary);
        return res.status(201).json({response:newItineray});
    } catch (error) {
        next(error)
    }
}

let createMany = async(req, res, next) => {
    try {
        let itineraries = req.body;
        let newItineraries = await Itinerary.insertMany(itineraries);
        return res.status(201).json({response:newItineraries});
    } catch (error) {
        next(error)
    }
}

export {create, createMany}