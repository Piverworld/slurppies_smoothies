import Hero from "./components/Hero";
import MangoSection from "./components/MangoSection";
import Navbar from "./components/Navbar";
import PineappleSection from "./components/PineappleSection";
import WhyChooseUs from "./components/WhyChooseUs";
import "./index.css";
import CheckMenu from "./components/CheckMenu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <PineappleSection />
      <MangoSection />
      <CheckMenu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
