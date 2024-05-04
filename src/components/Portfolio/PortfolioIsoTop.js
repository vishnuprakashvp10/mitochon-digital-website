'use client';
import image from "@/constant/Images/image";
import Image from "next/image";
import './PortfolioIsoTop.css'
import { Suspense, useState } from "react";
import loading from "@/app/loading";
import { ArrowSmallLeftIcon, ArrowSmallRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const PortfolioIsoTop = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };


  return (
    <section className="py-12">
      <div className="app__container">
        <div
          className="section-title animate"
          style={{
            opacity: "1",
            visibility: "inherit",
            transform: "translate(0px, 0px)",
          }}
        >
          <h2 className="text-3xl font-semibold text-center">
          Explore our showcased successes to see the variety of projects we have executed for clients around the globe.<br/>
          </h2>
        </div>

      </div>
    </section>
  );
};

export default PortfolioIsoTop;
