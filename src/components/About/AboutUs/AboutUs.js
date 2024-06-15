import image from "@/constant/Images/image";
import Image from "next/image";
import "./AboutUs.css";
import Link from "next/link"

const AboutUs = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center">
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

              <p className="app__text pb-12">
              Mitochon Digital, headquartered in Edinburgh with an additional office in India, is a high-end creative and detail-oriented agency. Boasting a solid two years of track record, we have collaborated with diverse enterprises, spanning e-commerce, cryptocurrency, and construction sectors. This breadth of experience has furnished us with a comprehensive grasp of these industries, equipping us with the technical and creative experience necessary to cater to a wide array of business needs.
               <br/>At Mitochon Digital, Providing deep and unfiltered insights with our clients is at the core of absolutely everything that we do. Speaking to our clients, we are able to delve into customer perceptions, short and long-term trends, search patterns, and much, much, more to deliver action-driven industry reports for our clients. 
              </p>
              <div>
              <Link href="/contact-us">
                  <button className="primary-btn shadow-lg">Reach Us</button>
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
