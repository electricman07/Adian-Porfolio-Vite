import "./App.css";
import Footer from "./routes/Footer/Footer";
import MainSection from "./routes/MainSection/MainSection";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

function App() {
  return (
    <>
      <ScrollToHashElement behavior="smooth" />
      <MainSection />
      <Footer />
    </>
  );
}

export default App;
