"use client";

import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
import { useState, useEffect, useCallback } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextProject = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1,
    );
  }, []);

  const previousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1,
    );
  };

  // Auto-scroll effect
  useEffect(() => {
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(() => {
        nextProject();
      }, 4000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused, nextProject]);

  return (
    <div id="projects" className="relative z-10 my-16 lg:my-24">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-sky-500 text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
          Featured Work
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          My Projects
        </h2>
        <p className="text-gray-600 text-lg">
          Crafted solutions that make a difference
        </p>
      </div>

      {/* Projects Carousel */}
      <div className="pt-8">
        <div className="container mx-auto px-4 relative">
          <div
            className="max-w-4xl mx-auto relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Arrows */}
            <button
              onClick={previousProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 md:-translate-x-24 z-20 p-3 rounded-full bg-white border border-gray-200 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300 group/btn focus:outline-none"
              aria-label="Previous project"
            >
              <IoIosArrowBack
                size={28}
                className="text-sky-500 transition-colors duration-300"
              />
            </button>

            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 md:translate-x-24 z-20 p-3 rounded-full bg-white border border-gray-200 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300 group/btn focus:outline-none"
              aria-label="Next project"
            >
              <IoIosArrowForward
                size={28}
                className="text-sky-500 transition-colors duration-300"
              />
            </button>

            {/* Project Cards Container */}
            <div className="overflow-hidden rounded-lg">
              <div
                className="transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {projectsData.map((project, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 transition-all duration-500 group relative px-2"
                    >
                      <div className="h-full">
                        <ProjectCard project={project} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? "bg-sky-500 w-8 h-3"
                      : "bg-gray-300 hover:bg-gray-400 w-2 h-2"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            {/* Project Counter */}
            <div className="text-center mt-6">
              <p className="text-gray-600 text-sm font-semibold">
                {currentIndex + 1}{" "}
                <span className="text-gray-400">/ {projectsData.length}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
