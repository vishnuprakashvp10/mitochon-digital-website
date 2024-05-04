"use client";
import image from "@/constant/Images/image";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

const Test = () => {
  const testimonials = [
    {
      id: 1,
      name: "Suresh Kumar - Infratech Builders",
      message:
        "They took the reins on everything from crafting a clear content strategy to building a user-friendly website.  Their online advertising expertise has been instrumental in attracting a significant number of potential leads.",
      imgUrl: image.client,
    },
    {
      id: 2,
      name: "Morgan Maxwell - Athlefy",
      message:
        "They completely revamped our online presence, starting with a rock-solid content strategy and a user-friendly website that showcases our offerings perfectly. Sales have skyrocketed! We hit a record-breaking 3,000 sales in just one month since launching the new campaigns.Sales have skyrocketed! We hit a record-breaking 3,000 sales in just one month since launching the new campaigns.",
      imgUrl: image.client,
    },
    // {
    //   id: 3,
    //   name: "WebDev.com",
    //   message:
    //     "Today we work with statistics and more accurate data and realize the digital space is an essential tool for Clinica da Mama to position itself in an increasingly competitive field",
    //   imgUrl: image.client,
    // },
    // {
    //   id: 4,
    //   name: "WebDev.com",
    //   message:
    //     "It really met my requirements. You guys were very patient even though there were delays from my side. The price was competitive and all our requirements were met. If somebody were to ask me for something similar, I would definitely recommend you guys!",
    //   imgUrl: image.client,
    // },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevState) => (prevState + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 sm:py-32 bg-[#FAF1F2]">
      <div className="app__container grid grid-cols-1 md:grid-cols-2">
        <div className="relative left-[5%] right-[5%] h-80">
          <ChatBubbleLeftRightIcon className="absolute h-60 w-60 md:bottom-12 right-12 text-[#ffdbc2]" />
          <div className="absolute md:top-12 pr-8">
            <h4 className="highlight z-2">Testimonials</h4>
            <h1 className="mt-2 text-4xl font-extrabold">
            Hear What Our <br />
              <span className="highlight">Client</span> Says
            </h1>
            <p className="mt-4 app__text">
            Discover what our clients are saying about our digital marketing solutions. Read testimonials from satisfied customers and learn how Mitochon Digital has empowered businesses like yours to achieve their marketing goals. Our success stories highlight the impact of our strategic approach and showcase the tangible benefits of partnering with us.</p>
          </div>
        </div>
        <div className="relative bg-white h-80 shadow-lg px-6 py-12 rounded-xl">
          <Image
            src={image.quote}
            className="absolute bottom-0 right-2"
            height={150}
            width={150}
            alt=""
          />
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`slide-test app__text ${
                activeSlide === index ? "activeSlider-test" : ""
              }`}
            >
              <p>&ldquo; {testimonial.message} &rdquo;</p>
              <div className="flex items-center justify-start gap-4 mt-6">
                <Image src={testimonial.imgUrl} height={50} width={50} alt="" />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Test;
