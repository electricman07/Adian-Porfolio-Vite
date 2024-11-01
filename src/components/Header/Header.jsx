import { Typewriter } from "react-simple-typewriter";

import Image from "../Image/Image";

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
            <Image />
          </div>
          {/* Greeting */}
          <div className="greeting-container w-6/12 h-1/2 flex flex-col">
            <p className="greeting">Hello, I am</p>
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
