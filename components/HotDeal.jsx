"use client";
import React, { useState } from "react";
import Image from "next/image";
import cardsData from "../data/Product.json";

function HotDeal() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex + 1 >= Math.ceil(cardsData.length / 4) ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(cardsData.length / 4) - 1 : prevIndex - 1
    );
  };

  // Calculate the start and end indices of the cards to display
  const startIndex = slideIndex * 4;
  const endIndex = startIndex + 4;

  // Slice the cardsData array to get only the cards to display
  const displayedCards = cardsData.slice(startIndex, endIndex);

  return (
    <div className="mt-20 px-32 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* HOT DEAL */}
        <div className="col-span-1 flex flex-col justify-start text-start mt-4">
          <h1 className="text-[24px] font-[600]">HOT DEAL</h1>
          <p className="text-[#999999] text-[12px]">
            [UP TO 34% OFF] HAPPY HOUR
          </p>

          <div className="mt-40 gap-10 flex">
            {/* Conditionally render arrow buttons based on screen size */}
            <button
              className="cursor-pointer hidden lg:flex"
              onClick={nextSlide}
            >
              &lt;
            </button>
            <button
              className="cursor-pointer hidden lg:flex"
              onClick={prevSlide}
            >
              &gt;
            </button>
          </div>
        </div>
        {/* CARDS */}
        <div className="col-span-1 grid grid-cols-2 sm:grid-cols-4">
          <div className="w-full flex justify-center gap-20">
            {displayedCards.map((card) => (
              <div key={card.id} className="text-start">
                <a href={card.url}>
                  <Image
                    className="w-[120px] h-[120px] m-4"
                    src={card.url}
                    alt={card.name}
                    width={100}
                    height={100}
                  />
                </a>
                <h1 className="w-[9rem] text-[15px]">{card.name}</h1>
                <p>${card.price}</p>
                <p>{card.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotDeal;
