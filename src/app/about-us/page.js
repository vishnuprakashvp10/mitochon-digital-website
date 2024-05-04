import AboutUs from "@/components/About/AboutUs/AboutUs"
import AboutWorking from "@/components/About/AboutWorking/AboutWorking"
import Award from "@/components/About/Award/Award"
import BestFeature from "@/components/About/BestFeature/BestFeature"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import Cta from "@/components/CTA/Cta"
import { PageWrapper } from "../page-wrapper"
import ContactForm from "@/components/ContactPage/ContactForm"

export const metadata = {
  title: 'About - Digital Marketing Agency / Expert at SEO, SMO',
  description: 'All digital marketing services, seo, smo, PPC, web development.',
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
    para="At Mitochon Digital, our digital marketing services merge comprehensive branding strategies with advanced online advertising tactics. This powerful combination is crafted to maximize your online visibility and engagement, propelling your business to new heights."
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