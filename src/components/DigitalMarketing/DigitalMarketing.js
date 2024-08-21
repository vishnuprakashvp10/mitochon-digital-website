import image from '@/constant/Images/image'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function DigitalMarketing() {
  return ( 
    <section>
    <div className="app__container relative isolate overflow-hidden bg-white px-6  mb-64 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
\              <h1 className="mt-2 primary-heading">IMPORTANCE OF <span className='highlight'>BRAND RECOGNITION AND INFLUENCE.</span></h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              At Mitochon Digital, we understand that in today&apos;s highly competitive landscape, your brand&apos;s identity is everything.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 ">
          <Image
            className="w-full max-w-none"
            src={image.banner}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 lg:max-w-lg">
              <p className='app__text text-justify'>
              When launching a brand, the initial focus is often on how to attract the first customers. Many businesses rely on traditional advertising methods like print ads, coupon mailers, or billboards. However, offering a quality product or service alone is no longer enough to draw customers. To capture your audience&apos;s attention effectively, blending traditional methods with digital marketing and branding strategies is crucial. At Mitochon Digital, we specialize in integrating digital branding solutions with your marketing efforts to:
              </p>
              <ul role="list" className="mt-8 text-justify space-y-8 app__text">
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                  Overcome geographical limitations and expand your brand&apos;s reach across borders.
                </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                  Engage the right audience at the right time with precision targeting.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                  Deepen your connection with customers and foster loyalty through strategic engagement and tailored loyalty programs.         </span>
                </li>
                <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                Instantly track and adjust your marketing strategies based on real-time data and customer responses.               </span>
              </li>
              </ul>
              <p className="mt-8  text-justify app__text">
              Many businesses hesitate to invest in digital marketing and branding, believing they lack the time or resources to compete online. This approach often falls short in today&apos;s fast-paced market. At Mitochon Digital, we provide the digital branding expertise and tools needed to promote your business globally and compete with other top digital companies.              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">OUR KEY SERVICES INCLUDE:-</h2>
              <ul role="list" className="mt-8 space-y-8 app__text">
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                <strong className="font-semibold text-gray-900"> Brand Identity & Logo Design:</strong> We create compelling brand logos that encapsulate your business&apos;s essence, ensuring your company logo design resonates with your target audience.               </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                <strong className="font-semibold text-gray-900"> Digital Brand Communication: </strong> We develop strategies that make your brand&apos;s message clear, consistent, and effective across all digital platforms.              </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                <strong className="font-semibold text-gray-900"> Brand Management: </strong> We help you maintain a strong brand identity and manage your brand&apos;s reputation online.               </span>
              </li>
              <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              <strong className="font-semibold text-gray-900"> SEO & PPC: </strong>  Enhance your brand&apos;s visibility with our SEO services and pay-per-click advertising strategies.            </span>
            </li>
            <li className="flex gap-x-3">
            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <span>
            <strong className="font-semibold text-gray-900"> Content Marketing: </strong> We craft engaging content that educates and entertains your audience, strengthening your brand&apos;s message.            </span>
          </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
