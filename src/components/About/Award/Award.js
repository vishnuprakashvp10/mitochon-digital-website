"use client"
import Stats from '@/components/Home/Stats/Stats'
import { ClipboardDocumentListIcon, CodeBracketIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';
import React from 'react'
import { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger'

const Award = () => {
  const [countingOn, setCountingOn] = useState(false)
    const stats = [
        { id: 1, name: 'Satisfied Clients', value: <CountUp start={0} end={6} duration={3}/> ,icon:UserGroupIcon},
        { id: 2, name: 'Happy Business Owners', value: <CountUp start={0} end={10} duration={3}/>,icon:UserIcon},
        { id: 3, name: 'Expert Instructors', value: <CountUp start={0} end={20} duration={3}/>,icon:ClipboardDocumentListIcon },
        { id: 4, name: 'Projects', value: <CountUp start={0} end={15} duration={3}/>,icon:CodeBracketIcon },
      ]
  return (
    <section className='bg-slate-50'>
    <div className="app__container py-16 sm:py-32">
      <div className='app__container'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
      <h1 className='primary-heading mb-8'>Top-Rated <br/><span className='highlight'>Digital Agency</span></h1>
      <p className='app__text text-justify'>At Mitochon Pixel, we approach digital marketing like a master painter approaches a canvas. Just as the right colours must be picked to capture every kind of sky, from the fiery oranges of sunset, the soft pinks and yellows of sunrise, to the bright blues of midday and the moody dark blues of a storm, every detail in digital marketing needs to be carefully crafted for maximum impact.</p>
      </div>
      <div className="mt-5 md:mt-0 md:ms-auto my-auto">
  <ul className="list-image-[url(yes.png)] list-inside app__text">
  <li className="text-justify text-sm sm:text-base">Crafting captivating, highly engaging content.</li>
  <li className="text-justify text-sm sm:text-base">Making content sharing a doddle.</li>
  <li className="text-justify text-sm sm:text-base">Boosting the natural shareability of your content.</li>
  <li className="text-justify text-sm sm:text-base">Building a loyal crew of brand advocates.</li>
  <li className="text-justify text-sm sm:text-base">Driving meaningful, purposeful audience engagement.</li>
  <li className="text-justify text-sm sm:text-base">Optimising content distribution with precision.</li>
  <li className="text-justify text-sm sm:text-base">Amplifying your brand’s presence across social platforms.</li>
  <li className="text-justify text-sm sm:text-base">Using advanced data-driven insights for smarter strategies.</li>
  <li className="text-justify text-sm sm:text-base">Fostering strong, inclusive community connections.</li>
  <li className="text-justify text-sm sm:text-base">Promoting thought leadership to establish brand authority.</li>
  </ul>
</div>


      </div>
      </div>
      <div className="flex items-center flex-col gap-y-12 pt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollTrigger  onEnter={() => setCountingOn(true)} onExit={() => setCountingOn(false)}>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, k) => {
              return (
                <div key={k} className="single-counter-two mx-auto flex w-full flex-col gap-y-4 py-10 px-5">
                <div className="flex justify-center items-center text-[#176301]">
                    <stat.icon className="h-12 w-12 " aria-hidden="true" />
                </div>
                <dd className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {
                  countingOn && <>{stat.value}</>
                }
                </dd>
                <dt className="text-base leading-7 app__text">{stat.name}</dt>
              </div>
              )
            })}
          </dl>
          </ScrollTrigger>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Award