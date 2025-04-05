import React from "react";
import { Github } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
  githubLink: string;
  category: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  icon: Icon,
  technologies,
  githubLink,
  category
}) => {
  return (
    <div className="group">
      <div className="bg-white rounded-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-500 h-full flex flex-col">
        <div className="aspect-w-16 aspect-h-9 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-70 transition-opacity duration-500">
            <Icon className="h-16 w-16" />
          </div>
        </div>
        
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-serif text-xl font-light tracking-tight">{title}</h3>
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label={`View ${title} on GitHub`}
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-gray-600 mb-6 font-sans text-sm leading-relaxed flex-grow">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs tracking-wider uppercase font-sans text-gray-500"
              >
                {tech}{index < technologies.length - 1 && "  •"}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
