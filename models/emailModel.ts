import { model, models, Schema } from "mongoose";

const emailSchema = new Schema({
    email:{
        type:String,
        require:true
    }
},{ timestamps: true})

const emailModel = models.email || model('email',emailSchema)

export default emailModel;