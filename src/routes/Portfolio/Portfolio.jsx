import images from "./images";

const ImageSlider = ({ images }) => {
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
      <section
        className="portfolio-container h-screen"
        id="portfolio"
      >
        <div className="portfolio-header text-3xl text-center ">
          <h2>Portfolio</h2>
        </div>
        <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
      </section>
    </>
  );
}

export default Portfolio;
