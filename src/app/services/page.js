import { PageWrapper } from "@/app/page-wrapper"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import Feature from "@/components/Services/Feature/featureservices"
import Test from "@/components/Testimonials/Test"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"


export const metadata = {
  title: 'Web Development - Expert at SEO and Content Marketing',
  description: 'All digital marketing services, SEO, Content Marketing, PPC, Web development.',
}
const ourservices = () => {
  const content = [{
    heading: "Branding", 
    description: "In today’s digital landscape, consumers engage more with content rather than traditional advertising. At Mitochon Digital, we understand the importance of crafting content that not only informs but also engages. Our branding services leverage expert digital marketing branding strategies to enhance your brand’s recognition. Whether it’s through rebranding, co-branding, or interactive branding, we offer comprehensive solutions that position your brand effectively in the marketplace."
  },{
    heading: "Website Development",
    description: "A strong online presence starts with a well-designed website. At Mitochon Digital, we offer a full suite of website design and development services. From website design services to affordable web design services, our team ensures that your site reflects your brand’s essence and adapts to the global market. Our expertise includes everything from front-end and back-end development to custom web design and SEO web design services, providing a comprehensive approach to website creation and management."
  },{
    heading: "Content Marketing",
    description: "Effective content marketing is crucial for digital success. Mitochon Digital provides top content marketing services to elevate your online presence. We handle everything from content creation and website content creation services to comprehensive content marketing strategies. Our focus is on delivering content that engages your audience and converts them into loyal customers, using proven methods to enhance your digital footprint and drive substantial growth and brand recognition."
  },
  {
    heading: "SEO Services",
    description: "Search Engine Optimization (SEO) is vital for online visibility. Mitochon Digital offers a range of SEO services tailored to improve your search engine rankings. As one of the best SEO companies in the UK, we provide expert SEO management and optimization services, including local SEO, national SEO, and SEO link building. Our approach is designed to boost your website’s performance and drive organic traffic, ensuring that your business stands out in search engine results."
  },{
    heading: "Paid Online Advertising",
    description: "Maximize your reach with targeted paid online advertising. Mitochon Digital specializes in pay-per-click advertising strategies that effectively enhance your campaign performance. Whether you need pay-per-click advertising services, PPC management, or help with PPC advertising costs, we ensure your ads are optimized for the best possible ROI. Our team utilizes top PPC advertising platforms to drive qualified traffic to your website."
  },{
    heading: "Social Media Marketing",
    description: "Harness the power of social media with Mitochon Digital’s expert social media marketing services. We develop and execute strategies that enhance your online presence and drive engagement. From social media marketing for small businesses to comprehensive social media campaigns, we leverage digital branding solutions to connect with your audience and build brand loyalty, fostering meaningful relationships and measurable results for long-term growth and success."
  },
  {
    heading: "Analytics and Reporting",
    description: "Understanding your website’s performance is crucial for making informed decisions. Mitochon Digital offers advanced website analytics services to track user behavior, engagement, and conversion metrics. Our real-time website analytics and heatmap website analytics tools provide valuable insights, helping you optimize your digital strategies and stay ahead of the competition. With our analytics and reporting services, you’ll gain a clear understanding of your online performance and opportunities for improvement."
  },{
    heading: "CRO and Usability",
    description: "Conversion Rate Optimization (CRO) and usability are essential for maximizing your website’s effectiveness. Mitochon Digital specializes in conversion optimization services, ensuring that every element of your site is designed to enhance user experience and drive conversions. Our UX testing services and website conversion optimization strategies are tailored to improve engagement and boost your conversion rates, helping you achieve your business goals more efficiently and drive sustained revenue growth and exceptional user satisfaction."
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