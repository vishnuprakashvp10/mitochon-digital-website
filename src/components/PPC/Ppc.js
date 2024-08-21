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
              <h2 className="pb-12 primary-heading">What is <span className='highlight'>Pay Per Click</span> Advertising (PPC)</h2>
            </div>

            <p className='app__text text-justify'>
            <strong>Pay Per Click (PPC) advertising is a model of digital marketing where advertisers pay a fee each time one of their ads is clicked.</strong><br/><br/>
            At Mitochon Digital, based in the United Kingdom, we specialize in Pay Per Click advertising, a digital marketing model where advertisers pay a fee each time their ad is clicked. As a leading PPC agency, we focus on crafting successful PPC ad campaigns that help businesses bid for ad placements in search engine results for relevant keywords. Whether you&apos;re searching for a PPC agency near me, a pay per click advertising agency, or an affordable PPC marketing firm, Mitochon Digital delivers tailored solutions that drive targeted traffic to your website.
            </p>
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