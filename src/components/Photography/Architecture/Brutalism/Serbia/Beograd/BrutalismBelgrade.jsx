import React, {useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/brutalismserbia.css';
import image1 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/1.jpg";
import image2 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/2.jpg";
import image3 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/3.JPG";
import image4 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/4.JPG";
import image5 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/5.jpg";
import image51 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/51.JPG";
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
import image1w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/1.webp";
import image2w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/2.webp";
import image3w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/3.webp";
import image4w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/4.webp";
import image5w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/5.webp";
import image51w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/51w.webp";
import image6w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/6.webp";
import image7w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/7.webp";
import image8w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/8.webp";
import image9w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/9.webp";
import image10w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/10.webp";
import image11w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/11.webp";
import image12w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/12.webp";
import image13w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/13.webp";
import image14w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/14.webp";
import image15w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/15.webp";
import image16w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/16.webp";
import image17w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/17.webp";
import image18w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/18.webp";
import image19w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/19.webp";
import image20w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/20.webp";
import image21w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/21.webp";
import image22w from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/webp/22.webp"

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
      <div className="photo-container">
        <div className="overlay" onClick={() => onClickHandler(imageUrl)}>
          <div className="text">{overlayText}</div>
        </div>
        <picture>
          {webpUrl && <source srcSet={webpUrl} type="image/webp" />}
          <img src={imageUrl} alt={altText} className="photo" onClick={() => onClickHandler(imageUrl)} />
        </picture>
      </div>
    );
  };
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

             {/* PhotoContainer for image 1 */}
      <PhotoContainer
          imageUrl={image1}
          webpUrl={image1w}
          altText="belgrade1"
          overlayText="Western Gate of Belgrade, Novi Beograd"
          onClickHandler={handleClick}
        />
                {/* PhotoContainer for image 2 */}
        <PhotoContainer
          imageUrl={image2}
          webpUrl={image2w}
          altText="belgrade2"
          overlayText="Western Gate of Belgrade, Novi Beograd"
          onClickHandler={handleClick}
        />
             {/* PhotoContainer for image 3 */}
             <PhotoContainer
          imageUrl={image3}
          webpUrl={image3w}
          altText="belgrade3"
          overlayText="Western Gate of Belgrade, Novi Beograd"
          onClickHandler={handleClick}
        />

        {/* PhotoContainer for image 4 */}
        <PhotoContainer
          imageUrl={image4}
          webpUrl={image4w}
          altText="belgrade4"
          overlayText="A clock on the Dunav Penzije, Belgrade, Serbia"
          onClickHandler={handleClick}
        />

        {/* PhotoContainer for image 5 */}
        <PhotoContainer
          imageUrl={image5}
          webpUrl={image5w}
          altText="belgrade5"
          overlayText="A building somewhere in Belgrade"
          onClickHandler={handleClick}
        />

        {/* PhotoContainer for image 51 */}
        <PhotoContainer
          imageUrl={image51}
          webpUrl={image51w}
          altText="belgrade51"
          overlayText="A post office near the central bus station"
          onClickHandler={handleClick}
        />

        {/* PhotoContainer for image 6 */}
        <PhotoContainer
          imageUrl={image6}
          webpUrl={image6w}
          altText="belgrade6"
          overlayText="A building somewhere in Belgrade"
          onClickHandler={handleClick}
        />

        {/* PhotoContainer for image 7 */}
        <PhotoContainer
          imageUrl={image7}
          webpUrl={image7w}
          altText="belgrade7"
          overlayText="Palace Serbia, Novigrad"
          onClickHandler={handleClick}
        />

        {/* PhotoContainer for image 8 */}
        <PhotoContainer
          imageUrl={image8}
          webpUrl={image8w}
          altText="belgrade8"
          overlayText="A control tower in Belgrade airport and MORE"
          onClickHandler={handleClick}
        />
         {/* PhotoContainer for image 9 */}
  <PhotoContainer
    imageUrl={image9}
    webpUrl={image9w}
    altText="belgrade9"
    overlayText="A building somewhere in Belgrade"
    onClickHandler={handleClick}
  />

  {/* PhotoContainer for image 10 */}
  <PhotoContainer
    imageUrl={image10}
    webpUrl={image10w}
    altText="belgrade10"
    overlayText="A building somewhere in Novi Belgrade"
    onClickHandler={handleClick}
  />

  {/* PhotoContainer for image 11 */}
  <PhotoContainer
    imageUrl={image11}
    webpUrl={image11w}
    altText="belgrade11"
    overlayText="A Hotel near the central bus station"
    onClickHandler={handleClick}
  />

  {/* PhotoContainer for image 12 */}
  <PhotoContainer
    imageUrl={image12}
    webpUrl={image12w}
    altText="belgrade12"
    overlayText="Музеј савремене уметности, New Belgrade"
    onClickHandler={handleClick}
  />

  {/* PhotoContainer for image 13 */}
  <PhotoContainer
    imageUrl={image13}
    webpUrl={image13w}
    altText="belgrade13"
    overlayText="A building Novi Beograd"
    onClickHandler={handleClick}
  />

  {/* PhotoContainer for image 14 */}
  <PhotoContainer
    imageUrl={image14}
    webpUrl={image14w}
    altText="belgrade14"
    overlayText="A building Novi Beograd"
    onClickHandler={handleClick}
  />

  {/* PhotoContainer for image 15 */}
  <PhotoContainer
    imageUrl={image15}
    webpUrl={image15w}
    altText="belgrade15"
    overlayText="A block in Novi Beograd"
    onClickHandler={handleClick}
  />

  {/* PhotoContainer for image 16 */}
  <PhotoContainer
    imageUrl={image16}
    webpUrl={image16w}
    altText="belgrade16"
    overlayText="A block in Novi Beograd"
    onClickHandler={handleClick}
  />

  {/* PhotoContainer for image 17 */}
  <PhotoContainer
    imageUrl={image17}
    webpUrl={image17w}
    altText="belgrade17"
    overlayText="A restaurant in Novi Beograd"
    onClickHandler={handleClick}
  />

  {/* PhotoContainer for image 18 */}
  <PhotoContainer
    imageUrl={image18}
    webpUrl={image18w}
    altText="belgrade18"
    overlayText="A control tower in Belgrade airport"
    onClickHandler={handleClick}
  />

  {/* PhotoContainer for image 19 */}
  <PhotoContainer
    imageUrl={image19}
    webpUrl={image19w}
    altText="belgrade19"
    overlayText="A control tower in Belgrade airport"
    onClickHandler={handleClick}
  />

  {/* PhotoContainer for image 20 */}
  <PhotoContainer
    imageUrl={image20}
    webpUrl={image20w}
    altText="belgrade20"
    overlayText="Blocks, Novi Beograd, Serbia"
    onClickHandler={handleClick}
  />

   {/* PhotoContainer for image 21 */}
   <PhotoContainer
          imageUrl={image21}
          webpUrl={image21w}
          altText="belgrade21"
          overlayText="A building in Makedonska Street, Belgrade, Serbia"
          onClickHandler={handleClick}
        />

        {/* PhotoContainer for image 22 */}
        <PhotoContainer
          imageUrl={image22}
          webpUrl={image22w}
          altText="belgrade22"
          overlayText="An Object in front of the restaurant Dining Sailor, Belgrade"
          onClickHandler={handleClick}
        />
    
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
    </div>
</>
    
  )
}
export default UIpage;