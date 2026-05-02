import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-zinc-50/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 h-14 md:h-16 transition-colors duration-300">
      <div className="max-w-3xl mx-auto w-[95%] md:w-full h-full flex items-center justify-between border-x border-zinc-200 dark:border-zinc-800 px-4">
        
        {/* Logo / Branding */}
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-full bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-zinc-50 dark:text-zinc-900 font-bold text-[10px]">
            RD
          </div>
          <span className="text-zinc-900 dark:text-zinc-50 font-medium text-sm hidden sm:block">Rhythm Doshi</span>
        </div>

        {/* Links */}
        <div className="hidden sm:flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium tracking-tighter">
          <a href="#" className="text-zinc-900 dark:text-zinc-50 hover:text-zinc-500 transition-colors">Home</a>
          <a href="#about" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">About</a>
          <a href="#stack" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Stack</a>
          <a href="#projects" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Projects</a>
          <a href="#education" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Education</a>
        </div>

      </div>
    </nav>
  );
}
