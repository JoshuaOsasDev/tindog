import React, { useCallback, useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import {
  HiArrowLeft,
  HiArrowRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

function Carousel({
  children,
  autoPlay = true,
  interval = 3000,
  showArrows = true,
  showDots = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const items = React.Children.toArray(children);
  const itemsCount = items.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % itemsCount);
  }, [itemsCount]);

  const goToPrev = () => {
    setCurrentIndex((index) => {
      const newI = (index - 1 + itemsCount) % itemsCount;
      console.log(newI);
      return newI;
    });
  };

  useEffect(() => {
    setIsPlaying(autoPlay);
  }, [autoPlay]);

  useEffect(() => {
    let timer;

    if (isPlaying && itemsCount > 1) {
      timer = setTimeout(goToNext, interval);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentIndex, goToNext, interval, isPlaying, itemsCount]);
  //   console.log(itemsCount, "children");

  const handleMouseEnter = () => {
    if (autoPlay) {
      setIsPlaying(false);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay) {
      setIsPlaying(true);
    }
  };
  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-[1000ms] ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((items, index) => (
          <CarouselItem items={items} key={index} />
        ))}
      </div>

      {showArrows && itemsCount > 1 && (
        <>
          <button className="carousel-item left-[1px]" onClick={goToNext}>
            <HiChevronLeft />
          </button>

          <button
            className="carousel-item ] left-[90%] sm:left-[96%]"
            onClick={goToPrev}
          >
            <HiChevronRight />
          </button>
        </>
      )}
    </div>
  );
}

export default Carousel;
