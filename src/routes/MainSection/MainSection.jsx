import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

function MainSection() {
  return (
    <main className="w-screen ">
      <ScrollToHashElement behavior="smooth" />
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default MainSection;
