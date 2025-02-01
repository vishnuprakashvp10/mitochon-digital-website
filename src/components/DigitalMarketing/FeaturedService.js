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
            Branding is all about telling a story that grabs your audience’s attention, turning potential customers into loyal supporters. At Mitochon Pixel, a top name in brand strategy and development, we harness the power of digital branding and advertising, spanning social media, search engines, and mobile apps to amplify your brand’s unique voice. With a carefully crafted strategy, we take your brand to new heights across the UK and beyond. From building a solid brand identity to ensuring consistent messaging, we help you stand out in a crowded market. Our goal is to make your brand not just seen but remembered.            </p>
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