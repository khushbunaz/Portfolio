import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";

interface HeaderProps {
  activeSection: string;
}

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" }
];

export default function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle clicking a nav item
  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  // Handle resume download
  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Download resume using utility function
    import("@/lib/utils").then(({ downloadFile }) => {
      downloadFile("/assets/CS_Resume.pdf", "Khushbunaz_Dalal_Resume.pdf");
    });
  };

  return (
    <header className={cn(
      "fixed w-full top-0 z-50 transition-all duration-500",
      scrolled 
        ? "bg-background/95 backdrop-blur-sm py-4" 
        : "bg-transparent py-6"
    )}>
      <div className="minimalist-container">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="font-serif text-2xl tracking-tight hover:opacity-80 transition-opacity text-foreground"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
            KHUSHBUNAZ DALAL
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-10 mr-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className={cn(
                      "nav-link",
                      activeSection === item.id 
                        ? "text-foreground font-medium" 
                        : "text-muted-foreground"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.id === "resume") {
                        handleResumeClick(e);
                      } else {
                        handleNavClick(item.id);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors duration-200"
              aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
          
          <div className="md:hidden flex items-center">
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              className="mr-4 p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors duration-200"
              aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className={cn(
                      "block text-sm uppercase tracking-widest",
                      activeSection === item.id 
                        ? "text-foreground font-medium" 
                        : "text-muted-foreground"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.id === "resume") {
                        handleResumeClick(e);
                      } else {
                        handleNavClick(item.id);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
}
