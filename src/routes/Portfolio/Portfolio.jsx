import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Portfolio() {
  return (
    <>
      <section className="portfolio-container" id="portfolio">
        <div className="portfolio-header text-3xl text-center ">
          <h2>Portfolio</h2>
        </div>
        <div className="portfolio-carousel-container"></div>
      </section>
    </>
  );
}

export default Portfolio;
