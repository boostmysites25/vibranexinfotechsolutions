import ReactPlayer from "react-player";
import bannerVid from "../assets/videos/banner.mp4";
import SubHeading from "../components/common/SubHeading";
import ArrowButton from "../components/common/ArrowButton";
import { Link } from "react-router-dom";
import CircularText from "../components/common/CircularText";
import heroImg from "../assets/images/home-hero.webp";
import aboutImg from "../assets/images/home-about.webp";
import { PiStrategyBold } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";
import { lazy } from "react";
import { motion } from "framer-motion";
import TestimonialVideos from "../components/common/TestimonialVideos";

const BrandLogos = lazy(() => import("../components/common/BrandLogos"));
const IndustriesWeServe = lazy(() =>
  import("../components/common/IndustriesWeServe")
);
const AllServices = lazy(() => import("../components/website/AllServices"));
const OurProcess = lazy(() => import("../components/common/OurProcess"));
const Testimonials = lazy(() => import("../components/common/Testimonials"));
const Faq = lazy(() => import("../components/common/FaqNew"));
const WhyWorkWithUs = lazy(() => import("../components/common/WhyWorkWithUs"));
const CEOMessage = lazy(() => import("../components/common/CEOMessage"));
const ContactForm = lazy(() => import("../components/common/ContactForm"));

