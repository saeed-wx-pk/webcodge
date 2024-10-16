"use client"
import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { Textarea } from '@/Components/ui/textarea'
import {  ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'



const page = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [invalid, setInvalid] = useState({
    name:false,
    email:false
  })
async function handleSubmit(){
  if(!email){
    setInvalid((prevState) => ({
      ...prevState,
      email: true // or false depending on the validation
    }));
  }
  if(!name){
    setInvalid((prevState) => ({
      ...prevState,
      name: true // or false depending on the validation
    }));
  }
  try {
    const response = await fetch('/api/contact',{
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        name:name,
        email:email,
        message:message
      })
    })
    if (response.ok) {
      console.log('Message submitted successfully');
      toast.success("Message submitted successfully");
    } else {
      console.error('Failed to submit message');
      toast.error("Failed to submit message");
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
  return (
    <div className='mt-32 min-h-screen '>
      <div className="text-gray-300 mx-auto w-fit p-3 border border-gray-900 bg-gray-950 rounded-full">
        Contact Us
      </div>
      <div className="text-grad mx-auto w-fit text-2xl md:text-5xl max-w-[ch] text-center mt-8 font-bold">
        Connect with Us
      </div>
      <div className="text-center mx-auto max-w-[48ch] text-base md:text-lg mt-5 text-gray-500">
        Contact us for inquiries, collaborations, or to discuss your project requirements. We're here to support you throughout the process.
      </div>
      <div className="mx-auto md:w-[40rem] mt-10">
        <div className="md:flex-row flex-col flex  w-full gap-5 ">
          <a
            href="mailto:webcodge@gmail.com"
            className="bg-foreground rounded-2xl md:w-1/2 mx-5 px-5 py-3 transition-all duration-300 hover:bg-[#202020] group"
          >
            <div className="flex items-center">
              <div className="bg-[#202020] p-2 rounded-xl mr-4">
                <Image
                  src="/icons/mail.svg"
                  alt="mail-icon"
                  width={20}
                  height={20}
                />
              </div>
              <span className="flex items-center space-x-2 w-full">
                Email Us
                {/* Arrow icon */}
                <span className="transform -rotate-45 ml-auto transition-transform duration-300 group-hover:rotate-0">
                  <ArrowRightIcon/>
                </span>
              </span>
            </div>
            <div className="mt-3 hidden md:flex text-gray-500 text-lg tracking-wide">
              webcodge@gmail.com
            </div>
          </a>
          <a
            href="https://x.com/webCodge"
            className="bg-foreground rounded-2xl md:w-1/2 mx-5 px-5 py-3 transition-all duration-300 hover:bg-[#202020] group"
          >
            <div className="flex items-center">
              <div className="bg-[#202020] p-2 rounded-xl mr-4">
                <Image
                  src="/icons/x.svg"
                  alt="x-icon"
                  width={20}
                  height={20}
                />
              </div>
              <span className="flex items-center space-x-2 w-full">
                Twitter X
                {/* Arrow icon */}
                <span className="transform -rotate-45 ml-auto transition-transform duration-300 group-hover:rotate-0">
                  <ArrowRightIcon/>
                </span>
              </span>
            </div>
            <div className="mt-3 hidden md:flex text-gray-500 text-lg tracking-wide">
              @webCodge
            </div>
          </a>
        </div>
        <div className="bg-foreground rounded-2xl mt-5 p-5 mx-5">
          <div className="grid w-full gap-2">
            <div className="md:flex-row flex-col flex gap-2">
              <Input onChange={(e)=>setName(e.target.value)} name='name' type="text" placeholder="Name" className={`border-none outline-none bg-[#202020] md:w-1/2 ${invalid.name ? 'border border-red-500' : ''}`}/>
              <Input onChange={(e)=>setEmail(e.target.value)} name='email' type="email" placeholder="Email" className={`border-none outline-none bg-[#202020] md:w-1/2 ${invalid.email ? 'border border-red-500' : ''}`}/>
            </div>
            <Textarea onChange={(e)=>setMessage(e.target.value)} placeholder="Type your message here." className='border-none outline-none bg-[#202020] ' rows={4} required/>
            <Button onClick={handleSubmit} className='hover:bg-light_green text-black mt-4 bg-[#ddff00e0] group' >Send message
              <ArrowRightIcon className="h-5 w-5 mr-2 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0 ml-5" />
            </Button>
          </div>
        </div>
        <div className="md:flex-row flex-col flex  w-full gap-5 mt-5">
          <a
            href="mailto:webcodge@gmail.com"
            className="bg-foreground rounded-2xl md:w-1/2 mx-5 px-5 py-3 transition-all duration-300 hover:bg-[#202020] group"
          >
            <div className="flex items-center">
              <div className="bg-[#202020] p-2 rounded-xl mr-4">
                <Image
                  src="/icons/mail.svg"
                  alt="mail-icon"
                  width={20}
                  height={20}
                />
              </div>
              <span className="flex items-center space-x-2 w-full">
                Email Us
                {/* Arrow icon */}
                <span className="transform -rotate-45 ml-auto transition-transform duration-300 group-hover:rotate-0">
                  <ArrowRightIcon/>
                </span>
              </span>
            </div>
            <div className="mt-3 hidden md:flex text-gray-500 text-lg tracking-wide">
              webcodge@gmail.com
            </div>
          </a>
          <a
            href="https://x.com/webCodge"
            className="bg-foreground rounded-2xl md:w-1/2 mx-5 px-5 py-3 transition-all duration-300 hover:bg-[#202020] group"
          >
            <div className="flex items-center">
              <div className="bg-[#202020] p-2 rounded-xl mr-4">
                <Image
                  src="/icons/x.svg"
                  alt="x-icon"
                  width={20}
                  height={20}
                />
              </div>
              <span className="flex items-center space-x-2 w-full">
                Twitter X
                {/* Arrow icon */}
                <span className="transform -rotate-45 ml-auto transition-transform duration-300 group-hover:rotate-0">
                  <ArrowRightIcon/>
                </span>
              </span>
            </div>
            <div className="mt-3 hidden md:flex text-gray-500 text-lg tracking-wide">
              @webCodge
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default page
