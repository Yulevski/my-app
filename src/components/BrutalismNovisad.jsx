import React, {useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/brutalismserbia.css';
import image1 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/1.jpg";
import image2 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/2.jpg";
import image3 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/3.JPG";
import image311 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/311.jpg";
import image4 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/4.JPG";
import image5 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/5.JPG";
import image6 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/6.JPG";
import image7 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/7.jpg";
import image8 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/8.jpg";
import image9 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/9.JPG";
import image10 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/10.JPG";
import image11 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/11.JPG";
import image12 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/12.jpg";
import image13 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/13.JPG";
import image14 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/14.JPG";
import image15 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/15.JPG";
import image16 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/16.JPG";
import image17 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/17.JPG";
import image18 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/18.JPG";
import image19 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/19.JPG";
import image20 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/20.jpg";
import image21 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/21.jpg";
import image22 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/22.jpg";
import image23 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/23.jpg";
import image24 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/24.jpg";
import image25 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/25.jpg";
import image26 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/26.jpg";
import image27 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/27.jpg";
import image28 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/28.jpg";
import image29 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/29.jpg";
import image30 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/30.jpg";
import image31 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/31.jpg";
import image32 from "./styles/pictures/Brutalist/architecture/Serbia/Novisad/32.JPG";

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
            <li class="nav_item"><NavLink to="/">Home</NavLink></li>
            <li class="nav_item"><a href="https://www.instagram.com/yu4nai/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li class="nav_item"><a href="https://www.linkedin.com/in/yu-yonai-02b82b15a/" target="_blank" rel="noreferrer">Linkedin</a></li>
            <li class="nav_item"><a href="https://www.behance.net/b4436605" target="_blank" rel="noreferrer">Behance</a></li>
            
          </ul>
      </div>
    </header>

    <div className="brutalist-photos">

  <div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image1)} >
      <div class="text" >Aeronautical Museum Belgrade</div>
    </div>
    <img src={image1} alt="belgrade1" className="photo" onClick={() => handleClick(image1)} />  
  </div>

  <div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image2)} >
      <div class="text" >Western Gate of Belgrade, Novi Beograd</div>
    </div>
    <img src={image2} alt="belgrade2" className="photo" onClick={() => handleClick(image2)}/>
  </div>

    <div className="photo-container">
  <div className="overlay" onClick={() =>window.location.href='/novisadstation'}>
    <li className="nav_item">
      <NavLink to="/novisadstation"></NavLink>
    </li>
    <div className="text">A control tower in Belgrade airport and MORE</div>
  </div>
  <img src={image3} alt="belgrade3" className="photo" />
</div>

  <div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image311)} >
      <div class="text" >Western Gate of Belgrade, Novi Beograd</div>
    </div>
    <img src={image311} alt="belgrade3" className="photo" onClick={() => handleClick(image311)}/>
  </div>

  <div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image4)} >
      <div class="text" >A clock on the Dunav Penzije, Belgrade, Serbia </div>
    </div>
  <img src={image4} alt="belgrade4" className="photo" onClick={() => handleClick(image4)} />
  </div>

  <div className="photo-container">
  <div className="overlay" onClick={() =>window.location.href='/belgradeairport'}>
    <li className="nav_item">
      <NavLink to="/belgradeairport"></NavLink>
    </li>
    <div className="text">A control tower in Belgrade airport and MORE</div>
  </div>
  <img src={image8} alt="belgrade8" className="photo" />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image5)} >
      <div class="text" >A building somehwhere in Belgrade</div>
    </div>
  <img src={image5} alt="belgrade5" className="photo" onClick={() => handleClick(image5)} />
</div>


<div className="photo-container">
  <div class="overlay" onClick={() => handleClick(image6)} >
      <div class="text" >A building somehwhere in Belgrade</div>
    </div>
  <img src={image6} alt="belgrade6" className="photo" onClick={() => handleClick(image6)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image7)} >
      <div class="text" >Palace Serbia, Novigrad</div>
    </div>
  <img src={image7} alt="belgrade7" className="photo" onClick={() => handleClick(image7)} />
</div>



