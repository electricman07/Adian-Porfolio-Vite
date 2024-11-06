import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageList from "@/components/ImageList/ImageList";

import images from "../../assets/images";
import "./Portfolio.css";

function Portfolio() {
  const [nav1, setNav1] = useState(null);

  const [slider1, setSlider1] = useState(null);
  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  const settings = {
    className: "center",
    centerMode: false,
    centerPadding: "60px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    lazyLoad: true,
    asNavFor: ".slider-nav",
    focusOnSelect: true,

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
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section
        className="portfolio-container h-[120vh] max-am-[140vh] mt-28 pt-28 max-sm:pt-12 max-sm:flex max-sm:flex-col max-sm:items-center"
        id="portfolio"
      >
        <div className="portfolio-header text-3xl text-center mb-10">
          <h2>Portfolio</h2>
        </div>
        <div className="image-slider ">
          <Slider
            {...settings}
            asNavFor={nav1}
            ref={(slider) => setSlider1(slider)}
          >
            {images.map((image) => (
              <div key={image.id} className="details-container">
                <ImageList image={image} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
export default Portfolio;
