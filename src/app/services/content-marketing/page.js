import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import WebOptimization from "@/components/WebOptimization/WebOptimization"

export const metadata = {
  title: 'Content Marketing Company in UK | Mitochon Pixel',
  description: "Engage and convert your audience in the UK with strategic content marketing by Mitochon Pixel, creating valuable content that gets results. Enquire now.",
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
