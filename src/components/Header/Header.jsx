import { Typewriter } from "react-simple-typewriter";
import "./Header.css";
import ImgIcon from "/assets/images/headshot_adrian.jpg";
import Button from "../Button/Button";

import Image from "../Image/Image";
import CV from "/src/assets/John-Cv.pdf";

const imageclass = "image-animation w-6/12 rounded-full";
function Header() {
  return (
    <>
      <section
        className="home w-screen h-screen flex max-sm:h-[140vh] max-sm:pt-20"
        id="home"
      >
        <header className="header flex justify-items-center items-center h-full w-full content-center my-8 max-sm:flex-col max-sm:justify-items-start ">
          {/* Image */}
          <div className="image-container w-6/12 h-1/2 max-sm:h-auto max-sm:w-auto flex justify-center ">
            <Image
              ImgIcon={ImgIcon}
              imageclass={imageclass}
              className="header-image"
            />
          </div>
          {/* Greeting */}
          <div className="greeting-container w-6/12 h-1/2 flex flex-col max-sm:w-full max-sm:items-center max-sm:mt-24">
            <p className="greeting text-2xl">Hello, I am</p>
            <h1 className="intro text-8xl pt-3.5 max-sm:text-6xl">Adrian</h1>
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
            <div className="Button-container mt-10 max-sm:justify-items-center">
              <p className="about-description max-sm:ml-10">
                A recent graduate from Vancouver Film Schools Film Production
                program where I specialized in Production Design and Directing.
              </p>
              <div className="flex gap-5">
                <Button CV={CV} buttonName={"Download Resume"} />
                <Button CV={CV} buttonName={"Download Portfolio"} />
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default Header;
