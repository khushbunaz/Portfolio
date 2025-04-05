import { ExternalLink, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  
  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="border-t border-gray-100 py-12 bg-white">
      <div className="minimalist-container">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <h2 className="font-serif text-2xl mb-4">Khushbunaz Dalal</h2>
            <p className="text-gray-600 max-w-xs">
              AI/ML Engineer crafting intelligent systems across digital & physical worlds.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            {["projects", "experience", "about", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-500 hover:text-black transition-colors text-sm uppercase tracking-wider"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
              >
                {item}
              </a>
            ))}
            <a 
              href="#" 
              className="text-gray-500 hover:text-black transition-colors text-sm uppercase tracking-wider"
              onClick={(e) => {
                e.preventDefault();
                import("@/lib/utils").then(({ downloadFile }) => {
                  downloadFile("/assets/CS_Resume.pdf", "Khushbunaz_Dalal_Resume.pdf");
                });
              }}
            >
              Resume
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {year} Khushbunaz Dalal
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/khushbunazdalal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/khushbunaz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="Portfolio"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
