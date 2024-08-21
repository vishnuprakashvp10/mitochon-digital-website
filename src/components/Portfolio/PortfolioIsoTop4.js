'use client';
import image from "@/constant/Images/image";
import Image from "next/image";
import './PortfolioIsoTop.css';
import { Suspense, useState } from "react";
import loading from "@/app/loading";
import { ArrowSmallLeftIcon, ArrowSmallRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const images = [
  {
    imgUrl: image.portfolio4,
    link: "https://infratechbuilders.in"
  },
  {
    imgUrl: image.portfolio1,
    link: "https://www.clickandcut.in/"
  },
];

const PortfolioIsoTop = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
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
          <h3 className="highlight text-3xl font-semibold text-center"> 
            Clients in India
          </h3>
        </div>
        <Suspense fallback={loading}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {images.map((item, index) => (
              <div key={index}>
                <div className="isotop-wrapper relative">
                  <div className="full-width">
                    <div
                      className="example-image-link"
                      data-lightbox="example-1"
                    >
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <Image
                          className="example-image"
                          src={item.imgUrl}
                          alt="gallery"
                          title="gallery"
                          onClick={() => handleImageClick(index)}
                        />
                      </a>
                      {selectedImage === index && (
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                          <div className="flex items-center justify-center min-h-screen text-center sm:block">
                            <div className="fixed inset-0 transition-opacity">
                              <div className="absolute inset-0 bg-black opacity-60"></div>
                            </div>
                            <span
                              className="hidden sm:inline-block sm:align-middle sm:h-screen"
                              aria-hidden="true"
                            >
                              &#8203;
                            </span>
                            <div className="inline-block align-bottom rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                              <div>
                                <div className="text-center">
                                  <Image
                                    src={images[selectedImage].imgUrl}
                                    alt="portfolio"
                                    width={800}
                                    height={800}
                                    onClick={() => setSelectedImage(null)}
                                  />
                                  <button onClick={() => setSelectedImage(null)} className="absolute animate-[spin_4s_linear_infinite] -bottom-4 bg-black text-white p-2 rounded-full transition-all duration-300 ease-in-out hover:rotate-90">
                                    <XMarkIcon className="h-5 w-5 flex-none" aria-hidden="true"/>
                                  </button>
                                  <button onClick={handleNextImage} className="absolute right-0 sm:-right-4 top-1/2 bg-white text-indigo-600 shadow-lg p-2 rounded-full transition-all duration-300 ease-in-out">
                                    <ArrowSmallRightIcon className="h-5 w-5 flex-none" aria-hidden="true"/>
                                  </button>
                                  <button onClick={handlePrevImage} className="absolute left-0 sm:-left-4 top-1/2 bg-white text-indigo-600 shadow-lg p-2 rounded-full transition-all duration-300 ease-in-out">
                                    <ArrowSmallLeftIcon className="h-5 w-5 flex-none" aria-hidden="true"/>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default PortfolioIsoTop;
