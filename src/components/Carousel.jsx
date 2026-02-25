import React from "react";
import Slider from "react-slick";
import CardTransparent from './CardTransparent';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  pauseOnHover: true,
  };
const Carousel = ({children}) => {
    const slides = React.Children.toArray(children);
    console.log("aqui los children del carousel", children)
  return (
      <div className="w-[100vw] max-w-5xl mx-auto">
        <Slider {...settings}>
            {slides.map((child, index) => (
                <div key={index}>
                    {child}
                </div>
            ))}
        </Slider>
      </div>
  );
};

export default Carousel
