import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactForm from "@/components/ContactPage/ContactForm"
import Ppc from "@/components/PPC/Ppc"
import Trend from "@/components/PPC/Trend"
import WeHelp from "@/components/PPC/WeHelp"
import Link from "next/link";
export const metadata = {
  title: 'Paid Online Advertising Company in UK | Mitochon Pixel',
  description: 'Mitochon Pixel, specializing in creating effective ad campaigns across various platforms to maximize your return on investment.',
}
const sections = [ 
  {
    section: <Ppc/>
  },{
    section: <WeHelp name={"Paid Online Advertising"}/>
  },{
    section: <Trend/>
  },{
    section: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"}/>
  }
]
const PpcService = () => {
  return (
    <>
    <Breadcrumbs name={"Paid Online Advertising"}/>
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