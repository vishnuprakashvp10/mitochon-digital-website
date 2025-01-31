import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import Top10branding from "@/components/Top10branding/top10branding"

export const metadata = {
  title: 'Top 10 Branding Companies in UK | Mitochon Pixel',
  description: "Explore the top 10 branding companies in the UK, specialising in building strong and memorable brands.",
}
const Top10Branding = () => {
  return (
    <> 
    <Breadcrumbs name={"Blogs"}/>
    <PageWrapper>
     <Top10branding/>
     </PageWrapper>
     <PageWrapper>
     <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"}/>
     </PageWrapper>
    </>
  )
}

export default Top10Branding
