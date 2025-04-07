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
          <div className="relative flex justify-center items-center mb-8">
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
            
            <div 
              className="logo-container relative z-10 flex justify-center items-center group"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)"
              }}
              onMouseMove={(e) => {
                const el = e.currentTarget;
                const rect = el.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                
                el.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg) scale3d(1.02, 1.02, 1.02)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
              }}
            >
              <h1 className="hero-title font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none">
                khushbunaz
              </h1>
              
              {/* Soft gold edge shine */}
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-700">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-yellow-100/20 to-transparent blur-sm"></div>
              </div>
              
              {/* Light reflection effect */}
              <div className="light-reflection absolute top-0 left-0 w-full h-full overflow-hidden opacity-50 pointer-events-none">
                <div className="highlight absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-white opacity-25"
                  style={{
                    transform: "rotate(45deg) translateY(-15%)",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                    animation: "shine 4s ease-in-out infinite"
                  }}>
                </div>
              </div>
            </div>
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
      
      {/* Abstract decoration elements removed */}
    </section>
  );
}
