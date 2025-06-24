import React from "react";
import banner from "../assets/videos/services.mp4";
import { lazy } from "react";
import ArrowButton from "../components/common/ArrowButton";
const PageBanner = lazy(() => import("../components/website/PageBanner"));
const AllServices = lazy(() => import("../components/website/AllServices"));
const WhyWorkWithUs = lazy(() => import("../components/common/WhyWorkWithUs"));

const OurServices = () => {
  return (
    <div className="mt-[4.5rem]">
      <PageBanner
        title="Our Services"
        subtitle="Premium AI & Future-Tech solutions that transform businesses and create competitive advantages"
        links={[{ title: "Home", url: "/" }, { title: "Services", url: "" }]}
      />
      <div className="pt-7">
        <AllServices />
        <div className="wrapper flex justify-center">
          <ArrowButton
            to="/contact-us"
            className="bg-secondary text-primary hover:bg-transparent hover:text-secondary border border-secondary font-bold"
          >
            Let's Build Your Success Together
          </ArrowButton>
        </div>
        <WhyWorkWithUs />
      </div>
    </div>
  );
};

export default OurServices;
