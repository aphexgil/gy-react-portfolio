import '../App.css';
import Container from 'react-bootstrap/Container';


function Contact() {
    return (
        <>
            <Container  className="main-container contact">
                <h1>Contact Me</h1>
                <div className="contact-card">
                        <div>
                            <span class="material-symbols-outlined icon">
                                call
                            </span>: +1-310-401-4147 
                        </div>
                        <div>
                            <span class="material-symbols-outlined icon">
                                mail
                            </span>: gil.young.1994@gmail.com
                        </div>
                </div>
            </Container>
        </>
    )
};

export default Contact;