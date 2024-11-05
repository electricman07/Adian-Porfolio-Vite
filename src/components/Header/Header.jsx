import { Typewriter } from "react-simple-typewriter";
import "./Header.css";
import ImgIcon from "/assets/images/headshot_adrian.jpg";

import Image from "../Image/Image";
const imageclass = "image-animation w-6/12 rounded-full";
function Header() {
  return (
    <>
      <section className="home w-screen h-screen flex">
        <header
          className="header flex justify-items-center items-center h-full w-full content-center my-8"
          id="home"
        >
          {/* Image */}
          <div className="image-container w-6/12 h-1/2 flex justify-center">
            <Image ImgIcon={ImgIcon} imageclass={imageclass} />
          </div>
          {/* Greeting */}
          <div className="greeting-container w-6/12 h-1/2 flex flex-col">
            <p className="greeting text-2xl">Hello, I am</p>
            <h1 className="intro text-8xl pt-3.5">Adrian</h1>
            <h2 className="subtitle-main text-2xl pt-1.5">
              {" "}
              <Typewriter
                words={[" Production Designer.", "Director."]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={10}
                deleteSpeed={10}
                delaySpeed={1000}
              />
            </h2>
          </div>
        </header>
      </section>
    </>
  );
}

export default Header;
