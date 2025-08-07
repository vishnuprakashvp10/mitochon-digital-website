import image from "@/constant/Images/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function DigitalMarketing() {
  return (
    <section>
      <div className="app__container relative isolate overflow-hidden bg-white px-6  mb-64 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 primary-heading">
                  IMPORTANCE OF{" "}
                  <span className="highlight">
                    BRAND RECOGNITION AND INFLUENCE.
                  </span>
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  At Mitochon Pixel, we know that in today’s fiercely
                  competitive world, your brand’s identity is everything.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 ">
            <Image
              className="w-full max-w-none"
              src={image.digitalMarketing}
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                <p className="app__text text-justify">
                  When launching a brand, the first priority is usually how to
                  reel in those first customers. Many businesses turn to
                  traditional advertising like print ads, coupon mailers, or
                  billboards. But let’s be real – offering a top-notch product
                  or service just isn’t enough anymore. To truly grab attention,
                  blending traditional methods with digital marketing and
                  branding strategies is a must. At Mitochon Pixel, we
                  specialise in weaving digital branding solutions into your
                  marketing efforts to:
                </p>
                <ul
                  role="list"
                  className="mt-8 text-justify space-y-8 app__text"
                >
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      Smash geographical barriers and take your brand global
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      Target the right crowd at the right time with pinpoint
                      precision.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      Strengthen customer connections and build loyalty through
                      smart engagement and tailored loyalty schemes.{" "}
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      Instantly tweak and refine your marketing strategies based
                      on real-time data and customer reactions.{" "}
                    </span>
                  </li>
                </ul>
                <p className="mt-8  text-justify app__text">
                  Plenty of businesses hold back on digital marketing and
                  branding, thinking they don’t have the time or budget to make
                  an impact online. But in today’s fast-moving market, that
                  mindset just won’t cut it. At Mitochon Pixel, we bring the
                  digital branding know-how and tools needed to promote your
                  business worldwide and stand shoulder to shoulder with top
                  digital brands.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
