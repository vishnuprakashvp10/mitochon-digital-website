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
                What is <span className="highlight">Analytics and Reporting?</span>
              </h2>
            </div>

            <p className="text-justify app__text">
            Analytics and Reporting is a critical component of digital marketing that focuses on collecting, analyzing, and reporting data to enhance the effectiveness of your marketing strategies. At Mitochon Digital, based in the United Kingdom, web analytics and reporting play a critical role in digital marketing by gathering, analyzing, and presenting data to improve your online strategies. Our web analytics services provide real-time insights into user engagement, conversion tracking, and behavior analysis, helping you stay ahead in the digital landscape. By utilizing advanced tools like website analytics dashboards, heatmap website analytics, and competitor web analytics, we ensure your marketing efforts are optimized for success.
            </p>

            <ul role="list" className="mt-8 space-y-8 text-justify app__text">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>Real-time website analytics from Mitochon Digital provide insights into how users interact with your website, highlighting key engagement metrics such as clicks, time spent on pages, and heatmap analytics. Using advanced web analytics tools like heatmap website analytics and competitor web analytics, we track user behavior to optimize the user journey. Our website analytics dashboard allows you to monitor user engagement data in real time, ensuring a seamless experience for your audience.</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>Our web analytics services include in-depth conversion tracking to measure the success of your marketing efforts. By leveraging ecommerce web analytics and SEO web analytics, we help identify which marketing strategies lead to higher conversion rates. Our web reporting tools provide detailed website analytics reports, offering insights into which aspects of your campaign drive conversions.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="we-are-img order-1 md:order-2">
        <div className="we-are-banner-img">
          <Image src={image.semMarketing} alt="SEM Marketing" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Smo;
