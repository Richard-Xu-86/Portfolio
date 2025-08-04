// src/App.jsx
import React, { useState } from "react";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState(0);

  const pages = [
    <Intro onNext={() => setPage(1)} />,
    <About onNext={() => setPage(2)} onPrev={() => setPage(0)} />,
    <Experience onNext={() => setPage(3)} onPrev={() => setPage(1)} />,
    <Projects onNext={() => setPage(4)} onPrev={() => setPage(2)} />,
    <Contact onPrev={() => setPage(3)} />

  ];

  return <div className="min-h-screen bg-gray-100 text-gray-900">{pages[page]}</div>;
}
