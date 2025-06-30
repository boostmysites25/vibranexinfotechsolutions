import React, { useState, useRef, useEffect } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { companyDetails, headerLogo } from "../../content/constant";
import Drawer from "react-modern-drawer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoClose, IoMail, IoChevronDown } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

// Website links
export const websiteLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About Us", url: "/about-us" },
  {
    id: 3,
    title: "Services",
    url: "/services",
    submenu: [
      { id: 31, title: "AI Development", url: "/services/ai-development" },
      { id: 32, title: "AR/VR Development", url: "/services/arvr-development" },
      { id: 33, title: "IoT Development", url: "/services/iot-development" },
      // { id: 34, title: "Web Development", url: "/web-development" },
      // { id: 35, title: "App Development", url: "/app-development" },
      { id: 36, title: "All Services", url: "/services" },
    ],
  },
  { id: 4, title: "Portfolio", url: "/portfolio" },
  { id: 5, title: "Blogs", url: "/blogs" },
  { id: 6, title: "Contact Us", url: "/contact-us" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const submenuRef = useRef(null);

  const toggleDrawer = () => setIsOpen((prevState) => !prevState);

  const handleSubmenuToggle = (id) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  // Function to handle navigation
  const handleNavigation = (url) => {
    // First close the drawer
    setIsOpen(false);
    // Then navigate after a delay
    setTimeout(() => {
      window.location.href = url;
    }, 300);
  };

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[100]">
        <div className="hidden md:block relative bg-bgGrey text-white">
          <div className="hidden md:grid grid-cols-[1fr_30%] lg:grid-cols-[1fr_25%] bg-bgGrey">
            <div className="bg-bgGrey py-6"></div>
            <div className="bg-primary top_header_social_links py-6"></div>
          </div>
          <div
            data-aos="fade-down"
            className="wrapper md:absolute inset-0 w-full flex sm:flex-row flex-col-reverse py-2 justify-between items-center"
          >
            <div className="flex sm:flex-row flex-col-reverse items-center gap-2 sm:gap-7 md:bg-bgGrey md:text-white py-2">
              <Link
                to={`mailto:${companyDetails.email}`}
                className="flex items-center gap-2 link hover:text-secondary"
              >
                <IoMail size={20} /> <span>{companyDetails.email}</span>
              </Link>
              <Link
                to={`tel:${companyDetails.phone}`}
                className="flex items-center gap-2 link hover:text-secondary"
              >
                <ImPhone size={18} /> <span>{companyDetails.phone}</span>
              </Link>
            </div>
            <div className="py-2 flex items-center gap-4">
              <Link
                to={companyDetails.facebook}
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-secondary text-white md:text-white md:border border-white group"
              >
                <FaFacebookF
                  size={18}
                  className="fill-white group-hover:fill-secondary md:group-hover:text-secondary"
                />
              </Link>
              <Link
                to={companyDetails.linkedin}
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-secondary text-white md:text-white md:border border-white group"
              >
                <FaLinkedinIn
                  size={18}
                  className="fill-white group-hover:fill-secondary md:group-hover:text-secondary"
                />
              </Link>
              <Link
                to={companyDetails.instagram}
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-secondary text-white md:text-white md:border border-white group"
              >
                <AiFillInstagram
                  size={18}
                  className="fill-white group-hover:fill-secondary md:group-hover:text-secondary"
                />
              </Link>

              <Link
                to={companyDetails.twitter}
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-secondary text-white md:text-white md:border border-white group"
              >
                <FaXTwitter
                  size={18}
                  className="fill-white group-hover:fill-secondary md:group-hover:text-secondary"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-primary flex items-center py-5">
          <div className="wrapper w-full h-fit flex items-center justify-between gap-10">
            <a
              data-aos="fade-down"
              href="/"
              className="flex items-center gap-2"
            >
              <img
                src={headerLogo}
                alt="logo"
                className="w-[5rem] sm:w-[7rem] scale-110 brightness-150"
              />
            </a>

            {/* Desktop Navigation */}
            <div
              data-aos="fade-down"
              className="hidden lg:flex items-center gap-10"
            >
              {websiteLinks.map((link) => (
                <div
                  key={link.id}
                  className="relative"
                  ref={link.submenu ? submenuRef : null}
                >
                  {link.submenu ? (
                    <div className="flex items-center gap-1 cursor-pointer">
                      <span
                        onClick={() => handleSubmenuToggle(link.id)}
                        className={`${
                          pathname.startsWith(link.url)
                            ? "text-secondary"
                            : "text-white"
                        } link flex items-center gap-1`}
                      >
                        {link.title}{" "}
                        <IoChevronDown
                          className={`transition-transform duration-300 ${
                            openSubmenu === link.id ? "rotate-180" : ""
                          }`}
                        />
                      </span>

                      {/* Submenu */}
                      {openSubmenu === link.id && (
                        <div className="absolute top-full left-0 mt-2 bg-bgGrey border border-secondary rounded-md py-2 min-w-[200px] z-50">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.id}
                              to={sublink.url}
                              className={`block px-4 py-2 hover:bg-primary ${
                                pathname === sublink.url
                                  ? "text-secondary"
                                  : "text-white"
                              }`}
                              onClick={() => setOpenSubmenu(null)}
                            >
                              {sublink.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.url}
                      className={`${
                        pathname === link.url ? "text-secondary" : "text-white"
                      } link`}
                    >
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div data-aos="fade-down" className="hidden lg:flex">
              <Link
                to="/contact-us"
                className="btn-fullrounded bg-secondary text-primary hover:bg-transparent hover:text-secondary border border-secondary font-bold"
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
              {websiteLinks.map((link) => (
                <div key={link.id} className="flex flex-col">
                  {/* {link.submenu ? (
                    <>
                      <div 
                        className="flex items-center justify-between text-3xl text-white font-medium transition-colors duration-300 link cursor-pointer"
                        onClick={() => handleSubmenuToggle(link.id)}
                      >
                        <span>{link.title}</span>
                        <IoChevronDown className={`transition-transform duration-300 ${openSubmenu === link.id ? 'rotate-180' : ''}`} />
                      </div>
                      
                      
                      {openSubmenu === link.id && (
                        <div className="mt-4 ml-4 flex flex-col gap-3">
                          {link.submenu.map((sublink) => (
                            <button
                              key={sublink.id}
                              type="button"
                              className="text-xl text-white font-medium transition-colors duration-300 link cursor-pointer text-left"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setOpenSubmenu(null);
                                handleNavigation(sublink.url);
                              }}
                            >
                              {sublink.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : ( */}
                  <button
                    type="button"
                    className="text-3xl text-white font-medium transition-colors duration-300 link cursor-pointer text-left"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleNavigation(link.url);
                    }}
                  >
                    {link.title}
                  </button>
                  {/* )} */}
                </div>
              ))}
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Header;
