/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Section = ({heading, secondHeading}) => {
  return (
    <div className="pb-8 text-white">
        <h2 className='text-4xl px-1 inline border-b-4 border-gray-400  font-bold '>{heading}</h2>
        {secondHeading && 
            <p className='py-6 text-lg'>
                {secondHeading}
            </p>}
        </div>
  )
}

export default Section