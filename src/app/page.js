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
    description: "Mitochon Digital takes a 360-degree approach to SEO, ensuring that on-page and technical SEO are working in tandem to provide the best possible organic outcomes for our clients.",
  },{
    heading: "Paid Online Advertising Strategy",
    description: "Mitochon Digital understand how to use online advertising efficiently to target the right users with the right messages at the right time, all the while spending budgets efficiently and effectively."
  },{
    heading: "Website Content and Development",
    description: "Mitochon Digital specializes in website content and development, employing a comprehensive strategy to ensure clients' online presence is engaging, informative, and optimized for maximum visibility and conversion."
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
