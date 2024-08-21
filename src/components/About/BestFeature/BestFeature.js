'use client'
import { motion } from 'framer-motion'
import image from "@/constant/Images/image"
import { ComputerDesktopIcon } from "@heroicons/react/20/solid"
import { ArrowPathIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from 'next/link';

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const items = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const BestFeature = () => {
    const feature = [{
        name: "Web Analytics",
        description: "At Mitochon Digital, we excel in the precise tracking and in-depth analysis of web activities to enhance your digital performance. Utilizing advanced web analytics tools, we provide comprehensive website analytics services that monitor crucial metrics such as user behavior, traffic sources, engagement levels, and conversion rates.",
        icon: ArrowTrendingUpIcon,
        link: "/services/analytics-and-reporting",
    },{
        name: "Monthly SEO & PPC Check",
        description: "At Mitochon Digital, our team conducts a meticulous monthly SEO and PPC check to ensure that your digital marketing strategies are performing at their peak. We perform detailed analysis on keyword effectiveness, PPC campaign performance, and search engine rankings to fine-tune your approach. ",
        icon: ArrowPathIcon,
        link: "/services/paid-online-advertising",
    },{
        name: "Digital Marketing Planning & Strategy",
        description: "At Mitochon Digital, we work closely with you to develop a customized digital marketing plan that aligns with your specific business objectives. Our approach involves crafting a comprehensive strategy that integrates conversion rate optimization services, usability testing methods, and targeted digital marketing tactics. ",
        icon: ComputerDesktopIcon,
        link: "/services/branding"
    },]
  return (
    <div>
      <div className="app__container py-16 sm:py-32">    
      <div className="grid grid-cols-1 lg:grid-cols-2">
      <motion.div variants={variants} initial="hidden" whileInView="show" className="my-auto">
      <h1 className="primary-heading mb-8">Our Best <span className="highlight">Features</span></h1>
       {
        feature.map((i,k) => {
            return ( 
              <Link key={k} href={i.link} passHref>
                <motion.div variants={items} key={k} className="flex gap-4 my-6 shadow-lg py-10 px-6">
                <div className="flex h-16 w-16 mb-4 items-center justify-center rounded-full bg-white">
                <div className="absolute half-circle rounded-full animate-[spin_3s_linear_infinite] z-1">
                <div className="half-circle-child rounded-full"></div>
                </div>
                </div>
                <div className="flex-1">
                <h1 className="text-xl font-bold mb-4">{i.name}</h1>
                <p className='app__text text-justify'>{i.description}</p>
                </div>
                </motion.div>
                </Link>
            )
        })
       }
      </motion.div>
      <div className="my-auto">
      <Image src={image.aboutAni} alt="about"/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default BestFeature