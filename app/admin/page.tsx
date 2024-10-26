"use client"
import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { toast } from '@/hooks/use-toast'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export type OrderRequest = {
  name: string
  email: string
  serviceType: string
  description: string
  timeline: string
  webDevType: string
  currentUrl: string
  phNumber: number
  createdAt:Date
}
export type MeetRequest = {
  name: string
  email: string
  userType: string
  description: string
  userIntrestry: string
  challenge: string
  isHaveWeb:string
  webUrl: string
  phNumber: number
  createdAt:Date
}
export type ContactRequest = {
  name: string
  email: string
  message: string
  createdAt:Date
}
export type EmailRequest = {
  email: string
}

const page = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [adminCode, setAdminCode] = useState('')
    const [password, setPassword] = useState('')
    const [orders, setOrders] = useState<OrderRequest[]>([])
    const [contacts, setContacts] = useState<ContactRequest[]>([])
    const [emails, setEmails] = useState<EmailRequest[]>([])
    const [meets, setMeets] = useState<MeetRequest[]>([])

    const fetchData = async ()=>{
      try {
        const orderRespone = await fetch('/api/create');
        const orderResult = await orderRespone.json()
        setOrders(orderResult);

        const meetRespone = await fetch('/api/meet');
        const meetResult = await meetRespone.json()
        setMeets(meetResult);
        console.log(meets);
        
        const contactRespone = await fetch('/api/contact');
        const contactResult = await contactRespone.json()
        setContacts(contactResult);

        const emailRespone = await fetch('/api/email');
        const emailResult = await emailRespone.json()
        setEmails(emailResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    async function handleSubmit(){
        try {
            const response = await fetch("/api/admin",{
              method:"POST",
              headers:{
                'Content-Type': 'application/json',
              },
              body:JSON.stringify({
                adminCode,
                password
              })
            })

            if (response.ok) {
              console.log('Logged In Successfully');
              toast({
                title: "Logged In Successfully",
              })
              setIsLogin(true)
              fetchData();
            } else {
              console.error('Failed to Login');
              toast({
                title: "Admin code or password is incorrect"
              })
            }
          } catch (error) {
            console.error('Error:', error);
          }
    }
    return (
        <div className="mt-40 min-h-[60vh] max-w-[100vw]">
            <h3 className="text-grad text-4xl mx-auto w-fit mb-10">Admin Page.</h3>
            {isLogin ?
                (
                    <div className='mx-auto'>
                      <div className="w-fit mx-auto sm:px-10 ">
                        <h3 className="text-xl mb-5 text-gray-200 text-center mt-10">Meeting Members.</h3>
                        <div className="flex flex-wrap gap-5 justify-center">
                          {
                            meets ? meets.map((meet)=>{
                              return(
                                <div className="rounded-2xl bg-foreground-gradient  px-4 sm:px-10 py-7">
                                  <div className="flex sm:flex-row flex-col justify-between gap-5">
                                    <div className="">
                                      <p className="text-sm text-gray-200">{meet.name}</p>
                                      <p className="text-xs text-gray-300">{meet.email}</p>
                                    </div>
                                    <div className="">
                                      <p className="text-sm text-gray-200">{meet.userType}</p>
                                      <p className="text-sm text-gray-300">{meet.userIntrestry }</p>
                                    </div>
                                  </div>
                                  <p className="text-gray-500 mt-5 max-w-[30ch] sm:max-w-[50ch] text-sm">
                                    {meet.description}
                                  </p>
                                  <span>{meet.isHaveWeb}</span>
                                  
                                  <div className="mt-7">
                                    <p className="text-sm text-gray-300">{meet.phNumber}</p>
                                    <div className="flex justify-between">
                                      <p className="text-sm text-gray-400">{meet.challenge} </p>
                                      <p className="text-sm text-gray-500">{new Date(meet.createdAt).toLocaleString()}</p>
                                    </div>
                                  </div>
                                </div>
                              )
                            }):(
                              <div className="">
                                No meets Yet !
                              </div>
                            )
                          }
                        </div>
                      </div>
                      <div className="w-fit mx-auto sm:px-10 ">
                        <h3 className="text-xl mb-5 text-gray-200 text-center mt-10">Orders.</h3>
                        <div className="flex flex-wrap gap-5 justify-center">
                          {
                            orders ? orders.map((order)=>{
                              return(
                                <div className="rounded-2xl bg-foreground-gradient  px-4 sm:px-10 py-7">
                                  <div className="flex sm:flex-row flex-col justify-between gap-5">
                                    <div className="">
                                      <p className="text-sm text-gray-200">{order.name}</p>
                                      <p className="text-xs text-gray-300">{order.email}</p>
                                    </div>
                                    <div className="">
                                      <p className="text-sm text-gray-200">{order.serviceType}</p>
                                      <p className="text-sm text-gray-300">{order.webDevType }</p>
                                    </div>
                                  </div>
                                  <p className="text-gray-500 mt-5 max-w-[30ch] sm:max-w-[50ch] text-sm">
                                    {order.description}
                                  </p>
                                  <div className="mt-7">
                                    <p className="text-sm text-gray-300">{order.phNumber}</p>
                                    <div className="flex justify-between">
                                      <p className="text-sm text-gray-400">{order.timeline} weeks</p>
                                      <p className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleString()}</p>
                                    </div>
                                  </div>
                                </div>
                              )
                            }):(
                              <div className="">
                                No Orders Yet !
                              </div>
                            )
                          }
                        </div>
                      </div>
                      <div className="w-fit mx-auto  mt-5">
                        <h3 className="text-xl mb-5 text-gray-200 text-center mt-10">Contacts.</h3>
                        <div className="flex flex-wrap gap-5 justify-center">
                          {
                            contacts ? contacts.map((contact)=>{
                              return(
                                <div className="rounded-2xl bg-foreground-gradient px-7  sm:px-10 py-7">
                                  <div className=" ">
                                      <p className="text-sm text-gray-400 max-w-[30ch] sm:max-w-[50ch]">{contact.message}</p>
                                  </div>
                                  <div className="mt-5 flex justify-between">
                                      <p className="text-base text-gray-200">{contact.name}</p>
                                      <p className="text-sm text-gray-300">{contact.email}</p>
                                  </div>
                                  <p className="text-end text-xs text-gray-400">{new Date(contact.createdAt).toLocaleString()}</p>
                                </div>
                              )
                            }):(
                              <div className="">
                                No Contacts Yet !
                              </div>
                            )
                          }
                        </div>
                      </div>
                      <div className="w-fit mx-auto px-10 mt-5">
                        <h3 className="text-xl mb-5 text-gray-200 text-center mt-10">Community Members</h3>
                        <div className="flex flex-wrap gap-5 justify-center">
                          {
                            emails ? emails.map((email)=>{
                              return(
                                <div className="rounded-2xl bg-foreground-gradient   p-5">
                                  <p className="text-sm text-gray-400">{email.email}</p>
                                </div>
                              )
                            }):(
                              <div className="">
                                No Members Yet !
                              </div>
                            )
                          }
                        </div>
                      </div>
                    </div>
                ):(
                    <div className='w-fit mx-auto bg-foreground-gradient rounded-3xl p-5 sm:p-10'>
                        
                        <Input value={adminCode} onChange={(e)=>setAdminCode(e.target.value)} type="text" placeholder="Admin Code" className=''/>
                        <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="passsword" className='mt-5'/>
                        
                        <div className="flex justify-around gap-4">
                            <Link href="/">
                                <Button className='group w-fit mt-7'>
                                    <ArrowLeftIcon className="h-5 w-5 mr-1 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                                    Back to home
                                </Button>
                            </Link>
                            <Button className='group w-fit mt-7' onClick={handleSubmit} disabled={!password || !adminCode}>
                                Continue
                                <ArrowRightIcon className="h-5 w-5 ml-2 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                            </Button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default page
