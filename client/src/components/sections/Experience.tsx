import { motion } from "framer-motion";
import TimelineItem from "@/components/ui/timeline-item";
import { experiences } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600">My journey in the industry</p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                title={experience.title}
                company={experience.company}
                location={experience.location}
                period={experience.period}
                responsibilities={experience.responsibilities}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
