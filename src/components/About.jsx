import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import CrossLine from './ui/CrossLine';

export default function About() {
  return (
    <>
      <div id="about" className="scroll-mt-20">
        <div className="w-full h-fit border-b border-zinc-200 dark:border-zinc-800">
          <SectionWrapper>
            <div className="px-4 py-2">
              <h2 className="text-zinc-900 dark:text-zinc-50 font-medium text-3xl">About</h2>
            </div>
          </SectionWrapper>
        </div>
      </div>
      <div className="w-full border-b border-zinc-200 dark:border-zinc-800">
        <SectionWrapper>
          <div className="h-full px-4 text-[15px]">
            <div className="flex flex-col gap-4 tracking-tighter py-6 text-zinc-600 dark:text-zinc-400">
              <ul className="list-disc pl-5 flex flex-col gap-4 md:gap-2 marker:text-zinc-300 dark:marker:text-zinc-700">
                <li>Final-year full-stack developer who enjoys building things for the web with strong attention to small details.</li>
                <li>Experienced with <span className="font-medium text-zinc-900 dark:text-zinc-50">Next.js, React, Express, Node.js, TypeScript </span>and modern full-stack technologies, focused on creating high-quality, user-centric web applications.</li>
                <li>Passionate about exploring new technologies and turning ideas into reality through polished personal projects.</li>
                <li><span className="font-medium text-zinc-900 dark:text-zinc-50">Highlights</span>
                  <ul className="list-disc pl-6 mt-2 flex flex-col gap-2 marker:text-zinc-300 dark:marker:text-zinc-700">
                    <li>Hacktoberfest 2025 — <span className="font-medium underline"><a target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50" href="https://www.holopin.io/hacktoberfest2025/userbadge/cmhk5qqs8007mjn04ufu1xiei">Supercontributor</a></span> (Open Source)</li>
                    <li>Solved <span className="font-medium underline"><a target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50" href="https://leetcode.com/u/Rhythmdoshi31/">700+ DSA problems</a></span> (and counting, because it's fun)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </SectionWrapper>
      </div>
      <CrossLine />
    </>
  );
}
