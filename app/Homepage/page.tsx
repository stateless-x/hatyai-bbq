import About from "./About";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const Homepage = () => {
    return (
      <div>
        <Navbar />
        <HeroSection />
        <About />
        <Contact />
      </div>
    );
  };
  
  export default Homepage;
  