import image from "@/constant/Images/image";
import Image from "next/image";
import "./WeAre.css";
import Link from "next/link";

const WeAre = () => {
  return (
    <section className="we-are-area flex items-center bg-slate-50 py-24 md:py-32">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="we-are-img">
          <div className="we-are-banner-img">
            <Image src={image.banner} alt="" />
          </div>
          <div className="we-are-animation">
            <Image src={image.like} alt="" className="h2-like" />
            <Image src={image.heart} alt="" className="h2-heart" />
            <Image src={image.message} alt="" className="h2-message" />
            <Image src={image.square} alt="" className="h2-square" />
            <Image src={image.circle} alt="" className="moving-circle" />
            <Image src={image.circle2} alt="" className="moving-circle-right" />
          </div>
        </div>
        <div>
          <div className="">
            <div className="we-are-content">
              <div className="section-title">
                <h2 className="pb-12 primary-heading">We Are Digital <span className="highlight">Explorers</span></h2>
              </div>

              <p className="app__text text-justify pb-10">
              In today&apos;s fast-paced digital landscape, the online realm has become the cornerstone of promoting work, business, and lifestyle. At Mitochon Digital, we are your trusted partner in navigating this ever-evolving world with our comprehensive digital marketing services in the UK. As one of the best digital marketing agencies in United Kingdom, we provide cutting-edge solutions tailored to your unique needs. Imagine the time and effort it takes to craft compelling slogans, design eye-catching digital posters, and create engaging layouts. Let us handle these tasks, allowing you to concentrate on what you excel at. Our expertise extends across the country, with top-tier digital marketing firms in the UK, ensuring that your digital strategy is both effective and innovative.
              </p>
              <div>
                <Link href="/about-us">
                  <button className="primary-btn shadow-lg">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAre;
