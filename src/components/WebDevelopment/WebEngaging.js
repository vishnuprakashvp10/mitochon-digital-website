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
                        <h2 className="primary-heading">Get a website that Engage Business Decisions and Revenue <span className="highlight">Growth</span></h2>
                    </div>
                    <p className="app__text">Creating a website that truly engages and drives business decisions requires more than just technical skills—it demands a deep understanding of your product&quot;s unique specifications, functions, and design. At Mitochon Digital, our trained professionals don&quot;t just build websites; they craft compelling narratives that highlight the best features of your products in a creative yet relatable way. We pride ourselves on our professional approach, with various specialized teams working seamlessly together to ensure every project is handled smoothly and effectively, ensuring your digital presence is optimized for maximum impact and revenue growth.</p>
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
