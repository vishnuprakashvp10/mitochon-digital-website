import AboutUs from "@/components/About/AboutUs/AboutUs"
import AboutWorking from "@/components/About/AboutWorking/AboutWorking"
import Award from "@/components/About/Award/Award"
import BestFeature from "@/components/About/BestFeature/BestFeature"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import Cta from "@/components/CTA/Cta"
import { PageWrapper } from "../page-wrapper"
import ContactForm from "@/components/ContactPage/ContactForm"

export const metadata = {
  title: 'About Us | Mitochon Pixel in United Kingdom',
  description: 'Mitochon Pixel, a leading digital marketing agency in the United Kingdom, offering expertise in SEO, PPC, web design and more.',
}
const aboutSections = [
  {
    section: <AboutUs/>
  },
  {
    section: <Award/>
  },
  {
    section: <BestFeature/>
  },
  {
    section: <Cta
    heading="Branding and Online Advertising Solutions!"
    para="At Mitochon Pixel, we bring together top-notch branding strategies and cutting-edge online advertising tactics. This cracking combo is designed to boost your online presence and engagement, giving your business the push it needs to soar to new heights."
    connectHref="/contact-us"
    knowMoreHref="/services/branding"
  />
  },
  {
    section: <AboutWorking/>
  },
  {
    section: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-white"}/>
  }
]
const About = () => {
  return (
    <>
    <Breadcrumbs name={"About Us"}/>
    {
      aboutSections.map((i) => {
        return (
          <PageWrapper key={i}>
          {i.section}
          </PageWrapper>
        )
      })
    }
    </>
  )
}

export default About