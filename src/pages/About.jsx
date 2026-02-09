import React from "react";
import { FaFileAlt } from "react-icons/fa";

export default function About({ onPrev, onNext }) {
  return (
    <div className="min-h-screen bg-gray-100 px-6 md:px-20 py-20 text-gray-900">
      <h2 className="text-4xl font-bold mb-12">
        About Me<span className="text-blue-500">.</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <img
          src="/AI-ME.png"
          alt="Richard Xu avatar"
          className="w-48 h-48 rounded-2xl shadow-md object-cover"
        />

        <div>
          <p className="text-lg leading-relaxed max-w-2xl">
            Hi there! I'm <span className="font-semibold">Richard Xu</span>, a full-stack developer and current second-year software engineering student at Western University. I'm passionate about building responsive and beautiful digital experiences, combining elegant front-end design with intelligent backend logic.
          </p>
          <p className="text-lg mt-4 leading-relaxed max-w-2xl">
            I enjoy developing full-stack web applications and recently have been focused on AI systems, automation, and network optimization—like my current project building an AI agent to optimize access point switching in multi-AP environments.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="/Richard_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-full shadow"
          >
            View Resume (PDF)
          </a>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold mb-8">
          Education<span className="text-blue-500">.</span>
        </h3>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-blue-400">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-xl md:text-2xl font-semibold text-blue-600">
              Western University
            </h4>
            <span className="text-sm text-gray-500 whitespace-nowrap">
              2024 – 2028
            </span>
          </div>
          <p className="text-gray-700 font-medium mb-1">
            Bachelor of Engineering Science – Software Engineering 
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Pursuing a software engineering degree with a strong focus on backend systems, machine learning, and real-world applications of AI in networking and web technologies.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-14">
        <button
          onClick={onPrev}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-full shadow"
        >
          ← Back to Home
        </button>
        <button
          onClick={onNext}
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-2 rounded-full shadow"
        >
          Next: Experience →
        </button>
      </div>
    </div>
  );
}