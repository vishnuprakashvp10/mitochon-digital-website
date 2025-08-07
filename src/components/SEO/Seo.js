import image from "@/constant/Images/image";
import Image from "next/image";

const Seo = () => {
  return (
    <section>
      <div className="app__container relative isolate overflow-hidden bg-white px-6 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg ">
                <h1 className="mt-2 primary-heading text-gray-900">
                  What is Search{" "}
                  <span className="highlight">Engine Optimisation?</span>
                </h1>
                <p className="mt-6 text-justify app__text">
                  At Mitochon Pixel, based in the United Kingdom, we specialise
                  in delivering high-quality SEO services that put your website
                  on the front page of Google for search terms that relate to
                  your business. As an SEO optimisation agency, we use a variety
                  of methods to ensure your website ranks highly on the search
                  engine results pages. These methods include keyword strategy,
                  link building, and site optimisation. Our focus is on creating
                  an effective SEO marketing strategy tailored to your business
                  needs, helping you become visible in relevant searches.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 ">
            <Image className="w-full max-w-none" src={image.seo} alt="" />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
                  The perfect SEO strategy for your business
                </h2>
                <p className="mt-8 text-justify app__text">
                  At Mitochon Pixel, our approach to search engine optimisation
                  is comprehensive. SEO is a set of strategies and techniques
                  that bring more traffic to your website. We are an
                  international SEO agency with expertise in enhancing your
                  website&apos;s visibility by ranking it higher for relevant
                  searches. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seo;
