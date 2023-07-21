// import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/photopage2.css';


function Photopage() {
   

  return( 
    <>
      <header class="site-header">
      <div class="wrapper-site-header_wrapper">
      <h1 className='title-app'>Yu's private works 18+</h1>
          <ul class="nav_wrapper">
            <li class="nav_item"><NavLink to="/main">Main</NavLink></li>
            <li class="nav_item"><NavLink to="/main">Main</NavLink></li>
            <li class="nav_item"><NavLink to="/main">Main</NavLink></li>
            <li class="nav_item"><NavLink to="/main">Main</NavLink></li>
            <li class="nav_item"><NavLink to="/main">Main</NavLink></li>
          </ul>
      </div>
    </header>

    <div className="Theme-page">

      <div className='top-theme'>
          <h1 className='title-photo'>Photopage</h1>
          <h2 className='main-page-photo'><Link to="/">to Main</Link></h2>

          
      </div>

    </div>
</>
    
  )
}
export default Photopage;