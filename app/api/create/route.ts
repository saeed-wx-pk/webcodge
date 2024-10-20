import connectToDatabase from "@/lib/mongoose";
import orderModel from "@/models/createModel";
import { NextResponse } from "next/server";

export  async function POST(req:Request){
    try {
        const formData = await req.json();
        const { name, email, serviceType, webDevType, currentUrl, description, timeline ,phNumber } = formData;
        console.log('Received form data:', { name, email, serviceType, webDevType, currentUrl, description, timeline, phNumber });
        console.log("gggggggggggggggg");
        await connectToDatabase();
        const order = new orderModel({ name, email, serviceType, webDevType, currentUrl, description, timeline , phNumber });
        order.save();
        return NextResponse.json({message: "Form data received successfully!"})
    } catch (error) {
        console.error('Error handling form data:', error);
        return NextResponse.json({error:"Failed to process form data"},{status:500})
    }
} 
export  async function GET(req:Request){
    try {
        await connectToDatabase();
        const orders = await orderModel.find({});
        return NextResponse.json(orders,{status:200})
    } catch (error) {
        console.error('Error Fetching orders:', error);
        return NextResponse.json({error:"Error retrieving service requests"},{status:500})
    }
}