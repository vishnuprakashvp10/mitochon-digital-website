import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import Top10digitalmarketing from "@/components/top10digitalmarketing/top10digitalmarketing"

export const metadata = {
  title: 'Top 10 Digital Marketing Companies in UK | Mitochon Pixel',
  description: "Discover the top 10 digital marketing companies in the UK, these companies help businesses grow their online presence and achieve measurable results.",
}
const Top10Branding = () => {
  return (
    <> 
    <Breadcrumbs name={"Blogs"}/>
    <PageWrapper>
     <Top10digitalmarketing/>
     </PageWrapper>
     <PageWrapper>
     <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"}/>
     </PageWrapper>
    </>
  )
}

export default Top10Branding
