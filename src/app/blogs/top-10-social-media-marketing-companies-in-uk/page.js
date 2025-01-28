import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import Top10socialmedia from "@/components/Top10socialmedia/top10socialmedia"

export const metadata = {
  title: 'Top 10 Social Media Marketing Agencies in UK | Mitochon Pixel',
  description: "Explore the top 10 social media marketing agencies in the UK to boost your online presence.",
}
const Top10Branding = () => {
  return (
    <> 
    <Breadcrumbs name={"Blogs"}/>
    <PageWrapper>
     <Top10socialmedia/>
     </PageWrapper>
     <PageWrapper>
     <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"}/>
     </PageWrapper>
    </>
  )
}

export default Top10Branding
