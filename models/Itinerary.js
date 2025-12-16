import { Schema, model } from "mongoose";

let collection = 'itineraries'
let schema = new Schema({
    name:{type:String, required:true},
    photo:{type:String, required:true},
    city:{type:String, required:true},
    price:{type:Number, required:true}, 
    duration:{type:String, required:true},
    likes: {type:Number, required:true},
    hashtags: {type:Array, required:true}, 
    activities: {type: Schema.Types.ObjectId, ref: "activities", required:true}
    
}, {
    timeseries:true
})

let Itinerary = model(collection, schema);
export default Itinerary;