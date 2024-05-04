import image from '@/constant/Images/image'
import Image from 'next/image'

const Prefer = () => {
  return (
    <section className='py-24 sm:py-32 bg-slate-50'>
    <div className='app__container grid grid-cols-1 lg:grid-cols-2 gap-8'>
    <div className='mx-auto'>
    <Image src={image.bannerMan} alt='digital marketing'/>
    </div>
    <div>
    <h1 className='primary-heading'>Do you remember the story of <span className='highlight'>the Lighthouse and the Ships?</span></h1>
    <p className='pt-12 pb-6 app__text'>Imagine a bustling harbor where ships of all sizes navigate their unique paths every day. In this harbor stands Mitochon Digital, like a steadfast lighthouse, guiding businesses through the complex and often turbulent waters of digital marketing. We are the beacon for large enterprises and small startups alike, each seeking to reach their own distinct destination.</p>
    <ul className='list-inside list-disc app__text'>
    <li>Our expertise in digital marketing—from PPC to SEO—illuminates the path for these vessels. We highlight potential dangers and favorable currents, helping businesses navigate the digital landscape with precision and confidence. </li>
    <li>Our team creates strategic campaigns that not only attract attention but ensure meaningful engagement and conversion.</li>
    <li>Through calm seas and storms, Mitochon Digital keeps your journey on course, ensuring your venture not only reaches but thrives in the desired harbor. We are here to light up your path in the digital marketplace, guaranteeing success through every phase of your business&apos;s voyage.</li>
    </ul>
    </div>

    </div>
    </section>
  )
}

export default Prefer