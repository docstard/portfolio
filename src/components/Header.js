"use client"

import React, { useEffect, useRef, useState } from 'react'
// import '../styles/header.css'

const Header = () => {

    const [isActiveClass, setActiveClass] = useState(false);
    // const [isUlActive, setIsUlActive] = useState(false);
    const handleActiveToggle = () => {
        setActiveClass(!isActiveClass);
    }
    // const handleUlClick = () => {
    //     setIsUlActive(!isUlActive);
    // }


    // const [scrollPosition, setScrollPosition] = useState(window.scrollY);
const headerRef = useRef(null);
useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (headerRef.current) {
        headerRef.current.style.backgroundColor =
          scrollPosition > 250 ? '#29323c' : 'transparent';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    

  return (
    <section id="header">
        <div ref={headerRef} className={`container header`}>

            <div className="nav-bar ">  
                <div className="brand">
                    <a href="#hero"><h1><span>A</span>ttic<span>F</span>low</h1></a>
                </div>
                <div className="nav-list">
                    <div onClick={handleActiveToggle} className={`hamburger ${isActiveClass ? 'active' : ''}`}>
                        <div className="bar"></div>
                    </div>
                    <ul className={` ${isActiveClass ? 'active' : ''} `}>
                        <li><a onClick={handleActiveToggle} href="#hero" data-after="home">Home</a></li>
                        <li><a onClick={handleActiveToggle} href="#services" data-after="Services">Services</a></li>
                        <li><a onClick={handleActiveToggle} href="#projects" data-after="Projects">Projects</a></li>
                        <li><a onClick={handleActiveToggle} href="#about" data-after="About">About Me</a></li>
                        <li><a onClick={handleActiveToggle} href="#contact" data-after="Contact">Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header