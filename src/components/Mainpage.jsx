import React from 'react';
import {  Link , NavLink} from 'react-router-dom';
import './styles/mainpage2.css';


function Mainpage() {
   

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
        <Link className='link' to="/Photopage">
        <button className='button-main'>Photo</button>
        <h4 className='button-title-main'>Photography</h4>
        </Link>
      </div>     
        
      <div className='ui-page-main'>
        <Link className='link' to="/uipage">
        <button className='button-main'>UI</button>
        <h4 className='button-title-main'>UI/UX Design</h4>
        </Link>
      </div>

        <div className='design-page-main'>
        <Link className='link' to="/designpage">
        <button className='button-main'>DE</button>
        <h4 className='button-title-main'>Industrial Design</h4>
        </Link>
        </div>
        
        <div className='illustration-page-main'>
        <Link className='link' to="/blogpage">
        <button className='button-main'>Blog</button>
        </Link>
        <h4 className='button-title-main'>Blog</h4>
        </div>

        <div className='blog-page-main'>
        <Link className='link' to="/apppage">
        <button className='button-main'>WebApp</button>
        <h4 className='button-title-main'>WebApp+Semiotics</h4>
        </Link>
        </div>

        <div className='app-page-main'>
        <Link className='link' to="/illustpage">
        <button className='button-main'>Illustration</button>
        <h4 className='button-title-main'>illustration</h4>
        </Link>
        </div>
      
      </div>{/* "mainpage-container" */}

</>
    
  )
}

export default Mainpage;