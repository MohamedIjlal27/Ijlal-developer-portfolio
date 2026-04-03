// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold text-sky-500 hover:text-sky-600 transition-colors duration-300"
          >
            MI
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-8 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline group"
              href="/#about"
            >
              <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-sky-500 font-medium">
                ABOUT
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline group"
              href="/#experience"
            >
              <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-sky-500 font-medium">
                EXPERIENCE
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline group"
              href="/#soft-skills"
            >
              <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-sky-500 font-medium">
                SOFT SKILLS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline group"
              href="/#skills"
            >
              <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-sky-500 font-medium">
                SKILLS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline group"
              href="/#expertise"
            >
              <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-sky-500 font-medium">
                EXPERTISE
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline group"
              href="/#projects"
            >
              <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-sky-500 font-medium">
                PROJECTS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline group"
              href="/#education"
            >
              <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-sky-500 font-medium">
                EDUCATION
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
