import { Schema, model } from "mongoose";

let collection = 'activities'
let schema = new Schema({
    name:{type:String, required:true},
    photo:{type:String, required:true},
    price:{type:Number, required:true},
    city: {type:String, required: true}
}, {
    timeseries:true
})

let Activity = model(collection, schema);
export default Activity;