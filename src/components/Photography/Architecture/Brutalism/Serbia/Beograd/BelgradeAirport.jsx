import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/brutalismserbia.css';
import image1 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/airport/1.jpg";
// import image2 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/airport/2.jpg";
import image3 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/airport/3.jpg";
import image4 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/airport/4.jpg";
import image5 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/airport/5.jpg";
import image6 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/airport/6.jpg";
import image7 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/airport/7.jpg";


function Architectures() {
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

  const calculateEnlargedImgSize = () => {
    if (enlargedImg) {
      const img = new Image();
      img.src = enlargedImg;
      const imgAspectRatio = img.width / img.height;
      const maxWidth = windowSize.width * 0.8;
      const maxHeight = windowSize.height * 0.8;
      
      let width = maxWidth;
      let height = maxWidth / imgAspectRatio;

      if (height > maxHeight) {
        height = maxHeight;
        width = maxHeight * imgAspectRatio;
      }

      return { width, height };
    }

    return { width: 0, height: 0 };
  };

  const { width, height } = calculateEnlargedImgSize();

  return( 
    <>
     <header class="site-header">
      <div class="wrapper-site-header_wrapper">
      <h1 className='title-app'>Yu's private works 18+</h1>
          <ul class="nav_wrapper">
            <li class="nav_item"><NavLink to="/">Home</NavLink></li>
            <li class="nav_item"><a href="https://www.instagram.com/yu4nai/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li class="nav_item"><a href="https://www.linkedin.com/in/yu-yonai-02b82b15a/" target="_blank" rel="noreferrer">Linkedin</a></li>
            <li class="nav_item"><a href="https://www.behance.net/b4436605" target="_blank" rel="noreferrer">Behance</a></li>
            
          </ul>
      </div>
    </header>
    <div className="brutalist-photos">

<div className="photo-container">
  
  <img src={image1} alt="belgrade1" className="photo" onClick={() => handleClick(image1)} />  
</div>

{/* <div className="photo-container">
 
  <img src={image2} alt="belgrade2" className="photo" onClick={() => handleClick(image2)}/>
</div> */}

<div className="photo-container">
 
  <img src={image3} alt="belgrade3" className="photo" onClick={() => handleClick(image3)}/>
</div>

<div className="photo-container">
  
<img src={image4} alt="belgrade4" className="photo" onClick={() => handleClick(image4)} />
</div>

<div className="photo-container">
 
<img src={image5} alt="belgrade5" className="photo" onClick={() => handleClick(image5)} />
</div>

<div className="photo-container">

<img src={image6} alt="belgrade6" className="photo" onClick={() => handleClick(image6)} />
</div>

<div className="photo-container">
 
<img src={image7} alt="belgrade7" className="photo" onClick={() => handleClick(image7)} />
</div>
</div>
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
        
       
      
</>
    
  )
}
export default Architectures;