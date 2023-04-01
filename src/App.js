import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React, { useState } from 'react';

function App() {

  const [ currentPage, setPage ] = useState("");

  const [isAbout, setIsAbout] = useState(false);
  const [isPortfolio, setIsPortfolio] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [isResume, setIsResume] = useState(false);


  const loadPage = () => {
    if(sessionStorage.getItem("page")){
      setPage(JSON.parse(sessionStorage.getItem('page'))['eventKey']);
      if(currentPage==="Portfolio"){
        setIsAbout(false);
        setIsPortfolio(true);
      }else if(currentPage==="Contact"){
        setIsAbout(false);
        setIsContact(true);
      }else if(currentPage==="Resume"){
        setIsAbout(false);
        setIsResume(true);
      }else{
        setIsAbout(true);
      }
    }else{
      setPage("About");
      setIsAbout(true);
    }
  }

  return (
    <>
      <div className="body" onLoad={() => loadPage()}>
        <Header setPage={setPage} currentPage={currentPage} isAbout={isAbout} setIsAbout={setIsAbout} isPortfolio={isPortfolio} setIsPortfolio={setIsPortfolio} isContact={isContact} setIsContact={setIsContact} isResume={isResume} setIsResume={setIsResume}/>
        <Main currentPage={currentPage}/>
        <Footer className="footer"/>
      </div>
    </>
  );
}

export default App;
