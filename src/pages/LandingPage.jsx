import ReactPlayer from "react-player";
import bannerVid from "../assets/videos/banner.mp4";
import SubHeading from "../components/common/SubHeading";
import ArrowButton from "../components/common/ArrowButton";
import { Link } from "react-scroll";
import CircularText from "../components/common/CircularText";
import heroImg from "../assets/images/home-hero.webp";
import webAboutImg from "../assets/images/landing page/web-about.webp";
import appAboutImg from "../assets/images/landing page/app-about.webp";
import aiAboutImg from "../assets/images/services/ai.webp";
import arvrAboutImg from "../assets/images/services/arvr.webp";
import iotAboutImg from "../assets/images/landing page/iot/iot-about.webp";
import { lazy } from "react";
import { motion } from "framer-motion";

const BrandLogos = lazy(() => import("../components/common/BrandLogos"));
const ServicesSection = lazy(() =>
  import("../components/landingpage/ServicesSection")
);
const IndustriesWeServe = lazy(() =>
  import("../components/common/IndustriesWeServe")
);
const OurProcess = lazy(() => import("../components/common/OurProcess"));
const Testimonials = lazy(() => import("../components/common/Testimonials"));
const FaqNew = lazy(() => import("../components/common/FaqNew"));
const WhyWorkWithUs = lazy(() => import("../components/common/WhyWorkWithUs"));
const Portfolio = lazy(() => import("../components/landingpage/Portfolio"));
const CEOMessage = lazy(() => import("../components/common/CEOMessage"));
const ContactForm = lazy(() => import("../components/common/ContactForm"));

