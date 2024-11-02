import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  {
    id: 1,
    image: "../../../public/assets/images/header-background-image-1.jpg",
  },
  {
    id: 2,
    image: "../../../public/assets/images/header-background-image-2.jpg",
  },
  {
    id: 3,
    image: "../../../public/assets/images/header-background-image-3.jpg",
  },
  {
    id: 4,
    image: "../../../public/assets/images/header-background-image-4.jpg",
  },
  {
    id: 5,
    image: "../../../public/assets/images/header-background-image-5.jpg",
  },
  {
    id: 6,
    image: "../../../public/assets/images/header-background-image-6.jpg",
  },
  {
    id: 7,
    image: "../../../public/assets/images/header-background-image-7.jpg",
  },
  {
    id: 8,
    image: "../../../public/assets/images/header-background-image-8.jpg",
  },
  {
    id: 9,
    image: "../../../public/assets/images/header-background-image-9.jpg",
  },
  {
    id: 10,
    image: "../../../public/assets/images/header-background-image-10.jpg",
  },
  {
    id: 11,
    image: "../../../public/assets/images/header-background-image-11.jpg",
  },
  {
    id: 12,
    image: "../../../public/assets/images/header-background-image-12.jpg",
  },
  {
    id: 13,
    image: "../../../public/assets/images/header-background-image-13.jpg",
  },
];

function Portfolio() {
  const imageSrc = images;
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, loop: true })
  );
  return (
    <>
      <div className="portfolio-container" id="portfolio">
        <h2>Portfolio</h2>
        <div className="slider-container flex justify-center">
          <Carousel
            className="w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            plugins={[plugin.current]}
          >
            <CarouselContent>
              {imageSrc.map((picture) => (
                <CarouselItem
                  key={picture.id}
                  className=" pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <CarouselItem className=" pl-4">
                          <img src={picture.image} />
                        </CarouselItem>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default Portfolio;
