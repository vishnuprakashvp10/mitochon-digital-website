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
          "Brafton",
          "The Brains",
          "Mitochon Pixel",
          "Stickyeyes",
          "Builtvisible",
          "Red Hot Penny",
          "Zazzle Media",
          "Greenlight Digital",
          "Digital Uncut",
          "Click Consult",
      ],
    },
  ];
  

const top10websitedev = () => {
    return (
        <div className="ml-4">
            <div className="we-are-content">
                <div className="section-title text-center">
                    <h2 className="pb-12 primary-heading">
                        Top 10 Content Marketing Companies <span className="highlight">in UK</span>
                    </h2>
                </div>
            </div>
 
            <div className='text-xl' >
      <div className="mr-2 text-black">
      <Image
        src={image.contentmarketinghero}
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
      Selecting the right content marketing company is crucial for building a strong and engaging online presence. The UK boasts a diverse range of top content marketing agencies, each recognized for their creative strategies and expertise in delivering impactful content. 
                  <span className='highlight'> This list highlights the top 10 content marketing companies in the UK, known for their ability to craft compelling, SEO-optimized content that drives brand awareness, boosts audience engagement, and generates measurable results for businesses across various industries </span>
      </p>
<section className="mb-8 py-6 px-4 grid grid-cols-1 gap-8">
  {table.map((item, index) => (
    <SingleQuestion2 {...item} key={index} />
  ))}
</section>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.brafton.co.uk">1. Brafton</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.brafton} alt="Brafton" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Brafton is a full-service content marketing agency known for providing data-driven strategies to enhance online visibility, brand engagement, and lead generation. Their services include content creation, SEO, social media marketing, and video production.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Tom Agnew</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2008</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.brafton.co.uk">https://www.brafton.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 131 Finsbury Pavement, London, EC2A 1NT, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://thebrainsmarketing.co.uk">2. The Brains</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.thebrains} alt="The Brains" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  The Brains is a digital marketing and content strategy agency that specializes in developing intelligent marketing campaigns to drive growth. They offer content marketing, SEO, paid search, and web development services.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Jonathan Lemer</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2015</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://thebrainsmarketing.co.uk">https://thebrainsmarketing.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 15 Worship Street, London, EC2A 2DT, United Kingdom</li>
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
  <a href="https://www.stickyeyes.com">4. Stickyeyes</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.stickyeyes} alt="Stickyeyes" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Stickyeyes is a digital marketing agency that offers content marketing, SEO, and digital PR. Their focus is on data-led, high-performance content strategies to grow brands online.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Paul Hill</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1998</li>
  <li><span className='font-bold'>Headquarters:</span> Leeds, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.stickyeyes.com">https://www.stickyeyes.com</a></span></li>
  <li><span className='font-bold'>Address:</span> West One, 114 Wellington Street, Leeds, LS1 1BA, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://builtvisible.com">5. Builtvisible</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.builtvisible} alt="Builtvisible" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Builtvisible is a content marketing and SEO agency specializing in organic search growth and content development. They focus on delivering measurable results and increasing visibility for their clients.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Richard Baxter</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2009</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://builtvisible.com">https://builtvisible.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 12-18 Hoxton Street, London, N1 6NG, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.redhotpenny.com">6. Red Hot Penny</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.redhotpenny} alt="Red Hot Penny" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Red Hot Penny specializes in content marketing, SEO, and eCommerce. They create campaigns that focus on brand growth, online performance, and lead generation.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Joe Russell</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2000</li>
  <li><span className='font-bold'>Headquarters:</span> Reading, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.redhotpenny.com">https://www.redhotpenny.com</a></span></li>
  <li><span className='font-bold'>Address:</span> Soane Point, 6-8 Market Place, Reading, RG1 2EG, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.zazzlemedia.co.uk">7. Zazzle Media</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.zazzlemedia} alt="Zazzle Media" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Zazzle Media is a leading content marketing agency with expertise in SEO, digital PR, and data analysis. They focus on creating compelling content that drives organic growth and brand awareness.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Simon Penson</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2009</li>
  <li><span className='font-bold'>Headquarters:</span> Peterborough, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.zazzlemedia.co.uk">https://www.zazzlemedia.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> Lynch Wood Park, Peterborough, PE2 6GG, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.greenlightdigital.com">8. Greenlight Digital</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.greenlightdigital} alt="Greenlight Digital" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Greenlight Digital offers a range of digital marketing services, including content marketing, SEO, and digital advertising. They help brands maximize visibility through creative and data-driven content strategies.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Warren Cowan</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2001</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.greenlightdigital.com">https://www.greenlightdigital.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 90 York Way, London, N1 9AG, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.digitaluncut.com">9. Digital Uncut</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.digitaluncut} alt="Digital Uncut" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Digital Uncut is a content marketing and SEO agency dedicated to helping startups and scaleups grow with tailored marketing strategies and SEO-optimized content.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Chris Liversidge</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2016</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.digitaluncut.com">https://www.digitaluncut.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 50 Eastcastle Street, London, W1W 8EA, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.click.co.uk">10. Click Consult</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.clickconsult} alt="Click Consult" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Click Consult provides integrated search and content marketing services. They specialize in SEO, PPC, content strategy, and digital PR to deliver impactful marketing campaigns.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Matt Bullas</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2003</li>
  <li><span className='font-bold'>Headquarters:</span> Cheshire, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.click.co.uk">https://www.click.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> Hooton House, Hooton Road, Cheshire, CH66 7NZ, United Kingdom</li>
</ul>



      <p className="text-justify ml-2 md:ml-4  max-w-[1400px] text-2xl mt-2 font-bold highlight">Conclusion:</p>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Choosing the right content marketing company can significantly boost your brand&apos;s visibility and drive customer engagement. By working with one of the top content marketing agencies listed here, you will partner with professionals who excel at creating compelling, data-driven content strategies tailored to your business goals. These agencies are recognized for their creativity, expertise in SEO, and ability to deliver measurable results through content that resonates with your audience. Investing in a reputable content marketing firm will help you save time, enhance your digital presence, and ensure that your brand stands out in the competitive online landscape.
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
