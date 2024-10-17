import Image from 'next/image'
import React from 'react'
import ScrollAnimation from './scrollAnimation'
import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'

const Services = () => {
  return (
    <div className='mt-20 ' id='features'>
      <div className=" text-light_green mx-auto w-fit  text-xs md:text-sm">
          • What You Can Expect • 
      </div>
      <div className="text-grad mx-auto w-fit text-2xl md:text-5xl max-w-[25ch] text-center mt-8">
        We simplify the entire creative process.
      </div>
      <div className="mt-10 flex md:justify-center gap-10 md:flex-row md:flex-wrap flex-col items-center">
        <ScrollAnimation >
          <div className="bg-foreground-gradient rounded-3xl sm:w-96 h-96 w-80  p-10 flex flex-col items-start justify-end ">
            <div className="bg-[#121212] rounded-full p-10 mb-auto mr-auto">
              <Image
                src='/icons/cards.svg'
                alt='cards'
                width={80}
                height={80}
                className=''
              />
            </div>
            <h3 className='md:text-xl text-lg'>Personalized Design</h3>
            <p className='text-gray-500'>At WebCodge, we transform your unique vision into stunning designs that truly reflect your brand and engage your audience.</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={0.9}>
          <div className="bg-foreground-gradient rounded-3xl sm:w-96 h-96 w-80  p-10 flex flex-col items-start justify-end ">
            <div className="bg-[#121212] rounded-full p-10 mb-auto mr-auto">
              <Image
                src='/icons/bar.svg'
                alt='bar'
                width={80}
                height={80}
                className=''
              />
            </div>
            <h3 className='md:text-xl text-lg'>Evolving with your business</h3>
            <p className='text-gray-500'>At WebCodge, we adapt our web solutions to support your unique growth journey, ensuring you thrive in an ever-evolving market.</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={1.1}>
          <div className="bg-foreground-gradient rounded-3xl sm:w-96 h-96 w-80  p-10 flex flex-col items-start justify-end ">
            <div className="bg-[#121212] rounded-full p-10 mb-auto mr-auto">
              <Image
                src='/icons/plane.svg'
                alt='plane'
                width={80}
                height={80}
                className=''
              />
            </div>
            <h3 className='md:text-xl text-lg'>Tailored SEO Solutions</h3>
            <p className='text-gray-500'>At WebCodge, we offer personalized SEO solutions designed to enhance your online visibility and drive targeted traffic to your website.</p>
          </div>
        </ScrollAnimation>
      </div>
      <div className="mt-10 flex md:justify-center gap-10 md:flex-row md:flex-wrap flex-col items-center">
        <ScrollAnimation >
          <div className="bg-foreground-gradient rounded-3xl w-80 sm:w-96 h-96 md:w-[37rem] md:h-40 flex flex-col md:flex-row items-start justify-end">
            <div className="bg-[#121212] rounded-full p-10 mb-auto mr-5 mt-7 ml-10">
              <Image
                src='/icons/tik-card.svg'
                alt='plane'
                width={80}
                height={80}
                className=''
              />
            </div>
            <div className="p-7">
              <h3 className='md:text-xl text-lg'>Reliable Static Web Solutions</h3>
              <p className='text-gray-500'>Fast-loading websites that are easy to maintain, perfect for showcasing your brand.</p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={0.9}>
          <div className="bg-foreground-gradient rounded-3xl w-80 sm:w-96 h-96 md:w-[37rem] md:h-40 flex flex-col md:flex-row items-start justify-end ">
            <div className="bg-[#121212] rounded-full p-10 mb-auto mr-5 mt-7 ml-10">
              <Image
                src='/icons/bolt.svg'
                alt='plane'
                width={80}
                height={80}
                className=''
              />
            </div>
            <div className="p-7">
              <h3 className='md:text-xl text-lg'>Engaging Dynamic Web Experiences</h3>
              <p className='text-gray-500'>Interactive websites that adapt to users, offering real-time updates and personalized content.</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className='mt-10 flex-wrap flex justify-center text-gray-500 gap-3 md:gap-5 text-xs md:px-20 md:text-base'>
        <ScrollAnimation >
          <div className="px-3 py-2 md:px-8 md:py-4 bg-foreground rounded-3xl border border-gray-800"><span className="text-light_green">✦</span> Professional Web Development</div>
        </ScrollAnimation>
        <ScrollAnimation delay={0.85}>
          <div className="px-3 py-2 md:px-8 md:py-4 bg-foreground rounded-3xl border border-gray-800"><span className="text-light_green">✦</span> Custom Website Design</div>
        </ScrollAnimation>
        <ScrollAnimation delay={1}>
          <div className="px-3 py-2 md:px-8 md:py-4 bg-foreground rounded-3xl border border-gray-800"><span className="text-light_green">✦</span> E-Commerce Solutions</div>
        </ScrollAnimation>
        <ScrollAnimation delay={1.15}>
          <div className="px-3 py-2 md:px-8 md:py-4 bg-foreground rounded-3xl border border-gray-800"><span className="text-light_green">✦</span> Website Maintenance & Updates</div>
        </ScrollAnimation>
        <ScrollAnimation delay={1.3}>
          <div className="px-3 py-2 md:px-8 md:py-4 bg-foreground rounded-3xl border border-gray-800"><span className="text-light_green">✦</span> SEO Optimization Services</div>
        </ScrollAnimation>
        <ScrollAnimation delay={1.45}>
          <div className="px-3 py-2 md:px-8 md:py-4 bg-foreground rounded-3xl border border-gray-800"><span className="text-light_green">✦</span> Technical Support & Consulting</div>
        </ScrollAnimation>
      </div>
      <Link href="/create" className="glow-btn group flex mx-auto mt-10 items-center justify-center bg-light_green text-black rounded-full px-8 py-5 text-lg transition-transform duration-300 w-fit">
        Let's Start
        <ArrowRightIcon className="h-5 w-5 ml-2 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
      </Link>
    </div>
  )
}

export default Services
