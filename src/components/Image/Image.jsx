import "./Image.css";
import ImgIcon from "/assets/images/headshot_adrian.jpg";

function Image() {
  return (
    <img
      src={ImgIcon}
      alt="image of Adrian"
      className="image-animation w-6/12 rounded-full"
    />
  );
}

export default Image;
