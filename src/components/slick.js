import React from "react";
import Slider from "react-slick";
import slick from '../data/slick';

export default function SimpleSlider() {
  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 5,
    nextArrow: <img alt='next' src={slick.nextImage}/>,
    prevArrow: <img alt='prev' src={slick.prevImage} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  return (
    <Slider {...settings}>
      {slick.images.map((image, idx) => <div id='slider-image-container' key={idx}><img className='mx-auto' src={image} alt='platform'/></div>)}
    </Slider>
  );
}