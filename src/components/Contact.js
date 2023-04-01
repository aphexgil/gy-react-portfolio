import '../App.css';
import Container from 'react-bootstrap/Container';
import phoneIcon from '../assets/phone_icon.png';
import emailIcon from '../assets/email_icon.png';



function Contact({contactSeen, setContactSeen}) {
    return (
        <>
            <Container  className="main-container contact">
                <h1 className={contactSeen ? '' : 'slide-in-from-top'} onAnimationEnd={()=>setContactSeen(true)}>Contact Me</h1>
                <div className="contact-card slide-in-from-left">
                        <div>
                        <a href='tel:+1310-401-4147' className='phone-icon-link'><img src={phoneIcon} className='phone-icon'/></a>: <a href='tel:+1310-401-4147' className='phone-link'>+1-310-401-4147</a>
                        </div>
                        <div>
                        <a href='mailto:gil.young.1994@gmail.com' className='email-icon-link'><img src={emailIcon} className='email-icon'/></a>: <a href='mailto:gil.young.1994@gmail.com' className='email-link'>gil.young.1994@gmail.com</a>
                        </div>
                </div>
            </Container>
        </>
    )
};

export default Contact;