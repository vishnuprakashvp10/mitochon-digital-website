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
              <h2 className="pb-12 text-3xl primary-heading">Powerful and Attractive <span className='highlight'>Website Development</span></h2>
            </div>

            <p className='app__text'>The dedication our mothers apply in arranging the living room showcase mirrors the meticulous effort our development team invests in crafting your website. Just as each ornament, award, and souvenir is carefully dusted and strategically placed to reflect the family’s best memories and achievements when guests arrive, we meticulously design and develop your website to showcase your business’s strengths and successes. A mere website isn’t sufficient in today’s competitive digital landscape—you might be missing out on potential. At Mitochon Digital, we identify and fill these gaps, ensuring your online presence is not only comprehensive but compelling!</p>

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