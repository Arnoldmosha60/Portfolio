/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import Navigation from './Navigation';
import MyMenu from './MyMenu';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const handleClick = () => {
        setNavOpen(prevValue => !prevValue)
    }

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setNavOpen(false);
        }
      };
  
      // Attach the event listener for resizing
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <>
      <div className='fixed w-full max-w-[100vw] h-20 bg-gradient-to-b from-black via-black to-transparent z-50 bg-opacity-[0.9]'>
          <div className='flex justify-between items-center px-5 max-w-screen-2xl mx-auto'>
            <div className='text-[2.5rem] duration-500 font-semibold group cursor-pointer'>
              <p className='animatedHeading font-signature'>
                <span className='text-transparent'>Port</span>
                <span className='text-transparent'>Folio</span>
              </p>
            </div>

            {window.innerWidth < 768 ? (
              <MyMenu handleClick={handleClick} navOpen={navOpen} />
            ) : (
              <Navigation ulClass='hidden md:flex' liClass='' />
            )}

            <Navigation handleClick={handleClick} ulClass={`${navOpen ? "-translate-x-0" : "translate-x-full"} duration-500 flex flex-col h-screen bg-gradient-to-b from-black to-gray-800 w-screen xs:w-80 top-0 right-0 absolute items-center justify-center md:scale-0`} liClass="my-4 py-2 text-lg" />
          </div>
      </div>
      <div className="md:hidden h-32 w-full bg-black "></div>
    </>
  )
}

export default Navbar