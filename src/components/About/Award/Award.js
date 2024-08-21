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
      <h1 className='primary-heading mb-8'>Top-Rated <br/><span className='highlight'>Digital Agency</span> We Are</h1>
      <p className='app__text text-justify'>At Mitochon Digital, we approach digital marketing like a master painter approaches a canvas. Just as the right colors must be chosen to perfectly capture different skies—from the orange hues of sunset, the soft pinks and yellows of sunrise, to the clear sky blue of midday, and the stormy dark blues every detail in digital marketing must be meticulously crafted for maximum impact. </p>
      </div>
      <div className='mt-5 md:mt-0 md:ms-auto my-auto'>
      <ul className='list-image-[url(yes.png)] list-inside app__text'>
      <li>Crafting Engaging Content</li>
      <li>Streamlining Content Sharing</li>
      <li>Enhancing Shareability</li>
      <li>Cultivating Brand Advocates</li>
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