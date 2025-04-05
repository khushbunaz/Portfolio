import React from "react";

interface TimelineItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  company,
  location,
  period,
  responsibilities,
  isLast = false
}: TimelineItemProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
      <div className="md:w-1/4">
        <h3 className="font-serif text-xl font-light tracking-tight mb-1">{company}</h3>
        <p className="text-gray-500 text-sm">{period}</p>
      </div>
      
      <div className="md:w-3/4">
        <div className={`relative ${!isLast ? "pb-16" : ""}`}>
          <h4 className="font-medium mb-2">{title}</h4>
          <p className="text-gray-500 text-sm mb-4">{location}</p>
          
          <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
          
          {!isLast && (
            <div className="absolute left-0 top-0 h-full border-l border-gray-200 ml-[3px]"></div>
          )}
        </div>
      </div>
    </div>
  );
}