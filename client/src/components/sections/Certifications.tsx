import { motion } from "framer-motion";
import { certifications } from "@/data";
import { Award, BarChart, Bot, Code, Database } from "lucide-react";

const certIcons = [Award, BarChart, Bot, Database, Code];

export default function Certifications() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600">Professional credentials and qualifications</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const CertIcon = certIcons[index % certIcons.length];
            
            return (
              <motion.div 
                key={cert.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <CertIcon className="text-blue-600 h-10 w-10" />
                </div>
                <h3 className="font-semibold text-lg text-center mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-center text-sm">{cert.issuer}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
