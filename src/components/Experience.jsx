import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { 
  SiReact, SiRedux, SiTailwindcss, SiNodedotjs, 
  SiMongodb, SiJavascript, SiTestinglibrary 
} from 'react-icons/si';
import SectionWrapper from './ui/SectionWrapper';
import CrossLine from './ui/CrossLine';

const EXPERIENCES = [
  {
    company: "eClerx",
    role: "Front end Developer",
    date: "March 2023 - Present",
    location: "Hybrid",
    isRecent: true,
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Testing", icon: SiTestinglibrary, color: "#E33332" }
    ],
    description: "Spearheaded the frontend optimization of a high-traffic e-commerce platform. Focused on enhancing performance and translating complex product goals into release-ready features with a strong emphasis on maintainability.",
    points: [
      "Optimized React components for enhanced rendering speed, significantly improving overall website performance.",
      "Translated product vision into scalable, release-ready features with deep attention to usability and clean code standards.",
      "Implemented automated React testing suites, reducing manual testing effort by 60% and increasing code quality to 99%.",
      "Streamlined state management workflows using Redux to handle complex e-commerce data structures."
    ]
  },
  {
    company: "DevTown",
    role: "Full Stack Developer Intern",
    date: "January 2023 - April 2023",
    location: "Remote",
    isRecent: false,
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
    ],
    description: "Contributed primarily to the frontend and UI architecture of a full-stack food delivery application. Focused on engineering scalable pages and supporting backend integration.",
    points: [
      "Engineered multiple core application pages from scratch, ensuring full responsiveness and long-term scalability.",
      "Crafted intuitive and high-performance UI components tailored for a seamless food ordering experience.",
      "Collaborated on backend roles in Node.js and MongoDB to ensure efficient data flow between client and server.",
      "Refined frontend architecture for better asset management and faster initial page loads."
    ]
  }
];

export default function Experience() {
  return (
    <>
      <div className="w-full border-b border-zinc-200 dark:border-zinc-800">
        <SectionWrapper>
          <div className="flex flex-col">
            {EXPERIENCES.map((exp, index) => (
              <div 
                key={index}
                className={`border-b border-zinc-200 dark:border-zinc-800 last:border-b-0 overflow-hidden bg-zinc-50/20 dark:bg-zinc-900/10`}
              >
                {/* Header Information */}
                <div className="w-full flex items-center justify-between p-4 md:p-6 text-left">
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-50">
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
                  
                  <div className="flex flex-col items-end shrink-0">
                    <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 font-bold">{exp.date}</p>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">{exp.location}</p>
                  </div>
                </div>

                {/* Detailed Content */}
                <div className="px-4 pb-6 md:px-6 md:pb-8 flex flex-col gap-6">
                  {/* Tech Stack */}
                  <div className="flex flex-col gap-3">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {exp.tech.map((t, i) => (
                        <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm" title={t.name}>
                          <t.icon className="size-4" style={{ color: t.color }} />
                          <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400">{t.name}</span>
                        </div>
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
                        <li key={i} className="flex gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                          <span className="shrink-0 mt-2 size-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
      <CrossLine />
    </>
  );
}
