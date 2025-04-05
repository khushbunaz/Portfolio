import { motion } from "framer-motion";
import { publications } from "@/data";
import { ExternalLink } from "lucide-react";

export default function Publications() {
  return (
    <section id="publications" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4">Publications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600">My research contributions to the field</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {publications.map((publication) => (
            <motion.div 
              key={publication.id}
              className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <h3 className="font-semibold text-xl md:text-2xl">{publication.title}</h3>
                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                  {publication.date}
                </span>
              </div>
              
              <p className="text-gray-700 font-medium mb-2">{publication.journal}</p>
              
              <div className="mb-6">
                <a 
                  href={publication.link} 
                  className="text-blue-600 hover:text-blue-800 transition-colors font-medium inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Publication Link: IJIRCT Paper</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-4 mb-6">
                <p className="text-gray-600">
                  {publication.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {publication.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
