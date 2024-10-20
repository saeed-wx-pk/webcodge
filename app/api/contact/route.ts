

import connectToDatabase from "@/lib/mongoose";
import contactModel from "@/models/cotactModel";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try {
        const formData = await req.json()
        const { name , email , message } = formData;
        console.log('Received form data:', { name, email, message});
        await connectToDatabase();
        const contact = new contactModel({ name, email, message});
        await contact.save();

        return NextResponse.json({message:"Form data received successfully!"})
    } catch (error) {
        console.error('Error handling form data:', error);
        return NextResponse.json({error:"Failed to process form data"},{status:500})
    }
}

export  async function GET(req:Request){
    try {
        await connectToDatabase();
        const contacts = await contactModel.find({});
        return NextResponse.json(contacts,{status:200})
    } catch (error) {
        console.error('Error fetching Contacts:', error);
        return NextResponse.json({error:"Error retrieving service requests"},{status:500})
    }
}