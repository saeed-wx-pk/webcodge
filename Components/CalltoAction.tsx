"use client"
import { toast } from '@/hooks/use-toast'
import React, { useState } from 'react'

const CalltoAction = () => {
  const [email, setEmail] = useState('')
  const [invalid, setInvalid] = useState(false)
  async function handleSubmit(){
    if(!email){
      setInvalid(true)
      setTimeout(() => setInvalid(false), 500);
    }else{
      try {
        const response = await fetch("/api/email",{
          method:"POST",
          headers:{
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            email:email
          })
        })

        if (response.ok) {
          console.log('Message submitted successfully');
          toast({
            title: "You are a Part of Our Community",
          })
          setEmail('')
        } else {
          console.error('Failed to submit message');
          toast({
            title: "Failed to submit email try again",
            description: "Please try again",
          })
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
  
  return (
    <div className='mt-20 flex justify-center items-center mb-32'>
      <div className="h-fit  bg-gradient-to-br rounded-3xl  from-foreground  to-background w-[95vw] sm:w-[20rem] p-10 md:p-20 md:w-[50rem] text-center">
        <div className="text-grad text-2xl md:text-5xl">
          Become a Part of Our Community
        </div>
        <div className="text-lg text-gray-500 mt-5">
        Join our community to connect, share ideas, and make a positive impact together!
        </div>
        <div className={`hidden md:flex items-center bg-black rounded-full p-2 w-full max-w-md mx-auto mt-10 ${invalid ? 'shake' : ''}`}>
          <input 
            type="email" 
            placeholder="name@email.com" 
            className="bg-transparent text-gray-300 placeholder-gray-500 outline-none hover:outline-none focus:outline-none active:outline-none px-4 py-2 w-full "
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />
          <button onClick={handleSubmit} className="glow-btn bg-light_green min-w-fit text-gray-900 font-semibold px-10 py-5 rounded-full transition duration-300">
            Get notified
          </button>
        </div>
        <div className="md:hidden">
          <div className="flex items-center bg-black rounded-full p-2 w-full max-w-md mx-auto mt-10">
            <input 
              type="email" 
              placeholder="name@email.com" 
              className="bg-transparent text-gray-300 h-12 placeholder-gray-500 outline-none hover:outline-none focus:outline-none active:outline-none px-4 py-2 w-full"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
          </div>
            <button onClick={handleSubmit} className="glow-btn mt-5 bg-light_green min-w-fit w-64 text-gray-900 font-semibold px-10 py-5 rounded-full transition duration-300">
              Get notified
            </button>
        </div>
      </div>
    </div>
  )
}

export default CalltoAction
