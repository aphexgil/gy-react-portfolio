import '../App.css';

import Image from 'react-bootstrap/Image';
import React, {useState} from 'react';

import dbug from '../assets/dbug-xs.png';
import fantasybball from '../assets/fantasy-bball-xs.png';
import flexfly from '../assets/flex-fly-xs.png';
import techblog from '../assets/tech-blog-xs.png';
import codequiz from '../assets/code-quiz-xs.png';
import weatherdash from '../assets/weather-dash-xs.png';
import github from '../assets/github.png';



function Portfolio({portfolioSeen, setPortfolioSeen}) {


    const [loaded1, setLoaded1] = useState(false);
    const [loaded2, setLoaded2] = useState(false);

    const [loaded3, setLoaded3] = useState(false);

    const [loaded4, setLoaded4] = useState(false);

    const [loaded5, setLoaded5] = useState(false);

    const [loaded6, setLoaded6] = useState(false);


    const data = [
        {
            title: 'DBUG',
            link: 'https://gy-dbug.herokuapp.com/',
            image: dbug,
            repo: 'https://github.com/aphexgil/gy-dbug',
            loaded: loaded1,
            setLoaded: setLoaded1
        },
        {
            title: 'Fantasy Basketball',
            link: 'https://fantasy-league.herokuapp.com/',
            image: fantasybball,
            repo: 'https://github.com/aphexgil/fantasy-league',
            loaded: loaded2,
            setLoaded: setLoaded2
        },
        {
            title: 'FlexFly',
            link: 'https://yacovkopel.github.io/FlexFly/',
            image: flexfly,
            repo: 'https://github.com/YacovKopel/FlexFly',
            loaded: loaded3,
            setLoaded: setLoaded3
        },
        {
            title: 'Tech Blog',
            link: 'https://gy-tech-blog.herokuapp.com/',
            image: techblog,
            repo: 'https://github.com/aphexgil/tech-blog',
            loaded: loaded4,
            setLoaded: setLoaded4
        },
        {
            title: 'Code Quiz',
            link: 'https://aphexgil.github.io/code-quiz/',
            image: codequiz,
            repo: 'https://github.com/aphexgil/code-quiz',
            loaded: loaded5,
            setLoaded: setLoaded5
        },
        {
            title: 'Weather Dashboard',
            link: 'https://aphexgil.github.io/weather-forecast/',
            image: weatherdash,
            repo: 'https://github.com/aphexgil/weather-forecast',
            loaded: loaded6,
            setLoaded: setLoaded6
        }
    ];

    return (
        <>
            <div className="portfolio-container">
                <h1 className={portfolioSeen ? '' : 'slide-in-from-top'} onAnimationEnd={()=>setPortfolioSeen(true)}>My Projects</h1>
                <div className="projects-container">
                    {data && data.map((project, i) => (
                        <div id={i} className="project-card" >
                            <Image src={project.image} className="project-image slide-in-from-top"  style={project.loaded ? {} : { display: 'block', backgroundColor: '#FFF' }} onLoad={() => project.setLoaded(true)}></Image>
                            <div className="overlay">
                                <div className="overlay-text">
                                    <a href={project.link} target="_blank" className="project-title">{project.title}</a>
                                    <br></br>
                                    <a href={project.link} target="_blank"><span className="material-symbols-rounded link-icon"> output </span></a>
                                    <a href={project.repo} target="_blank"><img src={github} className="github-icon"></img></a>
                                </div>
                            </div>
                        </div>
                        )
                    )}
                </div>
            </div>
        </>
    )
};

export default Portfolio;