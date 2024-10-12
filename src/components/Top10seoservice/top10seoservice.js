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
      "Moz",
      "SEOMonitor",
      "SEOworks",
      "Mitochon Digital",
      "Distilled",
      "Verve Search",
      "Web Choice",
      "Koozai",
      "Click Consult",
      "Green Gecko",
      ],
    },
  ];
  

const top10seoservice = () => {
    return (
        <div className="ml-4">
            <div className="we-are-content">
                <div className="section-title text-center">
                    <h2 className="pb-12 primary-heading">
                        Top 10 SEO Service Companies <span className="highlight">in UK</span>
                    </h2>
                </div>
            </div>
 
            <div className='text-xl' >
      <div className="mr-2 text-black">
      <Image
        src={image.seoservicehero}
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
      Selecting the right SEO service company is vital for enhancing your website&apos;s visibility and improving search engine rankings. The UK is home to a range of highly regarded SEO agencies, each specializing in creating tailored SEO strategies that help businesses achieve sustainable online growth. This list showcases the top 10 SEO service companies in the UK, known for their data-driven approach, technical expertise, and commitment to delivering long-term results. 
     <span className='highlight'> These firms are experts at optimizing websites for search engines, driving organic traffic, and ultimately increasing brand exposure in today&apos;s competitive digital landscape.</span>
      </p>
<section className="mb-8 py-6 px-4 grid grid-cols-1 gap-8">
  {table.map((item, index) => (
    <SingleQuestion2 {...item} key={index} />
  ))}
</section>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://moz.com">1. Moz</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.moz} alt="Moz" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Moz is a leading SEO software company that provides tools and resources to help businesses improve their online visibility and search engine rankings. They offer insights, keyword research, and on-page optimization strategies.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Rand Fishkin</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2004</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://moz.com">https://moz.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 3rd Floor, 49-51 Eastcheap, London, EC3M 1JP, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://seomonitor.com">2. SEOMonitor</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.seomonitor} alt="SEOMonitor" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  SEOMonitor offers a comprehensive suite of SEO tools designed to help businesses optimize their online presence. Their services include analytics, keyword tracking, and performance monitoring.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Lidia Infante</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2015</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://seomonitor.com">https://seomonitor.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 2nd Floor, 24-28 Oval Road, London, NW1 7DT, United Kingdom</li>
</ul>




<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight"> <a href="https://www.mitochondigital.com/">3. Mitochon Digital</a></h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
  >
                      <Image
        src={image.mitochondigital}
        alt="Mitochon Digital"
    />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Mitochon Digital is a leading digital marketing agency known for its expertise in SEO, content, and creative campaigns. With offices in London, they help businesses achieve better online visibility through innovative strategies and data-driven insights. Mitochon’s team of experts collaborates with clients to build successful digital marketing campaigns that drive traffic, engagement, and conversions.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Gokulnathan & Vishnuprakash</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2021</li>
  <li><span className='font-bold'>Headquarters:</span> Edinburgh, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.mitochondigital.com/">https://www.mitochondigital.com/</a></span></li>
  <li><span className='font-bold'>Address:</span> 34 Moat Terrace, Edinburgh, EH14 1PS, Scotland, UK</li>
</ul>


<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.seoworks.co.uk">4. SEOworks</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.seoworks} alt="SEOworks" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  SEOworks is an award-winning SEO agency focused on delivering results-driven strategies to improve organic search rankings. They offer SEO audits, link building, and content marketing services.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Matt McCaffrey</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2011</li>
  <li><span className='font-bold'>Headquarters:</span> Manchester, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.seoworks.co.uk">https://www.seoworks.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 1000 Lakeside, North Harbour, Portsmouth, PO6 3EN, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.distilled.net">5. Distilled</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.distilled} alt="Distilled" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Distilled is a digital marketing agency specializing in SEO and content marketing. They help brands enhance their online visibility through data-driven SEO strategies and innovative content solutions.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Will Critchlow</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2005</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.distilled.net">https://www.distilled.net</a></span></li>
  <li><span className='font-bold'>Address:</span> 22-24 Charlotte Road, London, EC2A 3PB, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.vervesearch.com">6. Verve Search</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.vervesearch} alt="Verve Search" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Verve Search is a content-led SEO agency that focuses on improving search engine rankings through creative content strategies. Their services include SEO audits, content creation, and digital PR.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Lisa Myers</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2009</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.vervesearch.com">https://www.vervesearch.com</a></span></li>
  <li><span className='font-bold'>Address:</span> Unit 6, 15-17 Ingate Place, London, SW8 3NS, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.webdesignchoice.co.uk">7. Web Choice</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.webchoice} alt="Web Choice" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Web Choice is a web design and development agency that also offers SEO services. They focus on delivering tailor-made solutions optimized for performance and lead generation.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Sam Dunning</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2009</li>
  <li><span className='font-bold'>Headquarters:</span> Somerset, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.webdesignchoice.co.uk">https://www.webdesignchoice.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 19 North Street, Taunton, Somerset, TA1 1LW, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.koozai.com">8. Koozai</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.koozai} alt="Koozai" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Koozai is a digital marketing agency specializing in SEO, PPC, and content marketing. They create data-driven strategies to enhance online visibility and drive traffic to websites.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> James Moffat</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2008</li>
  <li><span className='font-bold'>Headquarters:</span> Hampshire, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.koozai.com">https://www.koozai.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 8th Floor, 1 Northumberland Avenue, London, WC2N 5BW, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.click.co.uk">9. Click Consult</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.clickconsult} alt="Click Consult" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Click Consult provides integrated SEO and digital marketing services. They specialize in on-page optimization, technical SEO, content marketing, and link building to enhance brand visibility.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Matt Bullas</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2003</li>
  <li><span className='font-bold'>Headquarters:</span> Cheshire, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.click.co.uk">https://www.click.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> Hooton House, Hooton Road, Cheshire, CH66 7NZ, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.greengecko.co.uk">10. Green Gecko</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.greengecko} alt="Green Gecko" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Green Gecko is a digital marketing agency that specializes in SEO, web design, and content marketing. They focus on delivering tailored strategies to boost brand visibility and online engagement.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Andrew Waggott</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2014</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.greengecko.co.uk">https://www.greengecko.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 3-5 Wadsworth Road, Perivale, London, UB6 7JZ, United Kingdom</li>
</ul>




      <p className="text-justify ml-2 md:ml-4  max-w-[1400px] text-2xl mt-2 font-bold highlight">Conclusion:</p>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Partnering with the right SEO service company can have a transformative impact on your business&apos;s online success. By selecting one of the top SEO firms listed here, you are choosing experts who excel at improving search engine rankings and driving targeted traffic to your website. These agencies are known for their technical skills, in-depth understanding of search algorithms, and proven ability to deliver consistent, measurable results. Investing in a reputable SEO company will not only boost your website’s performance but also give your business a competitive edge in achieving sustained online growth.
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
