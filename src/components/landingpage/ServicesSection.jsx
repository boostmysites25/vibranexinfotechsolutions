import React from "react";
import SubHeading from "../common/SubHeading";
import {
  appDevelopmentServices,
  webDevelopmentServices,
  aiDevelopmentServices,
  arvrDevelopmentServices,
  iotDevelopmentServices,
} from "../../content/services";

const ServicesSection = ({ page }) => {
  const isWeb = page === "web";
  const isApp = page === "app";
  const isAI = page === "ai";
  const isARVR = page === "arvr";
  const isIoT = page === "iot";
  
  let services;
  if (isWeb) services = webDevelopmentServices;
  else if (isApp) services = appDevelopmentServices;
  else if (isAI) services = aiDevelopmentServices;
  else if (isARVR) services = arvrDevelopmentServices;
  else if (isIoT) services = iotDevelopmentServices;
  else services = webDevelopmentServices; // Default fallback

  return (
    <div
      id="services"
      className="py-16 bg-gradient-to-b from-black to-black/90"
    >
      <div className="wrapper space-y-8 flex flex-col items-center">
        <div data-aos="fade-up" className="text-center">
          <SubHeading
            heading={`Our ${
              isWeb ? "Web" : 
              isApp ? "App" : 
              isAI ? "AI" : 
              isARVR ? "AR/VR" : 
              "IoT"
            } Development Services`}
            className="text-secondary"
          />
        </div>

        <h2
          data-aos="fade-up"
          className="text1 text-center max-w-4xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary"
        >
          {isWeb ? "Transform Your Online Presence with Cutting-Edge Web Solutions" :
           isApp ? "Revolutionize User Experiences with Next-Gen App Development" :
           isAI ? "Automate Processes and Drive Decisions with Intelligent AI Solutions" :
           isARVR ? "Create Immersive Digital Experiences with Advanced AR/VR Technology" :
           "Connect, Monitor, and Optimize with Smart IoT Ecosystems"}
        </h2>

        <div className="py-10 flex flex-wrap w-full justify-center gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group w-full md:max-w-[calc(50%-2rem)]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="bg-black/40 backdrop-blur-sm border-2 border-primary/30 p-6 rounded-2xl 
                            hover:-translate-y-2 transition-all duration-500 
                            hover:shadow-large hover:shadow-primary/40 
                            hover:border-primary h-full flex flex-col"
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-5 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10"></div>
                  <img
                    loading="lazy"
                    src={service.image}
                    className="h-full w-full object-cover group-hover:scale-110 transition-all duration-500"
                    alt={service.title}
                  />
                </div>

                <h4 className="text3 text-secondary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </h4>

                <p className="desc text-gray-300 flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
