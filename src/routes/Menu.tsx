import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import naturalBanner from "../assets/Natural-Banner.png";
import timeBanner from "../assets/Time-Banner.png";
import MenuCard from "@/components/design/MenuCard";
import Shakes from "../assets/Milkshakes.png";
import Popular from "../assets/Popular.png";
import Special from "../assets/Special.png";
import SmoothiesCup from "../assets/Smoothies.png";
import PopularData from "../../Json/smoothies.json";
import SpecialData from "../../Json/smoothies.json";
import MilkshakeData from "../../Json/smoothies.json";
import SmoothieData from "../../Json/smoothies.json";

/**
 * A strongly-typed functional component that renders a "Menu" page.
 *
 * @returns A JSX element representing the Menu page.
 */

const Menu: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  return (
    <div>
      <Navbar />
      <section className="block w-full mb-5 h-fit">
        <div className="container max-w-[1440px] mx-auto">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}>
            <CarouselContent className="p-3 w-fit">
              <CarouselItem>
                <img
                  src={naturalBanner}
                  alt="Banner Image of Natural Goodness of Slurppies"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={timeBanner}
                  alt="Banner Image, it's time to drink Slurppies"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden" />
            <CarouselNext className="hidden" />
          </Carousel>
        </div>
      </section>
      <section className="block w-full mb-10">
        <div className="pl-2 md:pl-4 container max-w-[1440px] mx-auto mb-4 flex flex-row items-center justify-between">
          <div className="flex flex-row gap-1">
            <img
              src={Popular}
              alt="Fire Emoji"
            />
            <h2 className="text-headingtextblack text-[2rem] font-[Pacifico]">
              Popular Choice
            </h2>
          </div>

          <p className="text-paragraphtextgray text-[.8rem] lg:text-[1.2rem] pr-3 xl:hidden">
            Swipe for more
          </p>
        </div>
        <div className="container max-w-[1440px] mx-auto">
          <MenuCard
            smoothie={PopularData.Popular}
            carouselStyle="flex flex-row lg:basis-1/2 md:basis-1/2 sm:basis-2/5 "
            smoothieCardStyle="flex flex-row items-center justify-between w-full"
            cardImageStyle="object-cover min-h-[10rem] h-[15rem] w-[22rem]  md:w-[18rem] sm:h-[16rem] lg:h-[15rem] lg:w-[15rem] lg:max-w-[15rem]"
            NavigationAppearance="hidden"
            smoothieCardDetails="h-full"
            smoothieCardFooter="justify-end w-full h-fit px-4 py-1 mt-2"
          />
        </div>
      </section>
      <section className="block w-full mb-10">
        <div className="pl-4 container max-w-[1440px] mx-auto mb-4 flex flex-row items-center justify-between">
          <div className="flex flex-row gap-1">
            <img
              src={SmoothiesCup}
              alt="Smoothie Cup Emoji"
            />
            <h2 className="text-headingtextblack text-[2rem] font-[Pacifico]">
              Smoothies
            </h2>
          </div>
          <p className="text-paragraphtextgray text-[.8rem] lg:text-[1.2rem] pr-3 xl:hidden">
            Swipe for more
          </p>
        </div>
        <div className="container max-w-[1440px] mx-auto">
          <MenuCard
            smoothie={SmoothieData.Smoothies}
            smoothieCardStyle="flex flex-col w-full h-full pb-2"
            carouselStyle="flex flex-row sm:basis-3/6 lg:basis-2/6 md:basis-2/5"
            cardImageStyle="h-[15rem] object-cover object-center"
            NavigationAppearance="hidden"
            smoothieCardDetails="h-full"
            smoothieCardFooter="justify-end w-full px-0 py-1 mt-2"
          />
        </div>
      </section>
      <section className="block w-full mb-10">
        <div className="pl-4 container max-w-[1440px] mx-auto mb-4 flex flex-row items-center justify-between">
          <div className="flex flex-row gap-1">
            <img
              src={Shakes}
              alt="Smoothie Cup Emoji"
            />
            <h2 className="text-headingtextblack text-[2rem] font-[Pacifico]">
              Milkshakes
            </h2>
          </div>

          <p className="text-paragraphtextgray text-[.8rem] lg:text-[1.2rem] pr-3 xl:hidden">
            Swipe for more
          </p>
        </div>
        <div className="container max-w-[1440px] mx-auto">
          <MenuCard
            smoothie={MilkshakeData.Milkshakes}
            smoothieCardStyle="flex flex-col w-full h-full pb-2"
            carouselStyle="flex flex-row sm:basis-3/6 lg:basis-2/6 md:basis-2/5"
            cardImageStyle="h-[15rem] object-cover object-center"
            NavigationAppearance="hidden"
            smoothieCardDetails="h-full"
            smoothieCardFooter="justify-end w-full px-0 py-1 mt-2"
          />
        </div>
      </section>
      <section className="block w-full mb-10">
        <div className="pl-4 container max-w-[1440px] mx-auto mb-4 flex flex-row items-center justify-between">
          <div className="flex flex-row gap-1">
            <img
              src={Special}
              alt="Smoothie Cup Emoji"
            />
            <h2 className="text-headingtextblack text-[2rem] font-[Pacifico]">
              Specials
            </h2>
          </div>

          <p className="text-paragraphtextgray text-[.8rem] lg:text-[1.2rem] pr-3 xl:hidden">
            Swipe for more
          </p>
        </div>
        <div className="container max-w-[1440px] mx-auto">
          <MenuCard
            smoothie={SpecialData.Specials}
            smoothieCardStyle="flex flex-col w-full h-full pb-2"
            carouselStyle="flex flex-row sm:basis-3/6 lg:basis-2/6 md:basis-2/5"
            cardImageStyle="h-[15rem] object-cover object-center"
            NavigationAppearance="hidden"
            smoothieCardDetails="h-full"
            smoothieCardFooter="justify-end w-full px-0 py-1 mt-2"
          />{" "}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Menu;
