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
              Mitochon Pixel, based in Edinburgh with an office in India, is a high-end creative and detail-focused agency. With a solid two years of experience, we’ve worked with a variety of businesses across e-commerce, cryptocurrency, and construction industries. This broad expertise has given us a proper understanding of these sectors, equipping us with the technical skills and creative flair to meet diverse business needs. At Mitochon Pixel, sharing sharp and unfiltered insights with our clients is at the core of everything we do. By having a good chinwag with our clients, we dive into customer perceptions, spot trends, analyse search patterns, and much more to deliver action-driven industry reports tailored to their needs.              </p>
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
