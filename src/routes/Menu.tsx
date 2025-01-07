import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

/**
 * A strongly-typed functional component that renders a "Menu" page.
 *
 * @returns A JSX element representing the Menu page.
 */
const Menu: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Menu;
