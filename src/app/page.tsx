"use client";

import { FaBullseye } from "react-icons/fa6";
import Hero from "./components/Hero";
import Projects from "./projects/page";
import { useRef, useState , useEffect} from "react";
import About from "./components/about";
import Contact from "./contact/page";
import Experience from "./components/Experience";

export default function Home() {
  const vantaRef = useRef(null);
  useEffect(() => {
    if (window.VANTA) {
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xe65858,
        backgroundColor: 0x1e1d22,
        points: 10.00
      });
      return () => {
        if (effect) effect.destroy();
      };
    }
  }, []);
  return (
    <main ref={vantaRef} >
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
