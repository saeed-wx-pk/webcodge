import { NextResponse } from "next/server";

export  async function POST(req:Request){
    try {
        const formData = await req.json();
        const { name, email, serviceType, budget, description, timeline } = formData;
        console.log('Received form data:', { name, email, serviceType, budget, description, timeline });
        
        return NextResponse.json({message: "Form data received successfully!"})
    } catch (error) {
        console.error('Error handling form data:', error);
        return NextResponse.json({error:"Failed to process form data"},{status:500})
    }
} 