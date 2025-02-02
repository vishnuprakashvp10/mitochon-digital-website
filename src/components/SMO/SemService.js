import image from "@/constant/Images/image";
import Image from "next/image";

const SemService = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center bg-slate-50">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="we-are-img order-1">
          <div className="we-are-banner-img">
            <Image src={image.semService} alt="SEM Marketing" />
          </div>
        </div>

        <div className="my-auto order-2">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">
                Why <span className="highlight">Analytics and Reporting?</span>
              </h2>
            </div>

            <p className="text-justify app__text">
            Analytics and reporting are crucial for any business looking to excel in the digital landscape, providing deep insights into customer behavior, preferences, and emerging trends. At Mitochon Pixel, we offer a wide range of website analytics services designed to uncover the most important website analytics metrics, enabling you to fine-tune your marketing strategies for maximum effectiveness and higher ROI. Our web reporting services include real-time tracking, allowing you to utilise real-time website analytics and stay on top of user behavior as it happens. We provide detailed insights through custom web analytics that not only show user engagement but also help you understand and optimise the website analytics metrics that matter most to your business. By leveraging competitor website analytics, our team helps you identify gaps and opportunities in your market, giving your business a competitive edge. Additionally, we integrate the latest advancements in cookieless web analytics, ensuring that your business remains future-proof in an evolving digital landscape. Our website analytics agency delivers comprehensive reports that highlight market trends, competitor performance, and potential areas for growth.  </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SemService;
