"use client"; 
import React, { useState } from 'react';
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import Banner from "@/constant/Images/image";
import Image1 from "@/constant/Images/image";
import Image2 from "@/constant/Images/image";
import Image3 from "@/constant/Images/image";
import Image4 from "@/constant/Images/image";
import Image5 from "@/constant/Images/image";
import Image6 from "@/constant/Images/image";
import Image7 from "@/constant/Images/image";
import Image8 from "@/constant/Images/image";
import Image9 from "@/constant/Images/image";
import Image10 from "@/constant/Images/image";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'center',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export const table = [
  {
    question: "TABLE OF CONTENTS",
    answers: ["Casagrand Builder Pvt. Ltd.", "L&T Infrastructure Ltd.", "Infratech Builders", "Arun Excello", "Akshaya Pvt. Ltd", "India Builders Limited", "Appaswamy Real Estates", "KG Foundations Pvt. Ltd.", "Alliance Group", "Shriram Properties"],
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
      <div className="mb-2 bg-gray-100  text-black" style={BannerImg}>
        <div className="container py-28 ">
          <div className="space-y-6 mx-auto">
          </div>
        </div>
      </div>
      <div className="ml-4">
      <h1 className="text-center font-bold py-7 mr-2 max-w-[1400px] md:py-5 text-2xl md:text-3xl" style={{color: 'orange'}}>
        Check Out The Top 10 Construction Companies In Chennai
      </h1>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      If you are seeking the top construction companies in Chennai to build your home, explore this list. Chennai, Tamil Nadu, is a construction hub with a wide range of residential and commercial opportunities. The city features a well-connected transportation network, ensuring easy travel. Chennai has excellent connectivity with major Tamil Nadu cities, thanks to the extensive network of National Highways like NH-44 and NH-48. This robust infrastructure links the city to Coimbatore, Madurai, Tiruchirappalli, Salem, and Tirunelveli. As Chennai continues to grow rapidly as a cosmopolitan city, construction activity is on the rise. This comprehensive blog highlights the top 10 construction companies in Chennai.In Chennai, when it comes to premium residential projects with convenient access to everyday necessities, these top 10 construction companies are renowned for their quality work. <span style={{color: 'orange'}}>Searching for the leading construction companies in Chennai known for their quality and innovative building projects? Here is your comprehensive guide: </span>
      </p>
<section className="mb-8 py-6 px-4 grid grid-cols-1 gap-8">
  {table.map((item, index) => (
    <SingleQuestion2 {...item} key={index} />
  ))}
</section>
      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.casagrand.co.in">1.Casagrand Builder Pvt. Ltd.</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image1})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Casagrand Builder is a top real estate company in Chennai, renowned for its quality and value. Over the past 15 years, it has developed 22 million square feet of premium homes across Chennai, Kochi, Bengaluru, Kodaikanal, Hyderabad, and Coimbatore, serving over 18,250 households. Now in its 16th year, Casagrand has projects worth more than INR 8000 crores in the pipeline, signaling ongoing growth.
      </p>
      <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span> Arun MN</li>
        <li><span className='font-bold'>Year of Establishment:</span> 2003</li>
        <li><span className='font-bold'>Headquarters:</span> Chennai, Tamil Nadu</li>
        <li><span className='font-bold'>Subsidiaries:</span>  Casagrand Upstay, Casagrand Industrial & Warehousing, and more.</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://www.casagrand.co.in">https://www.casagrand.co.in</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  +91 99629 44444</li>
        <li><span className='font-bold'>Address:</span>  New No.111, Old No.59, NPL Devi, LB Road, Thiruvanmiyur, Chennai 600041, Tamil Nadu, India</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.larsentoubro.com/">2. L&T Infrastructure Ltd.</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image2})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      L&T Infrastructure Ltd., India&apos;s largest construction company, boasts a robust global presence spanning over 50 countries. Established in 1938 and headquartered in Mumbai, L&T operates as a multinational corporation specializing in EPC projects and high-tech manufacturing. The company undertakes a diverse array of projects, including ports, marine projects, coastal and model studies, bridges, roads, airports, railways, metros, and transport planning.
      </p>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      L&T&apos;s business encompasses several key sectors, such as buildings and factories, transport infrastructure, heavy civil infrastructure, smart world and communication, water and renewable energy, and power transmission and distribution. Adhering to rigorous industry standards, L&T ensures the structural integrity and safety of its constructions. With decades of experience, the company consistently delivers dependable, reliable, and aesthetically pleasing results, making it a cornerstone of the construction industry in India and securing its place among the top 10 construction companies in Chennai.
      </p>
      <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Søren Kristian Toubro, Henning Holck-Larsen</li>
        <li><span className='font-bold'>Year of Establishment:</span>  1946</li>
        <li><span className='font-bold'>Headquarters:</span>  Chennai, Tamil Nadu</li>
        <li><span className='font-bold'>Website:</span>  <span className=' underline'><a href="https://www.larsentoubro.com/">https://www.larsentoubro.com/</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  044-4070 6900</li>
        <li><span className='font-bold'>Address:</span>  L&T Construction Campus, 2nd Floor, TC 1 Building, Mount Poonamallee Road, Manapakkam, Chennai</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://infratechbuilders.in/">3. Infratech Builders</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image3})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Infratech Builders, a prominent name in Chennai&apos;s construction industry, boasts over a decade of expertise. Specializing in turf building, renovation, construction, interior design, and painting, our experienced team has completed more than 70 projects, demonstrating our dedication to excellence. With over 10 years in construction and 5+ years in interior design, Infratech Builders is a trusted partner in creating dynamic and innovative spaces.
      </p>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Infratech Builders offers a comprehensive range of landscaping services. From crafting lush landscapes with turf building to executing transformative renovations, constructing durable structures, and enhancing aesthetics with interior design, our decade-long legacy of quality and precision ensures each project reflects our commitment to perfection. Whether it&apos;s meticulous interior design or robust construction, Infratech Builders leverages its extensive industry experience to exceed expectations, making us the preferred choice in Chennai&apos;s construction landscape.
      </p>
      <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Suresh, Laxmanan</li>
        <li><span className='font-bold'>Year of Establishment:</span>  2014</li>
        <li><span className='font-bold'>Headquarters:</span>  Chennai, Tamil Nadu</li>
        <li><span className='font-bold'>Website:</span> <span className='underline hover:text-primary'><a href="https://infratechbuilders.in/">https://infratechbuilders.in/</a></span></li>
        <li> <a href="tel:+917092805747"><span className='font-bold'>Contact Number:</span>  <span className='underline hover:text-primary'>+91 7092805747</span></a></li>
        <li> <a href="https://www.google.com/maps/place/13%C2%B004'23.7%22N+80%C2%B011'12.0%22E/@13.0732603,80.1841011,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.0732603!4d80.186676?hl=en&entry=ttu" target="_blank" rel="noopener noreferrer" ><span className='font-bold'>Address:</span>  <span className='underline hover:text-primary'>Door no: 74, Ettiappan street, Golden George Nagar, Nerkundram, Chennai-600107</span></a></li>
        <li><a href="mailto:enquiries@infratechbuilders.in"><span className='font-bold'>Email:</span>  <span className='underline hover:text-primary'>enquiries@infratechbuilders.in</span></a></li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.arunexcello.com/">4.Arun Excello</a></h1>
      
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image4})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Founded in 1987, Arun Excello initially focused on engineering contracts for the oil and chemical industries. The Arun Excello Group has completed over 100 residential projects and has launched Special Economic Zones (SEZs), completing numerous projects in various locations.
      </p>
      <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Arunachalam Sundar</li>
        <li><span className='font-bold'>ear of Establishment:</span>  2007</li>
        <li><span className='font-bold'>Headquarters:</span>  Chennai, Tamil Nadu</li>
        <li> <span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.arunexcello.com/">https://www.arunexcello.com/</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  +91 44 2841 2841</li>
        <li><span className='font-bold'>Address:</span>  #18, Bhattad Towers, West Cott Road, Royapettah, Chennai, Tamil Nadu, India - 600014.</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.akshaya.com/">5.Akshaya Pvt. Ltd</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image5})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Akshaya Pvt. Ltd., founded in 1995, has successfully completed numerous projects since 2002. The company performs rigorous quality checks to ensure that their constructions meet client requirements. In Chennai, Akshaya Pvt. Ltd. thoroughly inspects each structure to ensure that every detail adheres to approved plans and specifications.      </p>
      <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  T Chitty Babu</li>
        <li><span className='font-bold'>Year of Establishment: </span> 1995</li>
        <li><span className='font-bold'>Headquarters:</span>  Chennai, Tamil Nadu</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://www.akshaya.com/">https://www.akshaya.com/</a></span></li>
        <li> <span className='font-bold'>Contact Number:</span> 044 4200 8811</li>
        <li><span className='font-bold'>Address: </span> Akshaya Pvt Ltd, 7th Floor, 117/1, LB Road, Adyar, Chennai - 600 020.</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.indiabuilders.in/">6. India Builders Limited</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image6})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      India Builders Limited is a renowned and highly respected enterprise in Chennai, specializing in real estate development and construction. As a leading builder in the city, they are known for delivering practical and visually stunning apartments, featuring grand exteriors crafted with cutting-edge technology and equipped with essential amenities.
      </p>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Founded by Mr. J. Uttam Kumar and Mr. C. Thambikalaignan in 1987, India Builders has established itself as one of the top 10 real estate builders and developers in Chennai. Over the years, the company has expanded from managing a single project annually to becoming one of the city’s most prominent developers.
      </p>
        <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Mr. J. Uttam Kumar and Mr. C. Thambikalaignan</li>
        <li><span className='font-bold'>Year of Establishment:</span>  1987</li>
        <li><span className='font-bold'>Headquarters: </span> Chennai, Tamil Nadu</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://www.indiabuilders.in/">https://www.indiabuilders.in/</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  090250 43553</li>
        <li><span className='font-bold'>Address:</span>  AA-36, 3rd Main Road, 3rd Street, Anna Nagar, Chennai, Tamil Nadu 600040</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://appaswamy.com/">7.Appaswamy Real Estates Limited</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image7})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Appaswamy Real Estates Limited stands out as one of the best construction companies in Chennai, epitomising class in the realty industry. With an ambitious vision to inspire value creation, quality, modernity, and excellence, it prioritises a lasting bond with customers built on trust, ethics, and professionalism. This realty conglomerate builds residential as well as commercial properties at prominent locations.
      </p>
        <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  S Appaswamy</li>
        <li><span className='font-bold'>Year of Establishment: </span> 1987</li>
        <li><span className='font-bold'>Headquarters: </span> Chennai, Tamil Nadu</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://appaswamy.com/">https://appaswamy.com/</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  +91 80562 10606</li>
        <li><span className='font-bold'>Address:</span>  3, Mangesh Street, T.Nagar,Chennai - 600 017</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.kgbuilders.com/">8.KG Foundations Pvt. Ltd.</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image8})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      KG is a highly esteemed construction company in Chennai, known for its extensive portfolio and established reputation. Having completed over 180 projects, KG has successfully served more than 8,000 homeowners and corporate clients. Renowned for its meticulous attention to detail and luxury standards, KG is a prominent name in the real estate industry.
      </p>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Currently managing over 8 million sq. ft. of development with plans to add another 10 million sq. ft. within the next 3-5 years, KG aims to create a cityscape filled with architectural marvels across residential, commercial, and hospitality sectors in Chennai.
      </p>
        <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Kishorkumar Gokaldas</li>
        <li><span className='font-bold'>Year of Establishment:</span>  1980</li>
        <li><span className='font-bold'>Headquarters:</span>  Chennai, Tamil Nadu</li>
        <li><span className='font-bold'>Subsidiary:</span>  KG Technology Solutions Private Limited</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://www.kgbuilders.com/">https://www.kgbuilders.com/</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  +91 90251 00555</li>
        <li><span className='font-bold'>Address:</span>  Marble Arch, Ground Floor No. 5 Bishop Wallers Avenue East Mylapore, Chennai 600 004 Tamil Nadu, India</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.alliancein.com">9. Alliance Group</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image9})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Alliance Infrastructure Projects Pvt. Ltd. is a dynamic and driven construction company based in Chennai. Known for its adherence to international standards, professionalism, and credibility, Alliance has achieved notable success with projects across major cities in South India.
      </p>
        <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Manoj Namburu</li>
        <li><span className='font-bold'>Year of Establishment:</span>  2004</li>
        <li><span className='font-bold'>Headquarters:</span>  Banglore</li>
        <li><span className='font-bold'>Subsidiaries:</span>  Urbanrise, Alliance Asia, and more</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://www.alliancein.com">https://www.alliancein.com</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  +91 44 4354 6999</li>
        <li> <span className='font-bold'>Address:</span> Plot No: A, No. 36/1, Gandhi Mandapam Road, Kotturpuram, Chennai - 600 085.</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.shriramproperties.com">10. Shriram Properties</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image10})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Shriram Properties is a prominent builder in Chennai, recognized for its dedication to transparency, trust, and providing enduring value. Their extensive range of projects meets diverse needs and preferences, ensuring that every homebuyer discovers a residence that matches their aspirations.
      </p>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Committed to creating homes that offer lasting value and stand the test of time, Shriram Properties is undoubtedly one of the top builders in Chennai. For those seeking a builder that emphasizes customer satisfaction, reliability, and long-term quality, Shriram Properties is the perfect choice.
      </p>
        <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  M. Murali</li>
        <li><span className='font-bold'>Year of Establishment:</span>  1995</li>
        <li><span className='font-bold'>Headquarters:</span>  Bengaluru, Karnataka</li>
        <li><span className='font-bold'>Subsidiaries:</span>  Shriram Upscale Spaces Private Limited, Global Entropolis Private Limited, and Shriprop Builders Private Limited, among others.</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://www.shriramproperties.com">https://www.shriramproperties.com</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>   044-40014410</li>
        <li><span className='font-bold'>Address:</span>  Lakshmi Neela Rite Choice Chamber, 1st Floor, New No 9, Bazullah Road, T Nagar, Chennai - 600017</li>
      </ul>


      <p className="text-justify ml-2 md:ml-4  max-w-[1400px] text-2xl mt-2 font-bold" style={{color: 'orange'}}>Conclusion:</p>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Choosing the right and highly qualified top 10 construction companies in Chennai can greatly benefit both you and your project. Partnering with a trustworthy and skilled builder or developer from this list ensures that your construction needs are handled efficiently and professionally, allowing you to remain worry-free throughout the process. It is important to provide a clear building plan outlining how you envision the final structure. Once the plan is submitted, it’s best to step back and allow the construction process to unfold. Ensure that the construction is executed flawlessly, as it’s more than just stone and brick—it represents your vision and investment. The building should not only meet your expectations in terms of quality but also add a touch of luxury and comfort to its surroundings. Ultimately, the goal is to safeguard your lifestyle and ensure that your plan is executed without unnecessary risk. Entrusting the construction company with your project will save you both time and money while achieving the desired results.
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
          {showAnswer ? <BiMinus className="text-white" /> : <BsPlusLg className="" />}
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
