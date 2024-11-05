import "./App.css";
import MainSection from "./routes/MainSection/MainSection";
import About from "./routes/About/About";
import Portfolio from "./routes/Portfolio/Portfolio";
import Contact from "./routes/Contact/Contact";
import Footer from "./routes/Footer/Footer";

function App() {
  return (
    <>
      <MainSection />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
