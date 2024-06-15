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
              <h2 className="pb-12 primary-heading">What is <span className='highlight'>Pay Per Click</span> Advertising (PPC)</h2>
            </div>

            <p className='app__text'>
            <strong>Pay Per Click (PPC) advertising is a model of digital marketing where advertisers pay a fee each time one of their ads is clicked.</strong><br/><br/>
            PPC is most commonly associated with search engine advertising, where businesses can bid for ad placement in a search engine&apos;s sponsored links when someone searches on a keyword that is related to their business offering.
            </p>

            <button className='primary-btn mt-12 shadow-lg'>Reach Us</button>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Ppc