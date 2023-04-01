import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React, { useState } from 'react';

function App() {

  const [ currentPage, setPage ] = useState("About");

  return (
    <>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,600,1,200" />
      </head>
      <div className="body">
        <Header setPage={setPage} currentPage={currentPage}/>
        <Main currentPage={currentPage}/>
        <Footer className="footer"/>
      </div>
    </>
  );
}

export default App;
