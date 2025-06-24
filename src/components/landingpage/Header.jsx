import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { companyDetails, logo } from "../../content/constant";
import Drawer from "react-modern-drawer";
import { Link, useLocation } from "react-router-dom";
import { IoClose, IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { Link as Scroll } from "react-scroll";

export const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About Us", url: "about" },
  { id: 3, title: "Services", url: "services" },
  { id: 4, title: "Contact Us", url: "contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleDrawer = () => setIsOpen((prevState) => !prevState);

  return (
    <>
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
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-primary text-black md:text-white md:border border-black group"
              >
                <FaFacebookF
                  size={18}
                  className="fill-black group-hover:fill-primary md:group-hover:text-black"
                />
              </Link>
              <Link
                to={companyDetails.linkedin}
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-primary text-black md:text-white md:border border-black group"
              >
                <FaLinkedinIn
                  size={18}
                  className="fill-black group-hover:fill-primary md:group-hover:text-black"
                />
              </Link>
              <Link
                to={companyDetails.instagram}
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-primary text-black md:text-white md:border border-black group"
              >
                <AiFillInstagram
                  size={18}
                  className="fill-black group-hover:fill-primary md:group-hover:text-black"
                />
              </Link>

              <Link
                to={companyDetails.twitter}
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-primary text-black md:text-white md:border border-black group"
              >
                <FaXTwitter
                  size={18}
                  className="fill-black group-hover:fill-primary md:group-hover:text-black"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-black flex items-center py-5">
          <div className="wrapper w-full h-fit flex items-center justify-between gap-10">
            <Scroll
              data-aos="fade-down"
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src={logo} alt="logo" className="w-[4rem] sm:w-[5rem] scale-110" />
            </Scroll>

            {/* Desktop Navigation */}
            <div
              data-aos="fade-down"
              className="hidden lg:flex items-center gap-10"
            >
              {links.map((link) => {
                return link.url.includes("/") ? (
                  <Link
                    key={link.id}
                    to={link.url}
                    className={`${pathname === link.url ? "text-primary" : "text-white"
                      } link`}
                  >
                    {link.title}
                  </Link>
                ) : (
                  <Scroll
                    key={link.id}
                    to={link.url}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-150}
                    className={`${pathname === link.url ? "text-primary" : "text-white"
                      } link`}
                  >
                    {link.title}
                  </Scroll>
                );
              })}
            </div>
            <div data-aos="fade-down" className="hidden lg:flex">
              <Link
                to={`tel:${companyDetails.phone}`}
                className="btn-fullrounded bg-primary text-white hover:bg-black hover:text-white border border-primary"
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button data-aos="fade-down" className="lg:hidden">
              <Hamburger toggled={isOpen} toggle={setIsOpen} size={28} />
            </button>
          </div>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="py-4 px-10 z-10"
          >
            <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
              <button
                onClick={toggleDrawer}
                className="text-white text-[2.2rem]"
              >
                <IoClose />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {links.map(({ title, url, id }) => {
                return url.includes("/") ? (
                  <Link
                    key={id}
                    className="text-3xl text-white font-medium transition-colors duration-300 link"
                    to={url}
                    onClick={toggleDrawer}
                  >
                    {title}
                  </Link>
                ) : (
                  <Scroll
                    key={id}
                    to={url}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-150}
                    className="text-3xl text-white font-medium transition-colors duration-300 link"
                    onClick={toggleDrawer}
                  >
                    {title}
                  </Scroll>
                );
              })}
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Header;