const LandingPage = ({ page }) => {
  const isWeb = page === "web";
  const isApp = page === "app";
  const isAI = page === "ai";
  const isARVR = page === "arvr";
  const isIoT = page === "iot";

  // Get the appropriate title and description based on page type
  const getPageTitle = () => {
    if (isWeb) return "Scalable Web Solutions";
    if (isApp) return "Innovative Mobile Apps";
    if (isAI) return "Intelligent AI Systems";
    if (isARVR) return "Immersive AR/VR Experiences";
    if (isIoT) return "Connected IoT Ecosystems";
    return "";
  };

  const getPageDescription = () => {
    if (isWeb)
      return "Designing high-impact websites that boost engagement and accelerate growth.";
    if (isApp)
      return "Building next-gen mobile apps that deliver intuitive and seamless experiences.";
    if (isAI)
      return "Creating AI solutions that automate processes and drive intelligent decision-making.";
    if (isARVR)
      return "Developing immersive experiences that transform how users interact with your brand.";
    if (isIoT)
      return "Building connected systems that turn data into intelligent action and business value.";
    return "";
  };

  const getAboutImage = () => {
    if (isWeb) return webAboutImg;
    if (isApp) return appAboutImg;
    if (isAI) return aiAboutImg;
    if (isARVR) return arvrAboutImg;
    if (isIoT) return iotAboutImg;
    return webAboutImg;
  };

  const getHeroImg = () => {
    if (isAI) return require("../assets/images/ai-services-hero.webp");
    if (isWeb) return require("../assets/images/web-dev-hero.webp");
    if (isApp) return require("../assets/images/app-dev-hero.webp");
    if (isARVR) return require("../assets/images/arvr-dev-hero.webp");
    if (isIoT) return require("../assets/images/iot-dev-hero.webp");
    return heroImg;
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
        <div className="wrapper absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] flex flex-col-reverse gap-5 sm:grid grid-cols-[1fr,20%] items-center">
          <div data-aos="fade-up" className="max-w-[50rem] space-y-1">
            <SubHeading
              heading={
                isWeb
                  ? "WEB DEVELOPMENT EXPERTS"
                  : isApp
                  ? "APP DEVELOPMENT SPECIALISTS"
                  : isAI
                  ? "AI SOLUTIONS EXPERTS"
                  : isARVR
                  ? "AR/VR DEVELOPMENT SPECIALISTS"
                  : "IOT DEVELOPMENT EXPERTS"
              }
              className="text-secondary"
            />
            <h1 className="text_xl font-bold">
              Building the Future with{" "}
              <span className="text-secondary">{getPageTitle()}</span>
            </h1>

            <p className="desc !text-xl">{getPageDescription()}</p>

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
                Explore Our{" "}
                {isWeb
                  ? "Web"
                  : isApp
                  ? "App"
                  : isAI
                  ? "AI"
                  : isARVR
                  ? "AR/VR"
                  : "IoT"}{" "}
                Services
              </Link>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex justify-end sm:self-end sm:pr-[3rem] lg:pr-[8rem]"
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
            className="aspect-[2/1
] w-full object-cover"
            alt="Hero"
            data-aos="fade-right"
          />
          <div className="p-5 sm:p-6">
            <p
              data-aos="fade-left"
              className="text-lg md:text-2xl !font-normal text-white"
            >
              <b>Vibranex Infotech</b> empowers forward-thinking businesses with
              transformative{" "}
              {isWeb
                ? "web solutions designed to boost digital presence, streamline operations, and drive sustained growth."
                : isApp
                ? "mobile solutions that combine sleek design with high performance for an unmatched user experience."
                : isAI
                ? "AI solutions that automate processes, generate insights, and enable intelligent decision-making."
                : isARVR
                ? "AR/VR experiences that create immersive, interactive environments for training, marketing, and entertainment."
                : "IoT ecosystems that connect devices, analyze data, and enable smart automation across your organization."}{" "}
              Our expertise spans from building intelligent, custom{" "}
              {isWeb
                ? "web platforms"
                : isApp
                ? "mobile applications"
                : isAI
                ? "AI systems"
                : isARVR
                ? "immersive experiences"
                : "connected device networks"}{" "}
              to implementing robust AI-powered systems that automate, adapt,
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
                src={getAboutImage()}
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
                Fueling Digital Success with{" "}
                {isWeb
                  ? "Scalable Web Solutions"
                  : isApp
                  ? "Innovative App Solutions"
                  : isAI
                  ? "Intelligent AI Systems"
                  : isARVR
                  ? "Immersive AR/VR Experiences"
                  : "Connected IoT Ecosystems"}
              </h2>

              <p className="desc">
                At <b>Vibranex Infotech</b>, we go beyond development — we build
                digital experiences that transform businesses. Our mission is to
                deliver secure, intelligent, and future-proof solutions tailored
                to your unique goals. Whether it's{" "}
                {isWeb
                  ? "engineering dynamic websites, developing scalable web platforms,"
                  : isApp
                  ? "crafting intuitive mobile applications, optimizing user engagement,"
                  : isAI
                  ? "building intelligent AI systems, automating complex processes,"
                  : isARVR
                  ? "creating immersive virtual environments, enhancing user experiences,"
                  : "connecting smart devices, analyzing IoT data streams,"}
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

      {/* AI Video Showcase - Only show for AI page */}
      {isAI && (
        <section className="py-16 bg-primary">
          <div className="wrapper">
            <div className="text-center mb-12" data-aos="fade-up">
              <SubHeading heading="AI IN ACTION" className="text-secondary mx-auto" />
              <h2 className="text1 font-bold mt-4">
                See Our AI Solutions at Work
              </h2>
              <p className="desc max-w-3xl mx-auto mt-4">
                Watch how our intelligent AI systems transform data into actionable insights, 
                automate complex processes, and drive business growth through advanced machine learning.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-large" data-aos="zoom-in">
              <div className="aspect-video w-full bg-bgGrey relative">
                {/* Placeholder for actual video - replace with actual video component when available */}
                <ReactPlayer
                  url="" 
                  width="100%"
                  height="100%"
                  controls={true}
                  light={true} // This shows a thumbnail until clicked
                  playing={false}
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 }
                    }
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-secondary/20 backdrop-blur-sm p-8 rounded-full">
                    <div className="w-16 h-16 flex items-center justify-center bg-secondary rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      <ServicesSection page={page} />

      {/* Portfolio Section - Only show for Web and App */}
      {(isWeb || isApp) && <Portfolio page={page} />}

      {/* Our Process Section */}
      <OurProcess showButton={true} />

      {/* CEO Message */}
      <CEOMessage />

      {/* Industries We Serve */}
      <IndustriesWeServe />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Form Section */}
      <section className="py-16 bg-bgGrey">
        <div className="wrapper">
          <div className="text-center mb-12" data-aos="fade-up">
            <SubHeading
              heading="GET STARTED"
              className="text-secondary mx-auto"
            />
            <h2 className="text1 font-bold mt-4">
              Ready to Transform Your{" "}
              {isWeb
                ? "Web"
                : isApp
                ? "App"
                : isAI
                ? "AI"
                : isARVR
                ? "AR/VR"
                : "IoT"}{" "}
              Experience?
            </h2>
            <p className="desc max-w-3xl mx-auto mt-4">
              Contact us today to discuss how our premium{" "}
              {isWeb
                ? "web"
                : isApp
                ? "app"
                : isAI
                ? "AI"
                : isARVR
                ? "AR/VR"
                : "IoT"}{" "}
              development solutions can help you achieve your business goals and
              create competitive advantages in the digital age.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <FaqNew showButton={true} />

      {/* Why Work With Us */}
      <WhyWorkWithUs />

      {/* Brand Logos */}
      <BrandLogos />
    </div>
  );
};

export default LandingPage;
