import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/routes/Footer/Footer";
import images from "../../assets/images";
import ImageList from "@/components/ImageList/ImageList";

import "./PortfolioPage.css";

function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="portfolio-container-page">
        {images.map((image) => (
          <div key={image.id} className="extended-container flex p-8">
            <ImageList image={image} classList={"details-body-extended"} />
            <div className="extended-details flex justify-center flex-col">
              <h4 className="mb-5">{image.year}</h4>
              <p className="">{image.duties}</p>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default PortfolioPage;
