"use client";
import Script from "next/script";
import image from "@/constant/Images/image";
import { sendContactForm } from "@/lib/api";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import Image from "next/image";
import { useState, useCallback } from "react";
import toast from "react-hot-toast";

const initValues = {
  name: "",
  email: "",
  number: "",
  service: "",
  message: "",
  referralCode: "",
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
      .catch(() => {
        toast.error("Error sending message");
      })
      .finally(() => {
        setState(initState);
        setLoading(false);
        toast.success("Message sent successfully");
      });
  };

  // Calendly popup function
  const openCalendly = useCallback(() => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/mitochondigital/check",
      });
    } else {
      console.error("Calendly script not loaded yet.");
    }
  }, []);

  return (
    <section className={`${color}`}>
      {/* ✅ Block 1 — Book Your Free Consultation */}
      <div className="app__container py-12 text-left">
        <h2 className="text-3xl primary-heading text-gray-90 font-bold text-gray-900">
          Book Your <span className="highlight">Free Consultation</span>
        </h2>
        <p className="mt-4 text-gray-600 text-justify text-lg leading-relaxed">
          Book your free consultation with our crew and walk away with bespoke
          advice, fresh ideas, and a crystal-clear game plan to get your
          business flying high.
        </p>
        <div className="mt-6 flex justify-left">
          <button
            type="button"
            onClick={openCalendly}
            className="rounded-md bg-gradient-to-r from-[#96A210] to-[#176301] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-transparent hover:border-green-800 hover:text-black border transition"
          >
            Schedule Your Appointment
          </button>
        </div>
      </div>

      {/* ✅ Block 2 — Touches Form with Image on Right */}
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-12 py-16">
        {/* Left: Form */}
        <form>
          <div className="space-y-12">
            <div className="pb-6">
              <h2
                className="text-3xl primary-heading leading-7 capitalize pb-2 text-gray-900"
                dangerouslySetInnerHTML={{ __html: heading }}
              />
              <div className="flex items-center gap-x-4 mt-4 text-sm leading-6">
                <a
                  className="text-sm text-gray-600 font-bold flex items-center gap-2"
                  href="tel:+447438191808"
                >
                  <span className="text-green-600">
                    <FaPhoneSquareAlt />
                  </span>
                  +44-7438191808
                </a>
                <a
                  className="text-sm text-gray-600 font-bold flex items-center gap-2"
                  href="mailto:contact@mitochonpixel.co.uk"
                >
                  <span className="text-[#EA4335]">
                    <FaEnvelope />
                  </span>
                  contact@mitochonpixel.co.uk
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                {/* Full Name */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className="mt-2 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email address*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="mt-2 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                  />
                </div>

                {/* Phone */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    value={values.number}
                    onChange={handleChange}
                    autoComplete="number"
                    className="mt-2 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                  />
                </div>

                {/* Services */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="form-services"
                    className="block text-sm font-medium text-gray-900"
                  >
                    What are your requirements?*
                  </label>
                  <select
                    id="form-services"
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    className="mt-2 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
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

                {/* Referral Code */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="referralCode"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Referral Code{" "}
                    <span className="text-gray-500">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="referralCode"
                    id="referralCode"
                    value={values.referralCode}
                    onChange={handleChange}
                    autoComplete="off"
                    className="mt-2 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                  />
                </div>

                {/* Message */}
                <div className="col-span-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    cols="50"
                    className="mt-2 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
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
              className="rounded-md bg-gradient-to-r from-[#96A210] to-[#176301] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-transparent hover:border-green-800 hover:text-black border transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {/* Right: Image */}
        <div className="my-auto hidden md:block">
          <Image src={image.getInTouch} alt="Contact Us" />
        </div>
      </div>

      {/* Calendly CSS */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
