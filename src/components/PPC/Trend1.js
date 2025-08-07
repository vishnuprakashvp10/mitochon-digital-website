import image from "@/constant/Images/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Trend = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="we-are-img">
          <div className="we-are-banner-img">
            <Image src={image.ppcTrend} alt="PPC Trend" />
          </div>
        </div>
        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">
                Unleash the Power{" "}
                <span className="highlight">
                  of High-Converting
                </span>
              </h2>
            </div>

            <p className="app__text text-justify">
              In today&apos;s competitive digital landscape, standing out is
              crucial. At Mitochon Pixel, we excel in transforming user
              experiences to boost conversion rates and optimise usability.
              We&apos;re not just another agency offering generic solutions; our
              team specialises in crafting high-impact Conversion Rate
              optimisation strategies that ensure your website not only captures
              attention but also drives seamless conversions.
            </p>

            <ul role="list" className="mt-8 space-y-8 app__text">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  Our approach begins with comprehensive usability testing and
                  detailed website usability audits. We leverage these insights
                  to identify and eliminate friction points, enhancing the
                  overall user experience.{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trend;
