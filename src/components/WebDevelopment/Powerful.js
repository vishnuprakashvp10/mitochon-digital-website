import image from '@/constant/Images/image'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const Powerful = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center bg-slate-50">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">

        <div className="my-auto"> 
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 text-3xl primary-heading">Dynamic and Appealing <span className='highlight'> Web Design</span></h2>
            </div>

            <p className='app__text text-justify'>The dedication our mothers apply in arranging the living room showcase mirrors the meticulous effort our development team invests in crafting your website. Just as each ornament, award, and souvenir is carefully dusted and strategically placed to reflect the family&apos;s best memories and achievements when guests arrive, we meticulously design and develop your website to showcase your business&apos;s strengths and successes. In today&apos;s competitive digital landscape, a mere website isn&apos;t sufficient—you might be missing out on potential.</p>
            <p className='app__text text-justify mt-1'>At Mitochon Digital, a leading website development company in the UK, we provide comprehensive web development services, including website design services, website management services, and website building services. Our expert web developers in the UK are adept at identifying and filling gaps in your online presence, ensuring it is not only comprehensive but also compelling. With our optimized digital marketing strategies tailored for the United Kingdom, we ensure your website attracts and engages your target audience effectively.</p>
            <p className='app__text text-justify mt-1'>Partner with Mitochon Digital, the foremost web development company in the UK, to elevate your digital presence and drive your business success.</p>
            <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span app__text>Fully Responsive Website</span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span app__text>100% attractive website development</span>
            </li>
            <li className="flex gap-x-3">
            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <span app__text>Clean and modern UI design</span>
          </li>
          <li className="flex gap-x-3">
          <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
          <span app__text>Only built using the latest technologies</span>
        </li>
          </ul>
          </div>
        </div>

        <div className="we-are-img">
        <div className="we-are-banner-img">
          <Image src={image.webStrategy} alt="Web Strategy" />
        </div>
      </div>
      </div>
  </section>
  )
}

export default Powerful