import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Publications from "@/components/sections/Publications";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const { activeSection, setActiveSection } = useScrollSpy([
    "home",
    "about",
    "experience",
    "projects",
    "publications",
    "contact"
  ]);

  // Update active section in the header
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience", 
        "projects",
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
    <motion.div 
      className="min-h-screen bg-background text-foreground font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
