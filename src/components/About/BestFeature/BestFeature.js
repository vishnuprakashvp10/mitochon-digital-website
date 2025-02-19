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
        description: "At Mitochon Pixel, we’re bang on when it comes to tracking and analysing web activity to give your digital performance a proper boost. Using top-notch web analytics tools, we deliver in-depth website analytics services, keeping a close eye on key metrics like user behaviour, traffic sources, engagement rates, and conversions.",
        icon: ArrowTrendingUpIcon,
        link: "/services/analytics-and-reporting",
    },{
        name: "Monthly SEO & PPC Check",
        description: "Every month, our sharp-eyed team at Mitochon Pixel gives your SEO and PPC campaigns a proper once-over. We dig deep into keyword performance, PPC campaign results, and search rankings to make sure your digital strategies are running like a dream.",
        icon: ArrowPathIcon,
        link: "/services/paid-online-advertising",
    },{
        name: "Digital Marketing Planning & Strategy",
        description: "We’re all about teaming up with you to whip up a tailor-made digital marketing plan that’s bang on for your business goals. From conversion rate optimisation services to usability testing and laser-focused digital marketing tactics, we craft strategies that hit the mark.",
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