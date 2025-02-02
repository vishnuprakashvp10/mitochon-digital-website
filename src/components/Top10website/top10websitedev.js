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
        "Cyber-Duck",
        "Lighthouse London",
        "Mitochon Pixel",
        "Web Choice",
        "KD Web",
        "Studio Graphene",
        "DCSL GuideSmiths",
        "Fat Media",
        "Crowdform",
        "Squareball",
      ],
    },
  ];
  

const top10websitedev = () => {
    return (
        <div className="ml-4">
            <div className="we-are-content">
                <div className="section-title text-center">
                    <h2 className="pb-12 primary-heading">
                        Top 10 Website Development Companies <span className="highlight">in UK</span>
                    </h2>
                </div>
            </div>
 
            <div className='text-xl' >
      <div className="mr-2 text-black">
      <Image
        src={image.webdevhero}
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
      Selecting the right website development company is essential for creating a powerful and user-friendly online presence. The UK is home to a wide array of leading web development firms, each known for their technical expertise and innovative solutions. This list highlights the top 10 website development companies in the UK, recognised for their ability to build dynamic, responsive, and high-performing websites.
            <span className='highlight'> Whether you need front-end design, back-end development, or full-stack services, these industry leaders are equipped to bring your vision to life and ensure your business thrives in the digital world. </span>
      </p>
<section className="mb-8 py-6 px-4 grid grid-cols-1 gap-8">
  {table.map((item, index) => (
    <SingleQuestion2 {...item} key={index} />
  ))}
</section>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.cyber-duck.co.uk">1. Cyber-Duck</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.cyberduck} alt="Cyber-Duck" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Cyber-Duck is an award-winning digital transformation agency that specialises in web design, development, and digital marketing. They help businesses by creating user-focused websites and apps through a combination of creative design and robust technology. Cyber-Duck serves clients across various industries, providing tailored digital solutions.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Danny Bluestone</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2005</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.cyber-duck.co.uk">https://www.cyber-duck.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 12 Elstree Way, Borehamwood, Hertfordshire, WD6 1JE, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.wearelighthouse.com">2. Lighthouse London</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.lighthouselondon} alt="Lighthouse London" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Lighthouse London is a creative web development and digital product studio that specialises in building innovative websites and web applications. They help startups and established businesses enhance their digital presence by offering end-to-end web development services, including user experience design and backend development.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founders:</span> Tom Johnson & Ben Novak</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2008</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.wearelighthouse.com">https://www.wearelighthouse.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 93 Whitechapel High Street, London, E1 7RA, United Kingdom</li>
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
  <li><span className='font-bold'>Address:</span> 34 Moat Terrace, Edinburgh, EH14 1PS, Scotland, UK</li>
</ul>


<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.webdesignchoice.co.uk">4. Web Choice</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.webchoice} alt="Web Choice" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Web Choice is a leading web design and development agency that focuses on delivering tailor-made websites with a strong emphasis on SEO, user experience, and business growth. They specialise in building websites that are not only visually appealing but also optimised for performance and lead generation.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Sam Dunning</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2009</li>
  <li><span className='font-bold'>Headquarters:</span> Somerset, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.webdesignchoice.co.uk">https://www.webdesignchoice.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 19 North Street, Taunton, Somerset, TA1 1LW, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.kdweb.co.uk">5. KD Web</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.kdweb} alt="KD Web" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  KD Web is one of the UKs longest-established website design and SEO companies. They provide web development services to businesses of all sizes, with expertise in building responsive websites, eCommerce platforms, and custom web applications. KD Web is known for delivering exceptional results through innovative design and technology solutions.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Danny De Luca</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1996</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.kdweb.co.uk">https://www.kdweb.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 1A Highbury Crescent, London, N5 1RN, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.studiographene.com">6. Studio Graphene</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.studiographene} alt="Studio Graphene" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Studio Graphene is a technology and innovation agency that helps businesses design, develop, and launch digital products, including websites, apps, and platforms. Their focus is on creating digital solutions that are both functional and visually stunning, with a strong emphasis on user experience and interface design.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Ritam Gandhi</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2014</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.studiographene.com">https://www.studiographene.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 5 Tanner St, London, SE1 3LE, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.dcsl.com">7. DCSL GuideSmiths</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.dcslguidesmiths} alt="DCSL GuideSmiths" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  DCSL GuideSmiths is a web development company that specialises in custom software development, including complex web applications, business websites, and digital platforms. They focus on delivering high-quality, scalable web solutions for businesses across various sectors, using cutting-edge technology and agile methodologies.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Nick Thompson</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1994</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.dcsl.com">https://www.dcsl.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 4th Floor, Imperial House, 15 Kingsway, London, WC2B 6UN, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.fatmedia.co.uk">8. Fat Media</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.fatmedia} alt="Fat Media" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Fat Media is a web design and development agency known for creating bespoke websites tailored to client needs. They offer a range of digital services, from custom web design to advanced CMS solutions and eCommerce platforms, with a focus on building websites that drive business growth and enhance online presence.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Gary Askew</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2005</li>
  <li><span className='font-bold'>Headquarters:</span> Lancaster, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.fatmedia.co.uk">https://www.fatmedia.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> The Chapel, Castle Hill, Lancaster, LA1 1YN, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://crowdform.co.uk">9. Crowdform</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.crowdform} alt="Crowdform" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Crowdform is a London-based digital product studio that specialises in building websites, apps, and digital experiences. They focus on creating highly engaging and user-friendly platforms for businesses looking to transform their online presence. Their expertise covers a wide range of industries, including tech startups, fintech, and consumer brands.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Leo Rodrigues & Patrick Dowling</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2015</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://crowdform.co.uk">https://crowdform.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 10 Vyner Street, London, E2 9DG, United Kingdom</li>
</ul>


<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.squareball.co">10. Squareball</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.squareball} alt="Squareball" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Squareball is a digital product agency that offers comprehensive web development services. They specialise in creating high-performance websites and digital products that cater to user needs and business goals. Squareball combines creativity and technology to develop solutions that are both functional and visually impressive.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Steve Arnold</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2011</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.squareball.co">https://www.squareball.co</a></span></li>
  <li><span className='font-bold'>Address:</span> 52 Kingsland Road, London, E2 8DP, United Kingdom</li>
</ul>



      <p className="text-justify ml-2 md:ml-4  max-w-[1400px] text-2xl mt-2 font-bold highlight">Conclusion:</p>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Selecting the right website development company can be a game-changer for your business&apos;s online presence. By partnering with one of the top website development firms listed here, you will gain access to industry experts who specialise in creating visually stunning, high-performing, and user-friendly websites. These companies are known for their innovative designs, cutting-edge technologies, and dedication to delivering websites that not only look great but are optimised for performance and lead generation. Entrusting your web development needs to a reputable firm will save you time and effort while ensuring your website drives meaningful results and supports long-term business growth in the digital world.






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

export default top10websitedev;
