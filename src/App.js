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
      <div className="body">
        <Header setPage={setPage} currentPage={currentPage}/>
        <Main currentPage={currentPage}/>
        <Footer className="footer"/>
      </div>
    </>
  );
}

export default App;
