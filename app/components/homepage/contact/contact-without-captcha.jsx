"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactWithoutCaptcha() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    try {
      const res = await emailjs.send(serviceID, templateID, input, options);

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(error?.text || error);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Send Me a Message
      </h3>
      <div className="bg-white max-w-3xl rounded-lg border border-gray-200 p-8 hover:border-sky-500 transition-all duration-300">
        <p className="text-gray-600 text-base mb-8 leading-relaxed">
          {
            "Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon as possible."
          }
        </p>

        <form className="flex flex-col gap-6">
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-900 uppercase tracking-widest">
              Your Name
            </label>
            <input
              className="rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all duration-300 px-4 py-3 text-gray-900 placeholder-gray-400 bg-white"
              type="text"
              maxLength="100"
              placeholder="John Doe"
              required={true}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              onBlur={checkRequired}
              value={input.name}
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-900 uppercase tracking-widest">
              Your Email
            </label>
            <input
              className="rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all duration-300 px-4 py-3 text-gray-900 placeholder-gray-400 bg-white"
              type="email"
              maxLength="100"
              placeholder="your@email.com"
              required={true}
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(input.email) });
              }}
            />
            {error.email && (
              <p className="text-sm text-red-500 font-medium flex items-center gap-1">
                <span>⚠</span> Please provide a valid email address
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-900 uppercase tracking-widest">
              Your Message
            </label>
            <textarea
              className="rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all duration-300 px-4 py-3 text-gray-900 placeholder-gray-400 bg-white resize-none"
              maxLength="500"
              name="message"
              placeholder="Tell me about your project or idea..."
              required={true}
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              onBlur={checkRequired}
              rows="5"
              value={input.message}
            />
            <p className="text-xs text-gray-500">
              {input.message.length} / 500 characters
            </p>
          </div>

          {/* Error Messages */}
          {error.required && (
            <p className="text-sm text-red-600 font-medium flex items-center gap-2 bg-red-50 px-4 py-3 rounded-lg">
              <span>⚠</span> Please fill in all required fields
            </p>
          )}

          {/* Submit Button */}
          <button
            type="button"
            className="group relative mt-4 px-8 py-4 text-white font-semibold bg-sky-500 hover:bg-sky-600 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            onClick={handleSendMail}
          >
            <span className="relative flex items-center gap-2">
              Send Message
              <TbMailForward size={18} />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactWithoutCaptcha;