<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image9)} >
      <div class="text" >A building somehwhere in Belgrade</div>
    </div>
  <img src={image9} alt="belgrade9" className="photo" onClick={() => handleClick(image9)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image10)} >
      <div class="text" >A building somehwhere in Novi Belgrade</div>
    </div>
  <img src={image10} alt="belgrade10" className="photo" onClick={() => handleClick(image10)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image11)} >
      <div class="text" >A Hotel near the central bus station</div>
    </div>
  <img src={image11} alt="belgrade11" className="photo" onClick={() => handleClick(image11)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image12)} >
      <div class="text" >Музеј савремене уметности, new belgrade,</div>
    </div>
  <img src={image12} alt="belgrade12" className="photo" onClick={() => handleClick(image12)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image13)} >
      <div class="text" >A building Novi Beograd</div>
    </div>
  <img src={image13} alt="belgrade13" className="photo" onClick={() => handleClick(image13)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image14)} >
      <div class="text" >A building Novi Beograd</div>
    </div>
  <img src={image14} alt="belgrade14" className="photo" onClick={() => handleClick(image14)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image15)} >
      <div class="text" >A block in Novi Beograd</div>
    </div>
  <img src={image15} alt="belgrade15" className="photo" onClick={() => handleClick(image15)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image16)} >
      <div class="text" >A block in Novi Beograd</div>
    </div>
  <img src={image16} alt="belgrade16" className="photo" onClick={() => handleClick(image16)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image17)} >
      <div class="text"> A restaurant in Novi Beograd</div>
    </div>
  <img src={image17} alt="belgrade17" className="photo" onClick={() => handleClick(image17)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image18)} >
      <div class="text" >A control tower in Belgrade airport</div>
    </div>
  <img src={image18} alt="belgrade18" className="photo" onClick={() => handleClick(image18)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image19)} >
      <div class="text" >A control tower in Belgrade airport</div>
    </div>
  <img src={image19} alt="belgrade19" className="photo" onClick={() => handleClick(image19)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image20)} >
      <div class="text" >Blocks, Novi Beograd, Serbia</div>
    </div>
  <img src={image20} alt="belgrade20" className="photo" onClick={() => handleClick(image20)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image21)} >
      <div class="text" >A building in Makedonska Street, Belgrade,Serbia</div>
    </div>
  <img src={image21} alt="belgrade21" className="photo" onClick={() => handleClick(image21)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image22)} >
      <div class="text" >An Object in front of the restaurant Dining Sailor, Belgrade</div>
    </div>
  <img src={image22} alt="belgrade22" className="photo" onClick={() => handleClick(image22)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image23)} >
      <div class="text" >An Object in front of the restaurant Dining Sailor, Belgrade</div>
    </div>
  <img src={image23} alt="belgrade23" className="photo" onClick={() => handleClick(image23)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image24)} >
      <div class="text" >An Object in front of the restaurant Dining Sailor, Belgrade</div>
    </div>
  <img src={image24} alt="belgrade24" className="photo" onClick={() => handleClick(image24)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image25)} >
      <div class="text" >An Object in front of the restaurant Dining Sailor, Belgrade</div>
    </div>
  <img src={image25} alt="belgrade25" className="photo" onClick={() => handleClick(image25)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image26)} >
      <div class="text" >An Object in front of the restaurant Dining Sailor, Belgrade</div>
    </div>
  <img src={image26} alt="belgrade26" className="photo" onClick={() => handleClick(image26)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image27)} >
      <div class="text" >An Object in front of the restaurant Dining Sailor, Belgrade</div>
    </div>
  <img src={image27} alt="belgrade27" className="photo" onClick={() => handleClick(image27)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image28)} >
      <div class="text" >An Object in front of the restaurant Dining Sailor, Belgrade</div>
    </div>
  <img src={image28} alt="belgrade28" className="photo" onClick={() => handleClick(image28)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image29)} >
      <div class="text" >An Object in front of the restaurant Dining Sailor, Belgrade</div>
    </div>
  <img src={image29} alt="belgrade29" className="photo" onClick={() => handleClick(image29)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image30)} >
      <div class="text" >An Object in front of the restaurant Dining Sailor, Belgrade</div>
    </div>
  <img src={image30} alt="belgrade30" className="photo" onClick={() => handleClick(image30)} />
</div>

<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image31)} >
      <div class="text" >An Object in front of the restaurant Dining Sailor, Belgrade</div>
    </div>
  <img src={image31} alt="belgrade31" className="photo" onClick={() => handleClick(image31)} />
</div>
<div className="photo-container">
    <div class="overlay" onClick={() => handleClick(image32)} >
      <div class="text" >An Object in front of the restaurant Dining Sailor, Belgrade</div>
    </div>
  <img src={image32} alt="belgrade32" className="photo" onClick={() => handleClick(image32)} />
</div>

<div className="photo-container">
</div>
<div className="photo-container">
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