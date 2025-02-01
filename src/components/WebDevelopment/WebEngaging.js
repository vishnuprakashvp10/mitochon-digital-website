import image from "@/constant/Images/image"
import Image from "next/image"

export const WebEngaging = () => {
  return (
    <section className="engaging-business py-16 md:py-32 bg-slate-50">
    <div className="app__container">
        <div className="row">
            <div className="col-12">
                <div className="engaging-business-heading text-center pb-50">
                    <div className="section-title pb-6">
                        <h2 className="primary-heading">Develop a Website That Supports Business Strategies and  <span className="highlight">Increases Revenue</span></h2>
                    </div>
                    <p className="app__text text-justify">Creating a website that truly engages visitors and drives business decisions requires more than just technical expertise, it demands a thorough understanding of your product&apos;s unique features, functions, and design. At Mitochon Pixel, a top-tier web development company in the UK, our team of skilled professionals doesn’t simply build websites; we craft compelling narratives that showcase your product’s best qualities in a creative and relatable way. We offer a full spectrum of services, including website design, development, management, and building, ensuring your online presence is optimised for maximum impact and revenue growth. Our seamless approach involves collaboration across specialised teams, ensuring that every project is handled with the utmost efficiency and care. Our expert web developers in the UK are well-versed in the intricacies of the local market, using advanced digital marketing strategies tailored specifically for the United Kingdom. By choosing Mitochon Pixel, you’re not just getting a stunning website—you’re gaining a powerful digital tool that influences business decisions and drives significant revenue growth.</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 mt-8">
                <div className="engaging-content-wrapper relative">
                    <div className="engaging-content">
                        <div className="engaging-top">
                            <div className="engaging-card-one">
                                <div className="yellow-hover engaging-single-card flex items-center gap-4 common-single-card">
                                    <div className="common-card-icon w-[5rem] svg-yellow">
                                        <Image src={image.decisionMaking} alt="decisionMaking"/>
                                    </div>
                                    <div className="h4-card-content">
                                        <div className="card-title">
                                            <h3 className="font-medium">Developers Team</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="engaging-card-two">
                                <div className="purple-hover engaging-single-card flex items-center gap-4 common-single-card">
                                    <div className="common-card-icon w-[5rem] svg-purple">
                                        <Image src={image.setting} alt="Customer Support Team"/>
                                    </div>
                                    <div className="h4-card-content">
                                        <div className="card-title">
                                            <h3 className="font-medium">Customer Support Team</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="engaging-btm">
                            <div className="engaging-card-three">
                                <div className="paste-hover engaging-single-card flex items-center gap-4 common-single-card">
                                    <div className="common-card-icon w-[5rem] svg-paste">
                                        <Image src={image.analysis} alt="Quality Testing Team"/>
                                    </div>
                                    <div className="h4-card-content">
                                        <div className="card-title">
                                            <h3 className="font-medium">Quality Testing Team</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="engaging-card-four">
                                <div className="pink-hover engaging-single-card flex items-center gap-4 common-single-card">
                                    <div className="common-card-icon w-[5rem] svg-pink">
                                        <Image src={image.loupe} alt="Delivery Team"/>
                                    </div>
                                    <div className="h4-card-content">
                                        <div className="card-title">
                                            <h3 className="font-medium">Delivery Team</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="m-auto hidden lg:block">
                            <div className="engaging-circle-img">
                                <Image src={image.engaging} alt="Engaging"/>
                            </div>
                        </div>
                </div>
            </div>
    </div>
</section>
  )
}
