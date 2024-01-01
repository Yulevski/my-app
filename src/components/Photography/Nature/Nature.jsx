import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/styles.css';
import img from './myimage2.jpg';
import image1 from "./styles/40591_2.jpg";
import image1w from "./styles/40591_2.jpg";

function UIpage() {
 
  const [enlargedImg, setEnlargedImg] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleClick = (image) => {
    setEnlargedImg(image);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClickOutsideImage = (event) => {
    // Check if the click occurred outside the enlarged image
    if (event.target.className === 'dialogue-overlay') {
      setEnlargedImg(null);
      console.log('Enlarged image closed');
    }
  };
  useEffect(() => {
    if (enlargedImg) {
      console.log('Enlarged image opened:', enlargedImg);

      // Attach the event listener to the whole document when the image is enlarged
      document.addEventListener('click', handleClickOutsideImage);

      // Return a cleanup function to remove the event listener when the component unmounts
      return () => {
        document.removeEventListener('click', handleClickOutsideImage);
      };
    }
  }, [enlargedImg]);

  const calculateEnlargedImgSize = () => {
    if (enlargedImg) {
      const img = new Image();
      img.src = enlargedImg;
      const imgAspectRatio = img.width / img.height;
      const maxWidth = windowSize.width * 0.8;
      const maxHeight = windowSize.height * 0.8;
      
      let width = maxWidth;
      let height = maxWidth / imgAspectRatio;

      // if (height > maxHeight) {
      //   height = maxHeight;
      //   width = maxHeight * imgAspectRatio;
      // }
      if(img.height>img.width){
          height=maxHeight;
          width=maxHeight*imgAspectRatio;
      }
      else if(img.height<img.width){
          width=maxWidth;
          height=maxWidth/imgAspectRatio;
      }

      return { width, height };
    }

    return { width: 0, height: 0 };
  };

  const { width, height } = calculateEnlargedImgSize();



  const PhotoContainer = ({ imageUrl, webpUrl, altText, overlayText, onClickHandler }) => {
    return (
      <div className="Nature-container">
        {/* <div className="overlay" onClick={() => onClickHandler(imageUrl)}>
          <div className="text">{overlayText}</div>
        </div> */}
        <picture>
          {webpUrl && <source srcSet={webpUrl} type="image/webp" />}
          <img src={imageUrl} alt={altText} className="photo" onClick={() => onClickHandler(imageUrl)} />
        </picture>
      </div>
    );
  };
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


  <div className="nature-photos">

             {/* PhotoContainer for image 1 */}
      <PhotoContainer
          imageUrl={image1}
          webpUrl={image1w}
          altText="belgrade1"
          overlayText="Western Gate of Belgrade, Novi Beograd"
          onClickHandler={handleClick}
        />

    <PhotoContainer
          imageUrl={image1}
          webpUrl={image1w}
          altText="belgrade1"
          overlayText="Western Gate of Belgrade, Novi Beograd"
          onClickHandler={handleClick}
        />
            <PhotoContainer
          imageUrl={image1}
          webpUrl={image1w}
          altText="belgrade1"
          overlayText="Western Gate of Belgrade, Novi Beograd"
          onClickHandler={handleClick}
        />
         <PhotoContainer
          imageUrl={image1}
          webpUrl={image1w}
          altText="belgrade1"
          overlayText="Western Gate of Belgrade, Novi Beograd"
          onClickHandler={handleClick}
        />

    <PhotoContainer
          imageUrl={image1}
          webpUrl={image1w}
          altText="belgrade1"
          overlayText="Western Gate of Belgrade, Novi Beograd"
          onClickHandler={handleClick}
        />
            <PhotoContainer
          imageUrl={image1}
          webpUrl={image1w}
          altText="belgrade1"
          overlayText="Western Gate of Belgrade, Novi Beograd"
          onClickHandler={handleClick}
        />
     


{enlargedImg && (
          <div className="dialogue-overlay">
            <div className="dialogue-content">
              <img
                src={enlargedImg}
                alt="enlarged"
                className="enlarged-image"
                style={{ width, height }}
              />
              <button className='button-brutalism' onClick={() => setEnlargedImg(null)}>Close</button>
            </div>
          </div>
        )}
    </div>
</>
    
  )
}
export default UIpage;