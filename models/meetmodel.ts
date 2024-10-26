import { model, models, Schema } from "mongoose";

const createSchema = new Schema({
    name: { type: String , require:true},
    email: { type: String , require:true},
    userType: { type: String , require:true},
    description: { type: String , require:true},
    phNumber: { type: Number , require:true},
    userIntrestry: { type: String , require:true},
    isHaveWeb: { type: String },
    challenge: { type: String },
    webUrl: { type: String }, 
},{ timestamps: true})

const meetModel = models.meet || model('meet',createSchema)

export default meetModel;