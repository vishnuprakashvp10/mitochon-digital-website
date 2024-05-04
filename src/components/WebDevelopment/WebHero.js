import Image from "next/image"
import './WebHero.css'
import image from "@/constant/Images/image"


const WebHero = () => {
  return (
    <section className="app__web-hero">
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
    <div className="flex items-center justify-between flex-col lg:flex-row py-20 md:py-36">
    <div className="flex-1">
    <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 capitalize">We Love <span className="highlight">Designing</span> Websites!<br/>We Love <span className="highlight">Crafting</span> Your Brand</h1>
    <p className="text-base mb-4 app__text">At Mitochon Digital, our team of experts combines experience with insight to perfectly capture the essence of your company or product. We understand exactly how and what specifications need to be showcased to make your brand shine.</p>
    <p className="text-base mb-4 app__text">Get a stunning, fully functional website in few days.</p>
    
    </div>
    <div className=" flex-1">
    <Image src={image.webdev2} alt="dm"/></div>
    </div>
    </div>
    </section>
  )
}

export default WebHero