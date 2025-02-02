import image from '@/constant/Images/image'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const WebWhyUs = () => {
  return (
    <section className="we-are-area text-justify py-16 md:py-32 flex items-center bg-slate-50">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <div className="we-are-img">
        <div className="we-are-banner-img">
          <Image src={image.ppcTrend} alt="PPC Trend" />
        </div>
      </div>
        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 text-3xl primary-heading">Get Filled with Leads: Drive Your Success Forward <span className='highlight'>With Us!</span></h2>
            </div>

            <p className='app__text'>Imagine navigating a ship through unfamiliar waters—without an experienced captain, the journey could be risky and inefficient. At Mitochon Pixel, a premier web development company in the UK, we act as your navigational guide, steering your digital strategy to avoid common pitfalls and seize opportunities, ensuring a smooth voyage toward exceptional growth!</p>

            <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <p className='app__text'>
              Our team comprises seasoned graphic designers and web developers in the UK who not only understand the aesthetics of effective design but also the mechanics of user engagement and conversion optimisation. We specialise in website design services, website development services, website management services, and comprehensive website building services tailored to meet your business goals.              </p>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <p className='app__text'>
              With our tailored designs and strategies, your business is poised to attract up to 50 times more potential customers. We focus on creating interfaces that not only draw in visitors but also compel them to act, turning clicks into customers. As a leading website development company in the UK, we embrace the latest technologies to keep your business at the forefront of digital innovation.</p>
            </li>
            <li className="flex gap-x-3">
            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <p className='app__text'>
            During our consultations, we assess your specific needs and match you with technologies that enhance your digital footprint and streamline your operations. Our expertise in digital marketing in the United Kingdom ensures that your online presence is optimised to drive traffic and generate leads effectively.      </p>
          </li>
          <li className="flex gap-x-3">
            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <p className='app__text'>
            Partner with Mitochon Pixel, the foremost web development company in the UK, and watch your business thrive with a stunning, high-performing website that captivates your audience and maximises your growth potential.  </p>
          </li>
          </ul>
          </div>
        </div>
      </div>
  </section>
  )
}

export default WebWhyUs