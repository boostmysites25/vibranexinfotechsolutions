import React, { lazy } from "react";
import banner from "../assets/videos/portfolio.mp4";
import ArrowButton from "../components/common/ArrowButton";

const PageBanner = lazy(() => import("../components/website/PageBanner"));
const PortfolioGrid = lazy(() => import("../components/website/PortfolioGrid"));
const WhyWorkWithUs = lazy(() => import("../components/common/WhyWorkWithUs"));

const Portfolio = () => {
  return (
    <div className="mt-[4.5rem]">
      <PageBanner
        banner={banner}
        title="Our Portfolio"
        links={[{ title: "Home", url: "/" }, { title: "Portfolio" }]}
      />

      <div className="py-16 bg-black">
        <div className="wrapper">
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
          >
            <h2 className="text2 mb-4">Showcasing Our Expertise</h2>
            <p className="desc text-white/70">
              Explore our diverse portfolio of successful projects across
              various industries. From web and mobile applications to AI
              solutions and blockchain implementations, we've helped businesses
              transform their digital presence and achieve their goals.
            </p>
          </div>

          {/* Portfolio stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            data-aos="fade-up"
          >
            <div className="bg-white/5 rounded-lg p-6 text-center hover:bg-primary/20 transition-all duration-300">
              <div className="text-4xl font-bold text-secondary mb-2">150+</div>
              <div className="text-white/80 font-medium">
                Completed Projects
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-6 text-center hover:bg-primary/20 transition-all duration-300">
              <div className="text-4xl font-bold text-secondary mb-2">100+</div>
              <div className="text-white/80 font-medium">Happy Clients</div>
            </div>
            <div className="bg-white/5 rounded-lg p-6 text-center hover:bg-primary/20 transition-all duration-300">
              <div className="text-4xl font-bold text-secondary mb-2">12+</div>
              <div className="text-white/80 font-medium">Industries Served</div>
            </div>
            <div className="bg-white/5 rounded-lg p-6 text-center hover:bg-primary/20 transition-all duration-300">
              <div className="text-4xl font-bold text-secondary mb-2">3+</div>
              <div className="text-white/80 font-medium">Years Experience</div>
            </div>
          </div>
        </div>

        <PortfolioGrid />
      </div>

      <WhyWorkWithUs />
    </div>
  );
};

export default Portfolio;
