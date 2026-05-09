import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import SectionWrapper from "./ui/SectionWrapper";
import CrossLine from "./ui/CrossLine";
import { useTheme } from "../context/ThemeContext";

const STACK = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    darkColor: "#FFFFFF",
  },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
];

export default function Skills() {
  const { theme } = useTheme();

  return (
    <>
      <div id="stack" className="scroll-mt-20">
        <div className="w-full h-fit border-b border-zinc-200 dark:border-zinc-800">
          <SectionWrapper>
            <div className="px-4 py-2">
              <h2 className="text-zinc-900 dark:text-zinc-50 font-medium text-3xl">
                Stack
              </h2>
            </div>
          </SectionWrapper>
        </div>
      </div>

      <div className="w-full border-b border-zinc-200 dark:border-zinc-800">
        <SectionWrapper>
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {STACK.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative flex items-center gap-3 px-6 py-3.5 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-sm dark:shadow-none dark:hover:shadow-zinc-900/50 overflow-hidden cursor-default"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundColor: item.color }}
                  />
                  <item.icon
                    className="size-6 relative z-10 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      color: theme === "dark" ? item.darkColor || item.color : item.color,
                    }}
                  />
                  <span className="font-mono text-sm font-bold text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors relative z-10 tracking-tight">
                    {item.name}
                  </span>
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
