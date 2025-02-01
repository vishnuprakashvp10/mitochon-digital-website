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
    description: "In today’s digital age, people are far more drawn to engaging content than old-school ads. At Mitochon Pixel, we know the score – crafting content that not only informs but genuinely resonates. Our branding services are top-tier, packed with smart strategies to boost your brand’s presence. Whether it’s a fresh rebrand, co-branding ventures, or interactive branding concepts, we’ve got you sorted, making sure your brand stands out in the marketplace."
  },{
    heading: "Website Development",
    description: "A cracking online presence starts with a spot-on website. At Mitochon Pixel, we cover everything from slick web design to fully bespoke development services. Whether it’s front-end finesse, back-end brilliance, or SEO-driven web design, we ensure your site doesn’t just look the part but functions flawlessly. Affordable and built for global reach, our websites capture your brand’s essence perfectly."
  },{
    heading: "Content Marketing",
    description: "Bang-on content marketing is at the heart of online success. Mitochon Pixel delivers first-class content creation, from website copy to full-blown content strategies. We focus on crafting pieces that don’t just grab attention but turn casual browsers into loyal customers. It’s all about growing your digital presence while driving proper engagement and long-term recognition for your brand."
  },
  {
    heading: "SEO Services",
    description: "Looking to smash it on search engines? We’ve got your back. Mitochon Pixel’s SEO services are all about helping your site stand out. Whether it’s local SEO to bring in nearby customers, national SEO for wider reach, or rock-solid link-building strategies, we’re one of the top SEO agencies in the UK. Our tailored solutions ensure your website performs like a dream, pulling in organic traffic to keep you ahead of the game."
  },{
    heading: "Paid Online Advertising",
    description: "Maximise your reach with precision-targeted paid ads. Mitochon Pixel specialises in pay-per-click (PPC) advertising strategies that get the most out of your campaign budget. Whether you need PPC management, advice on advertising costs, or a full-on ad strategy, we’ll make sure your ads are optimised for the best return on investment. Our team uses the top PPC platforms to drive quality traffic straight to your website."
  },{
    heading: "Social Media Marketing",
    description: "Make the most of social media with Mitochon Pixel’s expert social media marketing services. We craft and execute strategies that boost your online presence and drive engagement. Whether it’s social media marketing for small businesses or full-scale campaigns, we use cutting-edge digital branding tactics to connect with your audience and build brand loyalty, creating meaningful relationships and measurable results for long-term growth."
  },
  {
    heading: "Analytics and Reporting",
    description: "Understanding your website’s performance is key to making smart decisions. Mitochon Pixel offers top-notch website analytics services to track user behaviour, engagement, and conversion rates. Our real-time analytics and heatmap tools provide valuable insights, helping you refine your digital strategies and stay ahead of the competition. With our analytics and reporting services, you’ll have a clear view of your online performance and how to improve it."
  },{
    heading: "CRO and Usability",
    description: "Conversion Rate Optimisation (CRO) and usability are vital for getting the most out of your website. Mitochon Pixel specialises in conversion optimisation, ensuring every aspect of your site enhances user experience and drives conversions. Our UX testing services and website conversion strategies are designed to improve engagement and boost your conversion rates, helping you hit your business targets while delivering a seamless user experience."
  }
  
]

  const sections =[

    {
      section: <Feature content={content} mainHeading={`Explore our full range of services and see how we take <span class="highlight">your business to next level!</span>`}/>
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