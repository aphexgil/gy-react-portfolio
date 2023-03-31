import headshot from '../assets/gy-headshot-xs.png';
import '../App.css';
import React, {useState} from 'react';

function AboutMe({aboutSeen, setAboutSeen}) {

    const [loaded, setLoaded] = useState(false);

    return (
        <>
            <h1 className={aboutSeen ?  "about-title"  : "about-title slide-in-from-top"} onAnimationEnd={()=>setAboutSeen(true)} >About Me</h1>
            <div className="main-container">
                <div className="headshot">
                    <img src={headshot} className="headshot-img slide-in-from-left" style={loaded ? {} : { display: 'none' }} onLoad={() => setLoaded(true)}></img>
                </div>
                <div className="bio slide-in-from-right" style={loaded ? {} : { display: 'none' }}>
                    Hello! My name is Gil Young. I am a creative, curious web developer who is eager to bring his years of classroom experience to bear on an agile engineering team. My thorough understanding of full-stack programming and my outstanding quantitative reasoning skills make me an asset in myriad development contexts. I am just as comfortable building and styling front-end React components as I am designing database structures. Collaboration is at the core of everything I do, and I think it is essential that technical information is communicated clearly, concisely and with kindness. Finally, I am a relentless problem-solver and a natural autodidact––finding novel solutions is my happy place. If you have problems that need solving, don’t hesitate to reach out!
                </div>
            </div>
        </>
    )
};

export default AboutMe;