import React, { useState } from 'react';
import AboutMe from './AboutMe.js'
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import Resume from './Resume.js';

function Main(props) {

    if(props.currentPage==="About") {
        return (
            <div className='about-wrapper'>
                <AboutMe />
            </div>
          );
    } else if(props.currentPage==="Portfolio") {
        return (
            <div className='portfolio-wrapper'>
                <Portfolio />
            </div>
          );
    } else if(props.currentPage==="Contact") {
        return (
            <div className='contact-wrapper'>
                <Contact />
            </div>
        )
    } else {
        return (
            <div className='resume-wrapper'>
                <Resume />
            </div>
        )
    }
  
}

export default Main;
