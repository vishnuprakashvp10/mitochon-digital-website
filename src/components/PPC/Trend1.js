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
              <h2 className="pb-12 primary-heading">Capture Attention, Drive Conversions: <span className="highlight">Unleash the Power of High-Converting</span></h2>
            </div>

            <p className="app__text">Standing out in today&apos;s crowded online marketplace is a constant battle. This is where Mitochon Digital steps in. We&apos;re not just another ad agency throwing darts in the dark. Our team of seasoned PPC experts is laser-focused on crafting high-converting campaigns that not only grab attention but also guide website visitors seamlessly towards a satisfying conversion experience.</p>

            <ul role="list" className="mt-8 space-y-8 app__text">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              With this knowledge, we craft targeted messages that speak directly to their pain points and aspirations. It&apos;s like having a one-on-one conversation with your ideal customer, ensuring they see exactly what they need at the precise moment they need it.              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              In a sea of similar products and services, what makes your brand stand out? That&apos;s where your Unique Selling Propositions (USPs) come in. We work closely with you to identify your USPs &ndash; the features and benefits that set you apart from the competition.               </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              At Mitochon Digital, we don&apos;t just talk the talk &ndash; we walk the walk. We&apos;re data-driven, and we believe in the power of clear metrics. You&apos;ll see a tangible increase in conversions, translating into a significant boost in the number of website visitors who become paying customers.              </span>
            </li>
          </ul>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Trend