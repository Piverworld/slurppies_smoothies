import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import addToCart from "../../assets/svg/add-circle.svg";
import smoothieData from "../../../Json/smoothies.json";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
interface SmoothieProps {
  smoothie: typeof smoothieData.Smoothies;
  smoothieCardStyle: string;
  carouselStyle?: string;
  cardImageStyle: string;
  NavigationAppearance: string;
  smoothieCardFooter: string;
  smoothieCardDetails: string;
}
const MenuCard = ({
  carouselStyle,
  smoothieCardStyle,
  cardImageStyle,
  smoothie,
  NavigationAppearance,
  smoothieCardFooter,
  smoothieCardDetails,
}: SmoothieProps) => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="px-3 -ml-4">
        {smoothie.map((smoothies) => (
          <CarouselItem
            key={smoothies.id}
            className={`${carouselStyle}`}>
            <Card className={`${smoothieCardStyle} overflow-hidden`}>
              <CardHeader className="p-0 space-y-0">
                <img
                  src={smoothies.categoryImgSrc}
                  className="absolute ml-3 top-3"
                />
                <img
                  src={smoothies.smoothieImgSrc}
                  className={`${cardImageStyle}`}
                />
              </CardHeader>
              <CardContent className="flex flex-col justify-between w-full h-full px-3 py-2 ">
                <div className={`${smoothieCardDetails}`}>
                  <p
                    className={`text-[#${smoothies.categoryColor}] uppercase tracking-[.0875rem]`}>
                    {smoothies.category}
                  </p>
                  <h4 className="text-[1.7rem] lg:text-[2rem] font-bold">
                    {smoothies.name}
                  </h4>
                  <p className="text-[1rem] text-[#787878] font-[400]">
                    {smoothies.ingredients}
                  </p>
                </div>
                <CardFooter className={`${smoothieCardFooter}`}>
                  <button>
                    <img
                      src={addToCart}
                      alt="Add to Cart Button"
                      className="h-[2.5rem] md:h-[3.9rem] lg:h-[4rem] cursor-pointer"
                    />
                  </button>
                </CardFooter>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className={`${NavigationAppearance}`} />
      <CarouselPrevious className={`${NavigationAppearance}`} />
    </Carousel>
  );
};

export default MenuCard;
