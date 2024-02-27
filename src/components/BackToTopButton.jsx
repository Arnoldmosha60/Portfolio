/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import { ArrowUp } from './Icons'
import { Link } from 'react-scroll'

const BackToTopButton = () => {
  const [btnVisibility, setBtnVisibility] = useState(false);
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      window.pageYOffset > 250 ? setBtnVisibility(true) : setBtnVisibility(false);
    }
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    }
  }, [])
  return (
    <Link onClick={handleScroll} to='Home' smooth duration={300}>
      <div className=''></div>
    </Link>
  )
}

export default BackToTopButton