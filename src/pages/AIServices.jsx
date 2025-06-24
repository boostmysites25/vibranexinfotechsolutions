import React from "react";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/common/SubHeading";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { allServices } from "../content/services";
import ContactForm from "../components/common/ContactForm";
import { motion } from "framer-motion";

const AIServices = () => {
  // Filter AI related services
  const aiServices = allServices.filter(
    (service) => service.category === "ai"
  );

  // Case studies for AI
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Customer Service Transformation",
      description:
        "We implemented an intelligent customer service solution that combines chatbots, voice AI, and predictive analytics to provide 24/7 support and personalized experiences.",
      image: require("../assets/images/portfolio/web-development/cold-creekcap.webp"),
      results: [
        "85% reduction in response time",
        "40% decrease in support costs",
        "92% customer satisfaction rating",
      ],
    },
    {
      id: 2,
      title: "Predictive Maintenance System for Manufacturing",
      description:
        "Our AI solution analyzes equipment sensor data to predict failures before they occur, enabling proactive maintenance and minimizing costly downtime.",
      image: require("../assets/images/portfolio/web-development/akash-mega-mart.webp"),
      results: [
        "73% reduction in unplanned downtime",
        "45% decrease in maintenance costs",
        "18% increase in equipment lifespan",
      ],
    },
    {
      id: 3,
      title: "Intelligent Document Processing System",
      description:
        "We developed an AI-powered system that automatically extracts, classifies, and processes information from various document types, eliminating manual data entry.",
      image: require("../assets/images/portfolio/app-development/feelit_app.webp"),
      results: [
        "95% reduction in processing time",
        "99.2% accuracy in data extraction",
        "65% cost savings in document handling",
      ],
    },
  ];

  return (
    <div className="mt-[4.5rem]">
      <PageBanner
        title="AI-Powered Business Solutions"
        subtitle="Transforming operations and driving innovation through intelligent automation"
      />

      {/* Overview Section */}
      <section className="py-16 bg-bgGrey">
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <SubHeading heading="INTELLIGENT AUTOMATION" className="text-secondary" />
              <h2 className="text1 mb-6">
                Revolutionize Your Business with AI-Powered Solutions
              </h2>
              <p className="desc mb-6">
                At Vibranex, we develop custom AI solutions that transform how
                businesses operate, make decisions, and engage with customers.
                Our AI technologies automate complex processes, uncover valuable
                insights from data, and create intelligent systems that learn and
                improve over time.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Operational Efficiency:</span> Automate
                    repetitive tasks and streamline complex workflows
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Data-Driven Insights:</span> Transform
                    raw data into actionable intelligence for better decision-making
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                  <p className="desc">
                    <span className="font-bold">Enhanced Experiences:</span> Create
                    personalized, responsive interactions for customers and employees
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" data-aos="fade-left">
              <img
                src={require("../assets/images/services/ai.webp")}
                alt="AI Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-secondary text-primary font-bold text-xl p-6 rounded-full"
                >
                  Intelligent Solutions
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
            <h2 className="text1 mb-4">AI-Powered Business Solutions</h2>
            <p className="desc max-w-3xl mx-auto">
              From intelligent automation to predictive analytics, our AI
              solutions are designed to solve real business problems and create
              measurable value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
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
            <h2 className="text1 mb-4">AI Implementation Case Studies</h2>
            <p className="desc max-w-3xl mx-auto">
              Explore how our AI solutions have helped businesses across
              industries overcome challenges and achieve remarkable results.
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
            <SubHeading heading="OUR TECH STACK" className="text-secondary" />
            <h2 className="text1 mb-4">AI Technologies We Leverage</h2>
            <p className="desc max-w-3xl mx-auto">
              We use cutting-edge AI technologies and frameworks to build
              intelligent solutions that deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up">
            <div className="bg-bgGrey p-6 rounded-xl text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text3 mb-3 text-secondary">Machine Learning</h3>
              <ul className="space-y-2">
                <li className="desc">TensorFlow</li>
                <li className="desc">PyTorch</li>
                <li className="desc">Scikit-learn</li>
                <li className="desc">XGBoost</li>
                <li className="desc">Keras</li>
              </ul>
            </div>
            <div className="bg-bgGrey p-6 rounded-xl text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text3 mb-3 text-secondary">Natural Language</h3>
              <ul className="space-y-2">
                <li className="desc">GPT-4</li>
                <li className="desc">BERT</li>
                <li className="desc">Hugging Face</li>
                <li className="desc">spaCy</li>
                <li className="desc">LangChain</li>
              </ul>
            </div>
            <div className="bg-bgGrey p-6 rounded-xl text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text3 mb-3 text-secondary">Computer Vision</h3>
              <ul className="space-y-2">
                <li className="desc">OpenCV</li>
                <li className="desc">YOLO</li>
                <li className="desc">MediaPipe</li>
                <li className="desc">TensorFlow Vision</li>
                <li className="desc">PyTorch Vision</li>
              </ul>
            </div>
            <div className="bg-bgGrey p-6 rounded-xl text-center hover:-translate-y-2 transition-all duration-300">
              <h3 className="text3 mb-3 text-secondary">Cloud AI</h3>
              <ul className="space-y-2">
                <li className="desc">AWS SageMaker</li>
                <li className="desc">Google Vertex AI</li>
                <li className="desc">Azure ML</li>
                <li className="desc">IBM Watson</li>
                <li className="desc">Vector Databases</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Development Process */}
      <section className="py-16 bg-bgGrey">
        <div className="wrapper">
          <div className="text-center mb-12" data-aos="fade-up">
            <SubHeading heading="OUR APPROACH" className="text-secondary w-fit mx-auto" />
            <h2 className="text1 mb-4">AI Solution Development Process</h2>
            <p className="desc max-w-3xl mx-auto">
              Our structured approach ensures we deliver AI solutions that align
              with your business objectives and provide measurable value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up">
            <div className="bg-primary p-8 rounded-xl border border-secondary hover:-translate-y-2 transition-all duration-300">
              <div className="text-secondary text-5xl font-bold mb-4">01</div>
              <h3 className="text3 mb-3">Discovery & Strategy</h3>
              <p className="desc">
                We analyze your business challenges, identify AI opportunities,
                and develop a strategic roadmap aligned with your goals.
              </p>
            </div>
            <div className="bg-primary p-8 rounded-xl border border-secondary hover:-translate-y-2 transition-all duration-300">
              <div className="text-secondary text-5xl font-bold mb-4">02</div>
              <h3 className="text3 mb-3">Data Assessment</h3>
              <p className="desc">
                We evaluate your data sources, quality, and structure to ensure
                we have the right foundation for AI development.
              </p>
            </div>
            <div className="bg-primary p-8 rounded-xl border border-secondary hover:-translate-y-2 transition-all duration-300">
              <div className="text-secondary text-5xl font-bold mb-4">03</div>
              <h3 className="text3 mb-3">Solution Design</h3>
              <p className="desc">
                We design a tailored AI solution architecture that addresses your
                specific requirements and technical constraints.
              </p>
            </div>
            <div className="bg-primary p-8 rounded-xl border border-secondary hover:-translate-y-2 transition-all duration-300">
              <div className="text-secondary text-5xl font-bold mb-4">04</div>
              <h3 className="text3 mb-3">Development & Training</h3>
              <p className="desc">
                We build and train AI models using your data, fine-tuning them
                for optimal performance and accuracy.
              </p>
            </div>
            <div className="bg-primary p-8 rounded-xl border border-secondary hover:-translate-y-2 transition-all duration-300">
              <div className="text-secondary text-5xl font-bold mb-4">05</div>
              <h3 className="text3 mb-3">Integration & Deployment</h3>
              <p className="desc">
                We seamlessly integrate the AI solution into your existing
                systems and deploy it to your preferred environment.
              </p>
            </div>
            <div className="bg-primary p-8 rounded-xl border border-secondary hover:-translate-y-2 transition-all duration-300">
              <div className="text-secondary text-5xl font-bold mb-4">06</div>
              <h3 className="text3 mb-3">Monitoring & Optimization</h3>
              <p className="desc">
                We continuously monitor performance, gather feedback, and
                optimize the solution to ensure ongoing value delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="wrapper">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text1 mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="desc max-w-3xl mx-auto">
              Contact us today to discuss how our AI solutions can help you
              automate processes, gain valuable insights, and create intelligent
              experiences for your customers and employees.
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

export default AIServices;