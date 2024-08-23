import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import Privacypage from "@/components/Privacy/privacypage"

export const metadata = {
  title: 'Content Marketing - Expert at Creating Engaging Content',
  description: "We leverage SEO, SMO, and other digital marketing strategies to enhance your content's reach.",
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
