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
      "Jellyfish",
      "Brainlabs",
      "Mitochon Pixel",
      "Croud",
      "Greenlight Digital",
      "Space & Time",
      "iCrossing",
      "MediaCom",
      "The Brains",
      "Hallam",
    ],
  },
];

  

const top10seoservice = () => {
    return (
        <div className="ml-4">
            <div className="we-are-content">
                <div className="section-title text-center">
                    <h2 className="pb-12 primary-heading">
                        Top 10 Paid Online Advertising Companies <span className="highlight">in UK</span>
                    </h2>
                </div>
            </div>
 
            <div className='text-xl' >
      <div className="mr-2 text-black">
      <Image
        src={image.ppchero}
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
      The UK is home to some of the most innovative and successful paid online advertising companies that are shaping the future of digital marketing. These companies offer a variety of services, such as pay-per-click (PPC), programmatic advertising, display ads, and paid social media campaigns. 
           <span className='highlight'> By leveraging data-driven strategies and industry-leading tools, these agencies help brands maximize their online visibility, increase conversions, and improve their return on investment (ROI).</span>
      </p>
<section className="mb-8 py-6 px-4 grid grid-cols-1 gap-8">
  {table.map((item, index) => (
    <SingleQuestion2 {...item} key={index} />
  ))}
</section>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.jellyfish.com">1. Jellyfish</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.jellyfish} alt="Jellyfish" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Jellyfish is a global digital marketing agency that specializes in paid media, including PPC, programmatic advertising, and display ads. They help brands maximize their online advertising budgets for optimal performance.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Rob Pierre</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2005</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.jellyfish.com">https://www.jellyfish.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 31-35 Kirby Street, London, EC1N 8TE, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.brainlabsdigital.com">2. Brainlabs</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.brainlabs} alt="Brainlabs" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Brainlabs is a digital marketing agency that focuses on paid search, programmatic advertising, and paid social media campaigns. Their data-driven approach helps businesses scale their online advertising efforts.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Daniel Gilbert</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2012</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.brainlabsdigital.com">https://www.brainlabsdigital.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 2 Old Street Yard, London, EC1Y 8AF, United Kingdom</li>
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
  <a href="https://www.croud.com">4. Croud</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.croud} alt="Croud" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Croud offers a unique paid media solution powered by their global network of experts. Their paid advertising services include PPC, paid social, and programmatic ads, with a focus on driving conversions.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Luke Smith</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2011</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.croud.com">https://www.croud.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 1-3 Strand, London, WC2N 5EH, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.greenlightdigital.com">5. Greenlight Digital</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.greenlightdigital} alt="Greenlight Digital" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Greenlight Digital is a digital marketing agency specializing in paid media services, including PPC and programmatic advertising. They provide data-driven strategies to maximize ad spend.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Warren Cowan</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2001</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.greenlightdigital.com">https://www.greenlightdigital.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 90 York Way, London, N1 9AG, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://spaceandtime.co.uk">6. Space & Time</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.spaceandtime} alt="Space & Time" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Space & Time Media is a digital marketing agency offering a range of paid advertising services, including Google Ads, social media ads, and display campaigns. They help businesses optimise their paid media strategies.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Peter Jones</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2000</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://spaceandtime.co.uk">https://spaceandtime.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 123 Victoria Street, London, SW1E 6DE, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.icrossing.co.uk">7. iCrossing</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.icrossing} alt="iCrossing" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  iCrossing provides integrated paid media services, including PPC and paid social campaigns. They work with clients to create customized paid advertising strategies that focus on driving measurable results.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Antony Mayfield</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1998</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.icrossing.co.uk">https://www.icrossing.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 5th Floor, 40 Bernard Street, London, WC1N 1LE, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.mediacom.com">8. MediaCom</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.mediacom} alt="MediaCom" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  MediaCom is one of the UK’s leading media agencies, offering paid advertising services across digital channels like search, social media, and display advertising. Their focus is on maximizing brand visibility and ROI.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Stephen Allan</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1986</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.mediacom.com">https://www.mediacom.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 124 Theobalds Road, London, WC1X 8RX, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://thebrainsmarketing.co.uk">9. The Brains</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.thebrains} alt="The Brains" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  The Brains offers comprehensive paid media services, including PPC, paid social, and programmatic advertising. They use data-driven strategies to create high-performing advertising campaigns that drive conversions.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Jonathan Lemer</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2015</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://thebrainsmarketing.co.uk">https://thebrainsmarketing.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 15 Worship Street, London, EC2A 2DT, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.hallaminternet.com">10. Hallam</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.hallam} alt="Hallam" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Hallam is a digital marketing agency offering paid advertising services, including Google Ads, Bing Ads, and social media ads. They focus on using strategic paid media campaigns to drive traffic and increase conversions.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Susan Hallam</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1999</li>
  <li><span className='font-bold'>Headquarters:</span> Nottingham, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.hallaminternet.com">https://www.hallaminternet.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 40 St Marys Gate, Nottingham, NG1 1QA, United Kingdom</li>
</ul>




      <p className="text-justify ml-2 md:ml-4  max-w-[1400px] text-2xl mt-2 font-bold highlight">Conclusion:</p>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
These top 10 paid online advertising companies in the UK provide a diverse range of services aimed at helping businesses succeed in the highly competitive digital space. By combining cutting-edge technology, strategic insights, and expert knowledge, they offer customized solutions that maximize ad spend and drive business growth. Whether you are a small business looking for targeted PPC campaigns or a large enterprise in need of programmatic advertising and paid social strategies, these agencies can help you achieve measurable results. Their expertise ensures that your brand stays ahead in the fast-evolving world of online advertising.
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
