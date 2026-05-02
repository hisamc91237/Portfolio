import React from 'react';
import { 
  SiTypescript, SiJavascript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiTailwindcss, SiRedux, SiMysql, 
  SiPostgresql, SiMongodb, SiRedis, SiShadcnui, SiPostman
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import SectionWrapper from './ui/SectionWrapper';
import CrossLine from './ui/CrossLine';
import { useTheme } from '../context/ThemeContext';

const STACK = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", darkColor: "#FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000", darkColor: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Shadcn UI", icon: SiShadcnui, color: "#000000", darkColor: "#FFFFFF" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

export default function Skills() {
  const { theme } = useTheme();

  return (
    <>
      <div id="stack" className="scroll-mt-20">
        <div className="w-full h-fit border-b border-zinc-200 dark:border-zinc-800">
          <SectionWrapper>
            <div className="px-4 py-2">
              <h2 className="text-zinc-900 dark:text-zinc-50 font-medium text-3xl">Stack</h2>
            </div>
          </SectionWrapper>
        </div>
      </div>
      
      <div className="w-full border-b border-zinc-200 dark:border-zinc-800">
        <SectionWrapper>
          <div className="p-4 md:p-8">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 md:gap-8 place-items-center">
              {STACK.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="size-11 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110 overflow-hidden">
                    {item.name === "JavaScript" ? (
                      <div className="size-10 bg-[#F7DF1E] rounded-md flex items-end justify-end p-0.5 relative">
                        <span className="text-black font-bold text-[15px] leading-none select-none">JS</span>
                      </div>
                    ) : (
                      <item.icon 
                        className="size-8 transition-colors" 
                        style={{ color: theme === 'dark' ? (item.darkColor || item.color) : item.color }} 
                      />
                    )}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50">
                    <div className="bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-[10px] px-2 py-1 rounded-md whitespace-nowrap shadow-xl font-mono">
                      {item.name}
                    </div>
                    <div className="w-2 h-2 bg-zinc-900 dark:bg-zinc-100 rotate-45 absolute left-1/2 -translate-x-1/2 top-full -mt-1 shadow-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
      <CrossLine />
    </>
  );
}
