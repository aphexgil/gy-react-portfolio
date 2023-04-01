import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container"

function Navigation(props) {

  const handleNavbarSelect = (eventKey) => {
    if(eventKey==="About"){
      props.setIsAbout(true);
      props.setIsPortfolio(false);
      props.setIsContact(false);
      props.setIsResume(false);
    }else if(eventKey==="Portfolio"){
      props.setIsAbout(false);
      props.setIsPortfolio(true);
      props.setIsContact(false);
      props.setIsResume(false);
    }else if(eventKey==="Contact"){
      props.setIsAbout(false);
      props.setIsPortfolio(false);
      props.setIsContact(true);
      props.setIsResume(false);
    }else{
      props.setIsAbout(false);
      props.setIsPortfolio(false);
      props.setIsContact(false);
      props.setIsResume(true);
    }
    props.setPage(eventKey);
    const page = { eventKey };
    sessionStorage.setItem('page', JSON.stringify(page));
  };
 
  return (

      <Container fluid className="navigation">
        <Navbar collapseOnSelect expand="sm" onSelect={handleNavbarSelect} variant="dark" className="nav" activekey={props.currentPage}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link active={props.isAbout} eventKey="About" className="header-link">About Me</Nav.Link>
              <Nav.Link active={props.isPortfolio} eventKey="Portfolio" className="header-link">Portfolio</Nav.Link>
              <Nav.Link active={props.isContact} eventKey="Contact" className="header-link">Contact</Nav.Link>
              <Nav.Link active={props.isResume} eventKey="Resume" className="header-link">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
  );
}

export default Navigation;
