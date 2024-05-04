import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactForm from "@/components/ContactPage/ContactForm"
import WeHelp from "@/components/PPC/WeHelp"
import NeedService from "@/components/SocialMarketing/NeedService"
import Social from "@/components/SocialMarketing/Social"

export const metadata = {
  title: 'Social Media Marketing - Expert at social marketing',
  description: 'All digital marketing services, seo, smo, PPC, web development.',
}
const sections = [
  {
    section: <Social/>
  },
  {
    section: <WeHelp name={"Social Media Marketing"}/>
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