import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactForm from "@/components/ContactPage/ContactForm"
import Ppc1 from "@/components/PPC/Ppc1"
import Trend1 from "@/components/PPC/Trend1"
import WeHelp1 from "@/components/PPC/WeHelp1"

export const metadata = {
  title: 'CRO and Usability - Expert in CRO',
  description: 'we offer comprehensive services including CRO, display ads, and social media marketing to enhance your visibility.',
}
const sections = [ 
  {
    section: <Ppc1/>
  },{
    section: <WeHelp1 name={"CRO and Usability"}/>
  },{
    section: <Trend1/>
  },{
    section: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"}/>
  }
]
const PpcService = () => {
  return (
    <>
    <Breadcrumbs name={"CRO and Usability"}/>
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

export default PpcService