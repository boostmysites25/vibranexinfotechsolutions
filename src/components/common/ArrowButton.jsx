import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const ArrowButton = ({
  className,
  children,
  onClick,
  to,
  scrollTo,
  offset,
}) => {
  if (onClick) {
    return (
      <button
        className={`${className} w-full sm:min-w-[15rem] sm:w-auto btn-rounded flex justify-center items-center gap-2`}
        onClick={onClick}
      >
        {children}
        <FaArrowRightLong className="mt-1" />
      </button>
    );
  }
  if (scrollTo) {
    return (
      <Scroll
        className={`${className} w-full sm:min-w-[15rem] sm:w-auto btn-rounded flex justify-center items-center gap-2`}
        to={scrollTo}
        spy={true}
        smooth={true}
        duration={500}
        offset={offset}
      >
        {children}
        <FaArrowRightLong className="mt-1" />
      </Scroll>
    );
  }

  return (
    <Link
      to={to}
      className={`${className} w-full sm:min-w-[15rem] sm:w-auto btn-rounded flex justify-center items-center gap-2`}
      onClick={onClick}
    >
      {children}
      <FaArrowRightLong className="mt-1" />
    </Link>
  );
};

export default ArrowButton;
