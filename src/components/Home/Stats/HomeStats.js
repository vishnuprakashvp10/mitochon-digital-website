"use client"
import Stats from './Stats';
import CountUp from "react-countup";
import { CheckBadgeIcon, CodeBracketIcon, CursorArrowRippleIcon, PresentationChartLineIcon } from "@heroicons/react/24/outline";

const HomeStats = () => {
  const stats = [
    { id: 1, name: 'Web Development', value: <CountUp start={0} end={10} duration={3}/>, icon: CodeBracketIcon },
    { id: 2, name: 'Conversion Rate optimisation', value: <CountUp start={0} end={20} duration={3}/>, icon: CheckBadgeIcon },
    { id: 3, name: 'PPC campaign maintained', value: <CountUp start={0} end={50} duration={3}/>, icon: CursorArrowRippleIcon },
    { id: 4, name: 'SEO optimised Website', value: <CountUp start={0} end={10} duration={3}/>, icon: PresentationChartLineIcon },
  ];

  return (
    <Stats
      stats={stats}
      heading="Digital Marketing SEO Solutions!"
      para="Our services cover the full works: SEO management, audits, and website optimisation. As one of the top companies in the UK, we’re experts in website design and link building. Partner with Mitochon Pixel to tap into our expertise and smash your online goals and growth targets."
      connectHref="/contact-us"
      knowMoreHref="/services/seo-service"
    />
  );
}

export default HomeStats;
