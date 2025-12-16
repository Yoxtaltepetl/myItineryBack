import Itineray from "../../models/Itinerary.js"

const deleteOne = async (req, res, next) => {
    try {
        let itinerary = req.body;
        let deleteItinerary =  await Itineray.deleteOne({_id: itinerary._id})
        return res.status(200).json({response:deleteItinerary})
    } catch (error) {
        next(error);
    }
}

export {deleteOne}