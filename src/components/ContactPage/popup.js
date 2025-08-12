"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import { sendContactForm } from "@/lib/api";

const initValues = {
  name: "",
  email: "",
  number: "",
  service: "",
  message: "",
  referralCode: "",
};

const initState = { values: initValues };

export default function ContactFormPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [state, setState] = useState(initState);
  const { values } = state;
  const [loading, setLoading] = useState(false);

  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

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
      .catch(() => toast.error("Error sending message"))
      .finally(() => {
        setState(initState);
        setLoading(false);
        toast.success("Message sent successfully");
        setShowPopup(false); // Close popup after submit
      });
  };

  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 backdrop-blur-sm bg-black/40"
    >
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative overflow-y-auto max-h-[90vh] shadow-lg">
        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-4xl font-bold leading-none"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Get in Touch
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col items-start gap-y-2 text-sm mb-6">
          <a
            href="tel:+447438191808"
            className="flex items-center text-gray-700 gap-2"
          >
            <FaPhoneSquareAlt className="text-green-600" />
            +44-7438191808
          </a>
          <a
            href="mailto:contact@mitochonpixel.co.uk"
            className="flex items-center text-gray-700 gap-2"
          >
            <FaEnvelope className="text-red-600" />
            contact@mitochonpixel.co.uk
          </a>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="number" className="block text-sm font-medium">
              Phone Number*
            </label>
            <input
              type="text"
              name="number"
              id="number"
              value={values.number}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="form-services" className="block text-sm font-medium">
              What are your requirements?*
            </label>
            <select
              name="service"
              id="form-services"
              value={values.service}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            >
              <option value="">Select</option>
              <option value="SEO_Services">SEO Services</option>
              <option value="Website_Development">Website Development</option>
              <option value="Branding">Branding</option>
              <option value="Content_Marketing">Content Marketing</option>
              <option value="Paid_Online_Adverts">Paid Online Advertising</option>
              <option value="Social_Media_Marketing">Social Media Marketing</option>
              <option value="Analytics_and_Reporting">
                Analytics and Reporting
              </option>
              <option value="CRO_and_Usablity">CRO and Usability</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              rows="2"
              value={values.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>

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
            className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
