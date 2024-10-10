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
      "Sociallyin",
      "The Social Shepherd",
      "Mitochon Digital",
      "Spin Brands",
      "Social Chain",
      "Born Social",
      "Disrupt Marketing",
      "1000heads",
      "Giraffe Social Media",
      "Loud Mouth Media",
      ],
    },
  ];

  

const top10seoservice = () => {
    return (
        <div className="ml-4">
            <div className="we-are-content">
                <div className="section-title text-center">
                    <h2 className="pb-12 primary-heading">
                        Top 10 Social Media Marketing Agencies <span className="highlight">in UK</span>
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
      <div className="ml-0">
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      In today&apos;s digital landscape, social media marketing has become an essential component for brands aiming to enhance their online presence and connect with their audience. The top 10 social media marketing agencies in the UK are recognized for their innovative strategies, creativity, and expertise in navigating various social platforms. From tailored content creation to targeted advertising, these agencies offer a comprehensive range of services designed to engage users, increase brand awareness, and drive conversions.
           <span className='highlight'> Whether you are a startup or an established business, partnering with a leading social media agency can help you achieve your marketing goals and stay ahead of the competition.</span>
      </p>
<section className="mb-8 py-6 px-4 grid grid-cols-1 gap-8">
  {table.map((item, index) => (
    <SingleQuestion2 {...item} key={index} />
  ))}
</section>
<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.sociallyin.com">1. Sociallyin</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.sociallyin} alt="Sociallyin" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Sociallyin is a top social media marketing agency specializing in social media strategy, content creation, community management, and paid social advertising. They help brands maximize engagement and grow their social presence.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Justin Leonnard</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2011</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.sociallyin.com">https://www.sociallyin.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 30 Farringdon Street, London, EC4A 4AB, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://thesocialshepherd.com">2. The Social Shepherd</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.social_shepherd} alt="The Social Shepherd" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  The Social Shepherd offers comprehensive social media marketing services including video production, paid social campaigns, and influencer marketing to increase brand awareness and sales.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Jack Shepherd</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2018</li>
  <li><span className='font-bold'>Headquarters:</span> Bath, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://thesocialshepherd.com">https://thesocialshepherd.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 3 George Street, Bath, BA1 2EH, United Kingdom</li>
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
  <a href="https://spinbrands.com">4. Spin Brands</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.spin_brands} alt="Spin Brands" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Spin Brands is a social media marketing agency that focuses on delivering fast-paced, results-driven campaigns. They specialize in Instagram, LinkedIn, Facebook, and paid social strategies.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Elliot Shapiro</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2016</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://spinbrands.com">https://spinbrands.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 64 New Cavendish Street, London, W1G 8TB, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.socialchain.com">5. Social Chain</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.social_chain} alt="Social Chain" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Social Chain is a global social media marketing agency known for its creative and data-driven campaigns. They manage social media accounts and create engaging content for global brands.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Steven Bartlett</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2014</li>
  <li><span className='font-bold'>Headquarters:</span> Manchester, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.socialchain.com">https://www.socialchain.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 127 Portland Street, Manchester, M1 4PZ, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://bornsocial.co.uk">6. Born Social</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.born_social} alt="Born Social" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Born Social specializes in social media marketing for brands looking to build and maintain strong connections with their audience. They create custom strategies to drive engagement across platforms like Instagram and TikTok.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Ben Tyson</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2013</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://bornsocial.co.uk">https://bornsocial.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 71 Fanshaw Street, London, N1 6LA, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://disruptmarketing.co.uk">7. Disrupt Marketing</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.disrupt_marketing} alt="Disrupt Marketing" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Disrupt Marketing focuses on social media management, paid social ads, and influencer marketing. Their innovative approach helps brands disrupt the market and capture attention on social platforms.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Katie Ford</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2017</li>
  <li><span className='font-bold'>Headquarters:</span> Manchester, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://disruptmarketing.co.uk">https://disruptmarketing.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 43 Lever Street, Manchester, M1 1FN, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.1000heads.com">8. 1000heads</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.hundred0heads} alt="1000heads" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  1000heads specializes in social media strategy, content creation, and influencer marketing. They use data-driven insights to develop social media campaigns that generate buzz and drive results.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Mike Rowe</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2000</li>
  <li><span className='font-bold'>Headquarters:</span> London, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.1000heads.com">https://www.1000heads.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 101-105 Kings Road, London, SW3 4PA, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.giraffesocialmedia.co.uk">9. Giraffe Social Media</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.giraffe_social_media} alt="Giraffe Social Media" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Giraffe Social Media is a social media marketing agency that provides content creation, paid ads, and social media management services. They help brands improve their online visibility and drive engagement.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Josh Earl</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2014</li>
  <li><span className='font-bold'>Headquarters:</span> Portsmouth, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.giraffesocialmedia.co.uk">https://www.giraffesocialmedia.co.uk</a></span></li>
  <li><span className='font-bold'>Address:</span> 44 Canal Walk, Portsmouth, PO1 3JH, United Kingdom</li>
</ul>

<h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2 highlight">
  <a href="https://www.loudmouth-media.com">10. Loud Mouth Media</a>
</h1>
<div className='md:max-w-[780px] md:h-[550px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'>
    <Image src={image.loudmouth_media} alt="Loud Mouth Media" />
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
  Loud Mouth Media offers paid social, PPC, and digital advertising services. They focus on driving ROI through highly targeted social media campaigns across Facebook, Instagram, and LinkedIn.
</p>
<ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
  <li><span className='font-bold'>Founder:</span> Mark Haslam</li>
  <li><span className='font-bold'>Year of Establishment:</span> 2011</li>
  <li><span className='font-bold'>Headquarters:</span> Belfast, United Kingdom</li>
  <li><span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.loudmouth-media.com">https://www.loudmouth-media.com</a></span></li>
  <li><span className='font-bold'>Address:</span> 7 Donegall Square West, Belfast, BT1 6JH, United Kingdom</li>
</ul>





      <p className="text-justify ml-2 md:ml-4  max-w-[1400px] text-2xl mt-2 font-bold highlight">Conclusion:</p>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Choosing the right social media marketing agency can significantly impact your brand&apos;s success in the online sphere. The agencies listed in our top 10 have demonstrated their ability to deliver effective strategies that resonate with target audiences. By leveraging their expertise, you can enhance your social media presence, foster community engagement, and ultimately drive business growth. As social media continues to evolve, staying informed about the best practices and trends in the industry is crucial for maximizing your marketing efforts. Embrace the power of social media and watch your brand thrive!
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
