/* eslint-disable react/prop-types */
import "./sliderAuto.css";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useContexto } from "../../../context/Context";

export const SliderAuto = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { publicaciones } = useContexto();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % publicaciones.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + publicaciones.length) % publicaciones.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="Carousel mt-16 md:mt-28 -mb-5">
      <button
        className="btn z-10 p-2 rounded-r-badge rounded-l-none bg-base-100  Carousel-button Carousel-button-left"
        onClick={prevSlide}
      >
        <FaChevronLeft className="text-primary text-2xl ml-4" />
      </button>

      <div
        className="Carousel-inner w-full h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {publicaciones.map((item, index) => (
          <div key={index} className="Carousel-item w-full h-full">
            {/* Imagen para pantallas mayores a 780px */}
            <img
              src={item.secureURL2}
              alt={item.titulo}
              className="w-full h-full object-fill lg:block hidden"
            />

            {/* Imagen para pantallas menores o iguales a 780px */}
            <img
              src={item.secureURL1}
              alt={item.titulo}
              className="w-full h-full object-fill lg:hidden"
            />
          </div>
        ))}
      </div>

      <button
        className="btn z-10 p-2 rounded-l-badge rounded-r-none bg-base-100 Carousel-button Carousel-button-right"
        onClick={nextSlide}
      >
        <FaChevronRight className="text-primary text-2xl mr-4" />
      </button>
      <div
        className="absolute -bottom-2 border-none"
        style={{ width: "100vw", height: "100px" }}
      >
        <div className="w-full h-full bg-gradient-to-t from-base-100 to-transparent blur-sm"></div>
      </div>
    </div>
  );
};
