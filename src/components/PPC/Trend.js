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

            <p className="app__text">To effectively showcase all aspects of your product, it&apos;s crucial to continually adapt your advertising strategies to meet evolving market demands and customer preferences. Customers may visit your website, but what truly converts them are ads that are irresistible and resonate on a personal level.</p>

            <ul role="list" className="mt-8 space-y-8 app__text">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              Mitochon Digital is at the forefront of paid online advertising, offering expert management and innovative strategies in the realm of PPC. Partner with us to craft compelling campaigns that not only attract but also convert viewers into customers.              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              Our team of PPC experts is seasoned in understanding the nuances of various industries, ensuring your ads are perfectly tailored to highlight your company&apos;s products and unique selling propositions.              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              Join forces with Mitochon Digital and open up new worlds of opportunity with ads designed to captivate and engage. Our experience and strategic insights will guide you through the ever-changing landscape of online advertising.              </span>
            </li>
          </ul>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Trend