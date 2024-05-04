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
      para="At Mitochon Digital, our digital marketing solutions integrate both PPC (Pay-Per-Click) and SEO (Search Engine Optimization) strategies, expertly designed to maximize your online visibility and engagement. By leveraging these powerful tools, we help businesses tap into new audiences and significantly boost their digital footprint."
      connectHref="/contact-us"
      knowMoreHref="/services/seo-service"
    />
  );
}

export default HomeStats;
