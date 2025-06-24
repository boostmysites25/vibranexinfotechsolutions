import React, { useState } from "react";
import SubHeading from "./SubHeading";
import { industries } from "../../content/constant";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const IndustriesWeServe = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 4, spacing: 24 },
      },
    },
    slides: { perView: 1, spacing: 16 },
  });

  return (
    <section className="py-16 bg-bgGrey">
      <div className="wrapper">
        <div className="text-center mb-12" data-aos="fade-up">
          <SubHeading heading="INDUSTRIES" className="text-secondary mx-auto" />
          <h2 className="text1 font-bold mt-4">Sectors We Transform</h2>
          <p className="desc max-w-3xl mx-auto mt-4">
            Our premium AI and Future-Tech solutions create competitive advantages across diverse industries, 
            addressing unique challenges with tailored approaches.
          </p>
        </div>
        
        <div className="relative" data-aos="fade-up">
          <div ref={sliderRef} className="keen-slider">
            {industries.map((industry) => (
              <div key={industry.id} className="keen-slider__slide">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-primary rounded-xl overflow-hidden border border-secondary/20 h-full hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={industry.img} 
                      alt={industry.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text3 font-bold mb-3 text-secondary">{industry.title}</h3>
                    <p className="desc">{industry.desc}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          
          {loaded && instanceRef.current && (
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(instanceRef.current.track.details.slides.length - instanceRef.current.options.slides.perView + 1).keys()].map((idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? "bg-secondary w-6" : "bg-secondary/30"
                  }`}
                ></button>
              ))}
            </div>
          )}
        </div>
        
        {/* Industry Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16" data-aos="fade-up">
          {[
            { value: "10+", label: "Industries Served", desc: "Delivering tailored solutions across diverse sectors" },
            { value: "85%", label: "Efficiency Increase", desc: "Average improvement in operational efficiency" },
            { value: "40%", label: "Cost Reduction", desc: "Average decrease in operational costs" }
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
              <p className="font-medium mb-2">{stat.label}</p>
              <p className="text-sm text-white/70">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;