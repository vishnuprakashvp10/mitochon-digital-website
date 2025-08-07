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
              <h2 className="pb-12 primary-heading">Maximising Impact with Advanced <span className="highlight">Paid Online Advertising Strategies </span></h2>
            </div>

            <p className="app__text text-justify">At Mitochon Pixel, we excel in PPC advertising management services, ensuring your paid advertising campaigns are optimised for maximum impact. As an industry-leading PPC marketing agency in the United Kingdom, we specialise in developing advanced strategies that adapt to evolving market demands. From B2B PPC advertising to ecommerce PPC marketing, we ensure that your ads resonate with your audience and convert clicks into customers.</p>
         </div>
        </div>
      </div>
  </section>
  )
}

export default Trend