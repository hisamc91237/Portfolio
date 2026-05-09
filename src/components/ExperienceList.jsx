import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { EXPERIENCES } from '../data/experiences';

export default function ExperienceList() {
  return (
    <div className="w-full">
      <SectionWrapper>
        <div className="flex flex-col gap-10 py-8 px-4">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col gap-6 ${index !== 0 ? 'pt-10 border-t border-zinc-200 dark:border-zinc-800' : ''}`}
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{exp.company}</h3>
                    {exp.isRecent && (
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-md">
                        Recent
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 font-medium">{exp.role}</p>
                </div>
                <div className="flex flex-col md:items-end font-mono text-sm tracking-tighter">
                  <p className="text-zinc-500 dark:text-zinc-400 font-bold">{exp.date}</p>
                  <p className="text-zinc-400 dark:text-zinc-500">{exp.location}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm transition-colors hover:border-zinc-300 dark:hover:border-zinc-700" title={t.name}>
                      <t.icon className="size-4" style={{ color: t.color }} />
                      <span className="text-[12px] font-medium text-zinc-600 dark:text-zinc-400">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description & Points */}
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">What I've done</h4>
                <div className="flex flex-col gap-4">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-normal text-[15px]">
                    {exp.description}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-zinc-600 dark:text-zinc-400 text-[15px] leading-normal">
                        <span className="text-zinc-300 dark:text-zinc-700 mt-0.5">-</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
