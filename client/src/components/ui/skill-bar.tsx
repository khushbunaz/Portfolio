import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  proficiency: number;
}

export default function SkillBar({ name, proficiency }: SkillBarProps) {
  return (
    <div className="skill-bar">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
