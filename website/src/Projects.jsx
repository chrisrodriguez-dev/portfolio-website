import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: "RugRadar",
      description:
        "A crypto risk analysis tool that detects rug pulls and memecoin scams using on-chain metrics and social media sentiment.",
      tech: ["Spring Boot", "Python", "Docker", "React", "MariaDB"],
      github: "https://github.com/yourusername/rugradar",
      demo: "#", // optional
    },
    {
      title: "Sales Forecasting App",
      description:
        "Neural network application for predicting weekly AT&T product sales using TensorFlow and Streamlit.",
      tech: ["TensorFlow", "Python", "Streamlit", "Pandas"],
      github: "https://github.com/yourusername/sales-forecasting",
    },
    {
      title: "Ada-Like Language Compiler",
      description:
        "Built a custom compiler for an Ada-inspired language, including lexical analysis and recursive-descent parsing.",
      tech: ["C++"],
      github: "https://github.com/yourusername/ada-compiler",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-6 bg-black text-white"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-cyan-500/30 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <ul className="flex flex-wrap gap-2 text-sm text-cyan-300 mb-4">
              {project.tech.map((tech, i) => (
                <li key={i} className="bg-white/10 px-2 py-1 rounded">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
