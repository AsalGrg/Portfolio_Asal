'use client'

import Hero from "@/sections/Hero";
import AboutMe from "@/sections/AboutMe";
import TechStack from "@/sections/TechStack";
import Projects from "@/sections/Projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import ContactMe from "@/sections/ContactMe";
import Footer from "@/sections/Footer";
import {useEffect} from "react";
import Lenis from "lenis";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function Home() {

    useEffect(() => {
        // Initialize a new Lenis instance for smooth scrolling
        const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
        lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000); // Convert time from seconds to milliseconds
        });

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
        gsap.ticker.lagSmoothing(0);
    }, [])
  return (
    <main>
      <div className={'relative'}>
          <Hero />
          <AboutMe />
      </div>
      <TechStack />
      <Projects />
      <ContactMe/>
        <Footer/>
    </main>
  );
}
