"use client"
import image from "@/constant/Images/image"
import Image from "next/image"
import { useEffect, useState } from "react";

const WeCan = () => {
   const services = [
    {
        name: "Branding",
        imgUrl: image.digitalMarketing,
        bgColour: "bg-green-100"
    },{
        name: "Website Development",
        imgUrl: image.wd,
        bgColour: "bg-slate-100"
    },{
        name: "Content Marketing",
        imgUrl: image.smo,
        bgColour: "bg-yellow-100"
    },{
        name: "SEO Services",
        imgUrl: image.seo,
        bgColour: "bg-rose-100"
    },{
        name: "Paid Online Advertising",
        imgUrl: image.wo,
        bgColour: "bg-purple-100"
    },{
        name: "Social Media Marketing",
        imgUrl: image.socialMarketing,
        bgColour: "bg-blue-100"
    },{
        name: "Analytics and Reporting",
        imgUrl: image.wd,
        bgColour: "bg-pink-100"
    },{
      name: "CRO and Usability",
      imgUrl: image.ppc,
      bgColour: "bg-pink-100"
  },
   ]

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
    <h1 className="primary-heading capitalize">What we can <br/>do for <span className="highlight">you?</span></h1>
    <p className="app__text text-justify mt-4">From search engine optimisation UK to cutting-edge digital marketing strategies, our team is dedicated to optimizing your online presence. We specialize in a range of services, including social media marketing and conversion rate optimization, ensuring that your marketing efforts are both effective and impactful. Our capabilities extend to website development and maintenance, providing you with a robust online platform that engages visitors and drives conversions. As a leading digital marketing company in the UK, we are equipped to handle all aspects of your digital strategy, from PPC advertising to website content development. Partner with Mitochon Digital to streamline your processes and amplify your digital footprint. Let us help you harness the power of digital marketing and technology to achieve your business goals and stay ahead in a competitive landscape.</p>
    </div>

    <div className="relative h-[500px] p-0">
     {
        services.map((i,k) => {
            return (
             <div key={k} className={`slide ${i.bgColour} flex justify-end flex-col items-center shadow-lg rounded-xl app__text ${
                activeSlide === k ? "activeSlider" : ""
              }`}>
             <Image src={i.imgUrl} height={400} width={400} alt=""/>
             <div className="py-6 bg-white w-full rounded-xl">
             <h1 className="font-bold text-2xl text-center">{i.name}</h1>
             </div>
             </div>
            )
        })
     }
    </div>
    </div>
    </section>
  )
}

export default WeCan