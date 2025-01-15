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
  carouselStyle: string;
  cardImageStyle: string;
  NavigationAppearance: string;
  smoothieCardFooter: string;
  smoothieCardDetails: string;
}
const MenuCard: React.FC<SmoothieProps> = ({
  carouselStyle,
  smoothieCardStyle,
  cardImageStyle,
  smoothie,
  NavigationAppearance,
  smoothieCardFooter,
  smoothieCardDetails,
}: SmoothieProps) => {
  return (
    <Carousel className="w-full max-w-[1435px]">
      <CarouselContent className="px-3 -ml-4">
        {smoothie.map((smoothies) => (
          <CarouselItem
            key={smoothies.id}
            className={`${carouselStyle}`}>
            <Card className={`${smoothieCardStyle} overflow-hidden`}>
              <CardHeader className="p-0 space-y-0">
                <img
                  src={`/svg/${smoothies.categoryImgSrc}`}
                  className="absolute ml-3 top-3"
                />
                <img
                  src={`/fruit-images/${smoothies.smoothieImgSrc}`}
                  className={`${cardImageStyle}`}
                />
              </CardHeader>
              <CardContent className="flex flex-row justify-between w-full h-full px-3 py-2 ">
                <div className={`${smoothieCardDetails}`}>
                  <p
                    className={` uppercase tracking-[.12rem] font-bold`}
                    style={{ color: `#${smoothies.categoryColor}` }}>
                    {smoothies.category}
                  </p>
                  <h4 className="text-[1.6rem] lg:text-[2rem] font-bold">
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
                      className="h-10 cursor-pointer md:h-9 lg:h-10"
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
