"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CodeBracketIcon,
  CodeBracketSquareIcon,
  PencilSquareIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Search Engine Optimisation",
    description:
      "At Mitochon Pixel, we combine technical precision with strategic content to boost your visibility across search engines. From keyword research and on-page optimisation to backlink strategies.",
    icon: PencilSquareIcon,
    link: "/services/seo-service",
  },
  {
    name: "Paid Advertising",
    description:
      "We craft data driven PPC campaigns that deliver measurable results. Reaching the right audience, at the right time, with the right message to maximise conversions and ROI.",
    icon: UserGroupIcon,
    link: "/services/paid-online-advertising",
  },
  {
    name: "Website Content & Development",
    description:
      "We create websites that don’t just grab attention but truly connect with your audience, inspiring them to engage and convert.",
    icon: CodeBracketIcon,
    link: "/services/website-development",
  },
  {
    name: "Analytics and Reporting",
    description:
      "Our standard reporting service, part of our retainer, pulls together data from Google Analytics, Google Ads, and social platforms to provide actionable insights.",
    icon: CodeBracketSquareIcon,
    link: "/services/analytics-and-reporting",
  },
];

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
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function WeMake() {
  return (
    <div className="bg-slate-50 py-2 sm:py-2">
      <div className="app__container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 primary-heading text-gray-900 text-center"> 
            Digital Marketing solution{" "}
            <span className="highlight">we offer</span>{" "}
          </p>
          <p className="mt-6 text-lg leading-8 app__text text-center">
            At Mitochon Pixel, we offer tailored digital marketing services,
            including SEO, PPC, Data Analytics and Web Development – all
            designed to enhance visibility, engagement, and business growth for
            our clients.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <motion.dl
            variants={variants}
            initial="hidden"
            whileInView="show"
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
          >
            {features.map((feature) => (
              <Link key={feature.name} href={feature.link} passHref>
                <motion.div variants={items} className="relative pl-24">
                  <dt className="text-xl font-extrabold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full shadow-lg bg-white transition-all text-green-600 hover:text-white hover:bg-gradient-to-r hover:from-[#96A210] hover:to-[#176301]">
                      <feature.icon className="h-6 w-6 " aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base text-justify leading-7 app__text">
                    {feature.description}
                  </dd>
                </motion.div>
              </Link>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  );
}
