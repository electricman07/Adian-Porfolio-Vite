import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import images from "./images";
import "./Portfolio.css";

function Portfolio() {
  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider1, setSlider1] = useState(null);
  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
    autoplaySpeed: 2000,
    lazyLoad: true,
    asNavFor: ".slider-nav",
    focusOnSelect: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="portfolio-container h-screen" id="portfolio">
        <div className="portfolio-header text-3xl text-center mb-10">
          <h2>Portfolio</h2>
        </div>
        <div className="image-slider">
          <Slider
            {...settings}
            asNavFor={nav1}
            ref={(slider) => setSlider1(slider)}
          >
            {images.map((image) => (
              <div key={image.id}>
                <div className="img-body">
                  <img src={image.image} alt={image.alt} />
                </div>
                <h3 className="image-title mt-10">{image.title}</h3>
                <div className="image-text text-center mt-4">
                  <p>{image.caption}</p>
                </div>
              </div>
            ))}
          </Slider>
          <div className="thumb-wrapper">
            {images.map((item, idx) => (
              <div
                key={item.id}
                className={currentSlide === idx ? "active" : null}
                onClick={() => {
                  slider1?.slickGoTo(idx);
                }}
              >
                <img src={item.image} alt={item.alt} />
                {currentSlide}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
