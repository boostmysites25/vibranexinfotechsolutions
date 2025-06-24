import { useKeenSlider } from "keen-slider/react";
import icon1 from "../../assets/images/slider1.png";
import icon2 from "../../assets/images/slider2.png";

const animation = { duration: 30000, easing: (t) => t };

const SlidingComponent = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 450px)": {
        slides: {
          perView: 0.6,
          spacing: 20,
        },
      },
      "(min-width: 450px)": {
        slides: {
          perView: 0.7,
          spacing: 20,
        },
      },
      "(min-width: 725px)": {
        slides: {
          perView: 0.8,
          spacing: 20,
        },
      },
      "(min-width: 1090px)": {
        slides: {
          perView: 1.2,
          spacing: 20,
        },
      },
    },
    mode: "snap",
    rtl: false,
    // slides: { perView: "auto" },
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
  return (
    <div className="my-7 py-3 border-y border-white">
      <div
        ref={sliderRef}
        className="keen-slider py-2 bg-gradient-to-r from-primary to-secondary"
      >
        <div className="keen-slider__slide flex justify-center items-center gap-6">
          <img src={icon1} alt="" className="w-[3rem] object-contain" />
          <h2 className="text1">Constructing Digital Excellence</h2>
        </div>
        <div className="keen-slider__slide flex justify-center items-center gap-6">
          <img src={icon2} alt="" className="w-[3rem] object-contain" />
          <h2 className="text1">Transcending Limits</h2>
        </div>
        <div className="keen-slider__slide flex justify-center items-center gap-6">
          <img src={icon1} alt="" className="w-[3rem] object-contain" />
          <h2 className="text1">Constructing Digital Excellence</h2>
        </div>
        <div className="keen-slider__slide flex justify-center items-center gap-6">
          <img src={icon2} alt="" className="w-[3rem] object-contain" />
          <h2 className="text1">Transcending Limits</h2>
        </div>
      </div>
    </div>
  );
};

export default SlidingComponent;
