'use client'
import { motion } from 'framer-motion'
import image from "@/constant/Images/image"
import { ComputerDesktopIcon } from "@heroicons/react/20/solid"
import { ArrowPathIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

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
        description: "At Mitochon Digital, we specialize in precise tracking and analysis of web activities. By leveraging advanced web analytics tools, we monitor user behavior, traffic sources, engagement levels, and conversion metrics.",
        icon: ArrowTrendingUpIcon
    },{
        name: "Monthly SEO & PPC Check",
        description: "At Mitochon Digital, our team conducts a comprehensive check to ensure your strategies are performing optimally. We analyze keyword effectiveness, ad performance, and search rankings.",
        icon: ArrowPathIcon
    },{
        name: "Digital Marketing Planning & Strategy",
        description: "At Mitochon Digital, we collaborate with you to create a tailored marketing plan that aligns with your business goals.",
        icon: ComputerDesktopIcon
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
                <motion.div variants={items} key={k} className="flex gap-4 my-6 shadow-lg py-10 px-6">
                <div className="flex h-16 w-16 mb-4 items-center justify-center rounded-full bg-white">
                <div className="absolute half-circle rounded-full animate-[spin_3s_linear_infinite] z-1">
                <div className="half-circle-child rounded-full"></div>
                </div>
                </div>
                <div className="flex-1">
                <h1 className="text-xl font-bold mb-4">{i.name}</h1>
                <p className='app__text'>{i.description}</p>
                </div>
                </motion.div>
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