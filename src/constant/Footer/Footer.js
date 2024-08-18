import Link from "next/link";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import Image from "next/image";
import image from "../Images/image";

const Footer = () => {
  return (
    <footer className="pt-12 footer-bg relative">
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <div className="flex justify-between items-center md:items-start gap-y-8 flex-col sm:flex-row text-center md:text-start">
          <div className="flex-1">
            <h2 className="text-white text-2xl md:text-3xl font-medium">
            Experience the Best with Our Featured Service!
            </h2>
          </div>
          <div>
            <a href="tel:+447442005437">
              <button className="primary-btn shadow-lg">Reach Us</button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 ld:grid-cols-4 gap-y-8 pt-20">
        <div className="lg:pr-8 text-center md:text-start ">
        <Image src={image.webdevWhite} alt="WebDev" className="mx-auto md:mx-0" width={150} height={150}/>
        <p className="text-base mt-4 text-slate-200 hover:text-white transition-all duration-300">With extensive expertise in digital marketing, Mitochon Digital has successfully completed over six projects, making a notable impact across the internet landscape.</p>
        </div>
          <div className="mx-auto text-center md:text-start">
              <div>
                <h3 className="text-white text-xl font-medium mb-6">Quick Links</h3>
              </div>
              <ul className="list-disc list-inside list-none">
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="/">Home</Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="/about-us">About Us</Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="/contact-us">Contact us</Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="/services">Services</Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="/our-clients">Our Clients</Link>
                </li>
              </ul>
            </div>
          <div className="mx-auto text-center md:text-start">
              <div>
                <h3 className="text-white text-capital text-xl font-medium mb-6">
                  Our Services
                </h3>
              </div>
              <ul className=" list-disc list-inside list-none">
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="/services/branding">Branding</Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="/services/website-development">Website Development</Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="/services/content-marketing">Content Marketing</Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="/services/seo-service">SEO Service</Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="/services/paid-online-advertising">Paid Online Advertising</Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="/services/social-media-marketing">Social Media Marketing</Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="/services/analytics-and-reporting">Analytics and Reporting</Link>
                </li>
                <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                  <Link href="/services/cro-and-usability">CRO and Usability</Link>
                </li>
              </ul>
            </div>

          <div className="mx-auto text-center md:text-start">
            <div>
              <div className="pb-50 pb-md-25 animate get-bottom">
                <h3 className="text-white text-capital text-xl font-medium mb-6">
                  Get In Touch
                </h3>
              </div>
              <ul className="">
                <li className="my-2 text-slate-200 hover:text-white transition-all duration-300">
                  <a
                    className="text-sm text-white text-bold flex items-center justify-center md:justify-start gap-2"
                    href="tel:+447442005437"
                  >
                <FaPhoneSquareAlt/> +44-7442005437
                  </a>
                </li>
                <li className="my-2 text-slate-200 hover:text-white transition-all duration-300">
                  <a
                    className="text-sm text-white text-bold flex items-center justify-center md:justify-start gap-2"
                    href="tel:+917904445263"
                  >
                <FaPhoneSquareAlt/> +91-7904445263
                  </a>
                </li>
                <li className="my-2 text-slate-200 hover:text-white transition-all duration-300">
                  <a
                    className="text-sm text-white text-sbold flex items-center justify-center md:justify-start gap-2"
                    href="mailto:contact@mitochondigital.com"
                  >
                  <FaEnvelope/> contact@mitochondigital.com
                  </a>
                </li>
                <li className="mt-8">
                  <ul className="flex justify-start gap-4 items-center">
                    <li className="social">
                      <a
                        className="social-icon"
                        href="https://www.facebook.com/people/Mitochon-Digital/61559303402146"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaFacebook/>
                      </a>
                    </li>
                    <li className="social">
                      <a
                        className="social-icon"
                        href="https://x.com/MitochonDigital"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaTwitter/>
                      </a>
                    </li>
                    <li className="social">
                      <a
                        className="social-icon"
                        href="https://www.instagram.com/mitochon_digital"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaInstagram/>
                      </a>
                    </li>
                    <li className="social">
                      <a
                        className="social-icon"
                        href="https://uk.linkedin.com/company/mitochon-digital?trk=public_post_feed-actor-name"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn/>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-6 mt-4 md:mt-8 lg:mt-12 mb-[4.5rem] md:mb-0">
      <p className="text-sm text-slate-200 hover:text-white transition-all duration-300">
        © Copyright <a href="/">MitochonDigital.com</a> 2024. All rights reserved.
      </p>
    </div>

{  /*  <a href="#" className="shadow-lg rounded-full p-2 bg-white absolute bottom-[5%] right-[5%] animate-[bounce_2s_ease-in-out_infinite]"><ChevronUpIcon className="h-6 w-6"/></a> */}
    </footer>
  );
};

export default Footer;
