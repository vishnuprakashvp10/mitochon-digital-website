"use client";
import Image from "next/image";
import "./Hero.css";
import image from "@/constant/Images/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="app__hero relative flex items-center min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="flex flex-col justify-center transform  lg:mb-1 translate-y-2 lg:translate-y-2 max-w-2xl">
          <h1 className="text-4xl lg:text-6xl headingsingle font-extrabold mb-6 capitalize">
            Making Your Digital <br /> Dreams A Reality!
          </h1>
          {/* {
            <p className="text-base  text-justify mb-4">
              Driving brands forward with innovation in AI, technology, and
              marketing.
            </p>
          } */}
          <div className="flex gap-5">
            <Link href="/contact-us" className="primary-btn shadow-lg">
              Contact Us
            </Link>
            <Link
              href="/about-us"
              className="hover:scale-110 secondary-btn shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
