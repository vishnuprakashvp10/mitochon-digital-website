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

            <p className="app__text">
           It provide deep insights into customer behavior, preferences, and needs. By understanding what drives your audience, you can tailor your offerings and marketing strategies to better meet their expectations and increase satisfaction. Analytics help identify which aspects of your marketing strategy are performing well and which aren’t. This allows businesses to optimize their resources, focusing time and budget on tactics that generate the best returns. Analytics and reporting can give businesses a competitive edge by providing insights into market trends, competitor performance, and potential areas for expansion or improvement.          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SemService;
