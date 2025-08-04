// src/pages/Projects.jsx
import React from 'react';

const projects = [
  {
    title: '6G-AI-AGENT',
    description:
      'An AI-powered reinforcement learning agent that dynamically manages Wi-Fi access points and optimizes 6G connectivity using real-time signal and latency data.',
    tags: ['Python', 'RL', 'Networking', 'AI'],
    image: '/6G-AI-AGENT.jpg',
    codeLink: 'https://github.com/Richard-Xu-86/6G-AI-AGENT',
  },
  {
    title: 'EBAY-DEALFINDER-AI',
    description:
      'A Python-based eBay scraping tool with AI filtering to track and recommend best product deals across keywords in real-time.',
    tags: ['Python', 'Web Scraping', 'eBAY API', 'Automation'],
    image: '/EBAY.png',
    codeLink: 'https://github.com/Richard-Xu-86/EBAY-DEALFINDER-AI',
  },
  {
    title: 'FinanceTracker',
    description:
      'A full-stack budgeting web app to manage income and expenses. Features CSV, EXCEL, PDF exports, summary graphs, history of expenses and incomes. Built with Django, Bootstrap, and PostgreSQL.',
    tags: ['Django', 'Python','HTML', 'Bootstrap', 'PostgreSQL'],
    image: '/FINANCETRACKER.png',
    codeLink: 'https://github.com/Richard-Xu-86/FinanceTracker',
  },
];

export default function Projects({ onNext, onPrev }) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] px-6 md:px-16 py-20 text-gray-900">
      <h2 className="text-4xl font-bold mb-2">
        Projects<span className="text-blue-500">.</span>
      </h2>
      <p className="text-lg text-gray-600 mb-10 max-w-xl">
        Explore my mini-projects showcasing my skills in web development and design. Each project reflects my passion for coding and creativity.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-5"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <div className="flex justify-center gap-6 mt-12">
        <button
          onClick={onPrev}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-full shadow transition duration-200"
        >
          ← Back to Experience
        </button>
        <button
          onClick={onNext}
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-2 rounded-full shadow transition duration-200"
        >
          Next: Contact →
        </button>
      </div>
    </div>
  );
}
