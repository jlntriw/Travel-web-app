import React, {useState} from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1608993507566-b4d3d477cd49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGllbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1611655906612-a06e250203fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGllbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1600141133141-e9b1ceb9c2d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGllbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;
  console.log(length)

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquareFill size={30}
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl cursor-pointer left-8 text-gray-200"
      />
      <BsArrowRightSquareFill size={30}
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl  cursor-pointer right-8  text-gray-200"
      />
      {sliderData.map((item, index) => (
        <div className={index === slide ? "opacity-100" : "opacity-0"}>
          {index === slide && (
            <img className="w-full rounded-md" src={item.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
