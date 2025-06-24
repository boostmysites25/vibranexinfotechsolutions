import banner from "../assets/videos/contactus.mp4";
import { FaGlobe } from "react-icons/fa";
import { companyDetails } from "../content/constant";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { lazy } from "react";
import ContactForm from "../components/common/ContactForm";

const MapComponent = lazy(() => import("../components/website/MapComponent"));
const PageBanner = lazy(() => import("../components/website/PageBanner"));

const ContactUs = () => {
  return (
    <div className="mt-[4.5rem]">
      <PageBanner
        banner={banner}
        title="Contact Us"
        links={[{ title: "Home", url: "/" }, { title: "Contact Us" }]}
      />
      <div className="!max-w-6xl wrapper">
        <ContactForm />
        <section
          data-aos="fade-up"
          className="wrapper flex flex-col items-center gap-6 py-[2rem]"
        >
          <h3 className="text2">Head Office Location</h3>
          <div className="bg-white !p-6 grid lg:grid-cols-3 gap-8 lg:gap-5 rounded-2xl w-full">
            <div className="flex gap-3">
              <div className="min-w-12 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-b from-primary via-primary to-secondary">
                <PiPhoneCallFill size={30} />
              </div>
              <div className="space-y-1 text-black">
                <h6 className="text4">Mobile Number</h6>
                <p>{companyDetails.phone}</p>
              </div>
            </div>
            <div className="flex lg:justify-center gap-3">
              <div className="min-w-12 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-b from-primary via-primary to-secondary">
                <FaLocationDot size={30} />
              </div>
              <div className="space-y-1 text-black">
                <h6 className="text4">Location</h6>
                <p>{companyDetails.address}</p>
              </div>
            </div>
            <div className="flex lg:justify-end gap-3">
              <div className="min-w-12 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-b from-primary via-primary to-secondary">
                <FaGlobe size={30} />
              </div>
              <div className="space-y-1 text-black">
                <h6 className="text4">Have Enquiries?</h6>
                <p>{companyDetails.email}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <MapComponent />
    </div>
  );
};

export default ContactUs;
