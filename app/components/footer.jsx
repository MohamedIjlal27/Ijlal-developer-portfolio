// @flow strict
import Link from "next/link";

function Footer() {
  return (
    <div className="border-t border-gray-200 bg-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-sky-500 mb-3">IF</h3>
            <p className="text-gray-600 text-sm text-center md:text-left">
              Building digital excellence through code and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-center">
              <li>
                <Link
                  href="/#about"
                  className="text-gray-600 hover:text-sky-500 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-gray-600 hover:text-sky-500 transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-600 hover:text-sky-500 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-gray-900 font-semibold mb-4">Connect</h4>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-sky-500 transition-colors duration-300 text-sm"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-sky-500 transition-colors duration-300 text-sm"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-sky-500 transition-colors duration-300 text-sm"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <Link
              href="/"
              className="text-sky-500 hover:text-sky-600 transition-colors duration-300"
            >
              IJLAL FAIROS
            </Link>
            . All rights reserved.
          </p>

          <p className="text-sm text-gray-600 text-center md:text-right">
            Crafted with passion for the web
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
