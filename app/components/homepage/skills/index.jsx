// @flow strict

import { skillsData, categorizedSkills } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 my-16 lg:my-24">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-sky-500 text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
          Technical Expertise
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          My Skills
        </h2>
        <p className="text-gray-600 max-w-2xl text-lg">
          Proficient in a diverse set of technologies and tools to build modern,
          scalable applications
        </p>
      </div>

      {/* Animated Skills Carousel */}
      <div className="w-full mb-16">
        <Marquee
          gradient={true}
          gradientColor="rgb(255, 255, 255)"
          speed={40}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              key={id}
              className="group relative cursor-pointer m-4 sm:m-6 transform transition-all duration-300 hover:scale-110"
            >
              {/* Card */}
              <div className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 group-hover:border-sky-500 transition-all duration-300 h-32 w-32 sm:h-40 sm:w-40 flex flex-col items-center justify-center shadow-subtle hover:shadow-soft">
                <div className="h-12 sm:h-16 mb-3 sm:mb-4 transform group-hover:scale-125 transition-transform duration-300">
                  <Image
                    src={skillsImage(skill)?.src}
                    alt={skill}
                    width={48}
                    height={48}
                    className="h-full w-auto"
                  />
                </div>
                <p className="text-gray-900 text-xs sm:text-sm font-semibold text-center group-hover:text-sky-500 transition-colors duration-300">
                  {skill}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Categorized Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {Object.entries(categorizedSkills).map(([category, skills], idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg p-8 border border-gray-200 hover:border-sky-500 transition-all duration-300 shadow-subtle hover:shadow-soft"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              {category}
            </h3>
            <ul className="space-y-3">
              {skills.map((skill, sidx) => (
                <li
                  key={sidx}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
