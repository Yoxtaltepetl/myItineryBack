import { response } from 'express';
import City from '../../models/City.js';

const update = async (req, res, next) => {
    try {
        let city = req.body
        let update =  await City.updateOne(
            {_id: city._id}, {description: city.description}
        )

        return res.status(200).json({response: update})
    } catch (error) {
        next(error)
    }
}

export {update}