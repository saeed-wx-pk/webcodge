import Image from 'next/image'
import React from 'react'

import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='rounded-full fixed top-[20px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#16161600] backdrop-blur-md   border border-gray-900 mt-10 lg:w-1/2 sm:w-3/4 w-[95%] min-w-fit p-4 items-center z-30
    '>
      <div className="flex justify-between items-center">
          <Image
            src="/webcodge-white.png"
            alt='webcodge'
            width={220}
            height={10}
          />
          <p className="sr-only">webcodge</p> 
        <div className="  hidden md:flex">
          <Link href="/#features" className="rounded-full px-3 py-2 lg:text-lg text-sm hover:text-gray-200  text-gray-400">
            Features
          </Link>
          <Link href="/#about" className="rounded-full px-3 py-2 lg:text-lg text-sm hover:text-gray-200  text-gray-400">
            About
          </Link>
          <Link href="/#faqs" className="rounded-full px-3 py-2 lg:text-lg text-sm hover:text-gray-200  text-gray-400">
            FAQ
          </Link>
          <Link href="/contact" className="rounded-full px-3 py-2 lg:text-lg text-sm hover:text-gray-200  text-gray-400">
            Reach Out
          </Link>
          
          
        </div>
        <div className="md:hidden  dropdown-menu">
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className=' border-gray-800 rounded-full p-4 py-5 border bg-transparent hover:bg-transparent '>
                <Image
                  src='/menu.png'
                  alt='menu'
                  width={25}
                  height={25}
                  className='text-red-600 invert'
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44 pl-5 pr-2 bg-[#0d0d0d]  text-white border-gray-900 rounded-3xl">
              <Link href="/#features">
                <DropdownMenuItem className='h-10 rounded-none focus:bg-[#0d0d0d] focus:text-gray-400'>
                    <span className='tracking-wider text-base font-normal'>Features</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator/>
              <Link href="/#about">
                <DropdownMenuItem className='h-10 rounded-none focus:bg-[#0d0d0d] focus:text-gray-400'>
                    <span className='tracking-wider text-base font-normal'>About</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator/>
              <Link href="/#faqs">
                <DropdownMenuItem className='h-10 rounded-none focus:bg-[#0d0d0d] focus:text-gray-400'>
                    <span className='tracking-wider text-base font-normal'>FAQs</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator/>
              <Link href="/contact">
                <DropdownMenuItem className='h-10 rounded-none focus:bg-[#0d0d0d] focus:text-gray-400'>
                    <span className='tracking-wider text-base font-normal'>Reach Out</span>
                </DropdownMenuItem>
              </Link>

            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
