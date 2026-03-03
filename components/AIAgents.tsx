import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function AIAgents() {

     const agents = [
          {
               tag: "Data & Audience Agent",
               image: "/img1.png",
               title: "Cleans, unifies, and segments your data so targeting actually works.",
               description: "This agent fixes the foundation — removing duplicates, organizing customers, and preparing data for demand generation."
          },
          {
               tag: "Demand & Booking Agent",
               image: "/img-2.png",
               title: "Creates demand and turns interest into booked appointments.",
               description: "This agent generates demand, qualifies prospects, and converts interest into scheduled revenue opportunities."
          },
          {
               tag: "Customer Re-Engagement Agent",
               image: "/img-3.png",
               title: "Brings past customers back at the right moment.",
               description: "This agent identifies reactivation opportunities and automatically brings customers back into your revenue pipeline."
          }
     ]

     return (
          <section className='bg-white pb-[99px] font-Inter'>
               <div className='max-w-[1683px] px-5 mx-auto'>

                    <div className='text-center pb-[76px]'>
                         <h2 className='text-[56px] mb-4 font-medium leading-[140%] tracking-[-2.8px] text-gradient'>
                              Meet the AI Agents Working Behind the Scenes
                         </h2>
                         <p className='text-xl font-normal max-w-[942px] mx-auto leading-[150%] tracking-[-1px] text-gray-1000'>
                              Torq runs a team of specialized AI agents, each responsible for a critical part of revenue generation. You don’t manage them — they work together automatically.
                         </p>
                    </div>

                    <div className='bg-[url(/background/agent-bg.png)] bg-cover bg-no-repeat rounded-[30px] py-14 px-[90px] pb-[92px]'>

                         <div className='grid grid-cols-3 gap-[34px]'>
                              {agents.map((agent, index) => (
                                   <div key={index} className='bg-white rounded-[30px] pt-5 px-[26px] pb-10'>

                                        <span className='text-base mb-6 inline-block font-medium leading-4 uppercase text-white tracking-[-0.8px] py-[7px] px-[17px] bg-black-1000 rounded-full'>
                                             {agent.tag}
                                        </span>

                                        <Image
                                             src={agent.image}
                                             alt={agent.tag}
                                             width={400}
                                             height={300}
                                             className="w-full h-auto object-contain"
                                        />

                                        <h4 className='text-[25px] tracking-[-1.25px] font-medium leading-[120%] text-black-1200 mt-9 mb-4'>
                                             {agent.title}
                                        </h4>

                                        <p className='text-xl font-normal tracking-[-1px] leading-[150%] text-gray-1000'>
                                             {agent.description}
                                        </p>

                                   </div>
                              ))}
                         </div>

                         <div className="text-center mt-[70px]">
                              <Link
                                   href="/"
                                   className="text-sm font-bold inline-block leading-5 text-black tracking-[0.98px] px-11 py-[19px] rounded-[16px] bg-yellow-1000"
                              >
                                   See How the Agents Work Together
                              </Link>
                         </div>

                    </div>
               </div>
          </section>
     )
}

export default AIAgents