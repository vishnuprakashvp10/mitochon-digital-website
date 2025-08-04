import image from "@/constant/Images/image";
import Image from "next/image";
import "./AboutUs.css";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="we-are-area flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative items-center">
        {/* Left Image Section */}
        <div className="we-are-img w-full flex justify-center items-center">
          <div className="we-are-banner-img w-full relative aspect-[4/3] sm:aspect-[5/4] md:aspect-auto md:h-[480px] rounded-xl overflow-hidden">
            <Image
              src={image.team}
              alt="Our Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="we-are-content">
          <div className="section-title">
            <h2 className="pb-12 primary-heading">
              A Proper Crew of <span className="highlight">Digital Doers</span>
            </h2>
          </div>

          <p className="app__text pb-12 text-justify">
            Mitochon Pixel is made up of a diverse, tight-knit team of
            creatives, strategists, and tech heads—spread between Edinburgh and
            India. We're not just good at what we do; we genuinely care about
            doing it right. Everyone here brings their own flair to the table,
            but we all share the same goal: to make a real difference for the
            brands we work with. No egos, no fluff—just honest work, done
            proper.Our goal’s never been to be the biggest agency out
            there—we’re here to be the most impactful. We work
            shoulder-to-shoulder with our clients, building trust through
            transparency and results. We ask the right questions, challenge
            assumptions, and back each other every step of the way. Every win’s
            a team win, and every lesson’s a chance to level up together.
          </p>

          <Link href="/contact-us">
            <button className="primary-btn shadow-lg">Contact Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
