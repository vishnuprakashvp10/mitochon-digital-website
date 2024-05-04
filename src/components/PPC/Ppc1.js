import image from '@/constant/Images/image'
import Image from 'next/image'

const Ppc = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <div className="we-are-img">
        <div className="we-are-banner-img">
          <Image src={image.aboutAni} alt="" />
        </div>
      </div>
        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">What is <span className='highlight'>Conversion Rate Optimization </span> (CRO)?</h2>
            </div>

            <p className='app__text'>
            <strong>Conversion Rate Optimization (CRO) is a method of digital marketing focused on increasing the percentage of visitors to a website who take a desired action.</strong><br/><br/>
            CRO typically involves a detailed analysis of how users interact with a website, followed by implementing changes to improve the user experience and guide visitors towards making a conversion. This process often includes A/B testing different versions of a page, optimizing landing pages, and refining the overall site navigation to enhance user flow and reduce friction points.            </p>

            <button className='primary-btn mt-12 shadow-lg'>Get Started</button>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Ppc