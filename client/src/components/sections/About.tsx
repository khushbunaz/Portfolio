import { motion } from "framer-motion";
import { aboutSections } from "@/data";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600">My journey in artificial intelligence and machine learning</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-2xl mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-6">
              I'm Khushbunaz Dalal, an AI/ML Engineer with a strong foundation in machine learning, deep learning, and AI-driven solutions. With experience in data preprocessing, model training, and AI deployment, I'm passionate about building intelligent systems that solve real-world problems.
            </p>
            <p className="text-gray-700 mb-6">
              Currently pursuing my Bachelor of Engineering in Computer Science at LJ University, I've also gained professional experience through internships at BrainyBeam Technologies and Oceanmtech, where I developed and optimized machine learning models and AI-powered applications.
            </p>
            <p className="text-gray-700">
              As a freelance Python Developer, I've automated 3D modeling using Blender Python API and developed AI-based Telegram bots, demonstrating my ability to apply AI/ML concepts to practical applications.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {aboutSections.map((section, index) => (
              <motion.div 
                key={section.id}
                className="bg-gray-50 rounded-xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                <h3 className="font-semibold text-xl mb-4 flex items-center">
                  <section.icon className="text-blue-600 mr-3 h-5 w-5" />
                  {section.title}
                </h3>
                <div className="ml-8">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={itemIndex > 0 ? "mt-3" : ""}>
                      <p className="font-medium">{item.title}</p>
                      {item.organization && (
                        <p className="text-gray-600">{item.organization}</p>
                      )}
                      {item.period && (
                        <p className="text-gray-500 text-sm">{item.period}</p>
                      )}
                      {item.description && (
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
