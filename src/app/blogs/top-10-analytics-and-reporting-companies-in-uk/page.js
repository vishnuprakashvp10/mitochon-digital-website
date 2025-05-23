import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import Top10analytics from "@/components/Top10analytics/top10analytics"

export const metadata = {
  title: 'Top 10 Analytics and Reporting Agencies in UK | Mitochon Pixel',
  description: "Discover the best analytics and reporting agencies with Mitochon Pixel’s UK blog, helping brands make smarter data driven decisions.",
}
const Top10Branding = () => {
  return (
    <> 
    <Breadcrumbs name={"Blogs"}/>
    <PageWrapper>
     <Top10analytics/>
     </PageWrapper>
     <PageWrapper>
     <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"}/>
     </PageWrapper>
    </>
  )
}

export default Top10Branding
