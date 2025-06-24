import React, { useState } from "react";
import SubHeading from "../common/SubHeading";
import { allServices } from "../../content/services";
import { Link } from "react-router-dom";
import { createUrlParam } from "../../utils/helper";
import { motion } from "framer-motion";

const AllServicesNew = ({ length }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Services" },
    { id: "ai", name: "AI Solutions" },
    { id: "arvr", name: "AR/VR Development" },
    { id: "development", name: "Development" }
  ];
  
  const filteredServices = activeCategory === "all" 
    ? allServices.slice(0, length || allServices.length)
    : allServices.filter(service => service.category === activeCategory).slice(0, length || allServices.length);

  return (
    <section className="py-16">
      <div className="wrapper">
        <div className="text-center mb-12" data-aos="fade-up">
          <SubHeading heading="OUR SERVICES" className="text-secondary mx-auto" />
          <h2 className="text1 font-bold mt-4">Premium Technology Solutions</h2>
          <p className="desc max-w-3xl mx-auto mt-4">
            We deliver cutting-edge solutions that transform businesses and create competitive advantages in the digital age.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 font-bold ${
                activeCategory === category.id 
                  ? "bg-secondary text-primary border-secondary" 
                  : "bg-transparent text-white border-secondary/30 hover:border-secondary"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-bgGrey rounded-xl overflow-hidden border border-secondary/20 hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <h3 className="text3 font-bold text-secondary">{service.title}</h3>
                <p className="desc">{service.desc}</p>
                
                <div className="mt-4 pt-4 border-t border-secondary/10 space-y-3 flex-grow">
                  {service.problem && (
                    <div>
                      <h4 className="font-bold text-sm text-secondary mb-1">PROBLEM SOLVED:</h4>
                      <p className="text-sm">{service.problem}</p>
                    </div>
                  )}
                  
                  {service.useCase && (
                    <div>
                      <h4 className="font-bold text-sm text-secondary mb-1">USE CASE:</h4>
                      <p className="text-sm">{service.useCase}</p>
                    </div>
                  )}
                </div>
                
                <div className="pt-4 mt-auto">
                  <Link 
                    to={service.link || `/services/${createUrlParam(service.title)}`} 
                    className="btn-rounded bg-transparent text-secondary hover:bg-secondary hover:text-primary border border-secondary inline-flex items-center gap-2 font-bold"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Services Button */}
        {length && length < allServices.length && (
          <div className="text-center mt-12" data-aos="fade-up">
            <Link
              to="/services"
              className="btn-rounded bg-secondary text-primary hover:bg-transparent hover:text-secondary border border-secondary font-bold inline-block"
            >
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllServicesNew;