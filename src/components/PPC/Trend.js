import image from "@/constant/Images/image"
import { CheckCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const Trend = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <div className="we-are-img">
        <div className="we-are-banner-img">
          <Image src={image.ppcTrend} alt="PPC Trend" />
        </div>
      </div>
        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">Maximizing Impact with Advanced <span className="highlight">Paid Online Advertising Strategies </span></h2>
            </div>

            <p className="app__text text-justify">At Mitochon Pixel, we excel in PPC advertising management services, ensuring your paid advertising campaigns are optimized for maximum impact. As an industry-leading PPC marketing agency in the United Kingdom, we specialize in developing advanced strategies that adapt to evolving market demands. From B2B PPC advertising to ecommerce PPC marketing, we ensure that your ads resonate with your audience and convert clicks into customers.</p>

            <ul role="list" className="text-justify mt-8 space-y-8 app__text">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              When it comes to PPC advertising and paid search marketing, Mitochon Pixel is a trusted PPC advertising company in the United Kingdom. Our expert team is dedicated to providing businesses with tailored solutions that improve visibility and conversion rates. We specialize in everything from PPC advertising management companies to best PPC marketing services, delivering unparalleled results across all sectors.             </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              Whether you need a PPC consultant or a full-service pay per click marketing agency, Mitochon Pixel has the expertise to elevate your business to the next level. Our PPC advertising management services include detailed campaign analysis, optimization, and reporting, ensuring that your PPC ad campaigns remain on target and achieve the desired results.   </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              Partner with Mitochon Pixel for exceptional PPC campaign management and enjoy the benefits of working with one of the best PPC marketing companies in the United Kingdom. Our approach to pay per click advertising is designed to captivate and convert, using data-driven strategies to maximize your ROI. Whether you&apos;re searching for local PPC advertising or international PPC campaign services, Mitochon Pixel is the trusted partner for all your PPC advertising needs.     </span>
            </li>
          </ul>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Trend