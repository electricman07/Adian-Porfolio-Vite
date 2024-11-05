import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

function MainSection() {
  return (
    <main className="w-screen">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default MainSection;
