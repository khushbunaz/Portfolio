import TimelineItem from "@/components/ui/timeline-item";
import { experiences } from "@/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="minimalist-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-title mb-12">Experience</h2>
        </motion.div>
        
        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TimelineItem
                title={experience.title}
                company={experience.company}
                location={experience.location}
                period={experience.period}
                responsibilities={experience.responsibilities}
                isLast={index === experiences.length - 1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}