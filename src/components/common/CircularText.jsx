import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const CircularText = () => {
  return (
    <div className="relative w-36 min-w-36 h-36 flex items-center justify-center bg-black rounded-full animate-spinner">
      {/* Circle with Text */}
      <svg viewBox="0 0 200 200" className="absolute w-full h-full p-2">
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
               m -75, 0
               a 75,75 0 1,1 150,0
               a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text fill="white" className="text-[2.2rem] tracking-[.5rem]">
          <textPath href="#circlePath" textAnchor="middle" startOffset="50%">
            Driving Future Tech
          </textPath>
        </text>
      </svg>

      {/* Arrow Icon */}
      <HiOutlineArrowNarrowRight size={50} className="text-secondary" />
    </div>
  );
};

export default CircularText;
