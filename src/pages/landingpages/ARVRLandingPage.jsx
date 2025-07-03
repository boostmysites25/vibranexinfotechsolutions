import ReactPlayer from "react-player";
import bannerVid from "../../assets/videos/arvr.mp4";
import SubHeading from "../../components/common/SubHeading";
import ArrowButton from "../../components/common/ArrowButton";
import { Link } from "react-scroll";
import CircularText from "../../components/common/CircularText";
import heroImg from "../../assets/images/home-hero.webp";
import arvrAboutImg from "../../assets/images/landing page/arvr/arvr-about.webp";
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
const CEOMessage = lazy(() => import("../../components/common/CEOMessage"));
const ContactForm = lazy(() => import("../../components/common/ContactForm"));

const ARVRLandingPage = () => {
  const pageTitle = "Immersive AR/VR Experiences";
  const pageDescription = "Developing immersive experiences that transform how users interact with your brand.";
  
  const getHeroImg = () => {
    return require("../../assets/images/arvr-dev-hero.webp");
  };

  return (
    <div className="mt-[4.5rem] bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-primary/20 z-[2]" />
        <ReactPlayer
          url={bannerVid}
          playing
          muted
          loop
          playsinline
          playbackRate={0.8}
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            objectPosition: "top",
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
              heading="AR/VR DEVELOPMENT SPECIALISTS"
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
                Explore Our AR/VR Services
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
              transformative AR/VR experiences that create immersive, interactive environments for training, marketing, and entertainment.
              Our expertise spans from building intelligent, custom immersive experiences to implementing robust AI-powered systems that automate, adapt,
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
                src={arvrAboutImg}
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
                Fueling Digital Success with Immersive AR/VR Experiences
              </h2>

              <p className="desc">
                At <b>Vibranex Infotech</b>, we go beyond development — we build
                digital experiences that transform businesses. Our mission is to
                deliver secure, intelligent, and future-proof solutions tailored
                to your unique goals. Whether it's creating immersive virtual environments, enhancing user experiences,
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

      {/* QR-based Demo Placeholder */}
      <section className="py-16 bg-primary">
        <div className="wrapper">
          <div className="text-center mb-12" data-aos="fade-up">
            <SubHeading heading="EXPERIENCE AR/VR" className="text-secondary mx-auto" />
            <h2 className="text1 font-bold mt-4">
              Try Our AR Demo Right Now
            </h2>
            <p className="desc max-w-3xl mx-auto mt-4">
              Scan the QR code with your smartphone to instantly experience one of our augmented reality demos. No app download required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <div className="space-y-6">
                <h3 className="text2 font-bold text-secondary">
                  Instant AR Experience
                </h3>
                <p className="desc">
                  Our WebAR technology allows you to experience augmented reality directly in your browser. Simply scan the QR code with your smartphone camera and follow the instructions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                    <p className="desc">
                      <span className="font-bold">No App Required:</span>{" "}
                      Works directly in your mobile browser
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                    <p className="desc">
                      <span className="font-bold">Interactive Demo:</span>{" "}
                      Explore a 3D model with touch controls
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                    <p className="desc">
                      <span className="font-bold">Share with Others:</span>{" "}
                      Send the link to colleagues or clients
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <ArrowButton
                    scrollTo="contact"
                    offset={-100}
                    className="bg-secondary text-primary hover:bg-transparent hover:text-secondary border border-secondary font-bold"
                  >
                    Request Custom AR Demo
                  </ArrowButton>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center" data-aos="zoom-in">
              <div className="bg-white p-8 rounded-[2rem] shadow-large max-w-[300px]">
                {/* Placeholder QR code - replace with actual QR code image */}
                <div className="bg-black p-2 rounded-xl">
                  <svg
                    className="w-full h-auto"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="0" y="0" width="200" height="200" fill="white" />
                    {/* This is a simplified QR code pattern for placeholder purposes */}
                    <rect x="20" y="20" width="40" height="40" fill="black" />
                    <rect x="140" y="20" width="40" height="40" fill="black" />
                    <rect x="20" y="140" width="40" height="40" fill="black" />
                    <rect x="70" y="70" width="60" height="60" fill="black" />
                    <rect x="30" y="30" width="20" height="20" fill="white" />
                    <rect x="150" y="30" width="20" height="20" fill="white" />
                    <rect x="30" y="150" width="20" height="20" fill="white" />
                    <rect x="70" y="20" width="10" height="40" fill="black" />
                    <rect x="90" y="20" width="10" height="40" fill="black" />
                    <rect x="110" y="20" width="10" height="40" fill="black" />
                    <rect x="20" y="70" width="40" height="10" fill="black" />
                    <rect x="20" y="90" width="40" height="10" fill="black" />
                    <rect x="20" y="110" width="40" height="10" fill="black" />
                    <rect x="140" y="70" width="40" height="10" fill="black" />
                    <rect x="140" y="90" width="40" height="10" fill="black" />
                    <rect x="140" y="110" width="40" height="10" fill="black" />
                    <rect x="70" y="140" width="10" height="40" fill="black" />
                    <rect x="90" y="140" width="10" height="40" fill="black" />
                    <rect x="110" y="140" width="10" height="40" fill="black" />
                  </svg>
                </div>
                <p className="text-primary text-center font-bold mt-4">
                  Scan to Experience AR Demo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 30s Video Explainer Block */}
      <section className="py-16 bg-bgGrey">
        <div className="wrapper">
          <div className="text-center mb-12" data-aos="fade-up">
            <SubHeading heading="HOW IT WORKS" className="text-secondary mx-auto" />
            <h2 className="text1 font-bold mt-4">
              AR/VR Development Explained
            </h2>
            <p className="desc max-w-3xl mx-auto mt-4">
              Watch our 30-second explainer video to understand how we create immersive AR/VR experiences that transform businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <div className="rounded-[2rem] overflow-hidden shadow-large">
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
                    <div className="bg-secondary/20 backdrop-blur-sm p-6 rounded-full">
                      <div className="w-14 h-14 flex items-center justify-center bg-secondary rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-up">
              <div className="space-y-6">
                <h3 className="text2 font-bold text-secondary">
                  Our AR/VR Development Process
                </h3>
                <p className="desc">
                  At Vibranex Infotech, we follow a structured approach to create immersive experiences that deliver real business value. Our process combines technical expertise with creative design to produce AR/VR solutions that engage users and achieve your objectives.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                    <p className="desc">
                      <span className="font-bold">Discovery & Strategy:</span>{" "}
                      We identify your goals and define the optimal AR/VR approach
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                    <p className="desc">
                      <span className="font-bold">Design & Development:</span>{" "}
                      Our team creates immersive 3D environments and interactive elements
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                    <p className="desc">
                      <span className="font-bold">Testing & Deployment:</span>{" "}
                      We ensure a seamless experience across all target devices
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <ArrowButton
                    scrollTo="contact"
                    offset={-100}
                    className="bg-secondary text-primary hover:bg-transparent hover:text-secondary border border-secondary font-bold"
                  >
                    Start Your AR/VR Project
                  </ArrowButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection page="arvr" />

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
              Ready to Transform Your AR/VR Experience?
            </h2>
            <p className="desc max-w-3xl mx-auto mt-4">
              Let's discuss how our AR/VR development expertise can help you achieve your business goals. Fill out the form below, and our team will get back to you within 24 hours.
            </p>
          </div>

          <div data-aos="fade-up">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqNew page="arvr" />

      {/* Why Work With Us */}
      <WhyWorkWithUs />

      {/* Brands Section */}
      <BrandLogos />
    </div>
  );
};

export default ARVRLandingPage;