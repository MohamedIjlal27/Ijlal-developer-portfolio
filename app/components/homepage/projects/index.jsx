'use client';

import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { useState, useEffect, useCallback } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextProject = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const previousProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll effect
  useEffect(() => {
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(() => {
        nextProject();
      }, 3000); 
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused, nextProject]);

  return (
    <div id='projects' className="relative z-10 my-12 lg:my-24">
      <div className="sticky top-10 flex flex-col items-center mb-12">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-center relative w-full">
          <span className="bg-[#1a1443] absolute w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-12">
        <div className="container mx-auto px-4 relative">
          <div 
            className="max-w-[800px] mx-auto relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Arrows */}
            <button 
              onClick={previousProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-[#1a1443] text-white p-3 rounded-full hover:bg-[#2a1f63] transition-colors z-20 opacity-75 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#1a1443]"
              aria-label="Previous project"
            >
              <IoIosArrowBack size={28} />
            </button>

            <button 
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-[#1a1443] text-white p-3 rounded-full hover:bg-[#2a1f63] transition-colors z-20 opacity-75 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#1a1443]"
              aria-label="Next project"
            >
              <IoIosArrowForward size={28} />
            </button>

            {/* Project Cards Container */}
            <div className="overflow-hidden rounded-lg">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {projectsData.map((project, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 transition-all duration-500 group relative px-4"
                    >
                      <div className="box-border flex items-center justify-center rounded-lg shadow-[0_0_30px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-shadow duration-300">
                        <ProjectCard project={project} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-[#1a1443] w-4' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
