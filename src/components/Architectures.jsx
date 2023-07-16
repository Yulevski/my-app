// import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';


function Architectures() {
   

  return( 
    <>
     <header class="site-header">
      <div class="wrapper-site-header_wrapper">
      <h1 className='title-app'>Yu's private works 18+</h1>
          <ul class="nav_wrapper">
            <li class="nav_item"><NavLink to="/main">Home</NavLink></li>
            <li class="nav_item"><a href="https://www.instagram.com/yu4nai/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li class="nav_item"><a href="https://www.linkedin.com/in/yu-yonai-02b82b15a/" target="_blank" rel="noreferrer">Linkedin</a></li>
            <li class="nav_item"><a href="https://www.behance.net/b4436605" target="_blank" rel="noreferrer">Behance</a></li>
            
          </ul>
      </div>
    </header>

    <div className="mainpage-container"> 
      <div className='photo-page-main'>
        <Link className='link' to="/Brutalism">
        <button className='button-main'>Brutalism</button>
        <h4 className='button-title-main'>Brutalism Architectures</h4>
        </Link>
      </div>     
        
      <div className='ui-page-main'>
        <Link className='link' to="/Initaly">
        <button className='button-main'>In Italy</button>
        <h4 className='button-title-main'>In Italy</h4>
        </Link>
      </div>

        <div className='design-page-main'>
        <Link className='link' to="/Injapan">
        <button className='button-main'>In Japan</button>
        <h4 className='button-title-main'>In Japan</h4>
        </Link>
        </div>
        
       
      
      </div>{/* "mainpage-container" */}
</>
    
  )
}
export default Architectures;