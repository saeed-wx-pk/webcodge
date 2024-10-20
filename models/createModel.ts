import { model, models, Schema } from "mongoose";

const createSchema = new Schema({
    name: { type: String , require:true},
    email: { type: String , require:true},
    serviceType: { type: String , require:true},
    description: { type: String , require:true},
    timeline: { type: String , require:true},
    phNumber: { type: Number , require:true},
    webDevType: { type: String ,require : true},
    currentUrl: { type: String ,require : true}, 
},{ timestamps: true})

const orderModel = models.order || model('order',createSchema)

export default orderModel;