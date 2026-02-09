// src/pages/Intro.jsx
import React from "react";

export default function Intro({ onNext }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-2">Hi, I'm Richard Xu</h1>
      <p className="text-lg mb-6">Welcome to my world!</p>
      <button
        onClick={onNext}
        className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition"
      >
        LET’S TALK
      </button>
    </div>
  );
}
