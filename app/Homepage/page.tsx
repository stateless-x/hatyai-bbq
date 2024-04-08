import About from "./About";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Separator from "./Separator";
import Menu from "./Menu";

const Homepage = () => {
    return (
      <div>
        <Navbar />
        <HeroSection />
        <About />
        <Separator im1="im1" im2="im2" />
        <Menu />
        <Separator im1="im3" im2="im4" />
        <Contact />
      </div>
    );
  };
  
  export default Homepage;
  