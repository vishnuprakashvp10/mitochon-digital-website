"use client";
import Image from "next/image";
import "./WeAre.css";
import image from "@/constant/Images/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="relative w-full">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-5xl text-center font-extrabold headingsingle">
          OUR CLIENTS
        </h2>
        <div className="relative w-full h-[15vh] md:h-[40vh]">
          <Image
            src={image.clients} // assuming this points to clients.png
            alt="Our Clients"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
