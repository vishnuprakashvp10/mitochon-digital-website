"use client"
import { CheckBadgeIcon, CodeBracketIcon, PresentationChartLineIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import CountUp from "react-countup"
import Stats from "../Home/Stats/Stats";

const WebStats = () => {
    const stats = [ 
        { id: 1, name: 'Website Developed', value: <CountUp start={0} end={6} duration={3}/>,icon: CodeBracketIcon },
        { id: 2, name: 'Happy customers', value: <CountUp start={0} end={12} duration={3}/>,icon: UserGroupIcon },
        { id: 3, name: 'Meetings Done', value: <CountUp start={0} end={28} duration={3}/>,icon: CheckBadgeIcon },
        { id: 4, name: 'Top Website Ranking on Google', value: <CountUp start={0} end={9} duration={3}/>,icon: PresentationChartLineIcon },
      ]
  return (
    <>
    <Stats
      stats={stats}
      heading="Excellent Web Development Services with Engaging Contents!"
      para="You can get a stunning website with valuable and attractive contents."
      connectHref="/contact-us"
      knowMoreHref="/services/content-marketing"
    /> </>
  )
}

export default WebStats