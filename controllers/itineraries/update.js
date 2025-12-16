import Itinerary from "../../models/Itinerary.js";
const update = async (req, res, next) => {
    try {
        let itinerary = req.body
        let update =  await Itinerary.updateOne(
            {_id: itinerary._id}, {price: itinerary.price}
        )

        return res.status(200).json({response: update})
    } catch (error) {
        next(error)
    }
}

export {update}