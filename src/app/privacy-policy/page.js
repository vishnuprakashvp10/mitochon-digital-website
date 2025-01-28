import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import Privacypage from "@/components/Privacy/privacypage"

export const metadata = {
  title: 'Privacy Policy | Mitochon Pixel in United Kingdom',
  description: "Our Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our services.",
}
const WebsiteOptimization = () => {
  return (
    <> 
    <Breadcrumbs name={"Privacy Policy"}/>
    <PageWrapper>
     <Privacypage/>
     </PageWrapper>

     <PageWrapper>
     <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"}/>
     </PageWrapper>
    </>
  )
}

export default WebsiteOptimization
