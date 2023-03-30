import '../App.css';
import Container from 'react-bootstrap/Container';
import resume from '../assets/gil-young-resume.pdf';

function Resume({resumeSeen, setResumeSeen}) {
    return (
        <>
            <Container  className="main-container resume">

                <h1 className={resumeSeen ? '' : 'slide-in-from-top'} onAnimationEnd={()=>setResumeSeen(true)}>Download Resume</h1>
                <a href={resume} download>
                    <div className="resume-card slide-in-from-left">
                        gil-young-resume.pdf
                    </div>
                </a>
            </Container>
        </>
    )
};

export default Resume;