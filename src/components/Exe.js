import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
import Swiper from 'swiper';

const Carousel = () => {
  useEffect(() => {
    import('slick-carousel/slick/slick.js');
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h1>Carousel Example</h1>
      <Swiper {...settings}>
        <div>
          <img src="./images/c1.pmg" alt="Image 1" />
        </div>
        <div>
          <img src="./images/c1.pmg" alt="Image 1" />
        </div>
        <div>
          <img src="./images/c1.pmg" alt="Image 1" />
        </div>
        <div>
          <img src="./images/c1.pmg" alt="Image 1" />
        </div>
        <div>
          <img src="./images/c1.pmg" alt="Image 1" />
        </div>
        <div>
          <img src="./images/c1.pmg" alt="Image 1" />
        </div>
        
      </Swiper>
    </div>
  );
};

export default Carousel;




