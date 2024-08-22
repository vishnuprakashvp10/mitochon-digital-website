"use client"
import Stats from './Stats';
import CountUp from "react-countup";
import { CheckBadgeIcon, CodeBracketIcon, CursorArrowRippleIcon, PresentationChartLineIcon } from "@heroicons/react/24/outline";

const HomeStats = () => {
  const stats = [
    { id: 1, name: 'Web Development', value: <CountUp start={0} end={10} duration={3}/>, icon: CodeBracketIcon },
    { id: 2, name: 'Conversion Rate Optimization', value: <CountUp start={0} end={20} duration={3}/>, icon: CheckBadgeIcon },
    { id: 3, name: 'PPC campaign maintained', value: <CountUp start={0} end={50} duration={3}/>, icon: CursorArrowRippleIcon },
    { id: 4, name: 'SEO Optimized Website', value: <CountUp start={0} end={10} duration={3}/>, icon: PresentationChartLineIcon },
  ];

  return (
    <Stats
      stats={stats}
      heading="Digital Marketing SEO Solutions!"
      para="Our services include comprehensive SEO management, website SEO, and SEO audit solutions. As one of the best SEO companies in the world, we excel in SEO website design, link building, and international SEO. Partner with Mitochon Digital to leverage our expertise as the best search engine optimization company and achieve outstanding results in your SEO development and optimization efforts."
      connectHref="/contact-us"
      knowMoreHref="/services/seo-service"
    />
  );
}

export default HomeStats;
