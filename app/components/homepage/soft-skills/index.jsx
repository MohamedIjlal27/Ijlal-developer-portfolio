// @flow strict

import { softSkills } from "@/utils/data/expertise";

function SoftSkills() {
  return (
    <div id="soft-skills" className="relative z-50 my-16 lg:my-24">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-sky-500 text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
          Professional Attributes
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Soft Skills & Competencies
        </h2>
        <p className="text-gray-600 text-lg">
          Proven ability to thrive in dynamic environments and deliver
          exceptional results
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {softSkills.map((skill, idx) => (
          <div
            key={skill.id}
            className="bg-white rounded-lg p-6 border border-gray-200 hover:border-sky-500 transition-all duration-300 shadow-subtle hover:shadow-soft"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {skill.skill}
            </h3>
            <p className="text-gray-600 leading-relaxed">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SoftSkills;
