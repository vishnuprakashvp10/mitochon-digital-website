import image from "@/constant/Images/image"
import { CheckCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const Influencer = () => {
  return (
    <section className="we-are-area h-screen flex items-center bg-slate-50">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <div className="we-are-img">
        <div className="we-are-banner-img">
          <Image src={image.aboutAni} alt="" />
        </div>
      </div>
      <div>
        <div className="">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">BRANDING IN THE <span className="highlight"> MODERN ERA</span></h2>
            </div>

            <p className="app__text">
            In today’s fast-paced digital landscape, creating a distinctive identity that resonates deeply with your target audience and stands out in a saturated market is essential.</p>
            <ul role="list" className="mt-8 space-y-8 app__text">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              Seamlessly integrating digital strategies into your branding to enhance visibility and engagement across multiple platforms.              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
            Developing targeted content that appeals directly to your audience’s preferences and needs, fostering a deeper connection and loyalty.              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              Maintaining a uniform brand voice and aesthetic across all online and offline channels to reinforce brand recognition and trust.              </span>
            </li>
            <li className="flex gap-x-3">
            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <span>
            Utilizing the latest marketing technologies and creative approaches to keep your brand dynamic and relevant in an ever-evolving marketplace.            </span>
          </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Influencer