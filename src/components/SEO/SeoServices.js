'use client'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, MagnifyingGlassIcon, PresentationChartLineIcon, ShareIcon, SpeakerWaveIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const items = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const SeoServices = () => {
  const services = [{
    heading: "Good Quality Optimized Content",
    desc: "Every page needs unique, well-optimized copy that is designed to target relevant keywords. Whether you need a SEO copywriting agency or support from search engine marketing agencies, Mitochon Pixel ensures that your content is written to rank highly on Google.",
    imgUrl: SpeakerWaveIcon,
    hoverBg: "pink-hover",
    iconColor:"pink-text"
  },
  {
    heading: "Link Building",
    desc: "As a reputable backlink building agency, we understand the importance of gaining links from high-quality sources. Our link building specialists work diligently to ensure your website's ranking improves through strategic link acquisition. High-quality backlinks are essential for your SEO content marketing agency strategy.",
    imgUrl: ShareIcon,
    hoverBg: "paste-hover",
    iconColor:"paste-text"
  },
  {
    heading: "Keyword Planning:",
    desc: "A well-defined keyword strategy is crucial to ensuring that your website pages don't compete with each other. As a leading SEO content agency, we ensure each page has a specific purpose and is optimized for targeted keywords like search engine optimisation specialist and local SEO provider.",
    imgUrl: WrenchScrewdriverIcon,
    hoverBg: "yellow-hover",
    iconColor:"yellow-text"
  }]

  const benefits = [{
    heading: "Brand Building",
    desc: "Our SEO services help build your brand by improving visibility across search engines and social media. As a digital marketing SEO agency, we ensure that your business consistently engages with your audience, which builds trust and loyalty.",
    imgUrl: CheckBadgeIcon,
    hoverBg: "pink-hover",
    iconColor:"pink-text"
  },
  {
    heading: "Strong Online Presence",
    desc: "With a robust SEO and social media strategy, your online presence becomes stronger than ever. We are not just an SEO agency, but also a digital agency SEO provider that can help you thrive in the competitive online marketplace.",
    imgUrl: PresentationChartLineIcon,
    hoverBg: "paste-hover",
    iconColor:"paste-text"
  },
  {
    heading: "Improve Search Engine Ranking",
    desc: "A strong SEO strategy complements your social media presence. At Mitochon Pixel, our goal is to improve your search engine rankings by building high-quality backlinks from reputable sources. As a top SEO and digital marketing provider, we make sure your site remains visible and competitive.",
    imgUrl: MagnifyingGlassIcon,
    hoverBg: "yellow-hover",
    iconColor:"yellow-text"
  }]
  return (
    <section className="py-16 md:py-32 bg-slate-50">
    <div className="app__container">
        <div className="row">
                <div className="pb-12 text-center">
                    <h2 className='primary-heading mb-4'>SEO Service <br/>
                    <span className='highlight'> Tailored to Your Needs</span></h2>
                    <p className='app__text'>
                    At Mitochon Pixel, we offer a variety of SEO services to cater to your business&apos;s unique requirements. Whether you need local SEO services for small business, link building services, or professional SEO services agency support, we have you covered. Our SEO audit agency team will perform a deep analysis of your website, identifying areas of improvement to maximize your visibility.</p>
                </div>
                
        </div>
        <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                services.map((index, key) => {
                    return (
                      <motion.div variants={items} key={key}>
                        <div className={`common-single-card flex flex-col py-12 px-8 ${index.hoverBg}`}>
                        <div className={`common-card-icon mx-auto ${index.iconColor}`}>
                           <index.imgUrl className='shadow-lg rounded-full h-16 w-16 p-4 bg-white'/>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold mt-8 mb-4">{index.heading}</h3>
                            <p className='text-base app__text'>{index.desc}</p>
                        </div>
                    </div>
                    </motion.div>
                    )
                })
            }
        </motion.div>
        <div className="text-3xl font-extrabold pt-12 pb-8 text-center">
        <h2>Benefits of SEO with Mitochon Pixel</h2>
        </div>
        <motion.div variants={variants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          benefits.map((index, key) => {
              return (
                <motion.div variants={items} key={key}>
                  <div className={`common-single-card flex flex-col py-12 px-8 ${index.hoverBg}`}>
                  <div className={`common-card-icon mx-auto ${index.iconColor}`}>
                     <index.imgUrl className='shadow-lg rounded-full h-16 w-16 p-4 bg-white'/>
                  </div>
                  <div className="text-center">
                      <h3 className="text-xl font-bold mt-8 mb-4">{index.heading}</h3>
                      <p className='text-base app__text'>{index.desc}</p>
                  </div>
              </div>
              </motion.div>
              )
          })
      }
        </motion.div>
    </div>
</section>
  )
}

export default SeoServices