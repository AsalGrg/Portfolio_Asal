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

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function Home() {
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
