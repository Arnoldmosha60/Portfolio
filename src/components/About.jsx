/* eslint-disable no-unused-vars */
import React from 'react'
import { Download } from './Icons'
import profile from '../assets/alvin.png'
import Section from './Section'
import TechStack from '../data/techStack'

const About = () => {
  return (
    <div name='About' className='pt-8 h-full min-h-screen w-full flex items-center  bg-gradient-to-b to-black via-black from-gray-800'>
      <div className='section justify-between'>
        <Section heading='About Me' />

        <div className='mb-10  flex flex-col justify-center '>
          <img src={profile} alt="Profile" width="auto" height="auto" loading='lazy' title='Profile Picture' className='cursor-pointer grayscale hover:grayscale-0 hover:scale-[1.02] transition-all delay-75 border-4 border-transparent hover:border-white duration-300 rounded-2xl min-w-[240px] w-1/2 mx-auto  md:w-[270px]' />
        </div>

        <div className='text-gray-400 py-4 space-y-2 md:space-y-2 md:pt-8 lg:pt-12 font-semibold text-justify'>
          <p className='leading-tight'>
              An aspiring Fullstack Software Developer based in Tanzania. I work on Frontend using React and Tailwind CSS, Backend using Python(Django) and C-Sharp(.NET) and Mobile App Development using Dart(Flutter).
          </p>
          <p className='leading-tight'> I also love to make beautiful Web Applications with technologies like Reactjs</p>
          <p className='leading-tight'>
              Coding Enthusiast, quick learner and Passionate Software and Mobile App Developer currently pursuing Bachelor Degree of Engineering in Computer Engineering at Dar es salaam Institute of Technology.
          </p>
        </div>

        <div className='py-3 text-gray-50 sm:flex font-semibold'>
          <div className='mb-3'>My Tech Stack ~</div>
          <ul className='px-2 flex gap-5 z-40 flex-wrap'>
            {TechStack.map(({id, icon, name}) => {
              return (
                <li key={id} className='relative list-none group'>
                  <span className='z-20'>
                    {icon}
                  </span>
                  <div className='flex scale-0 sm:group-hover:scale-100 group-focus:scale-100 transition ease-out duration-300 delay-100 origin-center justify-center items-center absolute z-50 -bottom-10 left-1/2 -translate-x-1/2 w-auto h-6 py-2 px-3 bg-gray-900 text-sm text-gray-300'>
                    {name}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='py-5'>
          <a href='resume' target="_blank" rel="noreferrer" download={true} className='z-30  group bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center gap-3 px-6 py-3  rounded-lg ease-linear duration-300 delay-75 transition-all cursor-pointer w-36 relative'>
            <span className='pr-6 sm:pr-0 sm:group-hover:-translate-x-5 sm:transition-transform delay-[400ms] ease-out'>Resume</span>
            <span className="absolute right-5 sm:scale-0 transition-all group-hover:scale-100 ease-in delay-200 animate-pulse duration-500 ">
                <Download />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About