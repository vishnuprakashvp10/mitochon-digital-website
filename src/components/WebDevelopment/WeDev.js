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
      "To ensure your website meets the evolving demands of both time and customers, our website developers continually adapt and refine its design. What draws customers and converts visits into sales is how compelling and relatable your website is.",
    icon: CodeBracketIcon,
  },
  {
    name: 'Unique Content Research',
    description:
      "Our SEO specialists craft content that educates your audience about your product is crucial. Mitochon Digital utilizes infographics and maps to vividly illustrate your product's features and benefits, ensuring your content resonates with and informs potential customers.",
    icon: PencilSquareIcon,
  },
  {
    name: 'Website Maintenance',
    description:
      "From developing relatable templates to designing your entire website, our website Developers handle all aspects of website creation. We manage your website's server and architecture to ensure it remains operational around the clock, every day of the year.",
    icon: CodeBracketSquareIcon,
  },
  {
    name: 'Targeted Audience & SEO',
    description:
      "Mitochon Digital's approach extends beyond reaching just your target audience; we also connect you with potential customers, broadening your influence. With the help of our SEO team, your website is optimized to capture the attention of both your established and emerging markets.",
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
          We handle everything from website development to content writing, SEO, and more. With Mitochon Digital, you receive the following:
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