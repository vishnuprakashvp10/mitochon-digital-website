import image from '@/constant/Images/image'
import Image from 'next/image'
import Link from "next/link";

const Ppc = () => {
  return (
    <section className="we-are-area flex items-center">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <div className="we-are-img">
        <div className="we-are-banner-img">
          <Image src={image.aboutAni} alt="" />
        </div>
      </div>
        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">What is <span className='highlight'>Conversion Rate optimisation </span> (CRO)?</h2>
            </div>

            <p className='app__text text-justify'>
            <strong>Conversion Rate optimisation is a method of digital marketing focused on increasing the percentage of visitors to a website who take a desired action.</strong><br/><br/>
            At Mitochon Pixel, a leading digital marketing agency based in the United Kingdom, we offer conversion rate optimisation services designed to maximise your website&apos;s effectiveness and drive conversions. Our approach to CRO involves detailed analysis through website usability testing, evaluating how users interact with your site and identifying opportunities for improvement. We utilise methods such as unmoderated usability testing, mobile usability tests, and remote usability testing to understand your audience&apos;s behavior and enhance their user experience. This thorough evaluation allows us to make data-driven decisions to improve conversion rates across the site.           </p>

            <Link href="/contact-us">
            <button className='primary-btn mt-12 shadow-lg'>Reach Us</button>
						</Link>           
            </div>
        </div>
      </div>
  </section>
  )
}

export default Ppc