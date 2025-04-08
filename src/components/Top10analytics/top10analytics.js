"use client"; 
import React, { useState } from 'react';
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import Image from 'next/image';
import image from "@/constant/Images/image";
import Image6 from "@/constant/Images/image";
import Image7 from "@/constant/Images/image";
import Image9 from "@/constant/Images/image";
import Image10 from "@/constant/Images/image";

export const table = [
  {
      question: "TABLE OF CONTENTS",
      answers: [
          "Deloitte Digital",
          "Accenture",
          "Mitochon Pixel",
          "KPMG",
          "PwC",
          "FTI Consulting",
          "Cognizant",
          "ZS Associates",
          "Fractal Analytics",
          "The Data Lab",
      ],
  },
];

  

const top10seoservice = () => {
    return (
        <div className="ml-4">
            <div className="we-are-content">
                <div className="section-title text-center">
                    <h2 className="pb-12 primary-heading">
                        Top 10 Analytics and Reporting Companies <span className="highlight">in UK</span>
                    </h2>
                </div>
            </div>
 
            <div className='text-xl' >
      <div className="mr-2 text-black">
      <Image
        src={image.analyticsandreportinghero}
        alt="Digital Marketing"
        layout='responsive'
        className="object-cover"
    />
  
          <div className="container py-4 ">
          <div className="space-y-6 mx-auto">
          </div>
        </div>
      </div>
      <div className="ml-0">
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Analytics and reporting services play a crucial role in helping organisations transform raw data into actionable insights. In today&apos;s data-driven world, businesses need to leverage data effectively to enhance decision-making, optimise processes, and drive growth. 
           <span className='highlight'> The companies listed above are leaders in the analytics space, offering a wide range of services that include data visualisation, predictive analytics, business intelligence, and performance measurement.</span>
      </p>
<section className="mb-8 py-6 px-4 grid grid-cols-1 gap-8">
  {table.map((item, index) => (
    <SingleQuestion2 {...item} key={index} />
  ))}
</section>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.deloittedigital.co.uk">1. Deloitte Digital</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.deloittedigital} alt="Deloitte Digital" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Deloitte Digital offers comprehensive analytics and reporting services to help businesses harness data insights. They specialise in data strategy, visualisation, and business intelligence.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> William H. Deloitte</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1845</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.deloittedigital.co.uk">https://www.deloittedigital.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 2 New Street Square, London, EC4A 3BZ, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.accenture.com">2. Accenture</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.accenture} alt="Accenture" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Accenture provides a wide range of analytics and reporting services, leveraging advanced analytics and AI to help organisations drive business performance and insights.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Clarence DeLany</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1989</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.accenture.com">https://www.accenture.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 30 Fenchurch Street, London, EC3M 3BD, United Kingdom</li>
</ul>





<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight"> <a href="https://www.mitochonpixel.co.uk/">3. Mitochon Pixel</a></h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
  >
                      <Image
        src={image.mitochondigital}
        alt="Mitochon Pixel"
    />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Mitochon Pixel is a leading digital marketing agency known for its expertise in SEO, content, and creative campaigns. With offices in London, they help businesses achieve better online visibility through innovative strategies and data-driven insights. Mitochon’s team of experts collaborates with clients to build successful digital marketing campaigns that drive traffic, engagement, and conversions.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Gokulnathan & Vishnuprakash</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2021</li>
  <li><span className='font-bold'>Headquarters:</span> Edinburgh, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.mitochonpixel.co.uk/">https://www.mitochonpixel.co.uk/</a></span></li>
  <li><span className='font-bold'>Address:</span> Edinburgh, Scotland, UK</li>
</ul>


<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://home.kpmg/uk/en/home/services/advisory/analytics.html">4. KPMG</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.kpmg} alt="KPMG" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  KPMG provides analytics and reporting solutions that enable organisations to transform their data into actionable insights. Their services include data governance, visualisation, and predictive analytics.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> William Barclay Peat</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1987</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://home.kpmg/uk">https://home.kpmg/uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 15 Canada Square, London, E14 5GL, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.pwc.co.uk">5. PwC</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.pwc} alt="PwC" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  PwC offers analytics and reporting services designed to help organisations gain insights from their data. They specialise in data analytics, visualisation, and business intelligence strategies.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Samuel Lowell Price</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1849</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.pwc.co.uk">https://www.pwc.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 1 Embankment Place, London, WC2N 6RH, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.fticonsulting.com">6. FTI Consulting</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.fticonsulting} alt="FTI Consulting" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  FTI Consulting provides analytics and reporting services that help organisations navigate complex data environments. Their team focuses on data analysis, visualisation, and reporting to support decision-making.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Hubert Joly</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1982</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.fticonsulting.com">https://www.fticonsulting.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 200 Aldersgate, London, EC1A 4HD, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.cognizant.com">7. Cognizant</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.cognizant} alt="Cognizant" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Cognizant offers analytics and reporting services aimed at transforming data into actionable insights. Their solutions include data management, visualisation, and advanced analytics.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founders:</span> Francisco DSouza, Kumar Mahadeva, and Lakshmi Narayanan</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1994</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.cognizant.com">https://www.cognizant.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 20 Wood Lane, London, W12 0LG, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.zs.com">8. ZS Associates</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.zsassociates} alt="ZS Associates" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  ZS Associates provides analytics and reporting services focused on helping organizations enhance their business performance through data-driven insights and strategies.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Zachary (Z) Smith</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1983</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.zs.com">https://www.zs.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 10-11 Upper Ground, London, SE1 9PG, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://fractal.ai">9. Fractal Analytics</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.fractalanalytics} alt="Fractal Analytics" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Fractal Analytics specialises in providing analytics and reporting services that help organisations leverage data for strategic decision-making. Their services include AI, machine learning, and data visualisation.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Anil Kaul</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2000</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://fractal.ai">https://fractal.ai</a></span></li>
  <li><span className='font-bold'>Address:</span> 50 Holborn Viaduct, London, EC1A 2FG, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://thedatalab.com">10. The Data Lab</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.thedatalab} alt="The Data Lab" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  The Data Lab focuses on analytics and reporting services, helping businesses harness the power of data through insights and actionable recommendations for growth.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> David W. Purdie</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2014</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://thedatalab.com">https://thedatalab.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 110 High Holborn, London, WC1V 6JS, United Kingdom</li>
</ul>




      <p className="text-justify ml-2 md:ml-4  max-w-[1400px] text-2xl mt-2 font-bold highlight">Conclusion:</p>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
In conclusion, the top analytics and reporting companies in the UK provide invaluable services that enable businesses to navigate the complexities of data management and analysis. By leveraging these services, organisations can gain a competitive edge, make informed decisions, and adapt to changing market conditions. As the importance of data continues to grow, partnering with a reputable analytics provider becomes essential for businesses aiming to harness the full potential of their data. With the right insights and strategies, companies can not only improve their performance but also drive innovation and long-term success in their respective industries.
      </p>
      </div>
      </div>
    </div>
  );
}

const SingleQuestion2 = ({ question, answers }) => {
  const [showAnswer, setShowAnswer] = useState(true); // Default state is true to keep answers always opened

  return (
    <div className="border border-black rounded-lg bg-primary md:width-320px width-500px">
      <article className="flex items-center justify-between p-4 lg:p-6">
        <h2
          className="cursor-pointer text-center font-bold"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {question}
        </h2>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <BiMinus className="text-black" /> : <BsPlusLg className="" />}
        </button>
      </article>

      {showAnswer && (
        <article className="border-t border-black p-4 lg:p-6 font-bold ">
          <ul>
            {answers.map((answer, index) => (
              <li
                key={index}
                style={{ listStyleType: 'disc', listStylePosition: 'inside' }}
              >
                {answer}
              </li>
            ))}
          </ul>
        </article>
      )}
    </div>
  );
};

export default top10seoservice;
