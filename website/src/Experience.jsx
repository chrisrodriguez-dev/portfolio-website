import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="experience"
      className="py-16 px-6 bg-black text-white"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">
        Experience
      </h2>

      <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-cyan-500/30 transition duration-300 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-blue-400 mb-2">
          Undergraduate Research Fellow
        </h3>
        <p className="text-gray-300 mb-1 italic">
          BioDynamics Lab, New Jersey Institute of Technology · May 2025 – Present
        </p>
        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>
            Conducting research on AI-driven human motion modeling to support exoskeleton control and biomechanics.
          </li>
          <li>
            Simulating realistic skeletal motion using PyBullet and Isaac Sim, modeling inverse kinematics and joint constraints.
          </li>
          <li>
            Integrating PyTorch/TensorFlow to build real-time motion prediction models with biomechanical awareness.
          </li>
          <li>
            Extracting and preprocessing 2D/3D keypoints from videos using YOLO + Metrabs, and analyzing pose data with NumPy and OpenCV.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
