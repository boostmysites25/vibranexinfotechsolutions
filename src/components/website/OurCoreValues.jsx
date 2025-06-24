import React from "react";
import SubHeading from "../common/SubHeading";
import { coreValues } from "../../content/constant";
import { useKeenSlider } from "keen-slider/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
// import { ReactComponent as Icon } from "../../assets/svg/core values icon.svg";
import icon from "../../assets/images/core values icon.png";
import ArrowButton from "../common/ArrowButton";

const animation = { duration: 40000, easing: (t) => t };

const OurCoreValues = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 1,
      spacing: 30,
      origin: "auto",
    },
    breakpoints: {
      "(max-width: 650px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
      "(min-width: 651px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 900px)": {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 4,
          spacing: 25,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  const prevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  const nextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };
  return (
    <div className="py-14 space-y-4">
      <div className="wrapper flex flex-col items-center gap-4">
        <SubHeading heading="Our Core Values" className="text-white" />
        <h2 className="text1 max-w-2xl text-center mx-auto">
          Innovation Moves You Forward
        </h2>
      </div>
      <div
        data-aos="fade-up"
        ref={sliderRef}
        className="keen-slider py-10 text-black"
      >
        {coreValues.map((item) => (
          <div
            key={item.title}
            className="keen-slider__slide w-full rounded-xl bg-white px-4 pb-4 pt-5 space-y-5"
          >
            <img src={icon} alt="" className="fill-primary w-12 h-12 object-contain" />
            <h4 className="text3">{item.title}</h4>
            <p className="desc">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="wrapper flex flex-col-reverse items-center gap-9 relative">
        <div className="flex justify-center w-full">
          <ArrowButton
            to="/contact-us"
            className="bg-black border border-secondary text-white hover:bg-secondary !w-fit"
          >
            Let’s Partner for Success
          </ArrowButton>
        </div>
        <div className="sm:absolute right-0 top-0 flex gap-5">
          <button
            onClick={prevClick}
            className="text-white text-2xl hover:text-white/70 p-2 border border-white hover:border-white/70 transition-all duration-200 rounded-xl"
          >
            <GoArrowLeft size={30} />
          </button>
          <button
            onClick={nextClick}
            className="text-white text-2xl hover:text-white/70 p-2 border border-white hover:border-white/70 transition-all duration-200 rounded-xl"
          >
            <GoArrowRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurCoreValues;
