import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {

  return (
    <div className="bg-[#050816] text-white overflow-hidden">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;