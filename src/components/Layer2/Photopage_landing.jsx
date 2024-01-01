// import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/photopage_landing.css';
import img from './myimage2.jpg'



function Photopage() {
   

  return( 
    <>
     <header className="site-header3">
        <div className="wrapper-site-header_wrapper3">
        {/* <img src="myimage_1.jpg" alt="Logo" className="logo3" /> */}
        <img src= {img} alt="Logo" className="logo3" />
          {/* <h1 className="title-app3">Zen Artist</h1> */}
          <ul className="nav_wrapper3">
            <li className="nav_item3"><NavLink to="/">Home</NavLink></li>
            <li className="nav_item3"><a href="https://www.instagram.com/yu4nai/" target="_blank" rel="noreferrer">Instagram</a></li>
            {/* <li className="nav_item3"><a href="https://www.linkedin.com/in/zen-artist/" target="_blank" rel="noreferrer">Linkedin</a></li> */}
            <li className="nav_item3"><a href="https://www.behance.net/ynilevski" target="_blank" rel="noreferrer">Behance</a></li>
          </ul>
        </div>
      </header>

    <div className="photopage_landing-container"> 
      <div className='button_link_landing'>
        <Link className='link' to="/architectures">
        <button className='button-photopage_landing'>
        Architectures
        </button>
        </Link>
      </div>
        
      <div className='button_link_landing'>
        <Link className='link' to="/architectures">
        <button className='button-photopage_landing'>
        Architectures
        </button>
        </Link>
      </div>

      <div className='button_link_landing'>
        <Link className='link' to="/architectures">
        <button className='button-photopage_landing'>
        Architectures
        </button>
        </Link>
      </div>

      <div className='button_link_landing'>
        <Link className='link' to="/architectures">
        <button className='button-photopage_landing'>
        Architectures
        </button>
        </Link>
      </div>
        
      <div className='button_link_landing'>
        <Link className='link' to="/architectures">
        <button className='button-photopage_landing'>
        Architectures
        </button>
        </Link>
      </div>

      <div className='button_link_landing'>
        <Link className='link' to="/architectures">
        <button className='button-photopage_landing'>
        Architectures
        </button>
        </Link>
      </div>

      {/* <div className='photopage_landing'>
        <Link className='link' to="/architectures">
        <button className='button-photopage_landing'>Architectures</button>
        {/* <h4 className='button-title-photopage_landing'>Architectures</h4> */}
        {/* </Link> */}
      {/* </div>  */}
      
    </div>    
</>
    
  )
}
export default Photopage;