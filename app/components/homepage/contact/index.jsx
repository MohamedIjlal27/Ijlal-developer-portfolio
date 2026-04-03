// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactWithCaptcha from "./contact-with-captcha";
import ContactWithoutCaptcha from "./contact-without-captcha";

function ContactSection() {
  return (
    <div id="contact" className="my-16 lg:my-24 relative">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-sky-500 text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
          Get in Touch
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl">
          Have a project in mind? Let&apos;s collaborate and create something
          amazing together
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Contact Form */}
        <div>
          {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY &&
          process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY ? (
            <ContactWithCaptcha />
          ) : (
            <ContactWithoutCaptcha />
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>

            {/* Email */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-sky-500 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-50 rounded-lg">
                  <MdAlternateEmail className="text-sky-500" size={24} />
                </div>
                <div>
                  <p className="text-gray-600 text-sm uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-lg font-semibold text-gray-900 hover:text-sky-500 transition-colors duration-300"
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-sky-500 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-50 rounded-lg">
                  <IoMdCall className="text-sky-500" size={24} />
                </div>
                <div>
                  <p className="text-gray-600 text-sm uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <a
                    href={`tel:${personalData.phone}`}
                    className="text-lg font-semibold text-gray-900 hover:text-sky-500 transition-colors duration-300"
                  >
                    {personalData.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-sky-500 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-50 rounded-lg">
                  <CiLocationOn className="text-sky-500" size={24} />
                </div>
                <div>
                  <p className="text-gray-600 text-sm uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {personalData.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Connect on Social Media
            </h4>
            <div className="flex flex-wrap gap-4">
              <Link
                target="_blank"
                href={personalData.github}
                className="group"
              >
                <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300">
                  <IoLogoGithub size={24} className="text-sky-500" />
                </div>
              </Link>
              <Link
                target="_blank"
                href={personalData.linkedIn}
                className="group"
              >
                <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300">
                  <BiLogoLinkedin size={24} className="text-sky-500" />
                </div>
              </Link>
              <Link
                target="_blank"
                href={personalData.twitter}
                className="group"
              >
                <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300">
                  <FaXTwitter size={24} className="text-sky-500" />
                </div>
              </Link>
              <Link
                target="_blank"
                href={personalData.stackOverflow}
                className="group"
              >
                <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300">
                  <FaStackOverflow size={24} className="text-sky-500" />
                </div>
              </Link>
              <Link
                target="_blank"
                href={personalData.facebook}
                className="group"
              >
                <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300">
                  <FaFacebook size={24} className="text-sky-500" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
