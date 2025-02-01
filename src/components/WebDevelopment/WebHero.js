import Image from "next/image"
import './WebHero.css'
import image from "@/constant/Images/image"


const WebHero = () => { 
  return (
    <section className="">
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
    <div className="flex items-center justify-between flex-col lg:flex-row py-2 md:py-2">
    <div className="flex-1">
    <h1 className="text-2xl lg:text-4xl font-extrabold  mb-4 capitalize">We Adore <span className="highlight">Shaping</span> Websites!<br/>We Excel <span className="highlight">Building</span> Your Brand!</h1>
    <p className="text-base mb-4 text-justify app__text">At Mitochon Pixel, a top web development company in the UK, our expert team blends experience with creativity to perfectly capture your brand’s essence. We know exactly what features and specifications need to be showcased to make your business stand out. Our all-inclusive website design, development, and management services ensure your online presence is not just visually stunning but also highly functional. As one of the leading website-building agencies in the UK, we craft sleek, fast-loading websites that meet the highest standards. Our skilled UK-based web developers incorporate advanced digital marketing strategies tailored to the local market, ensuring your brand gets the visibility it deserves.</p>
    <p className="text-base text-justify mb-4 app__text">Get a top-notch, fully functional website in just a few days with Mitochon Pixel—the go-to website development agency in the UK!</p>
    
    
    </div>
    <div className=" flex-1">
    <Image src={image.webdev2} alt="dm"/></div>
    </div>
    </div>
    </section>
  )
}

export default WebHero