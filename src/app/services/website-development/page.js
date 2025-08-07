import { PageWrapper } from "@/app/page-wrapper"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import Feature from "@/components/Home/Feature/Feature"
import Test from "@/components/Testimonials/Test"
import Powerful from "@/components/WebDevelopment/Powerful"
import WeDev from "@/components/WebDevelopment/WeDev"
import { WebEngaging } from "@/components/WebDevelopment/WebEngaging"
import WebHero from "@/components/WebDevelopment/WebHero"
import WebStats from "@/components/WebDevelopment/WebStats"
import WebWhyUs from "@/components/WebDevelopment/WebWhyUs"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"


export const metadata = {
  title: 'Website Development Company in UK | Mitochon Pixel',
  description: 'Mitochon Pixel crafts stunning and user friendly websites in the UK, blending creativity with functionality for maximum impact. Enquire now.',
}
const WebDevelopment = () => {
  const content = [{
    heading: "Engaging & Quality Content",
    description: "Did you know that consumers prefer learning about businesses and products through content rather than traditional advertising? Convincing people to invest in something unfamiliar can be a challenge. That’s why at Mitochon Pixel, we focus on creating compelling content that not only informs but also captivates, fostering stronger brand recognition and customer trust."
  },{
    heading: "Stunning & Informative Website",
    description: "A website is the digital face of your company, representing its essence and personality. Unlike humans, however, this personality can be shaped and adapted to make a lasting global impact. At Mitochon Pixel, we ensure your website reflects the best of your brand, turning your online presence into a powerful platform that resonates with audiences worldwide."
  },{
    heading: "Craft Digital Marketing",
    description: "Digital marketing remains one of the most powerful tools for promoting businesses and driving conversions. We utilise a comprehensive suite of digital marketing techniques to boost your brand visibility and turn potential customers into loyal buyers. When you choose Mitochon Pixel for website development, you gain access to a robust digital marketing strategy designed to maximise your success."
  }]

  const sections =[
    {
      section: <WebHero/>
    },
    {
      section: <WeDev/>
    },
    {
      section: <WebWhyUs/>
    },
    {
      section: <Powerful/>
    }, 
    {
      section: <Feature content={content} mainHeading={`An Effective Website Drives Business Growth and Attracts <span class="highlight">More Customers</span>`}/>
    },
    {
      section: <WebEngaging/>
    },
    // {
    //   section: <WebStats/>
    // },
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
      <Breadcrumbs name={"Website Development"}/>
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

export default WebDevelopment