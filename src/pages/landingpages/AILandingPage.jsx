import ReactPlayer from "react-player";
import bannerVid from "../../assets/videos/banner.mp4";
import SubHeading from "../../components/common/SubHeading";
import ArrowButton from "../../components/common/ArrowButton";
import { Link } from "react-scroll";
import CircularText from "../../components/common/CircularText";
import heroImg from "../../assets/images/home-hero.webp";
import aiAboutImg from "../../assets/images/services/ai.webp";
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

const AILandingPage = () => {
  const pageTitle = "Intelligent AI Systems";
  const pageDescription = "Creating AI solutions that automate processes and drive intelligent decision-making.";
  
  const getHeroImg = () => {
    return require("../../assets/images/ai-services-hero.webp");
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
              heading="AI SOLUTIONS EXPERTS"
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
                Explore Our AI Services
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
              transformative AI solutions that automate processes, generate insights, and enable intelligent decision-making.
              Our expertise spans from building intelligent, custom AI systems to implementing robust AI-powered systems that automate, adapt,
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
                src={aiAboutImg}
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
                Fueling Digital Success with Intelligent AI Systems
              </h2>

              <p className="desc">
                At <b>Vibranex Infotech</b>, we go beyond development — we build
                digital experiences that transform businesses. Our mission is to
                deliver secure, intelligent, and future-proof solutions tailored
                to your unique goals. Whether it's building intelligent AI systems, automating complex processes,
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

      {/* AI Video Showcase */}
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

      {/* Industry-Specific AI Use Cases */}
      <section className="py-16 bg-bgGrey">
        <div className="wrapper">
          <div className="text-center mb-12" data-aos="fade-up">
            <SubHeading heading="INDUSTRY SOLUTIONS" className="text-secondary mx-auto" />
            <h2 className="text1 font-bold mt-4">
              AI Solutions Tailored to Your Industry
            </h2>
            <p className="desc max-w-3xl mx-auto mt-4">
              Discover how our AI expertise transforms operations and drives innovation across different sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Retail Use Case */}
            <div 
              className="bg-primary p-6 rounded-[2rem] shadow-large border border-secondary/20 hover:border-secondary transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <h3 className="text3 font-bold mb-4 text-secondary">Retail & E-Commerce</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-3 h-3 min-w-3 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Personalized Shopping:</span> AI-driven recommendation engines that increase average order value by 25%
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-3 h-3 min-w-3 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Inventory Optimization:</span> Predictive analytics that reduce stockouts by 30% and overstock by 25%
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-3 h-3 min-w-3 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Visual Search:</span> Image recognition technology that helps customers find products with 90% accuracy
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <ArrowButton
                  scrollTo="contact"
                  offset={-100}
                  className="bg-transparent text-secondary hover:bg-secondary hover:text-primary border border-secondary font-bold"
                >
                  Retail AI Solutions
                </ArrowButton>
              </div>
            </div>
            
            {/* Education Use Case */}
            <div 
              className="bg-primary p-6 rounded-[2rem] shadow-large border border-secondary/20 hover:border-secondary transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text3 font-bold mb-4 text-secondary">Education & Learning</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-3 h-3 min-w-3 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Adaptive Learning:</span> Personalized education paths that improve student performance by up to 30%
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-3 h-3 min-w-3 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Automated Grading:</span> AI systems that reduce assessment time by 70% while maintaining accuracy
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-3 h-3 min-w-3 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Student Engagement:</span> Intelligent tutoring systems that increase course completion rates by 40%
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <ArrowButton
                  scrollTo="contact"
                  offset={-100}
                  className="bg-transparent text-secondary hover:bg-secondary hover:text-primary border border-secondary font-bold"
                >
                  Education AI Solutions
                </ArrowButton>
              </div>
            </div>
            
            {/* Manufacturing Use Case */}
            <div 
              className="bg-primary p-6 rounded-[2rem] shadow-large border border-secondary/20 hover:border-secondary transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text3 font-bold mb-4 text-secondary">Manufacturing & Industry</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-3 h-3 min-w-3 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Predictive Maintenance:</span> AI systems that reduce equipment downtime by up to 50% and maintenance costs by 40%
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-3 h-3 min-w-3 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Quality Control:</span> Computer vision that detects defects with 99.7% accuracy, reducing returns by 35%
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-3 h-3 min-w-3 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Supply Chain Optimization:</span> AI algorithms that improve delivery times by 20% and reduce logistics costs by 15%
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <ArrowButton
                  scrollTo="contact"
                  offset={-100}
                  className="bg-transparent text-secondary hover:bg-secondary hover:text-primary border border-secondary font-bold"
                >
                  Manufacturing AI Solutions
                </ArrowButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection page="ai" />

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
              Ready to Transform Your AI Experience?
            </h2>
            <p className="desc max-w-3xl mx-auto mt-4">
              Let's discuss how our AI development expertise can help you achieve your business goals. Fill out the form below, and our team will get back to you within 24 hours.
            </p>
          </div>

          <div data-aos="fade-up">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqNew page="ai" />

      {/* Why Work With Us */}
      <WhyWorkWithUs />

      {/* Brands Section */}
      <BrandLogos />
    </div>
  );
};

export default AILandingPage;