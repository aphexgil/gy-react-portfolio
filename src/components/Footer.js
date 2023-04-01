import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
// import instagram from "../assets/instagram.png";
import stackoverflow from "../assets/stack-overflow.png";
import {useState} from 'react';



function Footer() {


  const [ fadeIn, fadeInStart ] = useState(false);

  return (
    <Container fluid className="footer-container">
      <Nav className="footer-links">
        <Nav.Link href='https://github.com/aphexgil' target='_blank'><img src={github} className="footer-image fade-in-delay" style={fadeIn ? {} : { filter: "opacity(0%)" }} onAnimationStart={()=>fadeInStart(true)}/></Nav.Link>
        <Nav.Link href='https://www.linkedin.com/in/gilyoung1994/' target='_blank'><img src={linkedin} className="footer-image fade-in-delay" style={fadeIn ? {} : { filter: "opacity(0%)" }} onAnimationStart={()=>fadeInStart(true)}/></Nav.Link>
        <Nav.Link href='https://stackoverflow.com/users/21308195/aphexgil' target='_blank'><img src={stackoverflow} className="footer-image fade-in-delay" style={fadeIn ? {} : { filter: "opacity(0%)" }} onAnimationStart={()=>fadeInStart(true)}/></Nav.Link>
      </Nav>
    </Container>
  );
  
}

export default Footer;
