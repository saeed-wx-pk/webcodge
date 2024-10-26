import connectToDatabase from "@/lib/mongoose";
import meetModel from "@/models/meetmodel";
import { NextResponse } from "next/server";

export  async function POST(req:Request){
    try {
        const formData = await req.json();
        const { name, email, userType,description,userIntrestry,phNumber,isHaveWeb,webUrl,challenge } = formData;
        await connectToDatabase();
        const order = new meetModel({ name, email, userType,description,userIntrestry,phNumber,isHaveWeb,webUrl,challenge });
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
        const meets = await meetModel.find({});
        console.log(meets);
        
        return NextResponse.json(meets,{status:200})
    } catch (error) {
        console.error('Error Fetching meets:', error);
        return NextResponse.json({error:"Error retrieving service requests"},{status:500})
    }
}