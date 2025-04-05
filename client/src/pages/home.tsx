import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Publications from "@/components/sections/Publications";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useEffect } from "react";

export default function Home() {
  const { activeSection, setActiveSection } = useScrollSpy([
    "home",
    "about",
    "projects",
    "skills",
    "experience",
    "publications",
    "contact"
  ]);

  // Update active section in the header
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "skills",
        "experience",
        "publications",
        "contact"
      ];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        // If the section is in view (with some offset for better UX)
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveSection]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Publications />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
