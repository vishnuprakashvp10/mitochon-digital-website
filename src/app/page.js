import Hero from "@/components/Home/Hero/Hero";
import Feature from "@/components/Home/Feature/Feature";
import WeAre from "@/components/Home/WeAre/WeAre";
import WeMake from "@/components/Home/WeMake/WeMake";
import Prefer from "@/components/Home/Prefer/Prefer";
import { PageWrapper } from "./page-wrapper";
import HomeStats from "@/components/Home/Stats/HomeStats";
import Test from "@/components/Testimonials/Test";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import WeCan from "@/components/Home/WeCan/WeCan";
import ContactForm from "@/components/ContactPage/ContactForm";

export default function Home() { 
  const content = [{
    heading: "Search Engine Optimization",
    description: "At Mitochon Digital, we offer a comprehensive, 360-degree approach to SEO marketing, ensuring that both on-page and technical SEO work seamlessly together to provide the best organic outcomes for our clients. As one of the best SEO marketing companies in the United Kingdom, we specialize in SEO and digital marketing.",
  },{
    heading: "Paid Online Advertising Strategy",
    description: "At Mitochon Digital, we excel as a leading PPC agency, utilizing pay-per-click (PPC) advertising to target the right users with tailored messages at the perfect moment, ensuring every budget is spent efficiently. As one of the best PPC agencies in the United Kingdom, we offer a range of PPC agency services that are designed to drive high-quality traffic and maximize conversions.",
  },{
    heading: "Website Content and Development",
    description: "We understand the unique needs of every business, which is why we offer flexible website development packages, from affordable options for small businesses to comprehensive plans for large enterprises. Whether you're looking for cheap website development or need a quotation for an advanced, custom website development project, we ensure transparency in all our services, including website development costs.",
  }]

  

  const homeSections = [
    {
      page: <Feature content={content} mainHeading={`We Help You Increase Sales By Improving SEO / PPC / Web Analytics Of <span class="highlight">Your Brand</span>`}/>
    },    {
      page: <WeAre/>
    },{
      page: <WeCan/>
    },    {
      page: <WeMake/>
    },    {
      page: <HomeStats/>
    },    {
      page: <Prefer/>
    },    {
      page: <CaseStudy/>
    },    {
      page: <Test/>
    },    {
      page: <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-white"}/>
    }
  ]
  return (
    <>
    <Hero/>
    {homeSections.map((i, k) => {
      return (
        <PageWrapper key={k}>
        {i.page}
        </PageWrapper>
      )
    })}
    </>
  )
}
