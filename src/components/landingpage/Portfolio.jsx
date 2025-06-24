import React from "react";
import {
  appDevelopmentPortfolio,
  webDevelopmentPortfolio,
} from "../../content/constant";
import SubHeading from "../common/SubHeading";
import { Link } from "react-router-dom";

const Portfolio = ({ page }) => {
  const portfolio =
    page === "web" ? webDevelopmentPortfolio : appDevelopmentPortfolio;
  return (
    <div className="wrapper py-10 space-y-4">
      <div className="flex flex-col items-center">
        <SubHeading heading="Portfolio" className="text-white" />
        <h2 data-aos="fade-up" className="text1 text-center">
          Few of Our Projects
        </h2>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-wrap justify-center gap-4 pt-5"
      >
        {portfolio.map((item) => (
          <div
            key={item.id}
            className="rounded-lg overflow-hidden relative group h-[300px] transition-all duration-500 shadow-lg"
          >
            {/* Overlay gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/30 via-transparent to-primary/70 z-[1]" />

            {/* Project image */}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="object-cover h-full w-full group-hover:scale-[1.15] transition-all duration-500"
            />

            {/* Project title */}
            <div className="absolute bottom-0 left-0 w-full p-4 z-[2] transform translate-y-0 group-hover:translate-y-[-10px] transition-all duration-300">
              <h3 className="text-white font-semibold text-xl">{item.title}</h3>
              <div className="w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-300"></div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-[3]">
              <div className="text-center p-6">
                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-white/90 mb-4 text-sm">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {item.tags && item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-black/30 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={item.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-primary rounded-full font-medium hover:bg-secondary hover:text-black transition-all duration-300">
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
