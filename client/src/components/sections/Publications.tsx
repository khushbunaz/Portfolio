import { motion } from "framer-motion";
import { publications } from "@/data";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Publications() {
  return (
    <section 
      id="publications"
      className="section-padding bg-gray-50"
    >
      <div className="minimalist-container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="section-title">Publications</h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Selected research papers and articles I've published in academic journals and conferences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="publication-card bg-white p-8 border border-gray-100 hover:shadow-sm transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                <h3 className="text-xl font-serif font-light tracking-tight flex-grow mr-4">
                  {publication.title}
                </h3>
                <a 
                  href={publication.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black mt-2 md:mt-0 hover:text-gray-600 transition-colors flex items-center gap-1 text-sm"
                  aria-label={`View publication: ${publication.title}`}
                >
                  <span>View</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm text-gray-500 mb-4">
                <div className="font-medium">{publication.journal}</div>
                <div className={cn("hidden md:block", "text-gray-300")}>•</div>
                <div>{publication.date}</div>
              </div>
              
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {publication.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {publication.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs tracking-wider uppercase font-sans text-gray-500"
                  >
                    {tag}{tagIndex < publication.tags.length - 1 && " •"}
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