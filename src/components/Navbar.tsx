import { Link } from "react-router-dom";
import BigLogo from "../assets/SLURPPIES_Logo.png";

const Navbar = () => {
  return (
    <header className="flex items-center justify-center w-full h-24 mx-auto sm:px-8">
      <div className="max-w-[1440px] w-full">
        <nav className="flex items-center justify-between w-full h-full mt-1 space-x-4">
          <Link
            to="/menu"
            className="p-4 text-headingtextblack hover:bg-slurppiespink hover:text-white">
            Menu
          </Link>
          <Link to="/">
            <img
              src={BigLogo}
              alt="Slurpies Logo"
              className="object-cover h-20"
            />
          </Link>
          <Link
            to="/contact-us"
            className="p-4 text-headingtextblack hover:bg-slurppiespink hover:text-white">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
