import City from "../../models/City.js";

const deleteOne = async (req, res, next) => {
    try {
        let city = req.body;
        let deleteCity =  await City.deleteOne({_id: city._id})
        return res.status(200).json({response:deleteCity})
    } catch (error) {
        next(error);
    }
}

export {deleteOne}