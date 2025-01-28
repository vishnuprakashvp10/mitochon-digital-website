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
  description: "Mitochon Pixel, helping businesses in the United Kingdom establish a strong brand identity through creative design, strategy, and digital presence.",
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
  {
    section: <Cta heading={"Digital Marketing Paid Online Advertising Solution!"} para={"Mitochon Pixel's digital branding and advertising solutions include comprehensive paid online advertising strategies that encompass both Pay-Per-Click (PPC) campaigns and targeted social media advertising. These strategies are designed to maximize online visibility and engagement for businesses across the United Kingdom."}/>
  },
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