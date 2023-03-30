import Navigation from './Navigation.js';


function Header(props) {

  return (
    <div className="header">
      <Navigation setPage={props.setPage} currentPage={props.currentPage}/>
      <h2 className="title">G<span className='hide-letters'>il </span>Y<span className='hide-letters'>oung</span></h2>
    </div>
  );
  
}

export default Header;
