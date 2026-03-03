import React from 'react'

function Work() {
     return (
          <section className='bg-white pt-[123px] font-Inter'>
               <div className='px-5'>
                    <div className='max-w-[942px] mx-auto text-center pb-[76px]'>
                         <h2 className='text-[56px] font-medium leading-[100%] tracking-[-2.8px] text-gradient'>How Torq Works</h2>
                         <h6 className='text-[26px] my-8 font-medium tracking-[-1.3px] text-black-1000'>One AI Revenue System. Multiple Agents. One Outcome: Revenue.</h6>
                         <p className='text-xl font-normal leading-[150%] tracking-[-1px] text-gray-1000'>Torq isn’t a tool you log into. It’s a coordinated system of AI agents that work on top of your data and channels — cleaning it, activating demand, engaging prospects, and continuously learning from outcomes.</p>
                    </div>
               </div>
               <div className='bg-[url(/background/work-bg.png)] pt-[103px] px-5 pb-12 bg-cover bg-no-repeat'>
                    <div className='max-w-[1440px] mx-auto'>
                         <div className='card-bg rounded-[30px]  mb-12  px-11 py-12'>
                              <div className="flex items-center mb-12 justify-between pl-20">
                                   <h3 className='text-[46px] font-medium leading-[120%] tracking-[-2.3px] text-black-1000'>One AI Agent System <br /> End-to-End Execution. </h3>
                                   <p className='text-lg font-semibold max-w-[574px] leading-[130%] text-gray-1000'>Torq isn’t a tool you log into.It’s a coordinated system of AI agents that set up the foundation, run the campaigns, and do the follow-up — cleaning your data, generating new leads, re-engaging past customers, and continuously learning from real outcomes.</p>
                              </div>
                              <div className='bg-white text-center rounded-[30px]'>
                                   <img src="/execution-img.svg" className='inline-block' alt="" />
                              </div>
                         </div>
                         <ul className='flex items-center justify-between mb-[35px] gap-2'>
                              <li className='flex items-center gap-4'>
                                   <span className='text-[26px] font-semibold leading-[100%] text-black-1000 w-[55px] h-[55px] flex items-center justify-center bg-white rounded-full'>01</span>
                                   <h6 className='text-2xl font-semibold text-white leading-[100%]'>Connect</h6>
                              </li>
                              <li>
                                   <img src="/icons/arrow.svg" alt="" />
                              </li>
                              <li className='flex items-center opacity-50 gap-4'>
                                   <span className='text-[26px] font-semibold leading-[100%] text-black-1000 w-[55px] h-[55px] flex items-center justify-center bg-white rounded-full'>02</span>
                                   <h6 className='text-2xl font-semibold text-white leading-[100%]'>Clean</h6>
                              </li>
                              <li>
                                   <img src="/icons/arrow.svg" alt="" />
                              </li>
                              <li className='flex items-center opacity-50 gap-4'>
                                   <span className='text-[26px] font-semibold leading-[100%] text-black-1000 w-[55px] h-[55px] flex items-center justify-center bg-white rounded-full'>03</span>
                                   <h6 className='text-2xl font-semibold text-white leading-[100%]'>Deploy agents</h6>
                              </li>
                              <li>
                                   <img src="/icons/arrow.svg" alt="" />
                              </li>
                              <li className='flex items-center opacity-50 gap-4'>
                                   <span className='text-[26px] font-semibold leading-[100%] text-black-1000 w-[55px] h-[55px] flex items-center justify-center bg-white rounded-full'>04</span>
                                   <h6 className='text-2xl font-semibold text-white leading-[100%]'>Outcomes</h6>
                              </li>
                              <li>
                                   <img src="/icons/arrow.svg" alt="" />
                              </li>
                              <li className='flex items-center opacity-50 gap-4'>
                                   <span className='text-[26px] font-semibold leading-[100%] text-black-1000 w-[55px] h-[55px] flex items-center justify-center bg-white rounded-full'>05</span>
                                   <h6 className='text-2xl font-semibold text-white leading-[100%]'>Learning</h6>
                              </li>
                         </ul>
                         <p className="text-xl max-w-[292px] font-normal leading-[150%] text-white-1000">Your data and channels plug in — CRM, website, ad platforms, communication tools.</p>
                    </div>
               </div>
          </section>
     )
}

export default Work
