import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import CrossLine from './ui/CrossLine';
import { ArrowUpRight } from 'lucide-react';

export default function Blogs() {
  return (
    <>
      <div id="blogs" className="scroll-mt-20">
        <div className="w-full h-fit border-b border-zinc-200 dark:border-zinc-800">
          <SectionWrapper>
            <div className="px-4 py-2">
              <h2 className="text-zinc-900 dark:text-zinc-50 font-medium text-3xl">Blogs</h2>
            </div>
          </SectionWrapper>
        </div>
      </div>

      <div className="w-full border-b border-zinc-200 dark:border-zinc-800">
        <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Blog Post 1 */}
            <a 
              href="https://medium.com/@rhythmdoshi04/heres-how-i-run-multiple-backends-24x7-for-free-from-my-own-machine-cc70aca2c96e"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-r border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group h-64 md:h-80 flex flex-col"
            >
              <div className="h-[70%] w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl relative overflow-hidden flex items-center justify-center">
                 <div className="text-zinc-400 font-mono text-sm">Blog Image Placeholder</div>
              </div>
              <div className="h-[30%] flex flex-col justify-center px-2">
                <h2 className="text-lg md:text-xl font-medium text-zinc-900 dark:text-zinc-50 group-hover:underline flex items-center gap-1">
                  Here's How I run multiple backends 24x7 for free from my own machine.
                  <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h2>
              </div>
            </a>

            {/* Quote / Placeholder */}
            <div className="p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors h-64 md:h-80 flex flex-col">
              <div className="h-[70%] w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500 font-medium text-xl p-8 text-center italic">
                "Before the words, there is the thinking."
              </div>
              <div className="h-[30%] flex flex-col justify-center px-2">
                <h2 className="text-lg md:text-xl font-medium text-zinc-900 dark:text-zinc-50">
                  I am still in the beautiful middle of that.
                </h2>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
      <CrossLine />
    </>
  );
}
