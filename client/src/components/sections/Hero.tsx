import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const handleScrollDown = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="minimalist-container flex flex-col h-full justify-center z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative flex justify-center items-center">
            <div className="flower-decoration absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 opacity-95">
              <img 
                src="/assets/holographic-flower.svg" 
                alt="" 
                className="w-full h-full object-contain hover-effect" 
                style={{
                  filter: "drop-shadow(0 0 10px rgba(240, 218, 214, 0.3))",
                  animation: "pulse 20s infinite ease-in-out, shimmer 25s infinite ease-in-out"
                }}
              />
            </div>
            <h1 className="hero-title relative z-10 mb-6 font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-wider text-primary-dark" style={{
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)"
            }}>
              khushbunaz
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 md:gap-x-8">
            <p className="text-xl md:text-2xl font-light font-serif tracking-tight max-w-xl">
              AI/ML Engineer crafting intelligent systems across digital & physical worlds.
            </p>
            

          </div>
        </motion.div>

        <motion.div 
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button 
            onClick={handleScrollDown}
            className="flex flex-col items-center text-foreground hover:text-primary transition-colors group"
            aria-label="Scroll to projects"
          >
            <span className="text-xs uppercase tracking-widest mb-2 font-sans">Scroll to explore</span>
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </button>
        </motion.div>
      </div>
      
      {/* Abstract decoration elements */}
      <motion.div 
        className="absolute right-4 md:right-16 top-1/4 w-24 h-24 md:w-40 md:h-40"
        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
        animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="currentColor"
            d="M44.2,-75.2C58.4,-68.2,71.9,-58.5,79.2,-45.3C86.5,-32.1,87.7,-16,85.5,-1.3C83.4,13.5,77.9,26.9,69.7,38.1C61.5,49.2,50.7,58,38.2,65.5C25.7,73.1,11.4,79.5,-3.2,84C-17.9,88.4,-35.8,90.9,-48.4,83.6C-61,76.3,-68.4,59.2,-74.3,42.7C-80.2,26.2,-84.6,10.3,-84.5,-5.5C-84.4,-21.3,-79.7,-37,-69.9,-48.1C-60.2,-59.2,-45.3,-65.8,-31.2,-72.7C-17.1,-79.7,-3.8,-87.1,9.1,-86.7C22.1,-86.3,44.2,-78.1,44.2,-75.2Z" 
            transform="translate(100 100)" 
          />
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute left-8 bottom-1/4 w-16 h-16 md:w-24 md:h-24"
        initial={{ opacity: 0, rotate: 20 }}
        animate={{ opacity: 0.1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="currentColor"
            d="M39.2,-65.2C52.8,-60.3,67.2,-53.5,75.7,-41.8C84.2,-30.1,86.9,-13.4,83.9,1.7C80.9,16.8,72.2,30.3,61.9,41.3C51.6,52.3,39.6,60.8,26.5,65.1C13.3,69.4,-1,69.6,-15.3,67.1C-29.5,64.7,-43.7,59.6,-54.7,49.9C-65.7,40.3,-73.4,26.2,-78.1,10C-82.8,-6.2,-84.4,-24.5,-77.9,-39.1C-71.3,-53.7,-56.7,-64.5,-41.3,-68.2C-26,-71.9,-9.8,-68.5,2.3,-72.3C14.5,-76.2,25.6,-70.2,39.2,-65.2Z" 
            transform="translate(100 100)" 
          />
        </svg>
      </motion.div>
    </section>
  );
}
