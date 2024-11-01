import { Typewriter } from "react-simple-typewriter";

function Header() {
  return (
    <>
      <section className="home w-screen h-screen flex">
        <header
          className="header flex justify-center h-full w-full content-center my-8"
          id="home"
        >
          {/* Image */}
          <div className="image-container w-6/12 h-1/2 flex justify-center">
            <img
              src="../../../public/assets/images/headshot_adrian.jpg"
              alt="image of Adrian"
              className="w-6/12 rounded-full"
            />
          </div>
          {/* Greeting */}
          <div className="greeting-container w-6/12">
            <p className="greeting">Hello, I am</p>
            <h1 className="intro text-5xl">Adrian</h1>
            <h2 className="subtitle-main text-2xl">
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
