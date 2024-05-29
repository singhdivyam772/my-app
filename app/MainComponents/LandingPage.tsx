"use client";
import React from "react";
import Category from "./Category";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const LandingPage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const sliderImage = [
    {
      id: 1,
      image: `https://res.cloudinary.com/drj0uehgx/image/upload/v1716965169/E-CommerceAssignment/sliderImage/male-clothes_y19eru.jpg`,
    },
    {
      id: 4,
      image: `https://res.cloudinary.com/drj0uehgx/image/upload/v1716965306/E-CommerceAssignment/sliderImage/pexels-mikhail-nilov-9393922_ltt5xn.jpg`,
    },
    {
      id: 2,
      image: `https://res.cloudinary.com/drj0uehgx/image/upload/v1716965169/E-CommerceAssignment/sliderImage/pexels-pixabay-265906_mixwzc.jpg`,
    },
    {
      id: 3,
      image: `https://res.cloudinary.com/drj0uehgx/image/upload/v1716965171/E-CommerceAssignment/sliderImage/digital-tablet-stylus-pen-laptop-desktop-close-up_tuoyto.jpg`,
    },
  ];

  return (
    <section className="w-[98.9vw] flex flex-col justify-center items-center min-h-screen ">
      {/* Sliding effect */}
      <Carousel
        plugins={[plugin.current]}
        className="w-full relative"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.reset()}
      >
        <CarouselContent className=" bg-red-400 h-[40rem]">
          {sliderImage.map((data, index) => (
            <CarouselItem key={index} className="aspect-w-1 aspect-h-1 ">
              <img src={data.image} className="object-cover " />
              <div className=" w-full h-full absolute top-0 left-0 right-0 z-10 bg-black/10 "></div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* category section */}
      <Category />

      {/* new arrival image */}
      <section className="  w-full flex justify-center items-center min-h-[40rem]">
        <img
          src="https://res.cloudinary.com/drj0uehgx/image/upload/v1716966469/E-CommerceAssignment/sliderImage/Frame_739_dzgnl5.svg"
          alt=""
          className="object-cover "
        />
      </section>

      {/* logo */}
      <section className=" w-full flex justify-center items-center min-h-[20rem]">
        <img
          src="https://res.cloudinary.com/drj0uehgx/image/upload/v1716967237/Frame_702_ixiy6k.svg"
          alt=""
          className="object-cover "
        />
      </section>
    </section>
  );
};

export default LandingPage;
