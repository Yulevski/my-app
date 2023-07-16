// import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/photopage.css';


function Photopage() {
   

  return( 
    <>
     <header className="site-header">
      <div className="wrapper-site-header_wrapper">
      <h1 className='title-app'>Yu's private works 18+</h1>
          <ul class="nav_wrapper">
            <li class="nav_item"><NavLink to="/">Home</NavLink></li>
            <li class="nav_item"><a href="https://www.instagram.com/yu4nai/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li class="nav_item"><a href="https://www.linkedin.com/in/yu-yonai-02b82b15a/" target="_blank" rel="noreferrer">Linkedin</a></li>
            <li class="nav_item"><a href="https://www.behance.net/b4436605" target="_blank" rel="noreferrer">Behance</a></li>
            
          </ul>
      </div>
    </header>
    <div className="photopage-container"> 
      <div className='photo-page-photo'>
        <Link className='link' to="/architectures">
        <button className='button-photo'>Architectures</button>
        <h4 className='button-title-photo'>Architectures</h4>
        </Link>
      </div>
      <div className='photo-page-photo'>
        <Link className='link' to="/nature">
        <button className='button-photo'>Nature</button>
        <h4 className='button-title-photo'>Nature</h4>
        </Link>
      </div> 
      <div className='photo-page-photo'>
        <Link className='link' to="/street">
        <button className='button-photo'>Street</button>
        <h4 className='button-title-photo'>Street</h4>
        </Link>
      </div>
      <div className='photo-page-photo'>
        <Link className='link' to="/airplanes">
        <button className='button-photo'>Airplanes</button>
        <h4 className='button-title-photo'>Airplanes</h4>
        </Link>
      </div>
    </div>    
</>
    
  )
}
export default Photopage;