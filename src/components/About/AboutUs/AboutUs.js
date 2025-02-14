import image from "@/constant/Images/image";
import Image from "next/image";
import "./AboutUs.css";
import Link from "next/link"

const AboutUs = () => {
  return (
    <section className="we-are-area flex items-center">
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
                <h2 className="pb-12 primary-heading">
                  About <span className="highlight">Us</span>
                </h2>
              </div>

              <p className="app__text pb-12 text-justify">
              Mitochon Pixel, headquartered in Edinburgh with a branch in India, is a top-tier creative agency with a keen eye for detail. With a solid two years under our belt, we’ve teamed up with businesses across e-commerce, cryptocurrency, and construction, giving us a well-rounded grasp of these industries. This hands-on experience means we’ve got both the technical know-how and creative chops to tackle a wide range of business needs. At Mitochon Pixel, keeping it real with our clients is at the heart of everything we do. Through a proper chinwag, we get stuck into customer perceptions, clock market trends, analyse search patterns, and loads more to deliver spot-on, action-driven industry reports tailored to their goals.
              </p>
              <div>
              <Link href="/contact-us">
                  <button className="primary-btn shadow-lg">Contact Us</button>
                </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
