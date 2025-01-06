import Hero from "./components/Hero";
import MangoSection from "./components/MangoSection";
import Navbar from "./components/Navbar";
import PineappleSection from "./components/PineappleSection";
import WhyChooseUs from "./components/WhyChooseUs";
import "./index.css";
import CheckMenu from "./components/CheckMenu";
import Contact from "./components/Contact";

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
    </div>
  );
}

export default App;
