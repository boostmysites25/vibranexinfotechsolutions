import React from "react";
import { companyDetails, logo } from "../content/constant";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { IoMail } from "react-icons/io5";
import Footer from "../components/landingpage/Footer";

const ThankYou = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="fixed top-0 left-0 w-full z-[100]">
        <div className="hidden md:block relative bg-white text-black">
          <div className="hidden md:grid grid-cols-[1fr_30%] lg:grid-cols-[1fr_25%] bg-white">
            <div className="bg-white py-6"></div>
            <div className="bg-secondary top_header_social_links py-6"></div>
          </div>
          <div
            data-aos="fade-down"
            className="wrapper md:absolute inset-0 w-full flex sm:flex-row flex-col-reverse py-2 justify-between items-center"
          >
            <div className="flex sm:flex-row flex-col-reverse items-center gap-2 sm:gap-7 md:bg-white md:text-black py-2">
              <Link
                to={`mailto:${companyDetails.email}`}
                className="flex items-center gap-2 link"
              >
                <IoMail size={20} /> <span>{companyDetails.email}</span>
              </Link>
              <Link
                to={`tel:${companyDetails.phone}`}
                className="flex items-center gap-2 link"
              >
                <ImPhone size={18} /> <span>{companyDetails.phone}</span>
              </Link>
            </div>
            <div className="py-2 flex items-center gap-4">
              <Link
                to={companyDetails.facebook}
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-primary text-black md:text-white md:border border-white group"
              >
                <FaFacebookF
                  size={18}
                  className="fill-black md:fill-white group-hover:fill-primary md:group-hover:text-black"
                />
              </Link>
              <Link
                to={companyDetails.linkedin}
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-primary text-black md:text-white md:border border-white group"
              >
                <FaLinkedinIn
                  size={18}
                  className="fill-black md:fill-white group-hover:fill-primary md:group-hover:text-black"
                />
              </Link>
              <Link
                to={companyDetails.instagram}
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-primary text-black md:text-white md:border border-white group"
              >
                <AiFillInstagram
                  size={18}
                  className="fill-black md:fill-white group-hover:fill-primary md:group-hover:text-black"
                />
              </Link>

              <Link
                to={companyDetails.twitter}
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-primary text-black md:text-white md:border border-white group"
              >
                <FaXTwitter
                  size={18}
                  className="fill-black md:fill-white group-hover:fill-primary md:group-hover:text-black"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-black flex items-center py-5">
          <div className="wrapper w-full h-fit flex items-center justify-between gap-10">
            <a
              data-aos="fade-down"
              href="/"
              className="flex items-center gap-2"
            >
              <img src={logo} alt="logo" className="w-[4rem] sm:w-[5rem] scale-110" />
            </a>
          </div>
        </div>
      </div>

      <section data-aos="fade-up" className="mt-[4.5rem] min-h-[70vh] flex items-center">
        <div className="!max-w-6xl wrapper flex flex-col items-center gap-3 translate-y-[1rem] text-center">
          <h1 className="text1">Thank You!</h1>
          <p className="text4 mb-4 !font-normal">
            Thank you for reaching out to us. We will get back to you as soon as
            possible.
          </p>
          <Link to="/" className="btn-fullrounded bg-primary text-white min-w-[8rem] hover:bg-black border border-primary">
            Go to Home
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ThankYou;
