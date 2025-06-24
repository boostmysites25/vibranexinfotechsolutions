import React, { useState } from "react";
import SubHeading from "./SubHeading";
import { faqs } from "../../content/constant";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const FaqNew = ({ showButton }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-bgGrey">
      <div className="wrapper">
        <div className="text-center mb-12" data-aos="fade-up">
          <SubHeading heading="FAQ" className="text-secondary mx-auto" />
          <h2 className="text1 font-bold mt-4">Frequently Asked Questions</h2>
          <p className="desc max-w-3xl mx-auto mt-4">
            Find answers to common questions about our premium AI and Future-Tech solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          {faqs.slice(0, 6).map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div
                className={`bg-primary p-5 rounded-xl border ${
                  activeIndex === index ? "border-secondary" : "border-secondary/20"
                } cursor-pointer transition-all duration-300`}
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <div className={`w-6 h-6 rounded-full border border-secondary flex items-center justify-center transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-secondary">
                      <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-white/80">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
        
        {showButton && (
          <div className="text-center mt-10" data-aos="fade-up">
            <Link
              to="/contact-us"
              className="btn-rounded bg-secondary text-primary hover:bg-transparent hover:text-secondary border border-secondary font-bold inline-block"
            >
              Have More Questions? Contact Us
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FaqNew;