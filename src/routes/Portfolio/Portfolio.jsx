import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import images from "./images";
import "./Portfolio.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

function Portfolio() {
  return (
    <>
      <section className="portfolio-container h-screen" id="portfolio">
        <div className="portfolio-header text-3xl text-center mb-10">
          <h2>Portfolio</h2>
        </div>
        <div className="image-slider">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image.image} alt={`Slide ${index}`} />
                <h3 className="image-title  mt-10">{image.title}</h3>
                <div className="image-text text-center mt-4">
                  <p>{image.caption}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
