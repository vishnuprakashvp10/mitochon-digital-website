import image from "@/constant/Images/image"
import { CheckCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const Influencer = () => {
  return (
    <section className="we-are-area h-screen flex items-center bg-slate-50">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 mb-64 relative">
      <div className=" we-are-img">
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

            <p className="text-justify app__text">
            In today&apos;s digital landscape, creating a distinctive brand identity that resonates with your audience is essential. Mitochon Digital in the United Kingdom offers digital branding solutions that elevate your brand&apos;s presence through:
            </p>
            <ul role="list" className="mt-8 text-justify space-y-8 app__text">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              <strong className="font-semibold text-gray-900"> Digital Brand Campaigns:  </strong>Developing targeted content that appeals directly to your audience&apos;s preferences and needs, fostering a deeper connection and loyalty.             </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              <strong className="font-semibold text-gray-900"> Consistent Brand Voice: </strong> Maintaining a uniform brand voice and aesthetic across all online and offline channels to reinforce brand recognition and trust.            </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              <strong className="font-semibold text-gray-900"> Innovative Digital Branding Techniques:</strong> Utilizing the latest marketing technologies and creative approaches to keep your brand dynamic and relevant in an ever-evolving marketplace.             </span>
            </li>
            <li className="flex gap-x-3">
            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <span>
            <strong className="font-semibold text-gray-900"> Interactive Branding:  </strong>Seamlessly integrating digital strategies into your branding to enhance visibility and engagement across multiple platforms.          </span>
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