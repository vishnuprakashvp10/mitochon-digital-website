import image from '@/constant/Images/image'
import Image from 'next/image'

const FeaturedService = () => {
  return (
    <section className="we-are-area h-screen flex items-center">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
            <p className="text-base font-semibold leading-7 highlight">Elevate Your Brand Presence</p>
              <h2 className="pb-12 primary-heading">Our Featured <span className="highlight">Branding Services</span></h2>
            </div>

            <p className='app__text'>
            Branding is about crafting a narrative that connects with and captivates your target audience, turning potential customers into loyal followers. At Mitochon Digital, a leader in brand strategy and development, we harness the power of digital platforms including social media, search engines, and mobile apps to broadcast your brand’s unique story. We employ a carefully devised strategy to elevate your brand to unprecedented heights. While many forms of content can be engaging, not all are suitable for every brand. How then, do you shape your brand’s message in a way that is not only entertaining but also true to your identity?            </p>
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