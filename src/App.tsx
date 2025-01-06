import { Check } from "lucide-react";
import Hero from "./components/Hero";
import MangoSection from "./components/MangoSection";
import Navbar from "./components/Navbar";
import PineappleSection from "./components/PineappleSection";
import WhyChooseUs from "./components/WhyChooseUs";
import "./index.css";
import CheckMenu from "./components/CheckMenu";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <PineappleSection />
      <MangoSection />
      <CheckMenu />
    </div>
  );
}

export default App;
