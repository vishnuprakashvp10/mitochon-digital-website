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
    answers: ["Impression", "The SEO Works", "Mitochon Digital", "Koozai", "Blueclaw", "Croud", "Add People", "Absolute Digital Media", "Propellernet", "Click Consult"],
  },
];
const top10digitalmarketing = () => {
    return (
        <div className="ml-0">
            <div className="we-are-content">
                <div className="section-title text-center">
                    <h2 className="pb-12 primary-heading">
                        Top 10 Digital Marketing Companies <span className="highlight">in UK</span>
                    </h2>
                </div>
            </div>
 
            <div className='text-xl' >
      <div className="mr-2 text-black">
      <Image
        src={image.digitalmarketinghero}
        alt="Digital Marketing"
        layout='responsive'
        className="object-cover"
    />
  
          <div className="container py-4 ">
          <div className="space-y-6 mx-auto">
          </div>
        </div>
      </div>
      <div className="">
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      In today&apos;s fast-paced digital landscape, choosing the right digital marketing partner can make all the difference in achieving your business goals. The UK boasts a diverse array of digital marketing firms, each offering unique expertise and innovative strategies. This list highlights the top 10 digital marketing companies across the UK, renowned for their cutting-edge techniques, proven results, and exceptional client service. <span className='highlight'>Whether you&apos;re looking for expertise in SEO, social media, content marketing, or comprehensive digital campaigns, these industry leaders are equipped to drive your brand&apos;s success in an increasingly competitive market. </span>
      </p>
<section className="mb-8 py-6 px-4 grid grid-cols-1 gap-8">
  {table.map((item, index) => (
    <SingleQuestion2 {...item} key={index} />
  ))}
</section>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight"> <a href="https://www.impressiondigital.com">1. Impression</a></h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
  >
              <Image
        src={image.impression}
        alt="Impression"
    />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Impression is a multi-award-winning digital marketing agency that specializes in SEO, PPC, digital PR, and content marketing. Based in Nottingham, they are known for delivering data-driven strategies to help businesses grow online. Their expert team works with clients across various industries to enhance digital presence and drive measurable results. Impression has established itself as a leading player in the UK digital marketing landscape.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Aaron Dicks & Tom Craig</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2012</li>
  <li><span className='font-bold'>Headquarters:</span> Nottingham, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.impressiondigital.com">https://www.impressiondigital.com</a></span></li>
  <li><span className='font-bold'>Address:</span> Fothergill House, 16 King Street, Nottingham, NG1 2AS, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight"> <a href="https://www.seoworks.co.uk/">2. The SEO Works</a></h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
  >
                  <Image
        src={image.seoworks}
        alt="Seo Works"
    />

  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  The SEO Works is a Sheffield-based digital marketing agency specializing in SEO, PPC, and web development services. Known for their expertise in search marketing, they have been recognized with multiple awards for delivering significant results to clients across different sectors. The agency focuses on helping businesses improve their online visibility and achieve sustainable growth through tailored digital strategies.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Ben Foster</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2009</li>
  <li><span className='font-bold'>Headquarters:</span> Sheffield, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.seoworks.co.uk/">https://www.seoworks.co.uk/</a></span></li>
  <li><span className='font-bold'>Address:</span> Metis, 22 Kingfield Road, Sheffield, S11 9AU, United Kingdom</li>
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


<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight"> <a href="https://www.koozai.com/">4. Koozai</a></h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='rounded-2xl bg-center bg-cover duration-500 relative'
  >
          <Image
        src={image.koozai}
        alt="Koozai"
    />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Koozai is an award-winning digital marketing agency that offers SEO, PPC, and content marketing services. Based in London and Southampton, Koozai prides itself on delivering bespoke digital strategies tailored to client needs. They work with a wide range of businesses, from startups to established brands, helping them maximize their online presence and achieve long-term success.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Ben Norman</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2006</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.koozai.com/">https://www.koozai.com/</a></span></li>
  <li><span className='font-bold'>Address:</span> 11-15 Betterton St, London WC2H 9BP, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight"> <a href="https://www.blueclaw.co.uk/">5. Blueclaw</a></h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
  >
              <Image
        src={image.blueclaw}
        alt="Blueclaw"
    />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Blueclaw is a performance-driven digital marketing agency specializing in SEO, PPC, and content marketing. Based in Leeds, they have a strong reputation for delivering effective digital strategies that boost online performance. Blueclaw’s team of experts works with clients across various sectors to enhance their digital presence and achieve significant business results.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Fergus Clawson</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2007</li>
  <li><span className='font-bold'>Headquarters:</span> Leeds, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.blueclaw.co.uk/">https://www.blueclaw.co.uk/</a></span></li>
  <li><span className='font-bold'>Address:</span> 46 The Calls, Leeds, LS2 7EY, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight"> <a href="https://croud.com/en-gb/">6. Croud</a></h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
  >
                  <Image
        src={image.croud}
        alt="Blueclaw"
    />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Croud is a global digital marketing agency that provides innovative solutions in PPC, SEO, content, and programmatic advertising. Founded in London, Croud has grown to become a leader in the digital marketing space, with a unique network of freelancers known as “Croudies” who deliver top-tier results for clients worldwide. Their collaborative approach ensures scalable and flexible digital marketing strategies.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Luke Smith & Ben Knight</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2011</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://croud.com/en-gb/">https://croud.com/en-gb/</a></span></li>
  <li><span className='font-bold'>Address:</span> 107-111 Fleet Street, London EC4A 2AB, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight"> <a href="https://www.addpeople.co.uk/">7. Add People</a></h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
  >
                      <Image
        src={image.addpeople}
        alt="Add People"
    />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Add People is a digital marketing agency focused on helping small to medium-sized businesses grow online. Based in Altrincham, they specialize in affordable SEO, PPC, and social media marketing services. With a client-first approach, Add People ensures that businesses can effectively reach their target audiences and achieve measurable growth through tailored digital strategies.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> David Roberts</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2002</li>
  <li><span className='font-bold'>Headquarters:</span> Altrincham, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.addpeople.co.uk">https://www.addpeople.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> Mansion House, Manchester Road, Altrincham WA14 4RW, United Kingdom</li>
</ul>


<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight"> <a href="https://www.absolutedigitalmedia.com/">8. Absolute Digital Media</a></h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
  >
                      <Image
        src={image.absolute}
        alt="Absolute Digital Media"
    />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Absolute Digital Media is an award-winning digital marketing agency based in London, offering a full suite of services including SEO, PPC, and web design. Their team of digital experts is dedicated to creating tailored strategies that drive growth and deliver measurable results. Absolute Digital Media works with businesses across various industries, helping them improve their online presence and achieve long-term success.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Ben Austin</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2008</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.absolutedigitalmedia.com">https://www.absolutedigitalmedia.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 32 Blackfriars Rd, London SE1 8PB, United Kingdom</li>
</ul>




<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight"> <a href="https://www.propellernet.co.uk/">9. Propellernet</a></h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
  >
                         <Image
        src={image.propellernet}
        alt="Propellernet"
    />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Propellernet is a Brighton-based digital marketing agency specializing in SEO, PPC, and content marketing. With a focus on delivering ethical and impactful digital strategies, Propellernet works with a wide range of clients to enhance their online presence and drive business growth. The agency is known for its innovative approach and commitment to achieving long-term success for its clients.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Jack Hubbard</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2003</li>
  <li><span className='font-bold'>Headquarters:</span> Brighton, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.propellernet.co.uk/">https://www.propellernet.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 14 Frederick Pl, Brighton BN1 4EA, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight"> <a href="https://www.click.co.uk/">10. Click Consult</a></h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
  >
                             <Image
        src={image.clickconsult}
        alt="Click Consult"
    />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Click Consult is a leading digital marketing agency based in Cheshire, specializing in SEO, PPC, and content marketing. With a focus on data-driven strategies, Click Consult has helped numerous businesses achieve better online visibility and increased conversions. Their team of experts works closely with clients to deliver tailored digital solutions that drive measurable results.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Matt Bullas</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2003</li>
  <li><span className='font-bold'>Headquarters:</span> Hooton, Cheshire, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.click.co.uk/">https://www.click.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> Unit B1, Willow House, Oaklands Office Park, Hooton, Cheshire CH66 7NZ, United Kingdom</li>
</ul>


      <p className="text-justify ml-2 md:ml-4  max-w-[1400px] text-2xl mt-2 font-bold highlight">Conclusion:</p>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Selecting the right digital marketing agency can profoundly impact your business&apos;s online success. By partnering with one of the top digital marketing firms listed here, you are aligning yourself with experts who can elevate your brand&apos;s online presence and drive measurable growth. These agencies are renowned for their innovative strategies, data-driven insights, and commitment to delivering results. Ultimately, investing in a reputable digital marketing agency will save you time and resources while achieving significant returns. Their expertise will ensure your digital campaigns are effective, and their strategic approach will help your business thrive in the competitive online landscape.
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

export default top10digitalmarketing;
