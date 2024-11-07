import Button from "../Button/Button";
import { BiMovie } from "react-icons/bi";

function ImageList({ image, classList }) {
  return (
    <>
      <div className="img-body">
        <img src={image.image} alt={image.alt} />
      </div>
      <div className={`details-body ${classList}`}>
        <h3 className="image-title mt-10 text-center">{image.title}</h3>
        <div className="image-text mt-2 p-6">
          <p className="caption-body">{image.caption}</p>
        </div>
      </div>
      <div className="text-center">
        <Button
          buttonName={"details "}
          classList={"button button-flex"}
          buttonImage={<BiMovie />}
        />
      </div>
    </>
  );
}

export default ImageList;
