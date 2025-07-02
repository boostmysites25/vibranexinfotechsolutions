import ReactPlayer from "react-player";
import bannerVid from "../../assets/videos/banner.mp4";
import SubHeading from "../../components/common/SubHeading";
import ArrowButton from "../../components/common/ArrowButton";
import { Link } from "react-scroll";
import CircularText from "../../components/common/CircularText";
import heroImg from "../../assets/images/home-hero.webp";
import webAboutImg from "../../assets/images/landing page/web-about.webp";
import { lazy } from "react";
import { motion } from "framer-motion";

const BrandLogos = lazy(() => import("../../components/common/BrandLogos"));
const ServicesSection = lazy(() =>
  import("../../components/landingpage/ServicesSection")
);
const IndustriesWeServe = lazy(() =>
  import("../../components/common/IndustriesWeServe")
);
const OurProcess = lazy(() => import("../../components/common/OurProcess"));
const Testimonials = lazy(() => import("../../components/common/Testimonials"));
const FaqNew = lazy(() => import("../../components/common/FaqNew"));
const WhyWorkWithUs = lazy(() => import("../../components/common/WhyWorkWithUs"));
const Portfolio = lazy(() => import("../../components/landingpage/Portfolio"));
const CEOMessage = lazy(() => import("../../components/common/CEOMessage"));
const ContactForm = lazy(() => import("../../components/common/ContactForm"));

const WebLandingPage = () => {
  const pageTitle = "Scalable Web Solutions";
  const pageDescription = "Designing high-impact websites that boost engagement and accelerate growth.";
  
  const getHeroImg = () => {
    return require("../../assets/images/web-dev-hero.webp");
  };

  return (
    <div className="mt-[4.5rem] bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-primary/80 z-[2]" />
        <ReactPlayer
          url={bannerVid}
          playing
          muted
          loop
          playsinline
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                },
              },
            },
          }}
        />
        <div className="wrapper absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] flex flex-col-reverse gap-5 sm:gap-10 lg:gap-7 lg:grid grid-cols-[1fr,20%] items-center">
          <div data-aos="fade-up" className="max-w-[50rem] space-y-1">
            <SubHeading
              heading="WEB DEVELOPMENT EXPERTS"
              className="text-secondary"
            />
            <h1 className="text_xl font-bold">
              Building the Future with{" "}
              <span className="text-secondary">{pageTitle}</span>
            </h1>

            <p className="desc !text-xl">{pageDescription}</p>

            <div className="pt-10 flex sm:flex-row flex-col items-center gap-4">
              <ArrowButton
                scrollTo="contact"
                offset={-100}
                className="bg-secondary text-primary hover:bg-transparent hover:text-secondary border border-secondary font-bold"
              >
                Get A Free Consultation
              </ArrowButton>
              <Link
                to="services"
                offset={-100}
                smooth
                duration={500}
                spy
                className="w-full sm:min-w-[10rem] sm:w-auto text-center btn-rounded border border-secondary text-white bg-transparent hover:bg-secondary hover:text-primary font-bold"
              >
                Explore Our Web Services
              </Link>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex justify-end lg:self-end sm:pr-[3rem] lg:pr-[8rem]"
          >
            <CircularText />
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="wrapper">
        <div className="sm:max-w-[85vw] lg:!max-w-[55vw] w-full mx-auto -translate-y-[5rem] lg:-translate-y-[6rem] relative z-[5] rounded-[3rem] overflow-hidden bg-bgGrey">
          <img
            loading="lazy"
            src={getHeroImg()}
            className="aspect-[2/1] w-full object-cover"
            alt="Hero"
            data-aos="fade-right"
          />
          <div className="p-5 sm:p-6">
            <p
              data-aos="fade-up"
              className="text-lg md:text-2xl !font-normal text-white"
            >
              <b>Vibranex Infotech</b> empowers forward-thinking businesses with
              transformative web solutions designed to boost digital presence, streamline operations, and drive sustained growth.
              Our expertise spans from building intelligent, custom web platforms to implementing robust AI-powered systems that automate, adapt,
              and scale.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-bgGrey">
        <div className="wrapper space-y-8">
          <div data-aos="fade-up" className="flex justify-center">
            <SubHeading heading="ABOUT US" className="text-secondary" />
          </div>
          <div className="grid md:grid-cols-[40%,1fr] gap-10">
            <div className="relative w-full rounded-[3rem] overflow-hidden">
              <img
                loading="lazy"
                data-aos="fade-right"
                src={webAboutImg}
                className="w-full h-full object-cover rounded-lg"
                alt="About Us"
              />
              <div
                data-aos="fade-right"
                className="absolute left-4 bottom-5 bg-secondary text-primary p-5 rounded-[1.5rem] shadow-xl text-center"
              >
                <h2 className="text2 !font-bold">100%</h2>
                <p className="desc !text-base font-bold">Success Rate</p>
              </div>
            </div>
            <div data-aos="fade-up" className="space-y-6">
              <h2 className="text1 font-bold">
                Fueling Digital Success with Scalable Web Solutions
              </h2>

              <p className="desc">
                At <b>Vibranex Infotech</b>, we go beyond development — we build
                digital experiences that transform businesses. Our mission is to
                deliver secure, intelligent, and future-proof solutions tailored
                to your unique goals. Whether it's engineering dynamic websites, developing scalable web platforms,
                or integrating AI-powered tools and data-driven insights, we
                ensure your business stays ahead of the curve.
                <br />
                <br />
                We combine technical excellence with a deep understanding of
                user behavior to create solutions that are not only functional
                but also drive results. From strategy to execution, our
                end-to-end approach helps you innovate, scale, and lead with
                confidence in the ever-evolving digital landscape.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Enhanced Engagement:</span>{" "}
                    Create memorable experiences that captivate users and
                    strengthen brand connection
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Data-Driven Insights:</span>{" "}
                    Transform raw data into actionable intelligence for better
                    decision-making
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Operational Efficiency:</span>{" "}
                    Automate repetitive tasks and streamline complex workflows
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection page="web" />

      {/* Portfolio Section */}
      <Portfolio page="web" />

      {/* Our Process Section */}
      <OurProcess showButton={true} />

      {/* CEO Message */}
      <CEOMessage />

      {/* Industries We Serve */}
      <IndustriesWeServe />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-bgGrey">
        <div className="wrapper">
          <div className="text-center mb-12" data-aos="fade-up">
            <SubHeading
              heading="GET STARTED"
              className="text-secondary mx-auto"
            />
            <h2 className="text1 font-bold mt-4">
              Ready to Transform Your Web Experience?
            </h2>
            <p className="desc max-w-3xl mx-auto mt-4">
              Let's discuss how our web development expertise can help you achieve your business goals. Fill out the form below, and our team will get back to you within 24 hours.
            </p>
          </div>

          <div data-aos="fade-up">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqNew page="web" />

      {/* Why Work With Us */}
      <WhyWorkWithUs />

      {/* Brands Section */}
      <BrandLogos />
    </div>
  );
};

export default WebLandingPage;