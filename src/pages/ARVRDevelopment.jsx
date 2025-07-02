import React from "react";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/common/SubHeading";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { allServices, arvrDevelopmentServices } from "../content/services";
import ContactForm from "../components/common/ContactForm";
import { motion } from "framer-motion";

const ARVRDevelopment = () => {
  // Filter AR/VR related services
  const arvrServices = arvrDevelopmentServices;

  // Case studies for AR/VR
  const caseStudies = [
    {
      id: 1,
      title: "Virtual Training Simulator for Medical Professionals",
      description:
        "We developed a VR training platform for surgeons that simulates complex procedures in a risk-free environment, reducing training time by 60% and improving skill retention.",
      image: require("../assets/images/portfolio/web-development/think-reality.webp"),
      results: [
        "60% reduction in training time",
        "93% of users reported increased confidence",
        "45% improvement in procedural accuracy",
      ],
    },
    {
      id: 2,
      title: "AR Product Visualization for Furniture Retailer",
      description:
        "Our AR solution allows customers to visualize furniture in their homes before purchasing, leading to higher conversion rates and reduced returns.",
      image: require("../assets/images/portfolio/web-development/midwam.webp"),
      results: [
        "35% increase in conversion rate",
        "42% reduction in product returns",
        "28% increase in average order value",
      ],
    },
    {
      id: 3,
      title: "Industrial Maintenance AR Assistant",
      description:
        "We created an AR application that guides technicians through complex maintenance procedures with real-time overlays and step-by-step instructions.",
      image: require("../assets/images/portfolio/app-development/autosnap-app.webp"),
      results: [
        "50% reduction in maintenance time",
        "75% decrease in errors",
        "30% cost savings on training",
      ],
    },
  ];

  return (
    <div className="mt-[4.5rem]">
      <PageBanner
        title="AR/VR Development"
        subtitle="Creating immersive digital experiences that transform how users interact with your brand"
      />

      {/* Overview Section */}
      <section className="py-16 bg-bgGrey">
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <SubHeading
                heading="IMMERSIVE EXPERIENCES"
                className="text-secondary"
              />
              <h2 className="text1 mb-6">
                Transform Reality with Cutting-Edge AR/VR Solutions
              </h2>
              <p className="desc mb-6">
                At Vibranex, we create immersive augmented and virtual reality
                experiences that revolutionize how businesses engage with their
                customers, train their employees, and visualize their products.
                Our AR/VR solutions blend cutting-edge technology with strategic
                thinking to deliver measurable business outcomes.
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
                    <span className="font-bold">Improved Training:</span> Reduce
                    training time and costs while improving knowledge retention
                    and safety
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Better Visualization:</span>{" "}
                    Help customers visualize products in their own environment
                    before purchasing
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative rounded-2xl overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={require("../assets/images/services/arvr.webp")}
                alt="AR/VR Development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-secondary text-primary font-bold text-xl p-6 rounded-full"
                >
                  Future-Ready Solutions
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="wrapper">
          <div className="text-center mb-12" data-aos="fade-up">
            <SubHeading
              heading="OUR OFFERINGS"
              className="text-secondary w-fit mx-auto"
            />
            <h2 className="text1 mb-4">AR/VR Development Services</h2>
            <p className="desc max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end AR/VR solutions
              tailored to your specific business needs and objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {arvrServices.map((service) => (
              <div
                key={service.id}
                className="border border-secondary p-6 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 h-full"
                data-aos="fade-up"
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover hover:scale-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text3 mb-3">{service.title}</h3>
                <p className="desc mb-4">{service.description}</p>

                {/* <div className="mb-4">
                  <h4 className="font-bold text-secondary mb-2">
                    Problem Solved:
                  </h4>
                  <p className="desc">{service.problem}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-secondary mb-2">Use Case:</h4>
                  <p className="desc">{service.useCase}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-secondary mb-2">Industries:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.map((industry, index) => (
                      <span
                        key={index}
                        className="text-xs bg-bgGrey px-3 py-1 rounded-full"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div> */}

                <Link
                  className="btn-rounded !p-2 border border-secondary text-white hover:bg-secondary hover:text-primary flex items-center gap-2 w-full justify-center"
                  to="/contact-us"
                >
                  Discuss Your Project <MdArrowOutward size={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-bgGrey">
        <div className="wrapper">
          <div className="text-center mb-12" data-aos="fade-up">
            <SubHeading
              heading="SUCCESS STORIES"
              className="text-secondary w-fit mx-auto"
            />
            <h2 className="text1 mb-4">AR/VR Case Studies</h2>
            <p className="desc max-w-3xl mx-auto">
              Explore how our AR/VR solutions have helped businesses across
              industries achieve their goals and transform their operations.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
                data-aos="fade-up"
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <h3 className="text2 mb-4">{study.title}</h3>
                  <p className="desc mb-6">{study.description}</p>
                  <div className="mb-6">
                    <h4 className="font-bold text-secondary mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                          <p className="desc">{result}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    className="btn-rounded border border-secondary text-white hover:bg-secondary hover:text-primary inline-flex items-center gap-2"
                    to="/contact-us"
                  >
                    Discuss Similar Project <MdArrowOutward size={20} />
                  </Link>
                </div>
                <div
                  className={`rounded-2xl overflow-hidden ${
                    index % 2 === 1 ? "md:col-start-1" : ""
                  }`}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="wrapper">
          <div className="text-center mb-12" data-aos="fade-up">
            <SubHeading
              heading="OUR TECH STACK"
              className="text-secondary w-fit mx-auto"
            />
            <h2 className="text1 mb-4">Technologies We Use</h2>
            <p className="desc max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to create
              immersive AR/VR experiences that deliver exceptional results.
            </p>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            data-aos="fade-up"
          >
            <div className="bg-bgGrey p-6 rounded-xl text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text3 mb-3 text-secondary">Development</h3>
              <ul className="space-y-2">
                <li className="desc">Unity</li>
                <li className="desc">Unreal Engine</li>
                <li className="desc">ARKit</li>
                <li className="desc">ARCore</li>
                <li className="desc">WebXR</li>
              </ul>
            </div>
            <div className="bg-bgGrey p-6 rounded-xl text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text3 mb-3 text-secondary">Hardware</h3>
              <ul className="space-y-2">
                <li className="desc">Oculus</li>
                <li className="desc">HTC Vive</li>
                <li className="desc">Microsoft HoloLens</li>
                <li className="desc">Magic Leap</li>
                <li className="desc">Mobile AR</li>
              </ul>
            </div>
            <div className="bg-bgGrey p-6 rounded-xl text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text3 mb-3 text-secondary">3D Modeling</h3>
              <ul className="space-y-2">
                <li className="desc">Blender</li>
                <li className="desc">Maya</li>
                <li className="desc">3ds Max</li>
                <li className="desc">ZBrush</li>
                <li className="desc">Substance Painter</li>
              </ul>
            </div>
            <div className="bg-bgGrey p-6 rounded-xl text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text3 mb-3 text-secondary">Integration</h3>
              <ul className="space-y-2">
                <li className="desc">Cloud Services</li>
                <li className="desc">CRM Systems</li>
                <li className="desc">Analytics</li>
                <li className="desc">E-commerce</li>
                <li className="desc">IoT Platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Videos Section */}
      <section className="py-16 bg-bgGrey">
        <div className="wrapper">
          <div className="text-center mb-12" data-aos="fade-up">
            <SubHeading
              heading="EXPERIENCE AR/VR"
              className="text-secondary w-fit mx-auto"
            />
            <h2 className="text1 mb-4">Demo Videos</h2>
            <p className="desc max-w-3xl mx-auto">
              See our AR/VR solutions in action with these interactive demonstrations. 
              Experience how our technology transforms everyday objects and enhances user engagement.
            </p>
          </div>

          <div className="space-y-16">
            {/* Demo Video 1: Business Card AR */}
            <div className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-up">
              <div>
                <h3 className="text2 mb-4">Interactive Business Cards</h3>
                <p className="desc mb-6">
                  Transform traditional business cards into interactive digital experiences. 
                  Our AR business cards display 3D models, videos, contact information, and 
                  social media profiles when scanned with a smartphone.
                </p>
                <div className="mb-6">
                  <h4 className="font-bold text-secondary mb-3">Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                      <p className="desc">Instant contact saving</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                      <p className="desc">Portfolio showcase</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                      <p className="desc">Interactive 3D elements</p>
                    </li>
                  </ul>
                </div>
                <Link
                  className="btn-rounded border border-secondary text-white hover:bg-secondary hover:text-primary inline-flex items-center gap-2"
                  to="/contact-us"
                >
                  Get Your AR Business Card <MdArrowOutward size={20} />
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden bg-primary/10 aspect-video flex items-center justify-center">
                {/* Video placeholder - will be replaced with actual video */}
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>
                  <p className="text-secondary font-bold">Business Card AR Demo</p>
                  <p className="text-sm opacity-70 mt-2">Video coming soon</p>
                </div>
                {/* Actual video will be placed here */}
                {/* <video 
                  className="w-full h-full object-cover"
                  controls
                  poster={require("../assets/images/services/ar-business-card-poster.webp")}
                >
                  <source src="/videos/ar-business-card-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
              </div>
            </div>

            {/* Demo Video 2: Menu Card AR */}
            <div className="grid md:grid-cols-2 gap-10 items-center md:grid-flow-dense" data-aos="fade-up">
              <div className="md:col-start-2">
                <h3 className="text2 mb-4">Interactive Menu Cards</h3>
                <p className="desc mb-6">
                  Enhance dining experiences with our AR menu solutions. Customers can 
                  visualize dishes in 3D before ordering, view ingredient information, 
                  and even see preparation methods through engaging animations.
                </p>
                <div className="mb-6">
                  <h4 className="font-bold text-secondary mb-3">Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                      <p className="desc">Realistic 3D food visualization</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                      <p className="desc">Nutritional information display</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                      <p className="desc">Ingredient highlighting and allergen warnings</p>
                    </li>
                  </ul>
                </div>
                <Link
                  className="btn-rounded border border-secondary text-white hover:bg-secondary hover:text-primary inline-flex items-center gap-2"
                  to="/contact-us"
                >
                  Upgrade Your Menu Experience <MdArrowOutward size={20} />
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden bg-primary/10 aspect-video flex items-center justify-center md:col-start-1">
                {/* Video placeholder - will be replaced with actual video */}
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>
                  <p className="text-secondary font-bold">Menu Card AR Demo</p>
                  <p className="text-sm opacity-70 mt-2">Video coming soon</p>
                </div>
                {/* Actual video will be placed here */}
                {/* <video 
                  className="w-full h-full object-cover"
                  controls
                  poster={require("../assets/images/services/ar-menu-card-poster.webp")}
                >
                  <source src="/videos/ar-menu-card-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
              </div>
            </div>

            {/* Demo Video 3: Virtual Try-On */}
            <div className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-up">
              <div>
                <h3 className="text2 mb-4">Virtual Try-On Solutions</h3>
                <p className="desc mb-6">
                  Allow customers to virtually try products before purchasing. From eyewear and 
                  jewelry to furniture and home decor, our AR try-on solutions help reduce 
                  returns and increase purchase confidence.
                </p>
                <div className="mb-6">
                  <h4 className="font-bold text-secondary mb-3">Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                      <p className="desc">Realistic product rendering</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                      <p className="desc">Multiple product variations</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                      <p className="desc">Direct purchase integration</p>
                    </li>
                  </ul>
                </div>
                <Link
                  className="btn-rounded border border-secondary text-white hover:bg-secondary hover:text-primary inline-flex items-center gap-2"
                  to="/contact-us"
                >
                  Implement Virtual Try-On <MdArrowOutward size={20} />
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden bg-primary/10 aspect-video flex items-center justify-center">
                {/* Video placeholder - will be replaced with actual video */}
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>
                  <p className="text-secondary font-bold">Virtual Try-On Demo</p>
                  <p className="text-sm opacity-70 mt-2">Video coming soon</p>
                </div>
                {/* Actual video will be placed here */}
                {/* <video 
                  className="w-full h-full object-cover"
                  controls
                  poster={require("../assets/images/services/virtual-try-on-poster.webp")}
                >
                  <source src="/videos/virtual-try-on-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Videos Section */}
      <section className="py-16">
        <div className="wrapper">
          <div className="text-center mb-12" data-aos="fade-up">
            <SubHeading
              heading="CLIENT FEEDBACK"
              className="text-secondary w-fit mx-auto"
            />
            <h2 className="text1 mb-4">Testimonial Videos</h2>
            <p className="desc max-w-3xl mx-auto">
              Hear directly from our clients about how our AR/VR solutions have transformed 
              their businesses and created exceptional experiences for their customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
            {/* Testimonial Video 1 */}
            <div className="bg-bgGrey rounded-2xl overflow-hidden">
              <div className="aspect-video bg-primary/10 relative flex items-center justify-center">
                {/* Video placeholder - will be replaced with actual testimonial video */}
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>
                  <p className="text-secondary font-bold">Client Testimonial</p>
                  <p className="text-sm opacity-70 mt-2">Video coming soon</p>
                </div>
                {/* Actual video will be placed here */}
                {/* <video 
                  className="w-full h-full object-cover"
                  controls
                  poster={require("../assets/images/testimonials/testimonial1-poster.webp")}
                >
                  <source src="/videos/testimonial1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
              </div>
              <div className="p-6">
                <h3 className="text3 mb-2">Retail Industry Client</h3>
                <p className="desc mb-3">
                  "The AR product visualization solution developed by Vibranex has 
                  revolutionized our customer shopping experience and significantly 
                  reduced our return rates."
                </p>
                <p className="text-sm text-secondary font-medium">
                  - Marketing Director, Leading Furniture Retailer
                </p>
              </div>
            </div>

            {/* Testimonial Video 2 */}
            <div className="bg-bgGrey rounded-2xl overflow-hidden">
              <div className="aspect-video bg-primary/10 relative flex items-center justify-center">
                {/* Video placeholder - will be replaced with actual testimonial video */}
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>
                  <p className="text-secondary font-bold">Client Testimonial</p>
                  <p className="text-sm opacity-70 mt-2">Video coming soon</p>
                </div>
                {/* Actual video will be placed here */}
                {/* <video 
                  className="w-full h-full object-cover"
                  controls
                  poster={require("../assets/images/testimonials/testimonial2-poster.webp")}
                >
                  <source src="/videos/testimonial2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
              </div>
              <div className="p-6">
                <h3 className="text3 mb-2">Healthcare Training Client</h3>
                <p className="desc mb-3">
                  "The VR training simulations have transformed our medical education 
                  program, allowing students to practice procedures in a safe environment 
                  before working with real patients."
                </p>
                <p className="text-sm text-secondary font-medium">
                  - Chief of Medical Education, University Hospital
                </p>
              </div>
            </div>

            {/* Testimonial Video 3 */}
            <div className="bg-bgGrey rounded-2xl overflow-hidden">
              <div className="aspect-video bg-primary/10 relative flex items-center justify-center">
                {/* Video placeholder - will be replaced with actual testimonial video */}
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>
                  <p className="text-secondary font-bold">Client Testimonial</p>
                  <p className="text-sm opacity-70 mt-2">Video coming soon</p>
                </div>
                {/* Actual video will be placed here */}
                {/* <video 
                  className="w-full h-full object-cover"
                  controls
                  poster={require("../assets/images/testimonials/testimonial3-poster.webp")}
                >
                  <source src="/videos/testimonial3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
              </div>
              <div className="p-6">
                <h3 className="text3 mb-2">Manufacturing Client</h3>
                <p className="desc mb-3">
                  "The AR maintenance assistant has reduced our equipment downtime by 
                  50% and significantly improved the efficiency of our technical team 
                  when performing complex repairs."
                </p>
                <p className="text-sm text-secondary font-medium">
                  - Operations Manager, Industrial Manufacturing Company
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-bgGrey">
        <div className="wrapper">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text1 mb-4">Ready to Transform Your Business?</h2>
            <p className="desc max-w-3xl mx-auto">
              Contact us today to discuss how our AR/VR solutions can help you
              achieve your business goals and create immersive experiences for
              your customers and employees.
            </p>
          </div>

          <div className="">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ARVRDevelopment;
