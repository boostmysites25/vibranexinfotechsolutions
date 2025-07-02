import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaLink,
  FaChartLine,
  FaRobot,
  FaCheck,
  FaChevronRight,
  FaArrowRight,
  FaDatabase,
  FaServer,
  FaLayerGroup,
  FaLightbulb,
} from "react-icons/fa";
import {
  SiReact,
  SiNodeDotJs,
  SiEthereum,
  SiPython,
  SiTensorflow,
} from "react-icons/si";
import { serviceDetailsList } from "../content/services";
import { createUrlParam } from "../utils/helper";
import bannerImg from "../assets/images/service-details.webp";
import ContactForm from "../components/common/ContactForm";
import ReactPlayer from "react-player";
import bgVideo from '../assets/videos/ai.mp4'

const ServiceDetails = () => {
  const { page } = useParams();
  const service = serviceDetailsList.find(
    (s) => createUrlParam(s.title) === page
  );

  if (!service) return <Navigate to="/services" replace={true} />;

  return (
    <div className="mt-[5.5rem] lg:mt-[9rem] min-h-screen text-white max-w-[100vw]">
      {/* Hero Section with Image */}
      <div className="relative overflow-hidden">
        {/* Image with gradient overlay */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
          <ReactPlayer
            url={bgVideo}
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
              filter:"brightness(0.6)",
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
          {/* <img
            src={bannerImg}
            alt={service.title}
            className="w-full h-full object-cover rounded-xl"
            data-aos="fade-in"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent rounded-xl" />

          {/* Floating image frame effect */}
          <div className="absolute inset-0 border-8 border-primary/20 pointer-events-none" />

          {/* Glowing corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary rounded-tl-xl opacity-70" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-secondary rounded-tr-xl opacity-70" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-primary rounded-bl-xl opacity-70" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-secondary rounded-br-xl opacity-70" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="wrapper py-16 md:py-24 relative z-10 text-center">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-secondary mb-4"
              data-aos="fade-up"
            >
              {service.title}
            </h1>
            <p
              className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {service.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Glowing Divider */}
      <div
        className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 my-8 md:my-12"
        data-aos="fade"
        data-aos-delay="300"
      />

      {/* Content Container */}
      <div className="wrapper pb-12 md:pb-20">
        {/* Overview Section */}
        <section className="mb-16 md:mb-20">
          <div className="flex items-center mb-6 md:mb-8">
            <div
              className="h-0.5 bg-gradient-to-r from-primary to-secondary w-12 md:w-16 mr-3 md:mr-4"
              data-aos="fade-right"
            />
            <h2
              className="text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-secondaryLight to-secondary"
              data-aos="fade-up"
            >
              OVERVIEW
            </h2>
          </div>
          <p
            className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl"
            data-aos="fade-up"
          >
            {service.overview}
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16 md:mb-20">
          <div className="flex items-center mb-6 md:mb-8">
            <div
              className="h-0.5 bg-gradient-to-r from-secondary to-primary w-12 md:w-16 mr-3 md:mr-4"
              data-aos="fade-right"
            />
            <h2
              className="text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondaryLight"
              data-aos="fade-up"
            >
              KEY FEATURES
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3 md:mr-4">
                    <div className="h-5 w-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <FaCheck className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-300">
                    {feature}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-16 md:mb-20">
          <div className="flex items-center mb-6 md:mb-8">
            <div
              className="h-0.5 bg-gradient-to-r from-primary to-secondary w-12 md:w-16 mr-3 md:mr-4"
              data-aos="fade-right"
            />
            <h2
              className="text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-secondaryLight to-secondary"
              data-aos="fade-up"
            >
              TECHNOLOGIES
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-3 md:p-4 border-b border-gray-700 flex items-center">
                  {tech.name === "Frontend" && <SiReact className="mr-2" />}
                  {tech.name === "Backend" && <FaServer className="mr-2" />}
                  {tech.name === "Databases" && <FaDatabase className="mr-2" />}
                  {tech.name === "DevOps" && <FaLayerGroup className="mr-2" />}
                  {tech.name === "Platforms" && <SiEthereum className="mr-2" />}
                  {tech.name === "Languages" && <FaCode className="mr-2" />}
                  {tech.name === "Tools" && <FaChartLine className="mr-2" />}
                  {tech.name === "NLP" && <FaRobot className="mr-2" />}
                  {tech.name === "Frameworks" && (
                    <SiTensorflow className="mr-2" />
                  )}
                  <h3 className="font-mono text-sm md:text-base font-bold text-secondary">
                    {tech.name}
                  </h3>
                </div>
                <ul className="divide-y divide-gray-700/50">
                  {tech.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="p-3 md:p-4 text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <FaChevronRight className="text-primary mr-2 text-xs" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Timeline */}
        <section className="mb-16 md:mb-20">
          <div className="flex items-center mb-6 md:mb-8">
            <div
              className="h-0.5 bg-gradient-to-r from-primary to-secondary w-12 md:w-16 mr-3 md:mr-4"
              data-aos="fade-right"
            />
            <h2
              className="text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-secondaryLight to-secondary"
              data-aos="fade-up"
            >
              OUR PROCESS
            </h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-6 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-blue-500 opacity-30" />

            <div className="space-y-8 md:space-y-12 pl-8 md:pl-12">
              {service.process.map((step, index) => (
                <div
                  key={step.step}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-6 md:-left-8 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 rounded-full bg-gradient-to-r from-secondaryLight to-secondary shadow-lg shadow-primary/30" />

                  <motion.div
                    className="bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-700 hover:border-secondary transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-base md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondaryLight to-secondary mr-2 md:mr-3">
                        {step.step}.
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-gray-100">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-400 pl-6 md:pl-8">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Videos Section - Only show for AR/VR */}
        {service.title === "Virtual Reality (VR) & Augmented Reality (AR)" && (
          <section className="mb-16 md:mb-20">
            <div className="flex items-center mb-6 md:mb-8">
              <div
                className="h-0.5 bg-gradient-to-r from-primary to-secondary w-12 md:w-16 mr-3 md:mr-4"
                data-aos="fade-right"
              />
              <h2
                className="text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-secondaryLight to-secondary"
                data-aos="fade-up"
              >
                INTERACTIVE DEMOS
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mb-8" data-aos="fade-up">
              Experience our AR/VR solutions in action. These demos showcase real-world applications 
              of our technology, from interactive business cards to virtual product try-ons.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Demo Video 1 - Business Card AR */}
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-primary transition-all duration-300"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
              >
                <div className="aspect-video relative">
                  {/* Video placeholder - will be replaced with actual video */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <p className="text-white text-center px-6">
                      AR Business Card Demo Video<br/>
                      <span className="text-sm text-gray-400">(Coming Soon)</span>
                    </p>
                  </div>
                  {/* Uncomment and update when video is available */}
                  {/* <ReactPlayer
                    url="/path/to/business-card-demo.mp4"
                    width="100%"
                    height="100%"
                    controls={true}
                    light={true}
                    playIcon={
                      <div className="bg-secondary text-primary p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    }
                  /> */}
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-2">Interactive Business Cards</h3>
                  <p className="text-sm md:text-base text-gray-400">
                    Transform ordinary business cards into interactive experiences. When scanned with a smartphone, 
                    these cards come to life with videos, 3D models, and direct contact options.
                  </p>
                </div>
              </motion.div>

              {/* Demo Video 2 - Virtual Try-On */}
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-primary transition-all duration-300"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="aspect-video relative">
                  {/* Video placeholder - will be replaced with actual video */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <p className="text-white text-center px-6">
                      Virtual Try-On Demo Video<br/>
                      <span className="text-sm text-gray-400">(Coming Soon)</span>
                    </p>
                  </div>
                  {/* Uncomment and update when video is available */}
                  {/* <ReactPlayer
                    url="/path/to/virtual-tryon-demo.mp4"
                    width="100%"
                    height="100%"
                    controls={true}
                    light={true}
                    playIcon={
                      <div className="bg-secondary text-primary p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    }
                  /> */}
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-2">Virtual Product Try-On</h3>
                  <p className="text-sm md:text-base text-gray-400">
                    Allow customers to virtually try products before purchasing. Perfect for fashion, 
                    eyewear, cosmetics, and furniture retailers looking to reduce returns and increase conversions.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Demo Video 3 - Interactive Menu */}
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-primary transition-all duration-300"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
              >
                <div className="aspect-video relative">
                  {/* Video placeholder - will be replaced with actual video */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <p className="text-white text-center px-6">
                      AR Menu Card Demo Video<br/>
                      <span className="text-sm text-gray-400">(Coming Soon)</span>
                    </p>
                  </div>
                  {/* Uncomment and update when video is available */}
                  {/* <ReactPlayer
                    url="/path/to/menu-demo.mp4"
                    width="100%"
                    height="100%"
                    controls={true}
                    light={true}
                    playIcon={
                      <div className="bg-secondary text-primary p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    }
                  /> */}
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-2">Interactive Menu Cards</h3>
                  <p className="text-sm md:text-base text-gray-400">
                    Enhance dining experiences with AR-enabled menu cards that show 3D models of dishes, 
                    ingredients, preparation methods, and nutritional information.
                  </p>
                </div>
              </motion.div>

              {/* Demo Video 4 - Training Simulation */}
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-primary transition-all duration-300"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="aspect-video relative">
                  {/* Video placeholder - will be replaced with actual video */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <p className="text-white text-center px-6">
                      VR Training Simulation Demo<br/>
                      <span className="text-sm text-gray-400">(Coming Soon)</span>
                    </p>
                  </div>
                  {/* Uncomment and update when video is available */}
                  {/* <ReactPlayer
                    url="/path/to/training-demo.mp4"
                    width="100%"
                    height="100%"
                    controls={true}
                    light={true}
                    playIcon={
                      <div className="bg-secondary text-primary p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    }
                  /> */}
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-2">VR Training Simulations</h3>
                  <p className="text-sm md:text-base text-gray-400">
                    Immersive training environments that simulate real-world scenarios without real-world risks. 
                    Ideal for healthcare, manufacturing, and hazardous industries.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Testimonial Videos Section - Only show for AR/VR */}
        {service.title === "Virtual Reality (VR) & Augmented Reality (AR)" && (
          <section className="mb-16 md:mb-20">
            <div className="flex items-center mb-6 md:mb-8">
              <div
                className="h-0.5 bg-gradient-to-r from-primary to-secondary w-12 md:w-16 mr-3 md:mr-4"
                data-aos="fade-right"
              />
              <h2
                className="text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-secondaryLight to-secondary"
                data-aos="fade-up"
              >
                CLIENT TESTIMONIALS
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mb-8" data-aos="fade-up">
              Listen to what our clients have to say about their experience working with us
              and how our AR/VR solutions have transformed their businesses.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Testimonial Video 1 */}
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-primary transition-all duration-300"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
              >
                <div className="aspect-video relative">
                  {/* Video placeholder - will be replaced with actual testimonial */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <p className="text-white text-center px-6">
                      Client Testimonial Video<br/>
                      <span className="text-sm text-gray-400">(Coming Soon)</span>
                    </p>
                  </div>
                  {/* Uncomment and update when video is available */}
                  {/* <ReactPlayer
                    url="/path/to/testimonial1.mp4"
                    width="100%"
                    height="100%"
                    controls={true}
                    light={true}
                    playIcon={
                      <div className="bg-secondary text-primary p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    }
                  /> */}
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-700 mr-3"></div>
                    <div>
                      <h3 className="font-bold text-white">Client Name</h3>
                      <p className="text-xs text-gray-400">Position, Company</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-400 italic">
                    "The AR solution developed by Vibranex has completely transformed how our customers 
                    interact with our products. We've seen a significant increase in engagement and sales."
                  </p>
                </div>
              </motion.div>

              {/* Testimonial Video 2 */}
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-primary transition-all duration-300"
                whileHover={{ y: -5 }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="aspect-video relative">
                  {/* Video placeholder - will be replaced with actual testimonial */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <p className="text-white text-center px-6">
                      Client Testimonial Video<br/>
                      <span className="text-sm text-gray-400">(Coming Soon)</span>
                    </p>
                  </div>
                  {/* Uncomment and update when video is available */}
                  {/* <ReactPlayer
                    url="/path/to/testimonial2.mp4"
                    width="100%"
                    height="100%"
                    controls={true}
                    light={true}
                    playIcon={
                      <div className="bg-secondary text-primary p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    }
                  /> */}
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-700 mr-3"></div>
                    <div>
                      <h3 className="font-bold text-white">Client Name</h3>
                      <p className="text-xs text-gray-400">Position, Company</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-400 italic">
                    "The VR training program developed by Vibranex has reduced our training time by 50% 
                    while improving knowledge retention and safety compliance across our organization."
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-700/50 shadow-xl"
          data-aos="fade-up"
        >
          <div className="flex items-center mb-6 md:mb-8">
            <div
              className="h-0.5 bg-gradient-to-r from-primary to-secondary w-12 md:w-16 mr-3 md:mr-4"
              data-aos="fade-right"
            />
            <h2
              className="text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-secondaryLight to-secondary"
              data-aos="fade-up"
            >
              BENEFITS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start group"
                whileHover={{ x: 5 }}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="flex-shrink-0 mt-1 mr-3 md:mr-4">
                  <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <FaLightbulb className="h-3 w-3 md:h-4 md:w-4 text-white" />
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <ContactForm />
    </div>
  );
};

export default ServiceDetails;
