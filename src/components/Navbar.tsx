import { Link } from "react-router-dom";
import BigLogo from "../assets/SLURPPIES_Logo.png";
import { useMediaQuery } from "react-responsive";
import SmallLogo from "../assets/watering-mouth.png";
import menu from "../assets/svg/menu.svg";
import phone from "../assets/svg/phone.svg";
const Navbar = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <header className="fixed z-20 flex items-center justify-center w-full h-24 mx-autosm:px-8">
      <div className="max-w-[1440px] w-full md:px-4 max-md:px-2">
        <nav className="flex items-center justify-between w-full h-full px-4 mt-1 space-x-4 bg-white rounded-full shadow-md">
          <Link
            to="/menu"
            className="flex flex-row gap-1 p-4 rounded-full cursor-pointer lg:gap-3 text-headingtextblack hover:bg-slurppiespink hover:text-white">
            <img
              src={menu}
              alt="Menu Icon"
            />
            Menu
          </Link>
          <Link
            to="/"
            className="cursor-pointer max-sm:py-2">
            {isDesktop ? (
              <img
                src={BigLogo}
                alt="Slurpies Logo"
                className="object-cover h-20"
              />
            ) : (
              <img
                src={SmallLogo}
                alt="Slurpies Logo"
                className="object-cover w-24"
              />
            )}
          </Link>
          <Link
            to="/contact-us"
            className="flex flex-row gap-1 p-4 rounded-full cursor-pointer text-headingtextblack hover:bg-slurppiespink hover:text-white lg:gap-3">
            <img
              src={phone}
              alt="Phone Icon"
            />
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
