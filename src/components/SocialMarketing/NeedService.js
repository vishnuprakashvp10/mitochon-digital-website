import image from '@/constant/Images/image'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const NeedService = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
    <div className="we-are-img">
    <div className="we-are-banner-img">
      <Image src={image.ppcTrend} alt="SEM Marketing" />
    </div>
  </div>
      <div className="my-auto">
        <div className="we-are-content">
          <div className="section-title">
            <h2 className="pb-12 primary-heading">
            NEED OF SOCIAL MARKETING FOR <span className='highlight'>YOUR BRAND</span>
            </h2>
          </div>

          <p className='app__text text-justify'>
          The secret behind successful social media marketing for businesses is simple: building a strong connection with your audience. At Mitochon Digital, we leverage the power of social media marketing to build your brand&apos;s voice and create meaningful conversations around your products. Our social media marketing experts employ techniques like social listening to monitor conversations about your brand, identifying the trends that matter most to your audience.
          </p>

          <ul role="list" className="mt-8 text-justify space-y-8 app__text">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              
              <span><strong className="font-semibold text-gray-900">Build Your Brand&apos;s Voice:</strong> Social media marketing allows you to showcase your brand across various platforms, reaching your audience even when they aren&apos;t thinking about your product.</span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              
              <span><strong className="font-semibold text-gray-900"> Conversations About Brand:</strong> We generate positive buzz around your brand, encouraging customer engagement and loyalty.</span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              
              <span><strong className="font-semibold text-gray-900">Social Listening:</strong> We know what your target customers are interested in by monitoring their social conversations around certain topics. This is called social listening and can help you understand what is important to your audience while identifying trends they are following.</span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
             
              <span><strong className="font-semibold text-gray-900">Responsible Customer Service:</strong> With social media management, we provide timely customer support, building meaningful relationships through immediate interaction and feedback.</span>
            </li>
          </ul>
        </div>
      </div>


    </div>
  </section>
  )
}

export default NeedService