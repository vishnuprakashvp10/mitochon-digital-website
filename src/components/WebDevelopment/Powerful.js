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

            <p className='app__text text-justify'>The dedication our mothers put into arranging the living room showcase mirrors the meticulous effort our development team invests in crafting your website. Just as every ornament, award, and souvenir is carefully dusted and thoughtfully placed to highlight a family&apos;s proudest moments when guests arrive, we meticulously design and develop your website to showcase your business’s strengths and achievements. In today’s competitive digital landscape, having just a website isn’t enough, you could be missing out on countless opportunities.</p>
            <p className='app__text text-justify mt-1'>At Mitochon Pixel, a leading web development company in the UK, we offer comprehensive web solutions, including website design, website management, and bespoke website development. Our expert web developers in the UK identify gaps in your online presence and refine every aspect to ensure it is not only complete but also compelling. With our tailored digital marketing strategies designed specifically for the UK market, we guarantee your website attracts, engages, and converts your target audience effectively.</p>
            <p className='app__text text-justify mt-1'>Partner with Mitochon Pixel, the UK’s foremost web development company, to enhance your digital presence and propel your business to new heights. </p>
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