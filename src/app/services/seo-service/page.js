import { PageWrapper } from "@/app/page-wrapper"
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactForm from "@/components/ContactPage/ContactForm"
import Seo from "@/components/SEO/Seo"
import SeoServices from "@/components/SEO/SeoServices"

export const metadata = {
  title: 'SEO Service Company in United Kingdom | Mitochon Pixel',
  description: "Boost your online visibility with expert SEO from Mitochon Pixel, helping UK businesses climb search rankings and attract more customers. Enquire now.",
}
const SeoService = () => {
  return (
    <>
    <Breadcrumbs name={"SEO Services"}/>
    <PageWrapper>
    <Seo/>
    </PageWrapper>

    <PageWrapper>
    <SeoServices/>
    </PageWrapper>

    <PageWrapper>
    <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-white"}/>
    </PageWrapper>
    </>
  )
}

export default SeoService