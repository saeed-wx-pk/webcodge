import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try {
        const body = await req.json();
        const { email } = body;
        console.log('Received form data:', { email });

        return NextResponse.json({message: "Form data received successfully!"})
    } catch (error) {
        console.error('Error handling email:', error);
        return NextResponse.json({error:"Failed to process email"},{status:500})
    }
}