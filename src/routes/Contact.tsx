import React, { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contactHeader from "@/assets/contact-header.png";
import Fruits from "@/components/design/Fruits";
import messageArrowPink from "../assets/svg/direct-right.svg";
import messageArrowWhite from "../assets/svg/direct-right-white.svg";
import contactBg from "@/assets/svg/contact_section.svg";
import { useMediaQuery } from "react-responsive";
import StatusModal from "@/components/ContactModal";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { color } from "framer-motion";

const Contact: React.FC = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      message: e.target.value,
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [recaptchaMessage, setRecaptchaMessage] = useState("");

  const form = useRef<HTMLFormElement>({} as HTMLFormElement);
  const recaptchaRef = React.createRef<ReCAPTCHA>();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    const recaptchaValue = recaptchaRef.current?.getValue();

    //Check if user has completed recaptcha
    if (!recaptchaValue) {
      setRecaptchaMessage("Please complete the reCAPTCHA.");
      return;
    } else {
      // Handle form submission logic here
      emailjs
        .sendForm("service_qxn5pg5", "template_8obsowt", form.current, {
          publicKey: "QUUa4sjv9lqphTkXQ",
        })
        .then(() => {
          // Display success modal
          setSuccessMessage(
            "Your message has been sent successfully. We will contact you shortly."
          );
        }),
        (error: { text: string }) => {
          // Display failure modal
          setErrorMessage(error.text);
        };

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <section
        className="block w-full bg-white bg-center bg-no-repeat bg-cover  lg:h-[600px] h-[250px]"
        style={{ backgroundImage: `url(${contactHeader})` }}></section>
      <section
        className={`flex flex-row w-full bg-center items-center justify-center bg-no-repeat  lg:-mt-[16.48rem] min-h-[64rem] overflow-visible bg-slurppiespink lg:bg-transparent`}
        style={{
          backgroundImage: `url(${contactBg})`,
        }}>
        <Fruits position="hidden xl:block relative h-fit left-0" />
        {successMessage && (
          <StatusModal
            isOpen={true}
            onClose={() => {}}
            status="success"
            message="Success"
            subtext={successMessage}
          />
        )}
        {errorMessage && (
          <StatusModal
            isOpen={true}
            onClose={() => {}}
            status="failure"
            message="Failed"
            subtext={errorMessage}
          />
        )}
        <div className="container max-w-[1440px] mx-auto py-[2.5rem] lg:py-[4.5rem] h-fit w-full ">
          <div className="grid w-full lg:justify-between justify-items-center lg:grid-cols-2">
            <div className=" w-[90%] lg:w-3/5 text-center lg:text-start text-white">
              <h4 className="font-bold text-[3rem] mb-4 font-[Pacifico] ">
                Contact Us
              </h4>
              <div className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:w-full">
                <h5 className="font-[Pacifico] text-[1.5rem] text-white">
                  Locate any of our stores
                </h5>
                <p className="text-white text-[1rem] max-w-[36rem]">
                  Visit any of our locations to experience the welcoming
                  atmosphere and explore our wide selection of refreshing
                  smoothies.
                </p>
              </div>
              <div className="flex flex-row items-start justify-between gap-4 mb-4 max-sm:flex-col max-sm:items-center h-fit lg:flex-col lg:items-start">
                <div className="flex flex-col items-center justify-start gap-2 mt-4 lg:items-start lg:flex-row">
                  <img
                    src="src/assets/svg/CallUs.svg"
                    alt=""
                  />
                  <div className="flex flex-col gap-1">
                    <h6 className="text-[1.15rem] font-bold">Call Us</h6>
                    <a
                      href="tel: +233 50 000 0000"
                      className="font-normal text-white no-underline cursor-pointer focus:text-white hover:text-white">
                      +233 55 932 9909
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start gap-2 mt-4 lg:items-start lg:flex-row">
                  <img
                    src="src/assets/svg/EmailUs.svg"
                    alt=""
                  />
                  <div className="flex flex-col gap-1">
                    <h6 className="text-[1.15rem] font-bold">Email Us</h6>
                    <a
                      href="mailto: talk2us@slurppies.com"
                      className="font-normal text-white no-underline cursor-pointer focus:text-white hover:text-white">
                      talk2us@slurppies.com
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start gap-2 mt-4 lg:items-start lg:flex-row">
                  <img
                    src="src/assets/svg/FindUs.svg"
                    alt=""
                  />
                  <div className="flex flex-col gap-1">
                    <h6 className="text-[1.15rem] font-bold ">Locate Us</h6>
                    <p className="font-normal text-white">
                      Comm. 7, <br />
                      Adjacent Post Office, <br />
                      Tema
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:max-w-md">
              <h5 className="text-[2rem] text-white lg:text-start text-center">
                <span className="font-[Pacifico] mb-2">Got an event? </span>
              </h5>
              <p className="text-white text-[1.25rem] mb-2 text-center lg:text-start">
                We'd love to be there
              </p>
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="text-white">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-[1rem] text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    value={formData.name}
                    onChange={handleNameChange}
                    className="w-full bg-transparent px-3 py-2 h-[3rem] border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fff]"
                    required
                    autoComplete="on"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-[1rem] text-white">
                    Phone Number
                  </label>
                  <PhoneInput
                    defaultCountry="gh"
                    name="user_phone"
                    value={formData.phone}
                    onChange={(phone) =>
                      setFormData({
                        ...formData,
                        phone: phone,
                      })
                    }
                    inputClassName="w-full bg-transparent text-white"
                    inputStyle={{
                      color: "#fff",
                      padding: "24px 8px",
                      borderRadius: "0 .75rem .75rem 0",
                      background: "transparent",
                    }}
                    countrySelectorStyleProps={{
                      style: {},
                      buttonStyle: {
                        borderRadius: " .75rem  0 0 .75rem",
                        padding: "24px 12px",
                      },
                    }}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-[1rem] text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    className="w-full bg-transparent px-3 py-2 h-[3rem] border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fff]"
                    required
                    autoComplete="on"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-[1rem] text-white">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="user_message"
                    id="message"
                    value={formData.message}
                    onChange={handleMessageChange}
                    placeholder="Type your message here"
                    className="w-full bg-transparent px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fff]"
                    required></textarea>
                </div>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Ld9xrIqAAAAAMOB5-S-bQ-CxATcgzp-dyqt9HHt"
                />
                {recaptchaMessage && (
                  <p className="text-red-500">{recaptchaMessage}</p>
                )}
                <button
                  type="submit"
                  className="bg-slurppiespink lg:bg-white text-white lg:text-slurppiespink rounded-xl px-[1.5rem] py-[.75rem] flex flex-row items-center gap-2 pointer border-white border-2 lg:border-slurppiespink lg:border-2 cursor-pointer">
                  Send Message
                  {isDesktop ? (
                    <img
                      src={messageArrowPink}
                      alt="image of an arrow pointing to the right"
                    />
                  ) : (
                    <img src={messageArrowWhite}></img>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        <Fruits position="hidden xl:block relative right-40 h-fit" />
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
