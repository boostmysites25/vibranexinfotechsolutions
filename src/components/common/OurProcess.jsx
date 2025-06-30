import React from "react";
import SubHeading from "./SubHeading";
import ArrowButton from "./ArrowButton";
import { motion } from "framer-motion";

const process = [
  {
    id: "01",
    title: "Discovery & Strategy",
    desc: "We begin with a deep analysis of your business needs, market position, and technology requirements to create a tailored strategic roadmap.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: "02",
    title: "Design & Prototyping",
    desc: "Our team creates intuitive interfaces and interactive prototypes that visualize your solution before development begins.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
      </svg>
    )
  },
  {
    id: "03",
    title: "Development & Testing",
    desc: "We build robust, scalable solutions with rigorous testing to ensure security, performance, and exceptional user experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 0 1 .527.92l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.526ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 1 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: "04",
    title: "Deployment & Optimization",
    desc: "We launch your solution with precision and provide ongoing support, updates, and data-driven optimization for continuous improvement.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path fillRule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
      </svg>
    )
  },
];

const OurProcess = ({ showButton }) => {
  return (
    <section className="py-16 bg-bgGrey">
      <div className="wrapper">
        <div className="text-center mb-12" data-aos="fade-up">
          <SubHeading heading="OUR APPROACH" className="text-secondary mx-auto w-fit" />
          <h2 className="text1 font-bold mt-4">Turning Vision Into Reality</h2>
          <p className="desc max-w-3xl mx-auto mt-4">
            Our proven methodology combines strategic thinking, creative design, and technical excellence 
            to deliver premium solutions that exceed expectations and drive measurable business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12" data-aos="fade-up">
          {process.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary p-6 rounded-xl border border-secondary/20 hover:border-secondary transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full grid grid-cols-5 grid-rows-5">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="border border-secondary/20"></div>
                  ))}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-secondaryLight mb-4">{item.icon}</div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-bold text-secondary/20">{item.id}</span>
                  <h3 className="text3 font-bold">{item.title}</h3>
                </div>
                <p className="desc">{item.desc}</p>
                
                {/* Connector Line (except for last item) */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 border-t-2 border-dashed border-secondary/30"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {showButton && (
          <div className="mt-12 text-center" data-aos="fade-up">
            <ArrowButton
              to="/contact-us"
              className="bg-secondary text-primary hover:bg-transparent hover:text-secondary border border-secondary font-bold mx-auto !w-fit"
            >
              Start Your Project
            </ArrowButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurProcess;