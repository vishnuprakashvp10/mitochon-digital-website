import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import WebOptimization from "@/components/WebOptimization/WebOptimization"

export const metadata = {
  title: 'Content Marketing Company in UK | Mitochon Digital',
  description: "Mitochon Digital, specializing in creating and distributing valuable, relevant, and consistent content to attract and engage your target audience.",
}
const WebsiteOptimization = () => {
  return (
    <> 
    <Breadcrumbs name={"Content Marketing"}/>
    <PageWrapper>
     <WebOptimization/>
     </PageWrapper>

     <PageWrapper>
     <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"}/>
     </PageWrapper>
    </>
  )
}

export default WebsiteOptimization
