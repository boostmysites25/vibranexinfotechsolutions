import banner from "../assets/videos/aboutus.mp4";
import CountUp from "react-countup";
import aboutUsImg from "../assets/images/about-us.png";
import SubHeading from "../components/common/SubHeading";
import { Link } from "react-router-dom";
import ourVisionImg from "../assets/images/our vision.webp";
import ourMissionImg from "../assets/images/our mission.webp";
import { lazy } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ContactForm from "../components/common/ContactForm";
const PageBanner = lazy(() => import("../components/website/PageBanner"));

const AboutUs = () => {
  return (
    <div className="mt-[4.5rem]">
      <PageBanner
        banner={banner}
        title="About Us"
        links={[{ title: "Home", url: "/" }, { title: "About Us" }]}
      />
      <section className="py-14 relative min-h-screen flex items-center bg-tertiary/40">
        <div className="wrapper grid lg:grid-cols-[40%_1fr] items-center gap-10 text-grayClr z-10 relative">
          <div data-aos="fade-up" className="flex justify-start">
            <img
              loading="lazy"
              src={aboutUsImg}
              className="object-contain sm:scale-110 w-full aspect-square max-h-[60vh] lg:aspect-auto"
              alt=""
            />
          </div>
          <div className="space-y-4">
            <SubHeading heading="Who We Are" className="text-white" />
            <h2 data-aos="fade-up" className="text1 capitalize">
              Technology That {" "}
              <span className="text-stroke-gray text-stroke-white">
                Moves You Forward
              </span>
            </h2>
            <p data-aos="fade-up" className="desc text-white/70">
              At Vibranex Infotech Solutions, we craft smart digital solutions that make a real difference. From AI-powered calling systems and chatbots to immersive AR/VR and game development—we build what today’s businesses need. <br />
              Our team brings deep expertise in mobile apps, full-stack web development, cloud migration, and blockchain integration. We help companies automate, analyze, and innovate with tools like machine learning, NLP, IoT, and data science.<br />
              Whether you're growing fast or just getting started, we design technology that scales with you—and works for you.<br />
              Let’s create something remarkable, together.

            </p>

            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 md:grid-cols-4 gap-7"
            >
              {[
                { number: 150, suffix: "+", title: "Projects Completed" },
                { number: 110, suffix: "+", title: "Satisfied Clients" },
                { number: 3, suffix: "+", title: "Years of Experience" },
                { number: 100, suffix: "%", title: "Success Rate" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start text-center gap-2"
                >
                  <span className="text2">
                    <CountUp
                      end={item.number}
                      suffix={item.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                      duration={2}
                    />
                  </span>
                  <p className="uppercase text-sm text-white/70">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F0F0F0] text-black">
        <div
          data-aos="fade-up"
          className="wrapper py-8 px-3 grid md:grid-cols-[45%_1fr] gap-7 md:gap-16"
        >
          <img
            loading="lazy"
            src={ourVisionImg}
            className="object-cover aspect-video h-full w-full rounded-md"
            alt=""
          />
          <div className="space-y-6">
            <SubHeading heading="Our Vision" className="text-primary" />
            <p className="desc">
              Our vision is to transcend limitations and redefine what's possible through forward-thinking innovation.
              We empower businesses with adaptive, transformative technology solutions designed to lead change and spark progress.
              By shaping ideas into intelligent breakthroughs, we aim to be a trusted partner in building the future.

            </p>
            <div>
              <Link
                to="/contact"
                className="btn-fullrounded flex items-center gap-2 bg-primary text-white hover:bg-primary/80 w-fit capitalize"
              >
                get in touch <FaArrowRightLong className="mt-[.15rem]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-16">
          <div data-aos="fade-up" className="space-y-4">
            <h3 className="text2 text-secondary">
              Our <br /> Mission
            </h3>
            <p className="desc !text-white">
              Our mission is to drive bold innovation that empowers businesses to reach new heights. We deliver cutting-edge, adaptable technology solutions designed to evolve alongside the fast-paced digital landscape. By simplifying complexity into smart, actionable solutions, we enable organizations to overcome challenges, embrace emerging trends, and confidently shape their future. Committed to excellence and true collaboration, we create lasting value and meaningful impact for our clients and communities.
            </p>
          </div>
          <img
            loading="lazy"
            data-aos="fade-up"
            src={ourMissionImg}
            className="object-cover aspect-video h-full w-full rounded-xl"
            alt="Our Vision"
          />
        </div>
      </section>
      {/* <OurCoreValues /> */}
      <ContactForm />
    </div>
  );
};

export default AboutUs;
