import React from "react";
import SubHeading from "./SubHeading";
import { whyworkwithus } from "../../content/constant";
import { motion } from "framer-motion";

const WhyWorkWithUs = () => {
  return (
    <section className="py-16">
      <div className="wrapper">
        <div className="text-center mb-12" data-aos="fade-up">
          <SubHeading heading="WHY CHOOSE US" className="text-secondary mx-auto" />
          <h2 className="text1 font-bold mt-4">Partner with Excellence</h2>
          <p className="desc max-w-3xl mx-auto mt-4">
            We combine strategic thinking, technical expertise, and creative innovation to deliver 
            premium solutions that create competitive advantages for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {whyworkwithus.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-bgGrey rounded-xl overflow-hidden border border-secondary/20 hover:-translate-y-2 transition-all duration-300 group"
              data-aos="fade-up"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text3 font-bold mb-3 text-secondary">{item.title}</h3>
                <p className="desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16" data-aos="fade-up">
          {[
            { value: "100+", label: "Satisfied Clients" },
            { value: "150+", label: "Projects Delivered" },
            { value: "15+", label: "Industries Served" },
            { value: "98%", label: "Client Retention" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary p-6 rounded-xl border border-secondary/20 text-center"
            >
              <h3 className="text2 font-bold text-secondary mb-2">{stat.value}</h3>
              <p className="font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;