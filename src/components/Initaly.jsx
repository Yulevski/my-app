// import React, { useState, useEffect } from 'react';
import { Link,NavLink } from 'react-router-dom';


function UIpage() {
   

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
    <h1>UI page</h1>
    <div className="Theme-page">
    <h2 className='main-page-ui'><Link to="/">to Main</Link></h2>

    </div>
</>
    
  )
}
export default UIpage;