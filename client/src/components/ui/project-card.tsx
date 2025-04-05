import React from "react";
import { Card } from "@/components/ui/card";
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
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
        <div className="h-48 bg-gradient-to-r from-blue-100 to-indigo-100 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="h-16 w-16 text-blue-300" />
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-xl">{title}</h3>
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
              aria-label={`View ${title} on GitHub`}
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:bg-blue-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
