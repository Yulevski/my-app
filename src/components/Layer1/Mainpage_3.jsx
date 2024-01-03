import React from 'react';
import {  Link , NavLink} from 'react-router-dom';
import './styles/mainpage3.css';
import img from './myimage2.jpg';
// import imgblog from './styles/pictures/batch_IMGP4479.jpg';
// import imgleaf from './styles/pictures/batch_IMGP6000.jpg';

function Mainpage() {
  return (
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

      <div className="mainpage-container3">
        <div className='photo-page-main3'>
          <Link className='link3' to="https://yonaiyuu.wixsite.com/yu-s-private-photos">
            <button className='button-main3'>Explore</button>
            <h4 className='button-title-main3'>Private Photos</h4>
          </Link>
        </div>

        <div className='blog-page-main3'>
          <Link className='link3' to="https://samurailevski.blogspot.com/">
            <button className='button-main4'>Explore</button>
            <h4 className='button-title-main3'>Private Stories</h4>
          </Link>
        </div>
      </div>{/* "mainpage-container" */}
    </>
  );
}

export default Mainpage;
