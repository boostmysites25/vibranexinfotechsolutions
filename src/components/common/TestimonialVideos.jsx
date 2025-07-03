import React from "react";
import SubHeading from "./SubHeading";
import ReactPlayer from "react-player";

const TestimonialVideos = () => {
  return (
    <section className="py-16">
      <div className="wrapper">
        <div className="text-center mb-12" data-aos="fade-up">
          <SubHeading
            heading="CLIENT FEEDBACK"
            className="text-secondary w-fit mx-auto"
          />
          <h2 className="text1 mb-4">Testimonial Videos</h2>
          <p className="desc max-w-3xl mx-auto">
            Hear directly from our clients about how our AR/VR solutions have
            transformed their businesses and created exceptional experiences for
            their customers.
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          data-aos="fade-up"
        >
          {/* Testimonial Video 1 */}
          <div className="bg-bgGrey rounded-2xl overflow-hidden">
            <div className="aspect-video bg-primary/10 relative flex items-center justify-center">
              {/* Actual video will be placed here */}
              <ReactPlayer
                url={require("../../assets/videos/testimonials/testimonial1.mp4")}
                width="100%"
                height="100%"
                controls={true}
                playing={false}
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="p-6">
                <h3 className="text3 mb-2">Retail Industry Client</h3>
                <p className="desc mb-3">
                  "The AR product visualization solution developed by Vibranex
                  has revolutionized our customer shopping experience and
                  significantly reduced our return rates."
                </p>
                <p className="text-sm text-secondary font-medium">
                  - Marketing Director, Leading Furniture Retailer
                </p>
              </div> */}
          </div>

          {/* Testimonial Video 2 */}
          <div className="bg-bgGrey rounded-2xl overflow-hidden">
            <div className="aspect-video bg-primary/10 relative flex items-center justify-center">
              {/* Using ReactPlayer for video */}
              <ReactPlayer
                url={require("../../assets/videos/testimonials/testimonial2.mp4")}
                width="100%"
                height="100%"
                controls={true}
                playing={false}
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="p-6">
                <h3 className="text3 mb-2">Healthcare Training Client</h3>
                <p className="desc mb-3">
                  "The VR training simulations have transformed our medical
                  education program, allowing students to practice procedures in
                  a safe environment before working with real patients."
                </p>
                <p className="text-sm text-secondary font-medium">
                  - Chief of Medical Education, University Hospital
                </p>
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideos;
