import React, { useEffect } from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJava, FaPython, FaGitAlt,
  FaDocker, FaLinux
} from "react-icons/fa";
import {
  SiJavascript, SiSpringboot, SiTailwindcss, SiFlask, SiMongodb,
  SiMysql, SiFastapi
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiScrum } from "react-icons/di";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="skills"
      className="py-16 px-6 bg-black text-white"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Frontend */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-cyan-500/30 transition duration-300">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2 hover:text-cyan-400"><FaReact /> React</li>
            <li className="flex items-center gap-2 hover:text-cyan-400"><FaHtml5 /> HTML5</li>
            <li className="flex items-center gap-2 hover:text-cyan-400"><FaCss3Alt /> CSS3</li>
            <li className="flex items-center gap-2 hover:text-cyan-400"><SiTailwindcss /> Tailwind CSS</li>
            <li className="flex items-center gap-2 hover:text-cyan-400"><SiJavascript /> JavaScript</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-cyan-500/30 transition duration-300">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Backend</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2 hover:text-cyan-400"><FaJava /> Java (Spring Boot)</li>
            <li className="flex items-center gap-2 hover:text-cyan-400"><FaPython /> Python (Flask)</li>
            <li className="flex items-center gap-2 hover:text-cyan-400"><SiFastapi /> FastAPI</li>
            <li className="flex items-center gap-2 hover:text-cyan-400"><SiSpringboot /> Spring Boot</li>
          </ul>
        </div>

        {/* Dev Tools */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-cyan-500/30 transition duration-300">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Dev Tools</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2 hover:text-cyan-400"><FaGitAlt /> Git & GitHub</li>
            <li className="flex items-center gap-2 hover:text-cyan-400"><FaDocker /> Docker</li>
            <li className="flex items-center gap-2 hover:text-cyan-400"><FaLinux /> Linux</li>
            <li className="flex items-center gap-2 hover:text-cyan-400"><VscVscode /> VS Code / IntelliJ</li>
          </ul>
        </div>

        {/* Other */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-cyan-500/30 transition duration-300">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Languages&OS</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2 hover:text-cyan-400"><SiMongodb /> Python</li>
            <li className="flex items-center gap-2 hover:text-cyan-400"><SiMysql /> Java</li>
            <li className="flex items-center gap-2 hover:text-cyan-400"><DiScrum />C++</li>
            <li className="flex items-center gap-2 hover:text-cyan-400">JavaScript</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
