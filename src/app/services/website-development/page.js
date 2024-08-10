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
  title: 'Web Development - Expert at SEO and Content Marketing',
  description: 'All digital marketing services, SEO, Content Marketing, PPC, Web development.',
}
const WebDevelopment = () => {
  const content = [{
    heading: "Engaging & Quality Content",
    description: "Did you know that consumers prefer learning about businesses and products through content rather than traditional advertising? Convincing people to spend money on something unfamiliar is challenging. That's why at Mitochon Digital, we focus on crafting content that not only informs but also engages, paving the way for better brand recognition and customer trust."
  },{
    heading: "Stunning & Informative Website",
    description: "A website embodies the essence and personality of a company. Unlike humans, however, this personality can be shaped and adapted to have a global impact. At Mitochon Digital, we ensure your website reflects the very best of your brand, transforming your online presence into a powerful tool that connects with audiences worldwide."
  },{
    heading: "Craft Digital Marketing",
    description: "Digital marketing remains one of the most effective strategies for promoting products and businesses. We employ a comprehensive range of digital marketing tactics to elevate your product and convert audiences into sales. Choose Mitochon Digital for website development, and receive this essential service."
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
    {
      section: <WebStats/>
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