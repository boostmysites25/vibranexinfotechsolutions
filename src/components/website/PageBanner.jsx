import React from "react";
import { Link } from "react-router-dom";
import SubHeading from "../common/SubHeading";
import { motion } from "framer-motion";

const PageBanner = ({ title, subtitle, links, image }) => {
  return (
    <div className="relative py-24 bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full grid grid-cols-10 grid-rows-10">
            {Array.from({ length: 100 }).map((_, index) => (
              <div 
                key={index} 
                className="border border-secondary/20"
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="wrapper relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex justify-center"
          >
            <SubHeading heading="PREMIUM SOLUTIONS" className="text-secondary" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text1 font-bold mb-6"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="desc text-lg mb-8 max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
          
          {links && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-2 text-sm"
            >
              {links.map((link, index) => (
                <React.Fragment key={link.title}>
                  {index > 0 && <span className="text-secondary mx-1">•</span>}
                  <Link
                    to={link.url || "#"}
                    className={`hover:text-secondary transition-colors duration-300 ${
                      !link.url && "cursor-default"
                    }`}
                  >
                    {link.title}
                  </Link>
                </React.Fragment>
              ))}
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full -mb-12 -ml-12"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mt-16 -mr-16"></div>
    </div>
  );
};

export default PageBanner;
