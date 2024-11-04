import "./App.css";
import MainSection from "./routes/MainSection/MainSection";
import About from "./routes/About/About";
import Portfolio from "./routes/Portfolio/Portfolio";
import Contact from "./routes/Contact/Contact";

function App() {
  return (
    <>
      <MainSection />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
