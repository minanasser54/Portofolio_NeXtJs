"use client";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { useRef, useState , useEffect} from "react";


export default function Home() {
  const vantaRef = useRef(null);
  useEffect(() => {
    if (window.VANTA) {
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xe65858,
        backgroundColor: 0x1e1d22,
        points: 15.00
      });
      return () => {
        if (effect) effect.destroy();
      };
    }
  }, []);
  return (
    <main ref={vantaRef} >
      <Hero />
      <Projects />
    </main>
  );
}
