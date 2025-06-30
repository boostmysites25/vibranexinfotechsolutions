import { Link, useNavigate } from "react-router-dom";
import SubHeading from "./SubHeading";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { companyDetails } from "../../content/constant";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { PiSpinnerGapLight } from "react-icons/pi";

const ContactForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const handleFormSubmit = async (values) => {
    var emailBody = "Name : " + values.name + "\n\n";
    emailBody += "Email : " + values.email + "\n\n";
    emailBody += "Phone : " + values.phone + "\n\n";
    emailBody += "Message :\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: values.subject,
      body: emailBody,
      name: "Vibranex Infotech",
    };

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.success) {
          toast.success("Form submitted successfully");
          reset();
          navigate("/thank-you");
        } else {
          toast.error(res.message);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  
  return (
    <section id="contact" className="py-14">
      <div className="wrapper grid md:grid-cols-[55%,1fr] gap-8 md:gap-6">
        <div className="space-y-6">
          <div className="flex justify-start">
            <SubHeading heading="CONTACT US" className="text-secondary" />
          </div>
          <h2 className="text1 font-bold">Get In Touch</h2>
          <p className="desc">
            We'd love to hear from you! Whether you're curious about our AI solutions, AR/VR development, or any of our premium tech services, we're here to help transform your business.
            <br /><br />
            At Tech we deliver cutting-edge solutions designed to solve real challenges and create competitive advantages. Our team of experts is ready to listen and provide the right expertise for your specific needs.
            <br /><br />
            Reach out anytime by phone, email, or fill out the form to start your digital transformation journey.
          </p>
          <div className="flex items-center gap-4">
            <Link 
              to={companyDetails.facebook} 
              className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center hover:bg-secondaryText hover:text-primary transition-all duration-300"
            >
              <FaFacebook size={20} />
            </Link>
            <Link 
              to={companyDetails.instagram} 
              className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center hover:bg-secondaryText hover:text-primary transition-all duration-300"
            >
              <AiFillInstagram size={20} />
            </Link>
            <Link 
              to={companyDetails.linkedin} 
              className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center hover:bg-secondaryText hover:text-primary transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link 
              to={companyDetails.twitter} 
              className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center hover:bg-secondaryText hover:text-primary transition-all duration-300"
            >
              <FaXTwitter size={20} />
            </Link>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-bgGrey p-6 rounded-xl space-y-5 border border-secondary/20"
        >
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                className="bg-primary p-4 rounded-md w-full outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
                placeholder="Name"
                {...register("name", {
                  required: "Full name is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Full name is required";
                    }
                  },
                })}
              />
              <small className="text-secondary">{errors.name?.message}</small>
            </div>
            <div>
              <input
                type="email"
                className="bg-primary p-4 rounded-md w-full outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered email is invalid",
                  },
                })}
              />
              <small className="text-secondary">{errors.email?.message}</small>
            </div>
          </div>
          <div>
            <input
              type="tel"
              className="bg-primary p-4 rounded-md w-full outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[\d\s\-()]{6,14}\d$/,
                  message: "Entered phone number is invalid",
                },
              })}
            />
            <small className="text-secondary">{errors.phone?.message}</small>
          </div>
          <div>
            <input
              type="text"
              className="bg-primary p-4 rounded-md w-full outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
              placeholder="Subject"
              {...register("subject", {
                required: "Subject is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Subject is required";
                  }
                },
              })}
            />
            <small className="text-secondary">{errors.subject?.message}</small>
          </div>
          <div>
            <textarea
              rows="5"
              className="bg-primary p-4 rounded-md w-full outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
              placeholder="How can we help transform your business?"
              {...register("message", {
                required: "Message is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Message is required";
                  }
                },
              })}
            />
            <small className="text-secondary">{errors.message?.message}</small>
          </div>
          <button
            disabled={isSubmitting}
            className="w-full btn-rounded bg-secondaryText text-primary hover:bg-transparent hover:text-secondary border border-secondary flex justify-center disabled:hover:bg-secondaryText disabled:cursor-not-allowed font-bold py-3"
          >
            {isSubmitting ? (
              <PiSpinnerGapLight size={20} className="animate-spin" />
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;