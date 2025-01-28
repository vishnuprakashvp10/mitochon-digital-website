import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import { PageWrapper } from "../page-wrapper"

export const metadata = {
  title: 'Contact Us | Mitochon Pixel in United Kingdom',
  description: 'Get in touch with Mitochon Pixel, a trusted digital marketing company in the United Kingdom. Our team is here to help you achieve your business goals.',
}
const Contact = () => {
  return (
    <>
    <Breadcrumbs name={"Contact Us"}/>
    <PageWrapper>
    <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-white"}/>
    </PageWrapper>
    <PageWrapper>
    <ContactAddress/>
    </PageWrapper>
    </>
  )
}

export default Contact