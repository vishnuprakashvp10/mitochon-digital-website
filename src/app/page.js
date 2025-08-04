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
  const content = [
    {
      heading: "Search Engine optimisation",
      description:
        "At Mitochon Pixel, we take a full-on, 360-degree approach to SEO, making sure on-page and technical SEO work hand in hand to deliver cracking organic results. As one of the top SEO firms in the UK, we are pros at SEO and digital marketing.",
    },
    {
      heading: "Paid Online Advertising Strategy",
      description:
        "At Mitochon Pixel, we shine as a leading PPC agency, using pay-per-click (PPC) advertising to reach the right people with spot on messages at just the right time. Our PPC services are designed to drive top-notch traffic and get the most out of every pound spent.",
    },
    {
      heading: "Website Content and Development",
      description:
        "We know every business is different, so we offer flexible website development packages, from affordable plans for small businesses to all out custom solutions for large enterprises. Whether you are after budget friendly website development or a bespoke website project quote, we keep everything transparent, including website development costs.",
    },
  ];

  const homeSections = [
    // {
    //   page: (
    //     <Feature
    //       content={content}
    //       mainHeading={`We Help You Boost Sales By Improving SEO / PPC / Web Analytics Of <span class="highlight">Your Brand</span>`}
    //     />
    //   ),
    // },
    {
      page: <WeAre />,
    },
    // {
    //   page: <WeCan />,
    // },
    {
      page: <WeMake />,
    },
    // {
    //   //   page: <HomeStats/>
    //   // },    {
    //   page: <Prefer />,
    // },
    {
      page: <CaseStudy />,
    },
    {
      page: <Test />,
    },
    {
      page: (
        <ContactForm
          heading={`Get in <span class="highlight">Touch</span>`}
          color={"bg-white"}
        />
      ),
    },
  ];
  return (
    <>
      <Hero />
      {homeSections.map((i, k) => {
        return <PageWrapper key={k}>{i.page}</PageWrapper>;
      })}
    </>
  );
}
