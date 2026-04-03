// @flow strict

import { coreExpertise } from "@/utils/data/expertise";

function CoreExpertise() {
  return (
    <div id="expertise" className="relative z-50 my-16 lg:my-24">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-sky-500 text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
          Core Competencies
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Engineering Expertise
        </h2>
        <p className="text-gray-600 text-lg">
          Specialized knowledge across full-stack development, security, and
          system optimization
        </p>
      </div>

      {/* Expertise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {coreExpertise.map((expertise, idx) => (
          <div
            key={expertise.id}
            className="bg-white rounded-lg p-6 border border-gray-200 hover:border-sky-500 transition-all duration-300 shadow-subtle hover:shadow-soft"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{expertise.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {expertise.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {expertise.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoreExpertise;
