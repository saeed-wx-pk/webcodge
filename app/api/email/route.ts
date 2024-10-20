import connectToDatabase from "@/lib/mongoose";
import emailModel from "@/models/emailModel";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try {
        const body = await req.json();
        const { email } = body;
        console.log('Received form data:', { email });
        await connectToDatabase();
        const emailCOntact = new emailModel({email})
        emailCOntact.save();
        return NextResponse.json({message: "Form data received successfully!"})
    } catch (error) {
        console.error('Error handling email:', error);
        return NextResponse.json({error:"Failed to process email"},{status:500})
    }
}

export  async function GET(req:Request){
    try {
        await connectToDatabase();
        const emails = await emailModel.find({});
        return NextResponse.json(emails,{status:200})
    } catch (error) {
        console.error('Error Fetching emails:', error);
        return NextResponse.json({error:"Error retrieving service requests"},{status:500})
    }
}