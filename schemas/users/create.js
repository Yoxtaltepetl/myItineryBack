import joi from "joi-oid"

const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    photo: joi.string().required(),
    country: joi.string().required()
})

export default schema;