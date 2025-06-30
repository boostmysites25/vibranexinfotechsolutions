import { Link } from "react-router-dom";
import bgImg from "../../assets/images/footer-bg.webp";
import { companyDetails, logo } from "../../content/constant";
import { websiteLinks } from "./Header";
import { allServices } from "../../content/services";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { createUrlParam } from "../../utils/helper";

const Footer = () => {
  return (
    <div className="pt-7">
      <div className="bg-primary pt-[5rem] pb-7 space-y-8">
        <div className="wrapper space-y-8">
          <div className="grid md:grid-cols-6 lg:grid-cols-[25%,1fr,1fr,1fr] gap-7">
            <div className="md:col-span-6 lg:col-span-1 flex justify-start">
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
                    className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 border border-white hover:border-secondaryLight group"
                  >
                    <FaFacebookF
                      size={18}
                      className="group-hover:fill-secondaryLight"
                    />
                  </Link>
                  <Link
                    to={companyDetails.linkedin}
                    className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 border border-white hover:border-secondaryLight group"
                  >
                    <FaLinkedinIn
                      size={18}
                      className="group-hover:fill-secondaryLight"
                    />
                  </Link>
                  <Link
                    to={companyDetails.instagram}
                    className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 border border-white hover:border-secondaryLight group"
                  >
                    <AiFillInstagram
                      size={18}
                      className="group-hover:fill-secondaryLight"
                    />
                  </Link>

                  <Link
                    to={companyDetails.twitter}
                    className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 border border-white hover:border-secondaryLight group"
                  >
                    <FaXTwitter
                      size={18}
                      className="group-hover:fill-secondaryLight"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 lg:col-span-1 space-y-6">
              <h5 className="text4 text-secondaryLight font-bold">About Company</h5>
              <ul className="flex flex-col gap-3 list-disc pl-5">
                {websiteLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.url}
                      className="link text-sm hover:text-secondaryLight"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 lg:col-span-1 space-y-6">
              <h5 className="text4 text-secondaryLight font-bold">Expertise</h5>
              <ul className="flex flex-col gap-3 list-disc pl-5">
                {allServices.slice(0, 8).map((item) => (
                  <li key={item.id}>
                    <Link
                      to={`/services/${createUrlParam(item.title)}`}
                      className="link text-sm hover:text-secondaryLight"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 lg:col-span-1 space-y-6">
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
          <hr className="border-secondaryLight/20" />
          <p className="text-sm text-center">
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-secondaryLight">Vibranex Infotech</span> | Premium
            AI & Future-Tech Solutions | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
