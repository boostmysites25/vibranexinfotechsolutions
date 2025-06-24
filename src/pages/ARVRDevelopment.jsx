import React from "react";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/common/SubHeading";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { allServices } from "../content/services";
import ContactForm from "../components/common/ContactForm";
import { motion } from "framer-motion";

const ARVRDevelopment = () => {
  // Filter AR/VR related services
  const arvrServices = allServices.filter(
    (service) => service.category === "arvr"
  );

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
              <SubHeading heading="IMMERSIVE EXPERIENCES" className="text-secondary" />
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
                    <span className="font-bold">Enhanced Engagement:</span> Create
                    memorable experiences that captivate users and strengthen brand
                    connection
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Improved Training:</span> Reduce
                    training time and costs while improving knowledge retention and
                    safety
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Better Visualization:</span> Help
                    customers visualize products in their own environment before
                    purchasing
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" data-aos="fade-left">
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
            <SubHeading heading="OUR OFFERINGS" className="text-secondary w-fit mx-auto" />
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
                <p className="desc mb-4">{service.desc}</p>
                
                <div className="mb-4">
                  <h4 className="font-bold text-secondary mb-2">Problem Solved:</h4>
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
                      <span key={index} className="text-xs bg-bgGrey px-3 py-1 rounded-full">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                
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
            <SubHeading heading="SUCCESS STORIES" className="text-secondary w-fit mx-auto" />
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
            <SubHeading heading="OUR TECH STACK" className="text-secondary w-fit mx-auto" />
            <h2 className="text1 mb-4">Technologies We Use</h2>
            <p className="desc max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to create
              immersive AR/VR experiences that deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up">
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