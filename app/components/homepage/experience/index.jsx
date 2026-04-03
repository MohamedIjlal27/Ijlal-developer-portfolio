// @flow strict
"use client";

import { useState, useEffect } from "react";
import { experiences } from "@/utils/data/experience";
import { calculateTotalExperience } from "@/utils/calculate-experience";
import { BsPersonWorkspace } from "react-icons/bs";

function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);

  // Lock/unlock body scroll when modal opens/closes
  useEffect(() => {
    if (selectedExp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedExp]);

  // Color schemes for different cards
  const colorSchemes = [
    {
      gradient: "from-blue-500 to-blue-600",
      accent: "bg-blue-100",
      text: "text-blue-700",
      border: "border-blue-300",
    },
    {
      gradient: "from-purple-500 to-purple-600",
      accent: "bg-purple-100",
      text: "text-purple-700",
      border: "border-purple-300",
    },
    {
      gradient: "from-cyan-500 to-cyan-600",
      accent: "bg-cyan-100",
      text: "text-cyan-700",
      border: "border-cyan-300",
    },
    {
      gradient: "from-indigo-500 to-indigo-600",
      accent: "bg-indigo-100",
      text: "text-indigo-700",
      border: "border-indigo-300",
    },
    {
      gradient: "from-violet-500 to-violet-600",
      accent: "bg-violet-100",
      text: "text-violet-700",
      border: "border-violet-300",
    },
    {
      gradient: "from-fuchsia-500 to-fuchsia-600",
      accent: "bg-fuchsia-100",
      text: "text-fuchsia-700",
      border: "border-fuchsia-300",
    },
  ];

  const getInitials = (company) => {
    return company
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div id="experience" className="relative my-16 lg:my-24">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-sky-500 text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
          Professional Journey
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          My Experience
        </h2>
        <p className="text-gray-600 text-lg">
          {calculateTotalExperience(experiences)} years of building impactful
          solutions
        </p>
      </div>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, idx) => {
          const color = colorSchemes[idx % colorSchemes.length];
          const initials = getInitials(exp.company);

          return (
            <div
              key={exp.id}
              onClick={() => setSelectedExp(exp)}
              className="group relative overflow-hidden rounded-xl shadow-subtle hover:shadow-soft transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Blur Effect Overlay */}
              <div className="absolute inset-0 backdrop-blur-sm" />

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col justify-between">
                {/* Header with Company Initials */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`text-3xl font-bold text-white opacity-20 select-none`}
                  >
                    {initials}
                  </div>
                  <div
                    className={`${color.accent} ${color.text} px-3 py-1 rounded-full text-xs font-semibold`}
                  >
                    {exp.workmode}
                  </div>
                </div>

                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                    {exp.title}
                  </h3>
                  <p className="text-white text-sm font-medium opacity-90">
                    {exp.company}
                  </p>
                </div>

                {/* Duration Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-white bg-opacity-20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white border-opacity-30">
                    {exp.duration}
                  </span>
                </div>

                {/* Description */}
                {exp.description && (
                  <p className="text-white text-xs leading-relaxed opacity-90 line-clamp-3 mb-4">
                    {exp.description}
                  </p>
                )}

                {/* Learn More Link */}
                <div className="flex items-center text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>View Details</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000" />
            </div>
          );
        })}
      </div>

      {/* Modal Backdrop */}
      {selectedExp && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-hidden">
          {/* Animated Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md animate-fade-in z-[9998]"
            onClick={() => setSelectedExp(null)}
          />

          {/* Modal Container */}
          <div className="relative z-[9999] w-full max-w-2xl max-h-[95vh] flex flex-col rounded-3xl shadow-2xl bg-white animate-scale-in overflow-hidden">
            {/* Gradient Header */}
            <div className="flex-shrink-0 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 p-8 text-white rounded-t-3xl">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-white bg-opacity-20 rounded-full w-fit">
                    <BsPersonWorkspace size={16} />
                    <span className="text-xs uppercase font-semibold tracking-wider">
                      Job Details
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                    {selectedExp.title}
                  </h2>
                  <p className="text-sky-100 text-lg font-medium">
                    {selectedExp.company}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedExp(null)}
                  className="flex-shrink-0 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-3 transition-all duration-300 transform hover:rotate-90"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
            </div>

            {/* Modal Body - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-8 md:p-10">
                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Duration Card */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                    <p className="text-xs text-blue-600 uppercase font-bold tracking-widest mb-2">
                      📅 Duration
                    </p>
                    <p className="text-xl font-bold text-blue-900">
                      {selectedExp.duration}
                    </p>
                  </div>

                  {/* Work Mode Card */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                    <p className="text-xs text-green-600 uppercase font-bold tracking-widest mb-2">
                      🌍 Work Mode
                    </p>
                    <p className="text-xl font-bold text-green-900">
                      {selectedExp.workmode}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8" />

                {/* Description Section */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="text-lg">💼</span>
                    Role & Responsibilities
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base whitespace-pre-wrap">
                    {selectedExp.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8" />

                {/* Action Buttons */}
                <div className="flex gap-3 pb-4">
                  <button
                    onClick={() => setSelectedExp(null)}
                    className="flex-1 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;
