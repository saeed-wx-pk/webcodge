import React from 'react'
import Marquee from './Marquee'
import { Avatar, AvatarFallback, AvatarImage } from "../Components/ui/avatar"
import { testimonials } from '@/Constants/constants'

const Testimonials = () => {
  return (
    <div className=' mx-auto w-fit mt-28'>
      <div className=" text-light_green mx-auto w-fit  text-xs md:text-sm">
          • Testimonials • 
      </div>
      <div className="text-grad mx-auto w-fit text-3xl md:text-6xl max-w-[25ch] text-center mt-8">
        Hear from Our Clients.
      </div>
      <div className="mt-24 " aria-disabled>
        <Marquee toRight={true} >
          {
            testimonials.map((testimonial, index)=>{
              if(testimonials.length/2 >= index){
                return(
                  <div className=" flex flex-col px-6 py-4 bg-foreground rounded-3xl border border-gray-800 max-w-[30rem]" key={index}>
                    <div className="text-gray-500">
                      {testimonial.date}
                    </div>
                    <div className="overflow-hidden text-ellipsis whitespace-pre-wrap text-gray-400">
                      {testimonial.content}
                    </div>
                    <div className="w-fit mt-auto">
                      <hr className=' mt-5 border-t border-t-gray-800 '/>
                      <div className="mt-5 flex justify-between">
                        <div className="flex items-center">
                            <span className='mr-5'>
                              <Avatar className="w-5 h-5">
                                <AvatarImage src={testimonial.image} />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                            </span>
                          {testimonial.name}
                        </div>  
                        <div className="">
                          {Array.from({ length: testimonial.star }, (_, i) => (
                              <span key={i}>⭐</span>
                          ))}
                          
                        </div>        
                      </div>
                    </div>
                  </div>
                )
              }
              return null;
            })
          }
        </Marquee>
      </div>
      <div className="mt-10">
        <Marquee toRight={false} >
          {
            testimonials.map((testimonial, index)=>{
              if(testimonials.length/2 < index){
                return(
                  <div className="flex flex-col px-6 py-4 bg-foreground rounded-3xl border border-gray-800 max-w-[30rem]" key={index}>
                    <div className="text-gray-500">
                      {testimonial.date}
                    </div>
                    <div className=" overflow-hidden text-ellipsis whitespace-pre-wrap text-gray-400">
                      {testimonial.content}
                    </div>
                    <div className="w-fit mt-auto">
                      <hr className=' mt-5 border-t border-t-gray-800 '/>
                      <div className="mt-5 flex justify-between">
                        <div className="flex items-center">
                            <span className='mr-5'>
                              <Avatar className="w-5 h-5">
                                <AvatarImage src={testimonial.image} />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                            </span>
                          {testimonial.name}
                        </div>  
                        <div className="">
                          {Array.from({ length: testimonial.star }, (_, i) => (
                              <span key={i}>⭐</span>
                          ))}
                          
                        </div>        
                      </div>
                    </div>
                  </div>
                )
              }
              return null;
            })
          }
        </Marquee>
      </div>

    </div>
  )
}

export default Testimonials
