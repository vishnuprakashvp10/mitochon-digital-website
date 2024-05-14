import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactForm from "@/components/ContactPage/ContactForm"
import SemService from "@/components/SMO/SemService"
import ServiceInclude from "@/components/SMO/ServiceInclude"
import Smo from "@/components/SMO/Smo"

export const metadata = {
  title: 'Analytics and Reporting - Expert in Web Analytics',
  description: 'All digital marketing services, seo, PPC, web development.',
}
const sections = [
  {
    section: <Smo/>
  },{
    section: <SemService/>
  },{
    section: <ServiceInclude/>
  },{
    section: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"}/>
  }
]
const SmoService = () => {
  return (
    <>
    <Breadcrumbs name={"Analytics and Reporting"}/>
    {
      sections.map((i,k) => {
        return (
          <PageWrapper key={k}>
          {i.section}
          </PageWrapper>
        )
      })
    }
    </>
  )
}

export default SmoService
