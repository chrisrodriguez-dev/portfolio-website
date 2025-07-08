import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { PiFileTextLight } from "react-icons/pi";
import './index.css';

function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 px-6 py-4 bg-transparent flex justify-between items-center backdrop-blur-sm">
      
      {/* Left side - Call to Action */}
      <a
        href="mailto:cmr82@njit.edu?subject=Internship Inquiry"
        className="bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold shadow-lg hover:bg-blue-500 transition"
      >
        Need an Intern?
      </a>

      {/* Center - External Links */}
      <ul className="flex space-x-6 text-blue-400 text-lg items-center">
        <li>
          <a
            href="https://drive.google.com/file/d/1u2V3jfqPIj8a2WiCPtXK713kzoS1HnHq/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-300 transition"
          >
            <PiFileTextLight size={20} />
            Resume
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/chris-rodriguez0/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-300 transition"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/chrisrodriguez-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-300 transition"
          >
            <FaGithub size={20} />
            GitHub
          </a>
        </li>
        <li>
          <a
            href="mailto:cmr82@njit.edu"
            className="flex items-center gap-1 hover:text-blue-300 transition"
          >
            <HiOutlineMail size={20} />
            Email
          </a>
        </li>
      </ul>

      {/* Right side - Nav Anchors */}
      <ul className="hidden md:flex space-x-6 text-blue-400 text-lg items-center">
        <li><a href="#home" className="hover:text-blue-300 transition">Home</a></li>
        <li><a href="#projects" className="hover:text-blue-300 transition">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-300 transition">Skills</a></li>
        <li><a href="#experience" className="hover:text-blue-300 transition">Experience</a></li>
        <li><a href="#contact" className="hover:text-blue-300 transition">Contact</a></li>
      </ul>
    </header>
  );
}

export default Header;
