/* eslint-disable no-unused-vars */
import React from 'react'
import Section from './Section'
import GridLayout from './GridLayout'
import SkillItems from '../data/SkillItems'
import Skill from './Skill'


const Skills = () => {
  return (
    <div name="Skills" className='pt-10 h-full min-h-screen w-full flex items-center bg-gradient-to-b from-gray-800 to-black'>
     <div className='section'>
      <Section heading='Skills' secondHeading="These are the Technologies I've worked with" />
      <div className='py-2 xs:p-4 rounded-lg bg-gray-900'>
        <GridLayout style="grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {SkillItems.map((skill, index) => {
            return (
              <Skill key={index} skill={skill} />
            )
          })}
        </GridLayout>
      </div>
     </div>
    </div>
  )
}

export default Skills