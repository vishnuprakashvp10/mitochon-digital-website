import image from "@/constant/Images/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Smo = () => {
  return (
    <section className="we-are-area flex items-center">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="my-auto order-2 md:order-1">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">
                What is{" "}
                <span className="highlight">Analytics and Reporting?</span>
              </h2>
            </div>

            <p className="text-justify app__text">
              Analytics and Reporting is a critical component of digital
              marketing that focuses on collecting, analysing, and reporting
              data to enhance the effectiveness of your marketing strategies. At
              Mitochon Pixel, based in the United Kingdom, web analytics and
              reporting play a critical role in digital marketing by gathering,
              analysing, and presenting data to improve your online strategies.
            </p>

            <ul role="list" className="mt-8 space-y-8 text-justify app__text">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  Real-time website analytics from Mitochon Pixel provide
                  insights into how users interact with your website,
                  highlighting key engagement metrics such as clicks, time spent
                  on pages, and heatmap analytics. 
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  Our web analytics services include in-depth conversion
                  tracking to measure the success of your marketing efforts. By
                  leveraging ecommerce web analytics and SEO web analytics, we
                  help identify which marketing strategies lead to higher
                  conversion rates. 
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="we-are-img order-1 md:order-2">
          <div className="we-are-banner-img">
            <Image src={image.ppc} alt="SEM Marketing" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Smo;
