"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
     {
          text: "Torq completely changed how we handle inbound leads. We’re booking qualified appointments automatically—without adding headcount.",
          name: "Sarah M., Growth Lead",
     },
     {
          text: "Torq helped us increase our conversion rate by 42% in just three months.",
          name: "John D., Marketing Director",
     },
     {
          text: "Our sales team is now focused only on high-intent prospects thanks to Torq.",
          name: "Emily R., Sales Manager",
     },
];

const repeatItems = (items: any[]) => [...items, ...items];

function Testimonails() {
     const titleRef = useScrollAnimation<HTMLHeadingElement>({
          type: "fadeUp",
          duration: 1,
     });

     const repeated = repeatItems(testimonials);

     const Card = ({ item }: any) => (
          <div className="rounded-[30px] shrink-0 z-10 space-y-10 overflow-hidden hover:bg-black-1100 hover:drop-shadow-3xl bg-white border border-black/20 py-12 group px-[71px] w-[513px] transition-all ease-in-out duration-500 relative">
               <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="23"
                    viewBox="0 0 31 23"
                    fill="none"
               >
                    <path
                         fillRule="evenodd"
                         clipRule="evenodd"
                         className="transition-all ease-in-out duration-500 group-hover:fill-white"
                         d="M28.9261 4.49629C25.6288 4.7211 22.8187 6.7819 21.4698 9.62955H25.7413C27.5023 9.62955 28.9636 11.0534 28.9636 12.8519V19.2591C28.9636 21.0202 27.5398 22.4814 25.7413 22.4814H19.2591C17.4981 22.4814 16.0368 21.0576 16.0368 19.2591V12.8519C16.0368 5.77024 21.807 0 28.8887 0C28.8887 0 30.1626 -1.78666e-07 30.1626 1.27395C30.1626 1.49876 30.1626 3.18487 30.2001 4.49629C28.9261 4.49629 28.9261 4.49629 28.9261 4.49629ZM12.8519 4.49629C9.55461 4.7211 6.74443 6.7819 5.39555 9.62955H9.66702C11.4281 9.62955 12.8894 11.0534 12.8894 12.8519V19.2591C12.8894 21.0202 11.4655 22.4814 9.66702 22.4814H3.22234C1.46129 22.4814 0 21.0576 0 19.2591V12.8519C0 5.77024 5.77024 0 12.8519 0C12.8519 0 14.1258 -1.78666e-07 14.1258 1.27395C14.1258 1.49876 14.1258 3.18487 14.1258 4.49629C12.8519 4.49629 12.8519 4.49629 12.8519 4.49629Z"
                         fill="#989898"
                    />
               </svg>

               <p className="text-lg max-w-[350px] font-medium leading-[140%] text-gray-1200 group-hover:text-white transition-all ease-in-out duration-500">
                    {item.text}
               </p>

               <span className="text-black text-lg font-medium leading-[100%] group-hover:text-white uppercase tracking-[-0.9px] transition-all ease-in-out duration-500">
                    {item.name}
               </span>

               <div className="absolute group-hover:opacity-100 bottom-0 right-0 -z-10 transition-all ease-in-out duration-500 opacity-0">
                    <img src="/background/shape.svg" alt="" />
               </div>
          </div>
     );

     return (
          <section className="bg-white  relative z-10 font-Inter">
               <div className="bg-yellow-1100 w-full max-w-[1442px] h-[117px] rounded-full blur-[333px] absolute top-[200px] left-0 right-0 mx-auto">

               </div>
               <div className="max-w-[942px] mx-auto text-center ">
                    <h2
                         ref={titleRef}
                         className="text-[56px] font-medium leading-[140%] tracking-[-2.8px] text-black-1000"
                    >
                         What our customer
                         <span className="text-gradient"> say about us</span>
                    </h2>
               </div>

               <div className="space-y-7 pt-[76px] pb-[151px] overflow-hidden">
                    {/* Row 1 - Left */}
                    <div className="flex ">
                         <div className="flex animate-scroll-left gap-8">
                              {repeated.map((item, index) => (
                                   <Card key={`row1-${index}`} item={item} />
                              ))}
                         </div>
                    </div>

                    {/* Row 2 - Right */}
                    <div className="flex ">
                         <div className="flex animate-scroll-right gap-8">
                              {repeated.map((item, index) => (
                                   <Card key={`row2-${index}`} item={item} />
                              ))}
                         </div>
                    </div>


               </div>
          </section>
     );
}

export default Testimonails;