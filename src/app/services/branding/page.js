import { PageWrapper } from '@/app/page-wrapper'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import Cta from '@/components/CTA/Cta'
import ContactForm from '@/components/ContactPage/ContactForm'
import DigitalMarketing from '@/components/DigitalMarketing/DigitalMarketing'
import FeaturedService from '@/components/DigitalMarketing/FeaturedService'
import Influencer from '@/components/DigitalMarketing/Influencer'
import Marketing from '@/components/DigitalMarketing/Marketing'

export const metadata = {
  title: 'Branding Company in United Kingdom | Mitochon Pixel',
  description: "Build a bold and memorable brand with Mitochon Pixel, where strategy meets creativity to give your UK business a standout identity. Enquire now.",
}
const sections = [
  { 
    section: <DigitalMarketing/>
  },
  {
    section: <Influencer/>
  },
  {
    section: <FeaturedService/>
  },
  {
    section: <Marketing/>
  },
  // {
  //   section: <Cta heading={"Digital Marketing Paid Online Advertising Solution!"} para={"Mitochon Pixel’s digital branding and advertising solutions include expertly managed paid online advertising strategies, covering everything from Pay-Per-Click (PPC) campaigns to laser-focused social media advertising. Designed to maximise online visibility and engagement, our tailored approach ensures businesses across the UK achieve standout success."}/>
  // },
  {
    section: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-white"}/>
  }
]
const DigitalM = () => {
  return (
    <>
    <Breadcrumbs name={"Branding"}/>
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

export default DigitalM