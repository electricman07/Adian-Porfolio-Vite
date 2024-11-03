import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import images from "./images";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

function Portfolio() {
  return (
    <>
      <section className="portfolio-container" id="portfolio">
        <div className="portfolio-header text-3xl text-center ">
          <h2>Portfolio</h2>
        </div>

        <div className="slide-container">
          <Fade>
            {images.map((fadeImage, index) => (
              <div key={index}>
                <img style={{ ...divStyle }} src={fadeImage.image} />
                <span style={spanStyle}>{fadeImage.caption}</span>
              </div>
            ))}
          </Fade>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
