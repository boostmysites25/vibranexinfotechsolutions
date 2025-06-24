import React, { useState } from "react";
import SubHeading from "./SubHeading";
import { testimonials } from "../../content/constant";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Testimonials = () => {
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
    slides: { perView: 1 },
    loop: true,
  });

  return (
    <section className="py-16">
      <div className="wrapper">
        <div className="text-center mb-12" data-aos="fade-up">
          <SubHeading heading="TESTIMONIALS" className="text-secondary mx-auto" />
          <h2 className="text1 font-bold mt-4">What Our Clients Say</h2>
          <p className="desc max-w-3xl mx-auto mt-4">
            Hear from businesses that have transformed their operations and achieved remarkable results 
            with our premium AI and Future-Tech solutions.
          </p>
        </div>
        
        <div className="relative" data-aos="fade-up">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="keen-slider__slide">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-bgGrey rounded-xl p-8 md:p-12 border border-secondary/20 relative"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 text-secondary/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                    </svg>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-secondary flex-shrink-0">
                      <img 
                        src={testimonial.img} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <p className="text-xl italic mb-6">{testimonial.quote}</p>
                      <div>
                        <h4 className="text-lg font-bold text-secondary">{testimonial.author}</h4>
                        <p className="text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          
          {loaded && instanceRef.current && (
            <>
              <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-primary border border-secondary flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button
                onClick={() => instanceRef.current?.next()}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-primary border border-secondary flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="flex justify-center gap-2 mt-8">
                {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "bg-secondary w-6" : "bg-secondary/30"
                    }`}
                  ></button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;