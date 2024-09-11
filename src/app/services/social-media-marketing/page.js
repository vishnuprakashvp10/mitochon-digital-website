import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactForm from "@/components/ContactPage/ContactForm"
import Seoextra from "@/components/SEO/Seoextra"
import NeedService from "@/components/SocialMarketing/NeedService"
import Social from "@/components/SocialMarketing/Social"

export const metadata = {
  title: 'Social Media Marketing Company in UK | Mitochon Digital',
  description: "Mitochon Digital, offering expert strategies to enhance your brand's presence across social platforms.",
}
const sections = [
  {
    section: <Social/>
  },
  {
    section: <Seoextra name={"Social Media Marketing"}/>
  },
  {
    section: <NeedService/>
  },
  {
    section: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-50"}/>
  }
]
const SocialMarketing = () => {
  return (
    <>
    <Breadcrumbs name={"Social Media Marketing"}/>
    {
      sections.map((i,k) => {
      return (
        <PageWrapper key={k}>
        {i.section}
        </PageWrapper>
      )
      })
    }
    </>
  )
}

export default SocialMarketing