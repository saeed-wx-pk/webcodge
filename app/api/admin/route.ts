

import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try {
        const formData = await req.json()
        const { adminCode , password } = formData;
        if(adminCode === process.env.WEBCODGE_ADMIN_CODE && password === process.env.WEBCODGE_PASSWORD){
            return NextResponse.json({message:"Form data received successfully!"})
        }else{
            return NextResponse.json({error:"Failed to process form data"},{status:500})
        }

        
    } catch (error) {
        console.error('Error handling form data:', error);
        return NextResponse.json({error:"Failed to process form data"},{status:500})
    }
}