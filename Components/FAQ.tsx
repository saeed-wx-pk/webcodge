import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { FAQs } from '@/Constants/constants'
import Link from 'next/link'


const FAQ = () => {
  return (
    <div className=' mx-auto w-fit mt-32' id='faqs'>
      <div className=" text-light_green mx-auto w-fit  text-xs md:text-sm">
          • FAQs • 
      </div>
      <div className="text-grad mx-auto w-fit text-3xl md:text-5xl max-w-[25ch] text-center mt-8">
        We Have the Solutions.
      </div>
      <div className="mt-10 tracking-wide bg-gradient-to-tr rounded-3xl  from-[#171717]  to-background p-5">
        {
          FAQs.map((FAQ, index)=>{
            return(
              <Accordion type="single" collapsible className='w-[97%] sm:w-[20rem] md:w-40rem xl:w-[60rem] text-center' key={index}>
                <AccordionItem value="item-1" className='hover:bg-foreground border-none rounded-2xl py-2 px-4  '>
                  <AccordionTrigger className=' text-lg'>{FAQ.question}</AccordionTrigger>
                  <AccordionContent className='text-base '>
                    {FAQ.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          })
        }
        
      </div>
      <div className="mx-auto mt-10 w-fit text-base text-center text-gray-400">
        Need further assistance? Reach out to our <Link href="/contact" className='hover:underline'>help center</Link>
      </div>
    </div>
  )
}

export default FAQ
