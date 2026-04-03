// @flow strict

import * as React from "react";

function ProjectCard({ project }) {
  return (
    <div className="bg-white border border-gray-200 hover:border-sky-500 relative rounded-lg w-full h-[500px] transition-all duration-300 hover:shadow-soft overflow-hidden group">
      {/* Header */}
      <div className="flex flex-row items-center justify-between px-6 lg:px-8 py-4 lg:py-5 border-b border-gray-200">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 lg:h-3 lg:w-3 rounded-full bg-green-400"></div>
        </div>
        <p className="text-center text-sky-500 text-sm lg:text-lg font-semibold ml-4 flex-1">
          {project.name}
        </p>
      </div>

      {/* Content Area */}
      <div className="overflow-hidden px-4 lg:px-8 py-4 lg:py-8 h-[calc(100%-60px)] bg-white">
        <code className="font-mono text-xs md:text-sm lg:text-base h-full flex flex-col space-y-2 text-gray-700">
          <div>
            <span className="mr-2 text-sky-500">const</span>
            <span className="mr-2 text-gray-900">project</span>
            <span className="mr-2 text-red-500">=</span>
            <span className="text-gray-400">{"{"}</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-gray-900">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-600">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          {project.tools && (
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-gray-900">tech:</span>
              <span className="text-gray-400">{` [`}</span>
              <div className="ml-4">
                {project.tools.map((tag, i) => (
                  <React.Fragment key={i}>
                    <span className="text-purple-600">{`'${tag}'`}</span>
                    {project.tools.length - 1 !== i && (
                      <span className="text-gray-400">{`, `}</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <span className="text-gray-400">{`],`}</span>
            </div>
          )}

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-gray-900">role:</span>
            <span className="text-amber-600">{`'${project.role}'`}</span>
            <span className="text-gray-400">,</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-gray-900">summary:</span>
            <span className="text-green-600">{`'${project.description}'`}</span>
          </div>

          <div>
            <span className="text-gray-400">{`}`}</span>
          </div>

          {project.code && (
            <div className="mt-auto pt-2 border-t border-gray-200">
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sky-500 hover:text-sky-600 transition-colors duration-300 group-hover:underline text-xs lg:text-sm"
              >
                {"→ View Code"}
              </a>
            </div>
          )}
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
