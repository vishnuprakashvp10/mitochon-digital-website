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
    <p className='pt-12 pb-6 app__text text-justify'>Picture a busy harbour where ships of all sizes chart their own courses every day. In this harbour, Mitochon Digital stands tall, like a steadfast lighthouse, guiding businesses through the tricky and often choppy waters of digital marketing. We&apos;re the beacon for both big enterprises and small startups, each aiming for their unique destination.</p>
    <ul className='list-inside list-disc text-justify app__text'>
    <li>Our expertise in digital marketing, from Pay-Per-Click to Search Engine Optimisation, lights the way for these vessels. We point out hidden dangers and favourable currents, helping businesses navigate the digital landscape with confidence and precision.</li>
    <li>As one of the top SEO companies and a leading PPC agency, our crew crafts strategic campaigns that don&apos;t just grab attention but also deliver meaningful engagement and conversions. Whether it&apos;s local SEO services, PPC management, or digital marketing consulting, we offer solutions tailored just for you.</li>
    <li>Through smooth sailing and stormy weather, Mitochon Digital keeps your journey on track, ensuring your business not only reaches but thrives in its desired harbour. We&apos;re here to light up your path in the digital marketplace, guaranteeing success every step of the way.</li>
    </ul>
    </div>

    </div>
    </section>
  )
}

export default Prefer