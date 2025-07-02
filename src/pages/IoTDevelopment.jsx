import React from "react";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/common/SubHeading";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { allServices, iotDevelopmentServices } from "../content/services";
import ContactForm from "../components/common/ContactForm";
import { motion } from "framer-motion";
import aboutImg from '../assets/images/landing page/iot/iot-about.webp'

const IoTDevelopment = () => {
  // Filter IoT related services
  const iotServices = iotDevelopmentServices

  // Case studies for IoT
  const caseStudies = [
    {
      id: 1,
      title: "Smart Manufacturing Monitoring System",
      description:
        "We developed an IoT solution for a manufacturing plant that monitors equipment performance in real-time, predicts maintenance needs, and optimizes production schedules, resulting in significant efficiency improvements.",
      image: require("../assets/images/portfolio/web-development/cold-creekcap.webp"),
      results: [
        "30% reduction in equipment downtime",
        "25% increase in production efficiency",
        "40% decrease in maintenance costs",
      ],
    },
    {
      id: 2,
      title: "Connected Healthcare Monitoring Platform",
      description:
        "Our IoT healthcare solution enables remote patient monitoring, automated medication reminders, and real-time health data analysis for healthcare providers to deliver more proactive and personalized care.",
      image: require("../assets/images/portfolio/web-development/think-reality.webp"),
      results: [
        "45% reduction in hospital readmissions",
        "60% improvement in medication adherence",
        "35% increase in patient satisfaction",
      ],
    },
    {
      id: 3,
      title: "Smart Agriculture Management System",
      description:
        "We created an IoT platform for agricultural operations that monitors soil conditions, weather patterns, and crop health to optimize irrigation, fertilization, and harvesting schedules.",
      image: require("../assets/images/portfolio/app-development/feelit_app.webp"),
      results: [
        "40% reduction in water usage",
        "35% increase in crop yield",
        "50% decrease in fertilizer waste",
      ],
    },
  ];

  return (
    <div className="mt-[4.5rem]">
      <PageBanner
        title="IoT Development"
        subtitle="Building connected ecosystems that transform data into intelligent action"
      />

      {/* Overview Section */}
      <section className="py-16 bg-bgGrey">
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <SubHeading heading="CONNECTED SOLUTIONS" className="text-secondary" />
              <h2 className="text1 mb-6">
                Transforming Business with Intelligent IoT Solutions
              </h2>
              <p className="desc mb-6">
                At Vibranex, we create smart, connected products and systems that communicate with each other. 
                From home automation to industrial IoT, we turn data from physical devices into intelligent 
                actions that improve efficiency, provide insights, and enable new business models.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Real-time Insights:</span> Collect and analyze data from connected devices to enable informed decision-making
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Operational Efficiency:</span> Automate processes and optimize resource utilization through smart connected systems
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Predictive Capabilities:</span> Anticipate maintenance needs and prevent issues before they impact operations
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" data-aos="fade-up">
              <img
                src={require("../assets/images/services/iot.webp")}
                // src={require("../assets/images/services/iot.webp")}
                alt="IoT Development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-secondary text-primary font-bold text-xl p-6 rounded-full"
                >
                  Smart Connected Systems
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
            <h2 className="text1 mb-4">IoT Development Services</h2>
            <p className="desc max-w-3xl mx-auto">
              From device prototyping to full-scale IoT ecosystems, we provide comprehensive solutions 
              tailored to your specific business needs and objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {iotServices.length > 0 ? (
              iotServices.map((service) => (
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
                  </div> */}
                  
                  <Link
                    className="btn-rounded !p-2 border border-secondary text-white hover:bg-secondary hover:text-primary flex items-center gap-2 w-full justify-center"
                    to="/contact-us"
                  >
                    Discuss Your Project <MdArrowOutward size={20} />
                  </Link>
                </div>
              ))
            ) : (
              // Fallback services if no IoT services are found in allServices
              <>
                <div
                  className="border border-secondary p-6 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 h-full"
                  data-aos="fade-up"
                >
                  <div className="aspect-video rounded-xl overflow-hidden mb-4">
                    <img
                      src={require("../assets/images/services/iot.webp")}
                      alt="IoT Device Prototyping"
                      className="h-full w-full object-cover hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text3 mb-3">IoT Device Prototyping</h3>
                  <p className="desc mb-4">
                    We design and develop custom IoT device prototypes that meet your specific requirements, 
                    from sensor selection to firmware development and connectivity solutions.
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-secondary mb-2">Problem Solved:</h4>
                    <p className="desc">Long development cycles and high costs for custom IoT hardware</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-secondary mb-2">Use Case:</h4>
                    <p className="desc">Rapid prototyping reducing time-to-market by 60% for IoT products</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-secondary mb-2">Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Manufacturing", "Healthcare", "Consumer Electronics", "Agriculture"].map((industry, index) => (
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

                <div
                  className="border border-secondary p-6 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 h-full"
                  data-aos="fade-up"
                >
                  <div className="aspect-video rounded-xl overflow-hidden mb-4">
                    <img
                      src={require("../assets/images/services/iot.webp")}
                      alt="IoT Platform Development"
                      className="h-full w-full object-cover hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text3 mb-3">IoT Platform Development</h3>
                  <p className="desc mb-4">
                    We build scalable IoT platforms that connect devices, collect and analyze data, and provide 
                    actionable insights through intuitive dashboards and automated workflows.
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-secondary mb-2">Problem Solved:</h4>
                    <p className="desc">Disconnected systems and inability to leverage IoT data effectively</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-secondary mb-2">Use Case:</h4>
                    <p className="desc">Centralized IoT platform reducing operational costs by 40% and enabling data-driven decisions</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-secondary mb-2">Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Smart Cities", "Industrial", "Energy", "Logistics"].map((industry, index) => (
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
              </>
            )}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-bgGrey">
        <div className="wrapper">
          <div className="text-center mb-12" data-aos="fade-up">
            <SubHeading heading="SUCCESS STORIES" className="text-secondary w-fit mx-auto" />
            <h2 className="text1 mb-4">IoT Case Studies</h2>
            <p className="desc max-w-3xl mx-auto">
              Explore how our IoT solutions have helped businesses across
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
              robust IoT solutions that deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up">
            <div className="bg-bgGrey p-6 rounded-xl text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text3 mb-3 text-secondary">Hardware</h3>
              <ul className="space-y-2">
                <li className="desc">Arduino</li>
                <li className="desc">Raspberry Pi</li>
                <li className="desc">ESP32/ESP8266</li>
                <li className="desc">Custom PCB Design</li>
                <li className="desc">Sensor Integration</li>
              </ul>
            </div>
            <div className="bg-bgGrey p-6 rounded-xl text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text3 mb-3 text-secondary">Connectivity</h3>
              <ul className="space-y-2">
                <li className="desc">WiFi/BLE</li>
                <li className="desc">LoRaWAN</li>
                <li className="desc">Zigbee</li>
                <li className="desc">MQTT</li>
                <li className="desc">5G/LTE</li>
              </ul>
            </div>
            <div className="bg-bgGrey p-6 rounded-xl text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text3 mb-3 text-secondary">Cloud Platforms</h3>
              <ul className="space-y-2">
                <li className="desc">AWS IoT</li>
                <li className="desc">Azure IoT Hub</li>
                <li className="desc">Google Cloud IoT</li>
                <li className="desc">ThingsBoard</li>
                <li className="desc">Custom Solutions</li>
              </ul>
            </div>
            <div className="bg-bgGrey p-6 rounded-xl text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text3 mb-3 text-secondary">Analytics</h3>
              <ul className="space-y-2">
                <li className="desc">Real-time Processing</li>
                <li className="desc">Machine Learning</li>
                <li className="desc">Predictive Analytics</li>
                <li className="desc">Data Visualization</li>
                <li className="desc">Edge Computing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-bgGrey">
        <div className="wrapper">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text1 mb-4">Ready to Transform Your Business with IoT?</h2>
            <p className="desc max-w-3xl mx-auto">
              Contact us today to discuss how our IoT solutions can help you achieve your business goals.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default IoTDevelopment;