import React, { useState } from 'react';
import AboutMe from './AboutMe.js'
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import Resume from './Resume.js';

function Main(props) {

    const [aboutSeen, setAboutSeen] = useState(false);
    const [portfolioSeen, setPortfolioSeen] = useState(false);

    const [contactSeen, setContactSeen] = useState(false);

    const [resumeSeen, setResumeSeen] = useState(false);


    if(props.currentPage==="About") {
        return (
            <div className='about-wrapper'>
                <AboutMe aboutSeen={aboutSeen} setAboutSeen={setAboutSeen}/>
            </div>
          );
    } else if(props.currentPage==="Portfolio") {
        return (
            <div className='portfolio-wrapper'>
                <Portfolio portfolioSeen={portfolioSeen} setPortfolioSeen={setPortfolioSeen}/>
            </div>
          );
    } else if(props.currentPage==="Contact") {
        return (
            <div className='contact-wrapper'>
                <Contact contactSeen={contactSeen} setContactSeen={setContactSeen}/>
            </div>
        )
    } else {
        return (
            <div className='resume-wrapper'>
                <Resume resumeSeen={resumeSeen} setResumeSeen={setResumeSeen}/>
            </div>
        )
    }
  
}

export default Main;
