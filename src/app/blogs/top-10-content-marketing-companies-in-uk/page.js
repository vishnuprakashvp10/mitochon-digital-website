import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import Top10contentmarketing from "@/components/Top10contentmarketing/top10contentmarketing"

export const metadata = {
  title: 'Top 10 Content Marketing Companies in UK | Mitochon Pixel',
  description: "Explore the best content marketing agencies in the UK, delivering innovative strategies to help brands grow online.",
}
const Top10Branding = () => {
  return (
    <> 
    <Breadcrumbs name={"Blogs"}/>
    <PageWrapper>
     <Top10contentmarketing/>
     </PageWrapper>
     <PageWrapper>
     <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"}/>
     </PageWrapper>
    </>
  )
}

export default Top10Branding
