import React from 'react';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-zinc-50/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 h-14 md:h-16 transition-colors duration-300">
      <div className="max-w-3xl mx-auto w-[95%] md:w-full h-full flex items-center justify-between border-x border-zinc-200 dark:border-zinc-800 px-4">
        
        {/* Logo / Branding */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="size-6 rounded-full bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-zinc-50 dark:text-zinc-900 font-bold text-[10px] group-hover:scale-110 transition-transform">
            RD
          </div>
          <span className="text-zinc-900 dark:text-zinc-50 font-medium text-sm hidden sm:block group-hover:opacity-70 transition-opacity">Rhythm Doshi</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium tracking-tighter">
          <Link to="/" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Home</Link>
          <Link to="/work" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Work</Link>
          <a href="#" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Resume</a>
        </div>

      </div>
    </nav>
  );
}
