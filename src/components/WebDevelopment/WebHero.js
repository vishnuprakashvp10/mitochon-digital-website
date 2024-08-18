import Image from "next/image"
import './WebHero.css'
import image from "@/constant/Images/image"


const WebHero = () => { 
  return (
    <section className="">
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
    <div className="flex items-center justify-between flex-col lg:flex-row py-2 md:py-2">
    <div className="flex-1">
    <h1 className="text-4xl lg:text-6xl font-extrabold  mb-4 capitalize">We Adore <span className="highlight">Shaping</span> Websites!<br/>We Excel <span className="highlight">Building</span> Your Brand!</h1>
    <p className="text-base mb-4 text-justify app__text">At Mitochon Digital, a leading web development company in the UK, our team of experts combines experience with insight to perfectly capture the essence of your company or product. We understand precisely how and what specifications need to be showcased to make your brand shine. Our comprehensive website design services, website development services, and website management services ensure that your online presence is both stunning and functional. As one of the top website building services in the United Kingdom, we specialize in creating beautiful, fast-loading websites that meet the highest standards. Our skilled web developers in the UK leverage advanced digital marketing strategies tailored to the UK market, ensuring your brand stands out and attracts the right audience.</p>
    <p className="text-base text-justify mb-4 app__text">Get a stunning, fully functional website in just a few days with Mitochon Digital, the premier website development company in the UK.</p>
    
    
    </div>
    <div className=" flex-1">
    <Image src={image.webdev2} alt="dm"/></div>
    </div>
    </div>
    </section>
  )
}

export default WebHero