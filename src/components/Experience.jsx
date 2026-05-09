import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import CrossLine from './ui/CrossLine';
import { EXPERIENCES } from '../data/experiences';


export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <>
      <div id="experience" className="scroll-mt-20">
        <div className="w-full h-fit border-b border-zinc-200 dark:border-zinc-800">
          <SectionWrapper>
            <div className="px-4 py-2">
              <h2 className="text-zinc-900 dark:text-zinc-50 font-medium text-3xl">Work Experience</h2>
            </div>
          </SectionWrapper>
        </div>
      </div>

      <div className="w-full border-b border-zinc-200 dark:border-zinc-800">
        <SectionWrapper>
          <div className="flex flex-col">
            {EXPERIENCES.map((exp, index) => {
              const isOpen = expandedIndex === index;
              return (
                <div 
                  key={index}
                  className={`border-b border-zinc-200 dark:border-zinc-800 last:border-b-0 overflow-hidden bg-zinc-50/20 dark:bg-zinc-900/10 transition-colors duration-300 ${isOpen ? 'bg-zinc-100/50 dark:bg-zinc-900/30' : ''}`}
                >
                  {/* Header Information */}
                  <button 
                    onClick={() => setExpandedIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between p-4 md:p-6 text-left group hover:bg-zinc-100/50 dark:hover:bg-zinc-900/40 transition-all duration-300"
                  >
                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                          {exp.company}
                        </h3>
                        {exp.isRecent && (
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-full">
                            Recent
                          </span>
                        )}
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 font-semibold">{exp.role}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 md:gap-8 shrink-0">
                      <div className="flex flex-col items-end hidden sm:flex">
                        <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 font-bold">{exp.date}</p>
                        <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">{exp.location}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"
                      >
                        <ChevronDown className="size-5 md:size-6" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Detailed Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-4 pb-6 md:px-6 md:pb-8 flex flex-col gap-6">
                          {/* Mobile Date Info */}
                          <div className="flex flex-col sm:hidden pb-2 border-b border-zinc-100 dark:border-zinc-800/50">
                            <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 font-bold">{exp.date}</p>
                            <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">{exp.location}</p>
                          </div>

                          {/* Tech Stack */}
                          <div className="flex flex-col gap-3">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Technologies & Tools</h4>
                            <div className="flex flex-wrap gap-2.5">
                              {exp.tech.map((t, i) => (
                                <motion.div 
                                  key={i}
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ delay: 0.1 + i * 0.05 }}
                                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm" 
                                  title={t.name}
                                >
                                  <t.icon className="size-4" style={{ color: t.color }} />
                                  <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400">{t.name}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Description */}
                          <div className="flex flex-col gap-4">
                            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                              {exp.description}
                            </p>
                            <ul className="flex flex-col gap-3">
                              {exp.points.map((point, i) => (
                                <motion.li 
                                  key={i} 
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.3 + i * 0.1 }}
                                  className="flex gap-3 text-sm text-zinc-500 dark:text-zinc-400"
                                >
                                  <span className="shrink-0 mt-2 size-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                  <span className="leading-relaxed">{point}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </SectionWrapper>
      </div>
      <CrossLine />
    </>
  );
}
