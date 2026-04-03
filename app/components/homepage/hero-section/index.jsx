// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { experiences } from "@/utils/data/experience";
import { calculateTotalExperience } from "@/utils/calculate-experience";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";

function HeroSection() {
  const totalExperience = calculateTotalExperience(experiences);
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-8 lg:py-0">
      <div className="w-full px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-150px)] lg:min-h-auto">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-sky-50 border border-sky-200">
              <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
              <span className="text-xs text-sky-600 font-semibold uppercase tracking-widest">
                Available for work
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <p className="text-gray-600 text-sm md:text-base font-medium uppercase tracking-widest">
                Hey there, I&apos;m
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter">
                <span className="block text-gray-900">{personalData.name}</span>
                <span className="block text-sky-500 text-4xl md:text-5xl lg:text-6xl mt-2">
                  Full Stack Developer
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-md font-medium">
              I craft beautiful, scalable web experiences with modern
              technologies. Passionate about clean code and solving complex
              problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
                <MdArrowOutward
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  size={20}
                />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm font-medium">
                Connect with me:
              </p>
              <div className="flex gap-4">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-sky-500 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300"
                >
                  <BsGithub size={20} />
                </a>
                <a
                  href={personalData.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-sky-500 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300"
                >
                  <BsLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center h-full min-h-[400px] lg:min-h-auto">
            {/* Image Container */}
            <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-soft">
              <Image
                src={personalData.profile}
                alt={personalData.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-6 -left-6 px-6 py-3 bg-sky-500 text-white font-bold rounded-xl shadow-soft">
              <p className="text-sm md:text-base">
                {totalExperience}+ Years Exp
              </p>
            </div>

            <div className="absolute -top-6 -right-6 px-6 py-3 bg-white border border-sky-200 text-sky-600 font-bold rounded-xl shadow-soft">
              <p className="text-sm md:text-base">React Expert</p>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <p className="text-gray-600 text-xs uppercase tracking-widest font-medium">
            Scroll down
          </p>
          <svg
            className="w-5 h-5 text-sky-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
