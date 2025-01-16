"use client";
import image from "@/constant/Images/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const WeCan = () => {
  const services = [
    {
      name: "Branding",
      imgUrl: image.digitalMarketing,
      bgColour: "bg-green-100",
      link: "https://www.mitochondigital.com/services/branding",
    },
    {
      name: "Website Development",
      imgUrl: image.wd,
      bgColour: "bg-slate-100",
      link: "https://www.mitochondigital.com/services/website-development",
    },
    {
      name: "Content Marketing",
      imgUrl: image.smo,
      bgColour: "bg-yellow-100",
      link: "https://www.mitochondigital.com/services/content-marketing",
    },
    {
      name: "SEO Services",
      imgUrl: image.seo,
      bgColour: "bg-rose-100",
      link: "https://www.mitochondigital.com/services/seo-services",
    },
    {
      name: "Paid Online Advertising",
      imgUrl: image.wo,
      bgColour: "bg-purple-100",
      link: "https://www.mitochondigital.com/services/paid-online-advertising",
    },
    {
      name: "Social Media Marketing",
      imgUrl: image.socialMarketing,
      bgColour: "bg-blue-100",
      link: "https://www.mitochondigital.com/services/social-media-marketing",
    },
    {
      name: "Analytics and Reporting",
      imgUrl: image.wd,
      bgColour: "bg-pink-100",
      link: "https://www.mitochondigital.com/services/analytics-and-reporting",
    },
    {
      name: "CRO and Usability",
      imgUrl: image.ppc,
      bgColour: "bg-pink-100",
      link: "https://www.mitochondigital.com/services/cro-and-usability",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevState) => (prevState + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="py-24 sm:py-32">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-y-8">
        <div className="my-auto md:pr-24">
          <h1 className="primary-heading capitalize">
            What we can <br />
            do for <span className="highlight">you?</span>
          </h1>
          <p className="app__text text-justify mt-4">
            From search engine optimisation in the UK to cutting-edge digital
            marketing strategies, our team is here to boost your online
            presence. We&apos;re pros at social media marketing and conversion
            rate optimisation, ensuring your efforts hit the mark and pack a
            punch. Our expertise also covers website development and
            maintenance, giving you a solid online platform that grabs
            attention and drives results. As a top digital marketing company in
            the UK, we handle everything from PPC advertising to website
            content development. Partner with Mitochon Digital to streamline
            your workflow and expand your digital reach. Let us help you tap
            into the power of digital marketing and tech to smash your business
            goals and stay ahead of the pack.
          </p>
        </div>

        <div className="relative h-[500px] p-0">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`slide ${service.bgColour} flex justify-end flex-col items-center shadow-lg rounded-xl app__text ${
                activeSlide === index ? "activeSlider" : ""
              }`}
            >
              <Image
                src={service.imgUrl}
                height={400}
                width={400}
                alt={service.name}
              />
              <div className="py-6 bg-white w-full rounded-xl">
                <h1 className="font-bold text-2xl text-center">
                  {service.name}
                </h1>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeCan;