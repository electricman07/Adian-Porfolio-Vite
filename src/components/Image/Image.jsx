import "./Image.css";

function Image({ ImgIcon, imageclass }) {
  return <img src={ImgIcon} alt="image of Adrian" className={imageclass} />;
}

export default Image;
