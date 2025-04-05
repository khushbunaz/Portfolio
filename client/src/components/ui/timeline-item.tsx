import { motion } from "framer-motion";

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
    <div className="relative pl-10">
      <div className="relative">
        <motion.div 
          className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow-sm absolute left-0 top-0 z-10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        {!isLast && (
          <motion.div 
            className="absolute w-0.5 bg-blue-200 left-4 top-8 bottom-0 -translate-x-1/2"
            initial={{ height: 0 }}
            whileInView={{ height: "calc(100% + 1.5rem)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        )}
      </div>
      <motion.div 
        className="bg-white rounded-xl p-6 shadow-sm"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <h3 className="font-semibold text-xl">{title}</h3>
          <span className="text-blue-600 font-medium">{period}</span>
        </div>
        <h4 className="text-gray-700 font-medium mb-4">{company}, {location}</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
