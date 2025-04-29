import { useState } from "react";
import successSvg from "@/assets/success.svg";
import arrowRight from "@/assets/arrow-right-white.svg";
import { getBannerMenuList, knowUsTypes } from "@/utils/common.js";

const ContactUs = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const isNeed = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if (name && email && message) {
      setIsSubmit(true);
    } else {
      return;
    }
  };

  /** 未提交页面 */
  const renderNotSubmitPage = () => {
    return (
      <div>
        <div className="text-[#231F20] text-50 leading-70 font-semibold">
          GET FREE CONSULTATION NOW
        </div>
        <div className="text-[#3E3E46] text-22 leading-34 mt-14 font-['ArialMT']">
          please complete the form and we will get back to you.
        </div>

        <div className="w-full">
          <p className="h-3 w-64 my-32 mx-auto bg-[#337DB9]" />
        </div>

        <div className="text-['#3E3E46'] w-560 mx-auto leading-24 mb-50 font-['ArialMT']">
          Contact us immediately to help you attract and enter your target
          market by improving your website search ranking and professional
          advertising content planning.
        </div>

        <form className="mx-auto text-[#6A7889] leading-22">
          <div className="mb-40 pb-7 flex border-b-2 border-[#103A70]">
            <label htmlFor="name" className="ml-2 mr-8 flex">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[#103A70]"
              required
            />
          </div>

          <div className="mb-40 pb-7 flex border-b-2 border-[#103A70]">
            <label htmlFor="email" className="ml-2 mr-8 flex">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[#103A70]"
              required
            />
          </div>

          <div className="mb-40 pb-7 flex border-b-2 border-[#103A70]">
            <label htmlFor="telephone" className="ml-2 mr-8 flex">
              Telephone
            </label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[#103A70]"
            />
          </div>

          <div className="mb-40 pb-7 flex border-b-2 border-[#103A70]">
            <label htmlFor="serviceTypes" className="ml-2 mr-8 flex">
              Service Types
            </label>
            <select
              type="text"
              id="serviceTypes"
              name="serviceTypes"
              className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[#103A70] flex-1"
            >
              <option
                className="display-none"
                style={{ display: "none" }}
              ></option>
              {getBannerMenuList().map((item) => (
                <option value={item.key} key={item.key}>
                  {item.label}
                </option>
              ))}
              <option value="other" key="other">
                other
              </option>
            </select>
          </div>

          <div className="mb-40 pb-7 flex border-b-2 border-[#103A70]">
            <label htmlFor="whereToKnowUs" className="ml-2 mr-8 flex">
              Where to know us
            </label>
            <select
              type="text"
              id="whereToKnowUs"
              name="whereToKnowUs"
              className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[#103A70] flex-1"
            >
              <option
                className="display-none"
                style={{ display: "none" }}
              ></option>
              {knowUsTypes.map((item) => (
                <option value={item.key} key={item.key}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-16">
            <label htmlFor="message" className="mb-4 flex">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full py-12 px-16 focus:outline-none bg-[#F9F9F9] focus:ring-indigo-500 focus:border-indigo-500 text-[#103A70]"
              required
            />
          </div>
          {/* setIsSubmit(true) */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-[#337DB9] w-200 h-36 rounded-4 hover:opacity-60"
              onClick={() => isNeed()}
            >
              <span className="text-14 text-[#fff]">
                Submit
                <img
                  src={arrowRight}
                  className={`w-[12px] h-[8px] relative left-8 inline-block `}
                />
              </span>
            </button>
          </div>
        </form>
      </div>
    );
  };

  /** 已提交页面 */
  const renderSubmitPage = () => {
    return (
      <div className="mt-[-90px]">
        <div>
          <img
            src={successSvg}
            alt="success"
            className="w-122 h-128 mt-202 mb-47 mx-auto"
          />
        </div>

        <div className="w-730 text-50 leading-70 text-center font-bold">
          Thank you for your feedback
        </div>

        <div className="text-22 leading-34 mt-14 text-center">
          We will get back to you
        </div>
      </div>
    );
  };

  return (
    <div className="w-800 mt-140 mb-110 mx-auto text-center text-16">
      {isSubmit ? renderSubmitPage() : renderNotSubmitPage()}
    </div>
  );
};

export default ContactUs;
