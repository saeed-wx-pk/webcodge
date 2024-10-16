import Image from 'next/image'
import React from 'react'
import ScrollAnimation from './scrollAnimation'

const Workflow = () => {
  return (
    <div className='mt-32 '>
      <div className=" text-light_green mx-auto w-fit  text-xs md:text-sm">
          • How We Operate • 
      </div>
      <div className="text-grad mx-auto w-fit text-2xl md:text-5xl max-w-[25ch] text-center mt-8">
       Premium designs, brought to your fingertips.
      </div>
      <div className="mt-10 flex md:justify-center gap-10 md:flex-row md:flex-wrap flex-col items-center">
        <ScrollAnimation >
          <div className="bg-foreground-gradient rounded-3xl sm:w-96 h-96 w-80  p-10 flex flex-col items-start justify-end ">
            <div className="bg-[#121212] rounded-full p-10 mb-auto mr-auto">
              <Image
                src='/icons/user-circle.svg'
                alt='bar'
                width={80}
                height={80}
                className=''
              />
            </div>
            <h3 className='md:text-xl text-lg'>Express Your Vision</h3>
            <p className='text-gray-500'>Select a plan that suits you and share your design ideas with us. We're eager to understand your vision and bring it to life!</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={0.9}>
          <div className="bg-foreground-gradient rounded-3xl sm:w-96 h-96 w-80  p-10 flex flex-col items-start justify-end ">
            <div className="bg-[#121212] rounded-full p-10 mb-auto mr-auto">
              <Image
                src='/icons/circle-top.svg'
                alt='bar'
                width={80}
                height={80}
                className=''
              />
            </div>
            <h3 className='md:text-xl text-lg'>Feel the Magic</h3>
            <p className='text-gray-500'>Sit back and enjoy the journey as our talented team transforms your ideas into stunning designs.</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={1.1}>
          <div className="bg-foreground-gradient rounded-3xl sm:w-96 h-96 w-80  p-10 flex flex-col items-start justify-end ">
            <div className="bg-[#121212] rounded-full p-10 mb-auto mr-auto">
              <Image
                src='/icons/message.svg'
                alt='bar'
                width={80}
                height={80}
                className=''
              />
            </div>
            <h3 className='md:text-xl text-lg'>Enjoy Ongoing Assistance</h3>
            <p className='text-gray-500'>With your subscription, you’ll receive uninterrupted support from our dedicated design team, ready to assist you at every step.</p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Workflow
