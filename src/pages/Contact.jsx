// src/pages/Contact.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

export default function Contact({ onPrev }) {
  const handleSubmit = () => {
    alert("✅ Message sent! I’ll get back to you shortly.");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-5xl w-full grid md:grid-cols-2 gap-12">

        {/* Left: Contact Form (functional) */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Say Hello 👋</h2>
          <p className="text-gray-600 mb-6">Feel free to reach out via the form below</p>
          <form
            action="https://formspree.io/f/mrblavga"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="What I can help you with?"
              rows="4"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-full shadow hover:bg-blue-600 transition"
            >
              🚀 Send Message
            </button>
          </form>
        </div>

        {/* Right: Let's Connect */}
        <div className="flex flex-col items-center md:items-start justify-center">
          <h3 className="text-2xl font-bold mb-2">Let's connect</h3>
          <p className="text-gray-600 mb-6 text-center md:text-left">
            You can also find me on
          </p>
          <div className="flex gap-4 mb-6">
            <a
              href="https://github.com/richard-xu-86"
              className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:richardxubusiness@gmail.com"
              className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full shadow"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="/resume.pdf"
              className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileAlt size={24} />
            </a>
          </div>
          <p className="text-gray-600 text-sm">
            Or reach me directly at: <br />
            <a
              href="mailto:richardxubusiness@gmail.com"
              className="text-blue-500 underline"
            >
              richardxubusiness@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Back button */}
      <div className="absolute bottom-8">
        <button
          onClick={onPrev}
          className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition"
        >
          ← Back to Projects
        </button>
      </div>
    </div>
  );
}
