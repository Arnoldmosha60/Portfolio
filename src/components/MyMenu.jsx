/* eslint-disable no-unused-vars */
import React from 'react'
import { Hamburger, Menu, Cancel } from './Icons'
import { useMediaQuery } from 'react-responsive';

// eslint-disable-next-line react/prop-types
const MyMenu = ({ handleClick, navOpen}) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <div className='group md:hidden z-50 cursor-pointer text-gray-500 hover:scale-110 hover:text-gray-300 ease-in-out transition-all duration-300' onClick={handleClick}>
      {navOpen ? (
        <div className='group'>
          <span className='group-hover:hidden'>
            <Cancel color='#6B7280' />
          </span>
          <span className='hidden group-hover:block'>
            <Cancel color='#EF4444' />
          </span>
        </div>
      ) : isSmallScreen ? (
        <Menu />
      ) : (
        <Hamburger />
      )}
    </div>
  )
}

export default Menu