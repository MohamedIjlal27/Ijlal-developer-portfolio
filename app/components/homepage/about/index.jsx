// @flow strict

import { personalData } from "@/utils/data/personal-data";

function AboutSection() {
  return (
    <div id="about" className="my-16 lg:my-24">
      <div className="mb-12 lg:mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 w-12 bg-gradient-to-r from-sky-500 to-sky-400 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            About Me
          </h2>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="max-w-5xl w-full">
          {/* Main Description Card */}
          <div className="group relative p-8 md:p-10 rounded-xl border border-gray-100 hover:border-sky-200 bg-white hover:shadow-lg transition-all duration-300">
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-sky-500 to-transparent rounded-full"></div>

            <p className="text-sky-500 text-xs md:text-sm font-semibold uppercase tracking-widest mb-5">
              Professional Overview
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-light text-justify">
              {personalData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
