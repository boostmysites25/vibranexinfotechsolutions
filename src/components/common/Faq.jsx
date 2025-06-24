import SubHeading from "./SubHeading";
import img from "../../assets/images/faq.webp";
import { faqs } from "../../content/constant";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import ArrowButton from "./ArrowButton";

const Faq = ({ showButton }) => {
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="py-7">
      <div className="wrapper space-y-5">
        <div>
          <SubHeading heading="FAQ" className="text-white" />
        </div>
        <h2 className="text1 max-w-3xl">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-[45%_1fr] gap-7">
          <div className="flex flex-col rounded-xl overflow-hidden relative">
            <div className="absolute z-[1] right-2 top-2 bg-white text-primary p-5 rounded-[1rem] shadow-xl flex items-center gap-3">
              <h2 className="text2 !font-bold">100+</h2>
              <p className="desc !text-base max-w-[5rem] !leading-tight">
                {" "}
                Satisfied Clients Globally
              </p>
            </div>
            <img
              loading="lazy"
              src={img}
              className="w-full aspect-[16/12] md:aspect-square md:h-full object-cover rounded-xl"
              alt="FAQ"
            />
          </div>
          <div className="space-y-4 md:space-y-6">
            {faqs.map((item) => (
              <div
                onClick={() => setIsActive(item.id)}
                key={item.id}
                className="cursor-pointer p-4 rounded-lg bg-[#202022]"
              >
                <div className="flex justify-between gap-2">
                  <p className="text4">{item.question}</p>
                  <div className="w-8 h-8 rounded-full min-w-8 border border-white flex items-center justify-center">
                    <MdOutlineKeyboardArrowUp
                      className={
                        isActive === item.id &&
                        "rotate-180 transition-all duration-300"
                      }
                      size={20}
                    />
                  </div>
                </div>
                <p
                  className={`${isActive === item.id
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                    } transition-all duration-300`}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
        {showButton && (
          <div className="pt-7">
            <ArrowButton
              to="/contact-us"
              className="bg-black border border-secondary text-white hover:bg-secondary !w-fit mx-auto"
            >
              Have More Questions? Contact Us
            </ArrowButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