const Home = () => {
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
              heading="PREMIUM TECH SOLUTIONS"
              className="text-secondary"
            />
            <h1 className="text_xl font-bold">
              Transforming Business Through{" "}
              <span className="text-secondary">AI & Future-Tech</span>
            </h1>
            <p className="desc !text-xl">
              Creating Competitive Advantages in the Digital Age
            </p>
            <div className="pt-10 flex md:flex-row flex-col items-center gap-4">
              <ArrowButton
                to="/contact-us"
                className="bg-secondary text-primary hover:bg-transparent hover:text-secondary border border-secondary font-bold"
              >
                Get A Free Consultation
              </ArrowButton>
              <Link
                to="/services"
                className="w-full sm:min-w-[10rem] sm:w-auto text-center btn-rounded border border-secondary text-white bg-transparent hover:bg-secondary hover:text-primary font-bold"
              >
                Explore Our Services
              </Link>
              <ArrowButton
                to="/blogs"
                className="border border-secondary text-white bg-transparent hover:bg-secondary hover:text-primary font-bold"
              >
                See Real Projects
              </ArrowButton>
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
        <div
          className="sm:max-w-[85vw] lg:!max-w-[60vw] w-full aspect-[2.14/1
] mx-auto sm:-translate-y-[5rem] lg:-translate-y-[6rem] relative z-[5] rounded-[3rem] overflow-hidden bg-bgGrey"
        >
          <img
            loading="lazy"
            src={heroImg}
            className="h-full w-full object-cover scale-[101%]"
            alt="Hero"
            data-aos="fade-right"
          />
          <div className="p-5 sm:p-6">
            <p
              data-aos="fade-up"
              className="text-lg md:text-2xl !font-normal text-white"
            >
              Vibranex Infotech delivers premium AI and Future-Tech solutions
              that create measurable business value. Our cutting-edge
              technologies transform operations, enhance customer experiences,
              and drive innovation across industries.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-bgGrey">
        <div className="wrapper space-y-8">
          <div data-aos="fade-up" className="flex justify-center">
            <SubHeading heading="ABOUT US" className="text-secondary" />
          </div>

          <div className="grid md:grid-cols-[40%,1fr] gap-10">
            <div className="relative w-full rounded-[3rem] overflow-hidden">
              <img
                loading="lazy"
                data-aos="fade-right"
                src={aboutImg}
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
                Premium AI & Future-Tech Solutions
              </h2>
              <p className="desc">
                At Vibranex Infotech, we deliver cutting-edge technology
                solutions that transform businesses and create competitive
                advantages in the digital age. Our core focus areas include
                AI-Powered Business Solutions and AR/VR Development that drive
                measurable results.
                <br />
                <br />
                Our AI solutions automate complex processes, uncover valuable
                insights from data, and create intelligent systems that learn
                and improve over time. Our AR/VR technologies create immersive
                experiences that revolutionize training, product visualization,
                and customer engagement.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 py-6">
                <div className="bg-primary flex items-center gap-3 justify-center rounded-xl p-4 border border-secondary/20">
                  <div className="bg-bgGrey rounded-full w-14 min-w-14 h-14 flex items-center justify-center">
                    <PiStrategyBold size={30} className="fill-secondary" />
                  </div>
                  <p className="text3 font-bold">Future-Focused Strategies</p>
                </div>
                <div className="bg-primary flex items-center gap-3 justify-center rounded-xl p-4 border border-secondary/20">
                  <div className="bg-bgGrey rounded-full w-14 min-w-14 h-14 flex items-center justify-center">
                    <MdSecurity size={30} className="fill-secondary" />
                  </div>
                  <p className="text3 font-bold">Secure and Scalable Systems</p>
                </div>
              </div>

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

      {/* Featured Services Section */}
      <section className="py-16">
        <div className="wrapper space-y-8">
          <div className="text-center" data-aos="fade-up">
            <SubHeading
              heading="CORE SERVICES"
              className="text-secondary mx-auto"
            />
            <h2 className="text1 font-bold mt-4 mb-6">
              Our Premium Technology Solutions
            </h2>
            <p className="desc max-w-3xl mx-auto">
              We specialize in cutting-edge AI and AR/VR technologies that
              transform how businesses operate, engage with customers, and
              visualize their products and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up">
            {/* AI Services Card */}
            <div className="bg-bgGrey rounded-2xl overflow-hidden border border-secondary/20 hover:-translate-y-2 transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={require("../assets/images/ai-services-hero.webp")}
                  alt="AI Services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text2 font-bold text-secondary">
                  AI-Powered Business Solutions
                </h3>
                <p className="desc">
                  Transform your operations with intelligent automation,
                  data-driven insights, and AI systems that learn and improve
                  over time. Our AI solutions solve real business problems and
                  create measurable value.
                </p>
                <div className="pt-4">
                  <Link
                    to="/ai-services"
                    className="btn-rounded border border-secondary text-white hover:bg-secondary hover:text-primary inline-flex items-center gap-2 font-bold"
                  >
                    Explore AI Solutions
                  </Link>
                </div>
              </div>
            </div>

            {/* AR/VR Services Card */}
            <div className="bg-bgGrey rounded-2xl overflow-hidden border border-secondary/20 hover:-translate-y-2 transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={require("../assets/images/landing page/arvr/Augmented Reality Solutions.webp")}
                  alt="AR/VR Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text2 font-bold text-secondary">
                  AR/VR Development
                </h3>
                <p className="desc">
                  Create immersive experiences that transform how users interact
                  with your products, services, and training materials. Our
                  AR/VR solutions enhance engagement, improve learning, and
                  drive sales.
                </p>
                <div className="pt-4">
                  <Link
                    to="/ar-vr-development"
                    className="btn-rounded border border-secondary text-white hover:bg-secondary hover:text-primary inline-flex items-center gap-2 font-bold"
                  >
                    Explore AR/VR Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <AllServices length={6} />

      {/* Case Studies Section */}
      <section className="py-16 bg-bgGrey">
        <div className="wrapper space-y-8">
          <div className="text-center" data-aos="fade-up">
            <SubHeading
              heading="CASE STUDIES"
              className="text-secondary mx-auto"
            />
            <h2 className="text1 font-bold mt-4 mb-6">
              See How We've Helped Real Businesses
            </h2>
            <p className="desc max-w-3xl mx-auto">
              Explore our success stories and learn how our premium technology
              solutions have transformed businesses across industries.
            </p>
          </div>

          <div className="flex justify-center mt-8" data-aos="fade-up">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowButton
                to="/blogs"
                className="bg-secondary text-primary hover:bg-transparent hover:text-secondary border border-secondary font-bold text-lg"
              >
                Explore Our Work
              </ArrowButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <OurProcess showButton={true} />

      {/* CEO Message */}
      <CEOMessage />

      {/* Industries We Serve */}
      <IndustriesWeServe />

      <TestimonialVideos />

      <div className="flex justify-center mt-8" data-aos="fade-up">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ArrowButton
            to="/blogs"
            className="bg-secondary text-primary hover:bg-transparent hover:text-secondary border border-secondary font-bold text-lg"
          >
            View Case Studies
          </ArrowButton>
        </motion.div>
      </div>

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
              Ready to Transform Your Business?
            </h2>
            <p className="desc max-w-3xl mx-auto mt-4">
              Contact us today to discuss how our premium AI and Future-Tech
              solutions can help you achieve your business goals and create
              competitive advantages in the digital age.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <Faq showButton={true} />

      {/* Why Work With Us */}
      <WhyWorkWithUs />

      {/* Brand Logos */}
      <BrandLogos />
    </div>
  );
};

export default Home;
