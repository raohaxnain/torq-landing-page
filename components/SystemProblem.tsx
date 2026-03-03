import Link from 'next/link'
import React from 'react'

function SystemProblem() {

     const problems = [
          "Most teams keep buying tools to “get more leads.”",
          "But leads don’t compound.",
          "Systems do.",
          "When customer data is scattered, campaigns don’t learn.",
          "When outcomes aren’t captured, nothing improves.",
          "When follow-up depends on people being perfect, revenue leaks.",
          "So businesses spend more.",
          "Add more vendors.",
          "And still see inconsistent results."
     ]

     const solutions = [
          "No vendor sprawl.",
          "No brittle workflows.",
          "No guessing what worked."
     ]

     return (
          <section className='bg-white pt-20 pb-[125px]'>
               <div className='max-w-[1480px] px-5 mx-auto'>
                    <div className='max-w-[1056px] mx-auto'>
                         <h2 className='text-[56px] text-center font-medium leading-[120%] tracking-[-2.8px] text-black-1000'>
                              Most businesses don’t have a lead problem.
                              <span className='text-gradient block'> They have a system problem.</span>
                         </h2>
                    </div>

                    <div className='card-bg2 mt-[70px] rounded-[30px] py-7 pr-6 pl-14 grid grid-cols-2 gap-4'>

                         {/* Left Side - Problems */}
                         <div>
                              <ul className='space-y-4'>
                                   {problems.map((item, index) => (
                                        <li key={index} className="flex items-center gap-[18px]">
                                             <span className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-1100'>
                                                  <img src="/icons/cross-icon.svg" alt="cross icon" />
                                             </span>
                                             <p className="text-lg font-medium leading-[140%] text-black-1100">
                                                  {item}
                                             </p>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         {/* Right Side - Solution Card */}
                         <div className='bg-[url(/background/card-bg.png)] bg-cover bg-no-repeat rounded-[15px] pt-8 px-11 pb-8'>
                              <h4 className="text-[30px] font-medium leading-[100%] tracking-[-1.5px] text-black-1000 mb-[22px]">
                                   Torq fixes the system — not just one step of it.
                              </h4>

                              <p className="text-lg font-medium mb-8 leading-[140%] text-black-1000 max-w-[520px]">
                                   We unify your data, run coordinated AI agents, generate, and engage demand, and turn real outcomes into learning — so performance improves automatically over time.
                              </p>

                              <ul className='space-y-4 mb-10'>
                                   {solutions.map((item, index) => (
                                        <li key={index} className='flex items-center gap-5'>
                                             <span className="bg-black-1000 w-8 h-8 rounded-full flex items-center justify-center">
                                                  <img src="/icons/tick-icon2.svg" alt="tick icon" />
                                             </span>
                                             <h6 className='text-lg font-medium leading-[140%] text-black-1000'>
                                                  {item}
                                             </h6>
                                        </li>
                                   ))}
                              </ul>

                              <div className='bg-black-1000 h-[1px] w-[175px] mb-5'></div>

                              <h6 className="text-lg mb-8 font-bold leading-[140%] text-black-1000">
                                   Tools create activity. Systems create momentum.
                              </h6>

                              <div className="space-y-4">
                                   <Link href="/" className="text-sm font-bold inline-block leading-5 text-black tracking-[0.98px] px-11 py-[19px] rounded-[16px] bg-yellow-1000">
                                        See How the System Works
                                   </Link>

                                   <Link href="/" className="text-sm font-bold inline-block leading-5 text-black tracking-[0.98px] px-11 py-[19px] rounded-[16px] border border-black">
                                        Why Results Compound With Torq
                                   </Link>
                              </div>
                         </div>

                    </div>
               </div>
          </section>
     )
}

export default SystemProblem