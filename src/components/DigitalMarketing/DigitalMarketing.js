import image from '@/constant/Images/image'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function DigitalMarketing() {
  return (
    <section>
    <div className="app__container relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 highlight">Branding</p>
              <h1 className="mt-2 primary-heading">IMPORTANCE OF <span className='highlight'>BRAND RECOGNITION AND INFLUENCE.</span></h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              A brand without digital marketing is like a car without fuel; it may look great, but it won&apos;t go anywhere.
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
              <p className='app__text'>
              When launching a brand, the initial focus is often on how to attract the first customers. Many rely on traditional advertising methods like print ads, coupon mailers, or even billboards. It&apos;s commonly believed that offering a quality product or service will naturally draw customers over time. However, in today&apos;s competitive marketplace, it’s crucial to blend traditional with modern marketing techniques to effectively capture your audience. Digital marketing serves as the turbo boost for your brand&apos;s engine. At Mitochon Digital, we enhance your branding efforts with digital marketing to provide:              </p>
              <ul role="list" className="mt-8 space-y-8 app__text">
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                  Overcome geographical limitations and expand your brand&apos;s reach across borders.                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                  Engage the right audience at the right time with precision targeting.                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                  Deepen your connection with customers and foster loyalty through strategic engagement and tailored loyalty programs.                  </span>
                </li>
                <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                Instantly track and adjust your marketing strategies based on real-time data and customer responses.                </span>
              </li>
              </ul>
              <p className="mt-8 app__text">
              Many businesses hesitate to invest in digital marketing, believing they lack the time or resources to compete online. They might choose to proceed slowly, sticking with a few traditional advertising methods and hoping for organic growth. This approach often falls short in today’s fast-paced market. To stay ahead, promoting your business globally and utilizing targeted advertising are essential. At Mitochon Digital, we offer what is often seen as a golden opportunity to transform your marketing effectiveness.              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">OUR KEY SERVICES INCLUDE:-</h2>
              <ul role="list" className="mt-8 space-y-8 app__text">
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                We ensure customers are aware of your presence.                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                Understand what your competitors are doing and devise better strategies.                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                Make your brand readily accessible to your target market.                </span>
              </li>
              <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              Achieve more with your marketing budget.              </span>
            </li>
            <li className="flex gap-x-3">
            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <span>
            Elevate your business&apos;s marketing capabilities to compete with other competitive enterprises.            </span>
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
