import { Link } from "react-router-dom";
import bgImg from "../../assets/images/footer-bg.webp";
import { companyDetails, logo } from "../../content/constant";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-7">
      <div
        className="bg-cover bg-no-repeat bg-center pt-[5rem] pb-7 space-y-8"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="wrapper space-y-8">
          <div className="flex justify-between flex-wrap gap-7">
            <div className="flex justify-start">
              <div className="flex flex-col items-center gap-3">
                <img
                  loading="lazy"
                  src={logo}
                  alt="logo"
                  className="w-[13rem] object-contain brightness-150"
                />
                <div className="flex items-center gap-3 pt-3">
                  <Link
                    to={companyDetails.facebook}
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary group"
                  >
                    <FaFacebookF
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>
                  <Link
                    to={companyDetails.linkedin}
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary group"
                  >
                    <FaLinkedinIn
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>
                  <Link
                    to={companyDetails.instagram}
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary group"
                  >
                    <AiFillInstagram
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>

                  <Link
                    to={companyDetails.twitter}
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary group"
                  >
                    <FaXTwitter
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>
                </div>
              </div>
            </div>
             <div className="max-w-xs space-y-6">
              <h5 className="text4 text-secondaryLight font-bold">Our Offices</h5>
              <ul className="flex flex-col gap-5">
                <li className="text-sm">
                  <span className="font-bold text-secondaryLight">
                    Headquarters:
                  </span>
                  <br />
                  {companyDetails.address.headquarters}
                </li>
                <li className="text-sm">
                  <span className="font-bold text-secondaryLight">
                    Registered Office:
                  </span>
                  <br />
                  {companyDetails.address.registered}
                </li>
              </ul>
              <h5 className="text4 text-secondaryLight font-bold">Contact Us</h5>
              <ul className="flex flex-col gap-3">
                <li className="text-sm">
                  <Link
                    to={`tel:${companyDetails.phone}`}
                    className="link hover:text-secondaryLight"
                  >
                    {companyDetails.phone}
                  </Link>
                </li>
                <li className="text-sm">
                  <Link
                    to={`mailto:${companyDetails.email}`}
                    className="link hover:text-secondaryLight"
                  >
                    {companyDetails.email}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-white/20" />
          <p className="text-sm text-center">
            Copyright © {new Date().getFullYear()} Vibranex Infotech Solutions | All
            Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
