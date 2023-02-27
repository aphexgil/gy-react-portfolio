import '../App.css';
import Container from 'react-bootstrap/Container';
import resume from '../assets/gil-young-resume.pdf';

function Resume() {
    return (
        <>
            <Container  className="main-container resume">

                <h1>Download Resume</h1>
                <a href={resume} download>
                    <div className="resume-card">
                        gil-young-resume.pdf
                    </div>
                </a>
            </Container>
        </>
    )
};

export default Resume;