import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from './ui/SectionWrapper';
import CrossLine from './ui/CrossLine';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';

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
              <Link 
                key={project.id}
                to={`/project/${project.id}`}
                className={`p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group h-[400px] flex flex-col ${index % 2 === 0 ? 'md:border-r border-zinc-200 dark:border-zinc-800' : ''} ${index < PROJECTS.length - 2 ? 'border-b border-zinc-200 dark:border-zinc-800' : 'md:border-b-0 border-b border-zinc-200 dark:border-zinc-800'}`}
              >
                <div className="h-[75%] w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                    <div className="bg-white dark:bg-zinc-900 px-4 py-2 rounded-full font-medium text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                      View Details
                    </div>
                  </div>
                </div>
                <div className="h-[25%] flex flex-col justify-center px-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-50">{project.title}</h3>
                    <ArrowUpRight className="size-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mt-1">{project.tagline}</p>
                </div>
              </Link>
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
