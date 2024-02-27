/* eslint-disable no-unused-vars */
import React from 'react'
import Section from './Section'
import Project from './Project'
import GridLayout from './GridLayout'
import projects from '../data/Projects'

const Projects = () => {
  return (
    <div name='Projects' className='pt-10 h-full min-h-screen w-full flex items-center  bg-gradient-to-b from-black via-black to-gray-800 text-white'>
      <div className='section'>
        <Section heading='Projects' secondHeading='Check out some of my works' />

        <GridLayout style='sm:grid-cols-2 md:max-w-2xl mx-auto lg:max-w-none lg:grid-cols-3'>
          {projects.map((project) => {
            return (
              <Project key={project.name} project={project} />
            )
          })}
        </GridLayout>
      </div>
    </div>
  )
}

export default Projects