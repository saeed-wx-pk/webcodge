import { Avatar, AvatarFallback, AvatarImage } from "../Components/ui/avatar"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-10 px-5'>
      <div className="bg-[#131313] rounded-t-3xl  flex flex-col  w-full">
        <div className="mx-auto text-center mt-10">
            <Image
              src="/webcodge-logo(2).png"
              alt='webcodge'
              width={250}
              height={20}
              className="mx-auto"
            /> 
            <p className="sr-only">webcodge</p>
            <p className='text-base text-gray-600 mt-5 md:max-w-[60ch] sm:max-w-[40ch] max-w-[30ch]'>Unlock your startup's potential with customized web solutions designed to fit your unique needs. Let's build your digital presence together!</p>
            <div className="border border-gray-900 bg-foreground rounded-full flex px-7 py-5 mt-5 mx-auto w-fit gap-2 text-sm sm:gap-3  sm:text-base md:gap-5 md:text-xl text-gray-500 ">
                <Link href="/#features" className="hover:text-gray-400">Features</Link>
                •
                <Link href="/#about" className="hover:text-gray-400">About</Link>
                •
                <Link href="/#faqs" className="hover:text-gray-400">FAQs</Link>
                •
                <Link href="/contact" className="hover:text-gray-400">Support</Link>
            </div>
        </div>
        <div className="mx-auto flex mt-5 gap-5">
          <Link href="">
            <Image
              src="/icons/instagram.svg"
              width={20}
              height={20}
              alt="instagram-icon"
            />
          </Link>
          <Link href="">
            <Image
              src="/icons/x.svg"
              width={20}
              height={20}
              alt="x-icon"
            />
          </Link>
          <Link href="">
            <Image
              src="/icons/facebook.svg"
              width={20}
              height={20}
              alt="facebook-icon"
            />
          </Link>
          <Link href="">
            <Image
              src="/icons/mail.svg"
              width={20}
              height={20}
              alt="mail-icon"
            />
          </Link>
          <Link href="">
            <Image
              src="/icons/linkedin.svg"
              width={20}
              height={20}
              alt="linkedin-icon"
            />
          </Link>
        </div>
        <hr className=' mt-5 border-t border-t-gray-900 '/>
        <div className="md:flex flex-col md:flex-row  mt-10 gap-10 mb-10">
            <div className="border min-w-fit border-gray-900 bg-foreground rounded-full px-5 py-4 text-gray-500 w-fit mx-auto md:ml-10 md:mr-auto hover:border-gray-700 hover:text-gray-400 flex gap-3 items-center">
              
              @2024 All Rights Reserved
            </div>

            <a href='https://saeedpk.vercel.app' className="border min-w-fit mt-5 md:mt-0 border-gray-900 bg-foreground rounded-full px-5 py-4 text-gray-500 w-fit mx-auto hover:border-gray-700 hover:text-gray-400 flex gap-3 items-center">
              
              <span>
                <Avatar className="w-5 h-5">
                  <AvatarImage src="/profile.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </span>
              Project by saeed
            </a>

            <Link href='/privacy-policy' className="border min-w-fit mt-5 md:mt-0 border-gray-900 bg-foreground rounded-full px-5 py-4 text-gray-500 w-fit mx-auto md:mr-32 md:ml-auto hover:border-gray-700 hover:text-gray-400 flex gap-3 items-center">
              
              Privacy Policy
            </Link>
            
        </div>
      </div>
    </div>
  )
}

export default Footer
