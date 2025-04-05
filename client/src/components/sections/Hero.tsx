import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { toast } from "@/hooks/use-toast";

export default function Hero() {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch("/api/resume");
      
      if (!response.ok) {
        throw new Error("Failed to download resume");
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Khushbunaz_Dalal_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      toast({
        title: "Success",
        description: "Resume download started!",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI/ML Engineer
              </span> 
              <br />
              solving complex problems through intelligent systems
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Results-driven AI/ML Engineer passionate about building intelligent systems that drive business impact.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    window.scrollTo({
                      top: projectsSection.offsetTop - 80,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={handleDownloadResume}
              >
                Download Resume <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 to-indigo-200 animate-pulse"></div>
              <svg 
                className="absolute inset-2 rounded-full bg-white"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fill="#3B82F6" 
                  d="M44.2,-75.2C58.4,-68.2,71.9,-58.5,79.2,-45.3C86.5,-32.1,87.7,-16,85.5,-1.3C83.4,13.5,77.9,26.9,69.7,38.1C61.5,49.2,50.7,58,38.2,65.5C25.7,73.1,11.4,79.5,-3.2,84C-17.9,88.4,-35.8,90.9,-48.4,83.6C-61,76.3,-68.4,59.2,-74.3,42.7C-80.2,26.2,-84.6,10.3,-84.5,-5.5C-84.4,-21.3,-79.7,-37,-69.9,-48.1C-60.2,-59.2,-45.3,-65.8,-31.2,-72.7C-17.1,-79.7,-3.8,-87.1,9.1,-86.7C22.1,-86.3,44.2,-78.1,44.2,-75.2Z" 
                  transform="translate(100 100)" 
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg 
                  className="w-32 h-32 text-white" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  />
                  <path 
                    d="M9 9H9.01M15 9H15.01M10 16C11.5 17.5 13.5 17.5 15 16" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M7 3.5C5.5 4.5 5.5 6.5 7 8" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M17 3.5C18.5 4.5 18.5 6.5 17 8" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M7 16C8.5 17.5 9.5 20 8 22" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M17 16C15.5 17.5 14.5 20 16 22" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
