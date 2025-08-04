import React from "react";

const experiences = [
  {
    role: "AI/ML Research Intern",
    position: "Intern",
    duration: "May 2025 - Aug 2025",
    description:
      <ul className="list-disc pl-5 space-y-1">
        <li>Developed an AI agent to optimize connectivity across multiple Wi-Fi access points using reinforcement learning.</li>
        <li>Designed a multi-agent architecture to enable dynamic AP switching based on signal strength, latency, jitter, and packet loss.</li>
        <li>Built a real-time web dashboard to monitor network performance and visualize agent decisions.</li>
        <li>Integrated backend logic with Flask and React to facilitate interaction between agents and the interface.</li>
        <li>Focused on improving handoff efficiency, reducing interference, and boosting overall throughput in dense network environments.</li>
      </ul>
  },
];

export default function Experience({ onPrev, onNext }) {
  return (
    <div className="min-h-screen bg-gray-100 px-6 md:px-20 py-20 text-gray-900">
      <h2 className="text-4xl font-bold mb-12">
        Experience<span className="text-blue-500">.</span>
      </h2>

      <div className="flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-blue-400"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-600">
                {exp.role}
              </h3>
              <span className="text-sm text-gray-500 whitespace-nowrap">
                {exp.duration}
              </span>
            </div>
            <p className="text-gray-700 font-medium mb-1">{exp.position}</p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6 mt-14">
        <button
          onClick={onPrev}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-full shadow"
        >
          ← Back to About
        </button>
        <button
          onClick={onNext}
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-2 rounded-full shadow"
        >
          Next: Projects →
        </button>
      </div>
    </div>
  );
}
