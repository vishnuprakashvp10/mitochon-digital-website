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
              In today&apos;s lightning fast digital world, the online space is the heart and soul of promoting work, business, and lifestyle. At Mitochon Pixel, we&apos;re your go to mates for navigating this ever changing landscape with our top notch digital marketing services across the UK. We deliver cutting edge solutions tailored to your needs. Think about the graft it takes to whip up catchy slogans, craft striking digital posters, and design engaging layouts. Let us crack on with those jobs so you can focus on what you do best. With our expertise spanning the UK, we ensure your digital strategy is bang on and ahead of the curve.              </p>
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
