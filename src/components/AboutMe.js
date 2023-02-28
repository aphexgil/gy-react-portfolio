import headshot from '../assets/gy-headshot-xs.png';
import '../App.css';
import Container from 'react-bootstrap/Container';

function AboutMe() {
    return (
        <>
            <h1 className='about-title'>About Me</h1>
            <Container  className="main-container">
                <div className="headshot">
                    <img src={headshot} className="headshot-img"></img>
                </div>
                <div className="bio"> I am a creative, curious web developer who is eager to bring his years of classroom experience to bear on an agile engineering team. My thorough understanding of full-stack programming and my outstanding quantitative reasoning skills make me an asset in myriad development contexts. I am just as comfortable building and styling front-end React components as I am designing database structures. Collaboration is at the core of everything I do, and I think it is essential that technical information is communicated clearly, concisely and with kindness. Finally, I am a relentless problem-solver and a natural autodidact––finding novel solutions is my happy place. If you have problems that need solving, don’t hesitate to reach out!

                </div>
            </Container>
        </>
    )
};

export default AboutMe;