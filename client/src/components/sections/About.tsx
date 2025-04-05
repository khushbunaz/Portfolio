import { motion } from "framer-motion";
import { aboutSections, AboutSectionItem } from "@/data";
import { Download } from "lucide-react";
import { downloadFile } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="minimalist-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-title mb-12">About</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="font-serif text-2xl font-light tracking-tight mb-6">
              I'm Khushbunaz Dalal, an AI/ML Engineer passionate about building intelligent systems that solve real-world problems.
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              With experience in machine learning, deep learning, and AI-driven solutions, I specialize in data preprocessing, model training, and AI deployment. Currently pursuing my Bachelor of Engineering in Computer Science at LJ University, I've gained professional experience through internships at tech companies where I developed and optimized machine learning models and AI-powered applications.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              As a freelance Python Developer, I've automated 3D modeling using Blender Python API and developed AI-based Telegram bots, demonstrating my ability to apply AI/ML concepts to practical applications.
            </p>
            
            <motion.button
              className="flex items-center gap-2 text-sm uppercase tracking-widest text-black hover:text-gray-600 transition-colors group"
              whileHover={{ x: 3 }}
              onClick={() => downloadFile("/assets/CS_Resume.pdf", "Khushbunaz_Dalal_Resume.pdf")}
            >
              <Download className="h-4 w-4 transition-transform group-hover:scale-110" />
              Download Resume
            </motion.button>
          </motion.div>
          
          <div className="space-y-16">
            {aboutSections.map((section, index) => (
              <motion.div 
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="space-y-6"
              >
                <h3 className="font-serif text-lg font-medium">
                  {section.title}
                </h3>
                <div className="space-y-8">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-1">
                      <p className="font-medium">{item.title}</p>
                      {'organization' in item && (
                        <p className="text-gray-600 text-sm">{item.organization}</p>
                      )}
                      {'period' in item && (
                        <p className="text-gray-500 text-xs">{item.period}</p>
                      )}
                      {'description' in item && (
                        <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
