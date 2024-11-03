import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import images from "./images";

function Portfolio() {
  return (
    <>
      <section className="portfolio-container" id="portfolio">
        <div className="portfolio-header text-3xl text-center ">
          <h2>Portfolio</h2>
        </div>
        <div className="portfolio-carousel-container">
          <div className="slide-container">
            <Fade>
              {images.map((fadeImage, index) => (
                <div key={index}>
                  <img style={{ width: "100%" }} src={fadeImage.url} />
                  <h2>{fadeImage.caption}</h2>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
