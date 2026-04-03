// @flow strict
import Image from "next/image";

import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from "/public/lottie/study.json";

function Education() {
  return (
    <div id="education" className="relative z-50 my-16 lg:my-24">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-sky-500 text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
          Academic Background
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Education
        </h2>
        <p className="text-gray-600 text-lg">
          Building knowledge foundations and continuous learning
        </p>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Animation Section */}
          <div className="flex justify-center items-start order-2 lg:order-1">
            <div className="w-full h-full">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          {/* Education Cards */}
          <div className="order-1 lg:order-2">
            <div className="flex flex-col gap-6">
              {educations.map((education) => (
                <div
                  key={education.id}
                  className="bg-white border-l-4 border-sky-500 p-6 rounded-lg shadow-subtle hover:shadow-soft transition-all duration-300"
                >
                  <div className="text-gray-900">
                    {/* Duration Badge */}
                    <div className="inline-block mb-4">
                      <span className="text-xs sm:text-sm text-sky-600 font-semibold bg-sky-50 px-4 py-2 rounded-full">
                        {education.duration}
                      </span>
                    </div>

                    {/* Title and Institution */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-sky-50 rounded-lg flex-shrink-0">
                        <BsPersonWorkspace className="text-sky-500" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                          {education.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {education.institution}
                        </p>
                        {education.grade && (
                          <p className="text-sm text-sky-600 font-medium">
                            Grade: {education.grade}
                          </p>
                        )}
                        {education.specialization && (
                          <p className="text-sm text-gray-600">
                            Specialization: {education.specialization}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
