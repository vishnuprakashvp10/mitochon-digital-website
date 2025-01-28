import image from '@/constant/Images/image'
import Image from 'next/image'

const FeaturedService = () => {
  return (
    <section className="we-are-area h-screen flex items-center">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">ELEVATE YOUR <span className="highlight">BRAND PRESENCE</span></h2>
            </div>

            <p className='app__text text-justify '>
            Branding is about crafting a narrative that captivates your target audience, turning potential customers into loyal followers. At Mitochon Pixel, a leader in brand strategy and development, we harness the power of digital branding and advertising, including social media, search engines, and mobile apps, to broadcast your brand&apos;s unique story. We employ a carefully devised strategy to elevate your brand to unprecedented heights in the United Kingdom and beyond.            </p>
          </div>
      </div>
      <div className="we-are-img">
      <div className="we-are-banner-img">
        <Image src={image.aboutAni} alt="" />
      </div>
    </div>
    </div>
  </section>
  )
}

export default FeaturedService