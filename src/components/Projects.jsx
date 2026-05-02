import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import CrossLine from './ui/CrossLine';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: "BetterDrive",
    description: "A Google Drive clone built with Next.js, Tailwind CSS, and Appwrite.",
    link: "https://betterdrive.vercel.app/",
    image: "https://placehold.co/600x400/000000/FFFFFF/png?text=BetterDrive"
  },
  {
    title: "SocietySync",
    description: "A Society Management System built with React, Node.js, and MongoDB.",
    link: "https://societysync.vercel.app/",
    image: "https://placehold.co/600x400/000000/FFFFFF/png?text=SocietySync"
  },
  {
    title: "LivelyChat",
    description: "A real-time chat application built with React, Socket.io, and Node.js.",
    link: "https://livelychat.vercel.app/",
    image: "https://placehold.co/600x400/000000/FFFFFF/png?text=LivelyChat"
  },
  {
    title: "CineClair",
    description: "A movie recommendation system built with React, TMDB API, and Tailwind CSS.",
    link: "https://cineclair.vercel.app/",
    image: "https://placehold.co/600x400/000000/FFFFFF/png?text=CineClair"
  }
];

export default function Projects() {
  return (
    <>
      <div id="projects" className="scroll-mt-20">
        <div className="w-full h-fit border-b border-zinc-200 dark:border-zinc-800">
          <SectionWrapper>
            <div className="px-4 py-2">
              <h2 className="text-zinc-900 dark:text-zinc-50 font-medium text-3xl">Projects</h2>
            </div>
          </SectionWrapper>
        </div>
      </div>

      <div className="w-full border-b border-zinc-200 dark:border-zinc-800">
        <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <a 
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group h-80 flex flex-col ${index % 2 === 0 ? 'md:border-r border-zinc-200 dark:border-zinc-800' : ''} ${index < PROJECTS.length - 2 ? 'border-b border-zinc-200 dark:border-zinc-800' : 'md:border-b-0 border-b border-zinc-200 dark:border-zinc-800'}`}
              >
                <div className="h-[72%] w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  />
                </div>
                <div className="h-[28%] flex flex-col justify-center px-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 group-hover:underline">{project.title}</h3>
                    <ArrowUpRight className="size-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 mt-1">{project.description}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="w-full h-16 flex items-center justify-center border-t border-zinc-200 dark:border-zinc-800">
            <a 
              href="https://github.com/Rhythmdoshi31" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium text-sm transition-colors flex items-center gap-2"
            >
              More Projects on Github <ArrowUpRight className="size-4" />
            </a>
          </div>
        </SectionWrapper>
      </div>
      <CrossLine />
    </>
  );
}
