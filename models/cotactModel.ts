import { model, models, Schema } from "mongoose";

const contactSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
},{ timestamps: true})

const contactModel = models.contact || model('contact',contactSchema)

export default contactModel;