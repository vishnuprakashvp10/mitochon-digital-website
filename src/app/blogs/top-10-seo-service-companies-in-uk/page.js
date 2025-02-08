import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import Top10seoservice from "@/components/Top10seoservice/top10seoservice"

export const metadata = {
  title: 'Top 10 SEO service Companies in UK | Mitochon Pixel',
  description: "Find the best SEO agencies with Mitochon Pixel’s UK blog, offering expert strategies to boost rankings and online visibility.",
}
const Top10Branding = () => {
  return (
    <> 
    <Breadcrumbs name={"Blogs"}/>
    <PageWrapper>
     <Top10seoservice/>
     </PageWrapper>
     <PageWrapper>
     <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"}/>
     </PageWrapper>
    </>
  )
}

export default Top10Branding
