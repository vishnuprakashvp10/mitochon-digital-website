"use client";
import image from "@/constant/Images/image";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Test = () => {
  const testimonials = [
    {
      id: 1,
      name: "Suresh Kumar - Infratech Builders",
      message:
        "They took charge of everything—from crafting a spot-on content strategy to building a website that’s a doddle to use. Their expertise in online advertising has been key to bringing in loads of potential leads.",
      imgUrl: image.client,
    },
    {
      id: 2,
      name: "Morgan Maxwell - Athlefy",
      message:
        "They gave our online presence a total overhaul, starting with a cracking content strategy and a user-friendly website that perfectly showcases what we offer. Sales have soared, and the growth has been absolutely smashing!",
      imgUrl: image.client,
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 9000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 sm:py-32 bg-[#FAF1F2]">
      <div className="app__container grid grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div className="relative left-[5%] right-[5%] h-80">
          <ChatBubbleLeftRightIcon className="absolute h-60 w-60 md:bottom-12 right-12 text-[#ffdbc2]" />
          <div className="absolute md:top-12 pr-8">
            <h4 className="highlight z-2">Testimonials</h4>
            <h1 className="mt-2 text-4xl font-extrabold">
              Hear What Our <br />
              <span className="highlight">Client</span> Says
            </h1>
            <p className="mt-4 app__text">
              See what our clients have to say about our digital marketing
              solutions.
            </p>
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div className="relative bg-white h-80 shadow-lg px-6 py-12 rounded-xl overflow-hidden">
          {/* Background Quote */}
          <Image
            src={image.quote}
            className="absolute bottom-0 right-2 z-0 opacity-30"
            height={150}
            width={150}
            alt=""
          />

          {/* Swipeable Slide */}
          <div className="relative h-full z-10">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeSlide}
                className="absolute w-full"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -50) nextSlide();
                  else if (info.offset.x > 50) prevSlide();
                }}
              >
                <p className="app__text">
                  &ldquo; {testimonials[activeSlide].message} &rdquo;
                </p>
                <div className="flex items-center justify-start gap-4 mt-6">
                  <Image
                    src={testimonials[activeSlide].imgUrl}
                    height={50}
                    width={50}
                    alt=""
                  />
                  <h3 className="text-xl font-semibold">
                    {testimonials[activeSlide].name}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === activeSlide ? "bg-[#ffb389]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
