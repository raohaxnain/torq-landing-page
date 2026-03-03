import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "Torq has completely transformed how we acquire new clients. Before implementing their AI-powered lead generation, our team spent countless hours on cold outreach with minimal results. Now, we wake up to qualified leads in our inbox every morning.\n\nThe best part? We can focus on what we do best—delivering exceptional service to our clients—while Torq handles the heavy lifting of finding new opportunities.",
    clientName: "ALEX RODRIGUEZ, Sales Operations Manager",
    image: "/stock images/AdobeStock_636708884.webp",
  },
  {
    id: 2,
    text: "As a small business owner, I was skeptical about AI lead generation at first. After three months with Torq, our qualified lead flow increased by 300% and our sales team is finally able to focus on closing deals instead of prospecting.",
    clientName: "PRIYA SHARMA, CEO",
    image: "/stock images/AdobeStock_480057743.webp",
  },
  {
    id: 3,
    text: "The ROI speaks for itself. Torq's intelligent targeting helped us reach decision-makers we never would have found on our own. It's like having a tireless business development team working around the clock.",
    clientName: "MAYA JOHNSON, Marketing Director",
    image: "/stock images/AdobeStock_566753012.webp",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background/Torq-gradients-green-purple-02.avif"
          alt=""
          fill
          className="object-cover"
          quality={60}
          sizes="100vw"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="mb-6 text-base font-bold uppercase tracking-[0.07em] text-black animate-fade-up">
            Testimonials
          </h2>

          <p className="mx-auto max-w-5xl text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl animate-fade-up">
            Don&apos;t Just Take Our Word for It—
            <br className="hidden sm:block" />
            See the Results Yourself
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="relative flex flex-col items-center justify-center rounded-3xl bg-[#D5FC9A33] p-8 lg:p-12 animate-fade-up">
            <div className="mb-6">
              <div className="relative h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={testimonials[0].image}
                  alt={testimonials[0].clientName}
                  fill
                  className="object-cover object-center"
                  sizes="128px"
                />
              </div>
            </div>

            <p className="mb-6 whitespace-pre-line text-center text-lg leading-relaxed text-black sm:text-xl">
              {testimonials[0].text}
            </p>

            <div className="rounded-xl bg-white px-8 py-4">
              <p className="text-sm font-bold uppercase tracking-[0.07em] text-black">
                {testimonials[0].clientName}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8">
            {testimonials.slice(1).map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative flex flex-col items-center justify-center rounded-3xl bg-[#D5FC9A33] p-8 animate-fade-up"
              >
                <div className="mb-6">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.clientName}
                      fill
                      className="object-cover object-center"
                      sizes="128px"
                    />
                  </div>
                </div>

                <p className="mb-6 whitespace-pre-line text-center text-lg leading-relaxed text-black sm:text-xl">
                  {testimonial.text}
                </p>

                <div className="rounded-xl bg-white px-8 py-4">
                  <p className="text-sm font-bold uppercase tracking-[0.07em] text-black">
                    {testimonial.clientName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
