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
      "Wolf Ollins",
      "DesignStudio",
      "Mitochon Pixel",
      "Landor",
      "Pentagram",
      "BrandOpus",
      "Interbrand",
      "Superunion",
      "FutureBrand",
      "The Clearing",
    ],
  },
];

const top10branding = () => {
    return (
        <div className="ml-4">
            <div className="we-are-content">
                <div className="section-title text-center">
                    <h2 className="pb-12 primary-heading">
                        Top 10 Branding Companies <span className="highlight">in UK</span>
                    </h2>
                </div>
            </div>
 
            <div className='text-xl' >
      <div className="mr-2 text-black">
      <Image
        src={image.brandingbloghero}
        alt="Branding"
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
      selecting the right branding agency is crucial for building a distinctive and lasting brand presence. The UK is home to a range of top-tier branding firms, each known for their creative strategies and innovative approaches. This list features the top 10 branding companies in the UK, recognised for their ability to transform businesses through impactful brand development, design, and storytelling. 
      <span className='highlight'> Whether you are seeking expertise in brand identity, strategy, design, or full-service brand development, these industry leaders are well-equipped to elevate your brand and help it thrive in an ever-evolving market. </span>
      </p>
<section className="mb-8 py-6 px-4 grid grid-cols-1 gap-8">
  {table.map((item, index) => (
    <SingleQuestion2 {...item} key={index} />
  ))}
</section>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.wolffolins.com">1. Wolf Ollins</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.wolfollins} alt="Wolf Ollins" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Wolf Ollins is a globally recognised branding consultancy that has worked with some of the world biggest brands. They specialise in brand strategy, design, and innovation, with a mission to create powerful, purposeful brands that drive success. Their holistic approach combines creativity and business insight to solve complex brand challenges.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Wally Olins & Michael Wolff</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1965</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.wolffolins.com">https://www.wolffolins.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 10 Regents Wharf, All Saints Street, London, N1 9RL, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.wearedesignstudio.com">2. DesignStudio</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.designstudio} alt="DesignStudio" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  DesignStudio is a creative branding agency known for delivering bold and innovative designs. They specialise in branding, product design, and user experience, working with clients to create compelling visual identities that resonate with audiences. DesignStudio’s focus is on producing impactful and engaging designs across multiple platforms.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Ben Wright & Paul Stafford</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2009</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.wearedesignstudio.com">https://www.wearedesignstudio.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 55B All Saints Rd, London, W11 1HE, United Kingdom</li>
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
  <a href="https://landor.com">4. Landor</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.landor} alt="Landor" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Landor is one of the most established branding agencies globally, helping companies build their brands through strategy, design, and creative thinking. They work across sectors to craft brands that stand out, developing innovative solutions to brand challenges and helping businesses grow their influence.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Walter Landor</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1941</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://landor.com">https://landor.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 6 More London Place, London, SE1 2DA, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.pentagram.com">5. Pentagram</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.pentagram} alt="Pentagram" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Pentagram is one of the world’s most iconic design consultancies. Known for their minimalist approach and groundbreaking designs, they specialise in brand identity, graphics, and architecture. Pentagram is unique for its cooperative structure where its partners are also the main designers of the firm.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Alan Fletcher, Theo Crosby, Colin Forbes, Kenneth Grange, Mervyn Kurlansky</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1972</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.pentagram.com">https://www.pentagram.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 11 Needham Road, London, W11 2RP, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.brandopus.com">6. BrandOpus</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.brandopus} alt="BrandOpus" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  BrandOpus is a global branding agency specialising in brand creation, brand strategy, and packaging design. With a deep understanding of consumer psychology and visual storytelling, they help businesses transform their brand identity and connect emotionally with their audiences.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Nir Wegrzyn</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2007</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.brandopus.com">https://www.brandopus.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 1st Floor, 222 Grays Inn Rd, London, WC1X 8HB, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.interbrand.com">7. Interbrand</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.interbrand} alt="Interbrand" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Interbrand is a global brand consultancy known for their work in brand strategy, analytics, and design. They help businesses develop their brand identity, positioning, and value through innovative and data-driven approaches. Its expertise spans across industries, from technology to retail.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> John Murphy</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1974</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.interbrand.com">https://www.interbrand.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 7-8 Agar Street, London, WC2N 4HN, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.superunion.com">8. Superunion</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.superunion} alt="Superunion" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Superunion is a brand agency specialising in brand strategy, identity, and brand experience. The agency works to create disruptive and compelling brands that help businesses stand out. They have partnered with clients across various sectors to build meaningful brands that inspire and engage audiences.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Merger of five WPP agencies</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2018</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.superunion.com">https://www.superunion.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 6 Brewhouse Yard, London, EC1V 4DG, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.futurebrand.com">9. FutureBrand</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.futurebrand} alt="FutureBrand" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  FutureBrand is a leading global brand consultancy offering expertise in brand strategy, innovation, and experience. They help clients reinvent their brands through creative and strategic solutions that align with their business goals. FutureBrand’s approach integrates cultural insights and market research to develop powerful brand experiences.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Interpublic Group</li>
  <li><span className='font-bold'>Year of Establishment:</span> 1999</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.futurebrand.com">https://www.futurebrand.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 10 Bloomsbury Way, London, WC1A 2SL, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://theclearing.co.uk">10. The Clearing</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.theclearing} alt="The Clearing" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  The Clearing is an award-winning branding agency focused on brand strategy and design. They partner with businesses to redefine their brand purpose and deliver effective brand experiences. Known for their strategic approach, The Clearing helps brands become more meaningful to their audiences through creative storytelling.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Richard Buchanan</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2010</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://theclearing.co.uk">https://theclearing.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 7 Boundary Row, London, SE1 8HP, United Kingdom</li>
</ul>



      <p className="text-justify ml-2 md:ml-4  max-w-[1400px] text-2xl mt-2 font-bold highlight">Conclusion:</p>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Choosing the right branding agency is crucial for establishing a strong, memorable identity that resonates with your audience. The top branding companies listed here are known for their expertise in brand strategy, design, and innovation, ensuring your brand not only stands out but thrives in todays competitive market. By partnering with these industry leaders, you gain access to creative solutions and proven methodologies that can transform your brand. Whether you are looking to refresh your existing brand or build something entirely new, these agencies offer the insights and creativity needed to help your business grow and succeed.      </p>
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

export default top10branding;
