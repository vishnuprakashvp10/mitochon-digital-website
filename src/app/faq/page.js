import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import Faqpage from "@/components/faq/faqpage.js"

export const metadata = {
  title: 'FAQ | Mitochon Pixel in United Kingdom',
  description: "Whether you're curious about our process, pricing, or how we can help your business grow, our FAQ section provides the information you need.",
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
