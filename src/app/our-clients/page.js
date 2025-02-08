import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import PortfolioIsoTop from "@/components/Portfolio/PortfolioIsoTop"
import PortfolioIsoTop2 from "@/components/Portfolio/PortfolioIsoTop2"
import PortfolioIsoTop3 from "@/components/Portfolio/PortfolioIsoTop3"
import PortfolioIsoTop4 from "@/components/Portfolio/PortfolioIsoTop4"


export const metadata = {
  title: 'Our Clients | Mitochon Pixel in United Kingdom',
  description: 'From startups to industry leaders, Mitochon Pixel delivers bespoke digital marketing solutions that drive real success for businesses across the UK.',
}

const Portfolio = () => {
  return (
    <>
    <Breadcrumbs name={"Our Clients"}/>
    <PortfolioIsoTop/>
    <PortfolioIsoTop2/>
    <PortfolioIsoTop3/>
    <PortfolioIsoTop4/>

    </>
  )
}

export default Portfolio