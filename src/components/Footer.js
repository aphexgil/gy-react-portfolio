import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";



function Footer() {

  return (
    <Container fluid className="footer-container">
      <Nav>
        <Nav.Link href='https://github.com/aphexgil' target='_blank'><Image src={github} className="footer-image"></Image></Nav.Link>
        <Nav.Link href='https://www.linkedin.com/in/gilyoung1994/' target='_blank'><Image src={linkedin} className="footer-image"/></Nav.Link>
        <Nav.Link href='https://www.instagram.com/aphexgil/' target='_blank'><Image src={instagram} className="footer-image"/></Nav.Link>
      </Nav>
    </Container>
  );
  
}

export default Footer;
