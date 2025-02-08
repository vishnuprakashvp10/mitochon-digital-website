import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import Faqpage from "@/components/faq/faqpage.js"

export const metadata = {
  title: 'FAQs | Mitochon Pixel in United Kingdom',
  description: "Our FAQs section covers everything from pricing to services, helping you understand how Mitochon Pixel can fuel your business growth.",
}
const WebsiteOptimization = () => {
  return (
    <> 
    <Breadcrumbs name={"FAQ"}/>
    <PageWrapper>
     <Faqpage/>
     </PageWrapper>

     <PageWrapper>
     <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"}/>
     </PageWrapper>
    </>
  )
}

export default WebsiteOptimization
