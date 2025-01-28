import { PageWrapper } from "@/app/page-wrapper"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import Feature from "@/components/Services/Feature/featureservices"
import Test from "@/components/Testimonials/Test"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"


export const metadata = {
  title: 'Our Services | Mitochon Pixel in United Kingdom',
  description: 'Explore the range of services offered by Mitochon Pixel in the United Kingdom, including SEO, PPC, social media marketing, web design and more.',
}
const ourservices = () => {
  const content = [{
    heading: "Branding", 
    description: "In today’s digital world, folks are more drawn to engaging content than traditional ads. At Mitochon Pixel, we get the drill crafting content that not only informs but truly connects. Our branding services pack a punch with top-notch strategies to boost your brand’s visibility. Whether it’s a fresh rebrand, co-branding projects, or interactive branding ideas, we’ve got you covered to make sure your brand stands tall in the marketplace."
  },{
    heading: "Website Development",
    description: "A cracking online presence starts with a bang-on website. At Mitochon Pixel, we offer everything from snazzy web design to fully tailored development services. Whether it’s front-end flair, back-end brilliance, or SEO-focused web design, we make sure your site doesn’t just look the part but works a treat. Affordable and global-ready, our websites capture your brand’s essence perfectly."
  },{
    heading: "Content Marketing",
    description: "Smashing content marketing is the backbone of online success. Mitochon Pixel delivers top-notch content creation, from website copy to full-on content strategies. We focus on crafting pieces that not only grab attention but turn casual visitors into loyal customers. It’s all about growing your digital footprint while driving proper engagement and long-term recognition for your brand."
  },
  {
    heading: "SEO Services",
    description: "Want to top the search results? We’ve got your back. Mitochon Pixel’s SEO services are all about making your site stand out. Whether it’s local SEO to target nearby customers, national SEO for a wider reach, or solid link-building strategies, we’re one of the best SEO agencies in the UK. Our tailored solutions ensure your website performs like a champ and attracts organic traffic to keep you ahead of the curve."
  },{
    heading: "Paid Online Advertising",
    description: "Maximize your reach with targeted paid online advertising. Mitochon Pixel specializes in pay-per-click advertising strategies that effectively enhance your campaign performance. Whether you need pay-per-click advertising services, PPC management, or help with PPC advertising costs, we ensure your ads are optimized for the best possible ROI. Our team utilizes top PPC advertising platforms to drive qualified traffic to your website."
  },{
    heading: "Social Media Marketing",
    description: "Harness the power of social media with Mitochon Pixel’s expert social media marketing services. We develop and execute strategies that enhance your online presence and drive engagement. From social media marketing for small businesses to comprehensive social media campaigns, we leverage digital branding solutions to connect with your audience and build brand loyalty, fostering meaningful relationships and measurable results for long-term growth and success."
  },
  {
    heading: "Analytics and Reporting",
    description: "Understanding your website’s performance is crucial for making informed decisions. Mitochon Pixel offers advanced website analytics services to track user behavior, engagement, and conversion metrics. Our real-time website analytics and heatmap website analytics tools provide valuable insights, helping you optimize your digital strategies and stay ahead of the competition. With our analytics and reporting services, you’ll gain a clear understanding of your online performance and opportunities for improvement."
  },{
    heading: "CRO and Usability",
    description: "Conversion Rate Optimization (CRO) and usability are essential for maximizing your website’s effectiveness. Mitochon Pixel specializes in conversion optimization services, ensuring that every element of your site is designed to enhance user experience and drive conversions. Our UX testing services and website conversion optimization strategies are tailored to improve engagement and boost your conversion rates, helping you achieve your business goals more efficiently and drive sustained revenue growth and exceptional user satisfaction."
  }
  
]

  const sections =[

    {
      section: <Feature content={content} mainHeading={`Explore our full range of services and discover how we can <span class="highlight">elevate your business!</span>`}/>
    },
    {
      section: <Test/>
    },
    {
      section: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-white"}/>
    },
    {
      section: <ContactAddress/>
    }
  ]
    return (
      <>
      <Breadcrumbs name={"Services"}/>
      {sections.map((i,k) => {
        return (
          <PageWrapper key={k}>
          {i.section}
          </PageWrapper>
        )
      })}
      </>
    )
}

export default ourservices