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
                            </span>: <a href='tel:+1310-401-4147' className='phone-link'>+1-310-401-4147</a>
                        </div>
                        <div>
                            <span class="material-symbols-outlined icon">
                                mail
                            </span>: <a href='mailto:gil.young.1994@gmail.com' className='email-link'>gil.young.1994@gmail.com</a>
                        </div>
                </div>
            </Container>
        </>
    )
};

export default Contact;