import image from "@/constant/Images/image"
import Image from "next/image"

const Social = () => {
  return (
    <section className="we-are-area flex items-center">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <div className="my-auto order-2 md:order-1">
        <div className="we-are-content">
          <div className="section-title">
            <h2 className="pb-12 primary-heading">
            <span className="highlight">SOCIAL MEDIA </span>MARKETING
            </h2>
          </div>

          <p className="app__text text-justify">
          At Mitochon Pixel, a premier social media digital agency in the United Kingdom, we understand that social media marketing requires a blend of strategy and creativity. With around 92% of marketers leveraging social platforms, it&apos;s clear that a powerful social media presence is essential for business success. For those not utilising social media for business, there&apos;s a huge missed opportunity, as 78% of salespeople engaged in social marketing outsell their peers. Despite these compelling numbers, nearly 40% of small businesses are still not using social media marketing services to grow their brand.<br/><br/>

          We at Mitochon Pixel provide top-notch social media marketing services that help you outperform competitors. Whether you&apos;re looking for a social media agency near me or the best social media marketing agency in the United Kingdom, we create tailored strategies to transform your market presence and drive customer engagement.
          </p>
        </div>
      </div>

      <div className="we-are-img order-1 md:order-2">
      <div className="we-are-banner-img">
        <Image src={image.social} alt="SEM Marketing" />
      </div>
    </div>
    </div>
  </section>
  )
}

export default Social