import React, {useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/brutalism.css';
import image1 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/1.jpg";
import image2 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/2.jpg";
import image3 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/3.JPG";
import image4 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/4.JPG";
import image5 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/5.jpg";
import image6 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/6.jpg";
import image7 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/7.jpg";
import image8 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/8.jpg";
import image9 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/9.jpg";
import image10 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/10.jpg";
import image11 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/11.jpg";
import image12 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/12.JPG";
import image13 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/13.jpg";
import image14 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/14.jpg";
import image15 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/15.jpg";
import image16 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/16.jpg";
import image17 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/17.jpg";
import image18 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/18.jpg";
import image19 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/19.jpg";
import image20 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/20.JPG";
import image21 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/21.jpg";
import image22 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/22.jpg";

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
    <header className="site-header">
      <div className="wrapper-site-header_wrapper">
      <h1 className='title-app'>Yu's private works 18+</h1>
          <ul class="nav_wrapper">
            <li class="nav_item"><NavLink to="/main">Home</NavLink></li>
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
  <div className="photo-container">
    <img src={image2} alt="belgrade2" className="photo" onClick={() => handleClick(image2)}/>
  </div>
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
<div className="photo-container">
  <img src={image8} alt="belgrade8" className="photo" onClick={() => handleClick(image8)} />
</div>
<div className="photo-container">
  <img src={image9} alt="belgrade9" className="photo" onClick={() => handleClick(image9)} />
</div>
<div className="photo-container">
  <img src={image10} alt="belgrade10" className="photo" onClick={() => handleClick(image10)} />
</div>
<div className="photo-container">
  <img src={image11} alt="belgrade11" className="photo" onClick={() => handleClick(image11)} />
</div>
<div className="photo-container">
  <img src={image12} alt="belgrade12" className="photo" onClick={() => handleClick(image12)} />
</div>
<div className="photo-container">
  <img src={image13} alt="belgrade13" className="photo" onClick={() => handleClick(image13)} />
</div>
<div className="photo-container">
  <img src={image14} alt="belgrade14" className="photo" onClick={() => handleClick(image14)} />
</div>
<div className="photo-container">
  <img src={image15} alt="belgrade15" className="photo" onClick={() => handleClick(image15)} />
</div>
<div className="photo-container">
  <img src={image16} alt="belgrade16" className="photo" onClick={() => handleClick(image16)} />
</div>
<div className="photo-container">
  <img src={image17} alt="belgrade17" className="photo" onClick={() => handleClick(image17)} />
</div>
<div className="photo-container">
  <img src={image18} alt="belgrade18" className="photo" onClick={() => handleClick(image18)} />
</div>
<div className="photo-container">
  <img src={image19} alt="belgrade19" className="photo" onClick={() => handleClick(image19)} />
</div>
<div className="photo-container">
  <img src={image20} alt="belgrade20" className="photo" onClick={() => handleClick(image20)} />
</div>
<div className="photo-container">
  <img src={image21} alt="belgrade21" className="photo" onClick={() => handleClick(image21)} />
</div>
<div className="photo-container">
  <img src={image22} alt="belgrade22" className="photo" onClick={() => handleClick(image22)} />
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
              <button onClick={() => setEnlargedImg(null)}>Close</button>
            </div>
          </div>
        )}
  {/* <img src={image1} alt="belgrade1" className="photo" />
    <img src={image2} alt="belgrade2" className="photo" />
    <img src={image3} alt="belgrade3" className="photo" />
    <img src={image4} alt="belgrade4" className="photo" />
    <img src={image5} alt="belgrade5" className="photo" />
    <img src={image6} alt="belgrade6" className="photo" />
    <img src={image7} alt="belgrade7" className="photo" />
    <img src={image8} alt="belgrade8" className="photo" />
    <img src={image9} alt="belgrade9" className="photo" />
    <img src={image10} alt="belgrade10" className="photo" />
    <img src={image11} alt="belgrade11" className="photo" />
    <img src={image12} alt="belgrade12" className="photo" />
    <img src={image13} alt="belgrade13" className="photo" />
    <img src={image14} alt="belgrade14" className="photo" />
    <img src={image15} alt="belgrade15" className="photo" />
    <img src={image16} alt="belgrade16" className="photo" />
    <img src={image17} alt="belgrade17" className="photo" />
    <img src={image18} alt="belgrade18" className="photo" />
    <img src={image19} alt="belgrade19" className="photo" />
    <img src={image20} alt="belgrade20" className="photo" />
    <img src={image21} alt="belgrade21" className="photo" />
    <img src={image22} alt="belgrade22" className="photo" />  */}

      {/* Add more <img> elements for additional photos */}
    </div>
</>
    
  )
}
export default UIpage;