"use client"
import { motion } from 'framer-motion'
import { CodeBracketIcon, CodeBracketSquareIcon, PencilSquareIcon, UserGroupIcon } from '@heroicons/react/24/outline'

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
const features = [
  {
    name: 'Website Optimization',
    description:
      "Our web developers continuously refine and adapt your website’s design to meet evolving trends and customer expectations. A well-optimised, compelling website is key to attracting visitors and converting them into loyal customers.",
    icon: CodeBracketIcon,
  },
  {
    name: 'Unique Content Research',
    description:
      "Quality content is essential in educating your audience about your product. Our SEO specialists craft engaging, informative content, incorporating infographics and maps to highlight your product’s features and benefits, ensuring it truly connects with potential customers.",
    icon: PencilSquareIcon,
  },
  {
    name: 'Website Maintenance',
    description:
      "From designing eye-catching templates to developing a fully functional website, our team handles it all. We manage your website’s server and infrastructure to guarantee seamless performance, keeping it up and running 24/7.",
    icon: CodeBracketSquareIcon,
  },
  {
    name: 'Targeted Audience & SEO',
    description:
      "At Mitochon Pixel, we go beyond just reaching your target audience, we help expand your reach to potential new customers. Our expert SEO team ensures your website is optimised to attract and engage both existing and emerging markets, enhancing your brand’s influence and visibility.",
    icon: UserGroupIcon,
  },
]

export default function WeDev() {
  return (
    <div className="py-24 sm:py-32 bg-slate-50">
      <div className="app__container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 primary-heading text-gray-900 text-center">
          Stunning, High-Speed <span className='highlight'>Website</span>
          </p>
          <p className="mt-6 text-lg leading-8 app__text text-center">
          At Mitochon Pixel, we take care of everything from website development to content creation, SEO, and beyond. With us, you get a complete package that ensures your online presence is powerful and effective.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <motion.dl variants={variants} initial="hidden" whileInView="show" className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        {features.map((feature) => (
          <motion.div variants={items} key={feature.name} className="relative pl-24">
            <dt className="text-xl font-bold leading-7 text-gray-900">
              <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full shadow-lg bg-white hover:bg-green-600 text-green-600 hover:text-white">
                <feature.icon className="h-6 w-6 " aria-hidden="true" />
              </div>
              {feature.name}
            </dt>
            <dd className="mt-2 text-base leading-7 app__text">{feature.description}</dd>
          </motion.div>
        ))}
      </motion.dl>
        </div>
      </div>
    </div>
  )
}