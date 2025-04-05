import { useState, useCallback } from "react";

interface UseScrollSpyResult {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function useScrollSpy(sections: string[]): UseScrollSpyResult {
  const [activeSection, setActiveSection] = useState(sections[0] || "");

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for header
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  }, []);

  return {
    activeSection,
    setActiveSection,
  };
}
