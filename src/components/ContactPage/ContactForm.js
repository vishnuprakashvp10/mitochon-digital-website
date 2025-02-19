"use client";
import image from "@/constant/Images/image";
import { sendContactForm } from "@/lib/api";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

const initValues = {
  name: "",
  email: "",
  number: "",
  service: "",
  message: "",
  referralCode: "", // Add referralCode to the initial values
};
const initState = { values: initValues };

export default function ContactForm({ heading, color }) {
  const [state, setState] = useState(initState);
  const { values } = state;

  const [loading, setLoading] = useState(false);

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await sendContactForm(values)
      .then(() => {})
      .catch((error) => {
        toast.error("Error sending message");
      })
      .finally(() => {
        setState(initState);
        setLoading(false);
        toast.success("Message sent successfully");
      });
  };

  return (
    <section className={`${color}`}>
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-12 py-16 md:py-32">
        <div className="my-auto">
          <Image src={image.getInTouch} alt="contact Us" />
        </div>
        <form>
          <div className="space-y-12">
            <div className="pb-6">
              <h2
                className="text-3xl primary-heading leading-7 capitalize pb-2 text-gray-900"
                dangerouslySetInnerHTML={{ __html: heading }}
              />
              <div className="flex items-center gap-x-4 mt-4 text-sm leading-6">
                <a
                  className="text-sm text-gray-600 text-bold flex items-center justify-center md:justify-start gap-2"
                  href="tel:+447438191808"
                >
                  <span className="text-green-600">
                    <FaPhoneSquareAlt />
                  </span>{" "} 
                  +44-7438191808
                </a>
                <a
                  className="text-sm text-gray-600 text-sbold flex items-center justify-center md:justify-start gap-2"
                  href="mailto:contact@mitochonpixel.co.uk"
                >
                  <span className="text-[#EA4335]">
                    <FaEnvelope />
                  </span>{" "}
                  contact@mitochonpixel.co.uk
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full Name*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className="block w-full pl-3 pr-10 py-2 text-base shadow-sm placeholder:text-gray-400 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:border-green-500 focus:ring-indigo-200"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address*
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="block w-full pl-3 pr-10 py-2 text-base shadow-sm placeholder:text-gray-400 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:border-green-500 focus:ring-indigo-200"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="number"
                      id="number"
                      value={values.number}
                      onChange={handleChange}
                      autoComplete="number"
                      className="block w-full pl-3 pr-10 py-2 text-base shadow-sm placeholder:text-gray-400 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:border-green-500 focus:ring-indigo-200"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="form-services"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    What are your requirements?*
                  </label>
                  <div className="mt-2">
                    <select
                      id="form-services"
                      name="service"
                      value={values.service}
                      onChange={handleChange}
                      className="block w-full pl-3 pr-10 py-2 text-base shadow-sm placeholder:text-gray-400 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:border-green-500 focus:ring-indigo-200"
                    >
                      <option value="">Select</option>
                      <option value="SEO_Services">SEO Services</option>
                      <option value="Website_Development">
                        Website Development
                      </option>
                      <option value="Branding">Branding</option>
                      <option value="Content_Marketing">Content Marketing</option>
                      <option value="Paid_Online_Adverts">
                        Paid Online Advertising
                      </option>
                      <option value="Social_Media_Marketing">
                        Social Media Marketing
                      </option>
                      <option value="Analytics_and_Reporting">
                        Analytics and Reporting
                      </option>
                      <option value="CRO_and_Usablity">CRO and Usability</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="referralCode"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Referral Code <span className="text-gray-500">(optional)</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="referralCode"
                      id="referralCode"
                      value={values.referralCode}
                      onChange={handleChange}
                      autoComplete="off"
                      className="block w-full pl-3 pr-10 py-2 text-base shadow-sm placeholder:text-gray-400 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:border-green-500 focus:ring-indigo-200"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Message*
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      cols="50"
                      className="block w-full pl-3 pr-10 py-2 text-base shadow-sm placeholder:text-gray-400 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:border-green-500 focus:ring-indigo-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-start">
            <button
              type="submit"
              disabled={
                !values.name ||
                !values.email ||
                !values.number ||
                !values.service ||
                !values.message ||
                loading
              }
              onClick={onSubmit}
              className="rounded-md bg-gradient-to-r transition-all from-[#96A210] to-[#176301] hover:bg-none hover:bg-transparent border hover:border-green-800 hover:text-black px-4 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
