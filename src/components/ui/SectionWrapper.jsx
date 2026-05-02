import React from 'react';

export default function SectionWrapper({ children, className = "", innerClassName = "", id }) {
  return (
    <div id={id} className={`w-full border-b border-zinc-200 dark:border-zinc-800 ${className}`}>
      <div className={`max-w-3xl mx-auto w-[95%] md:w-full border-x border-zinc-200 dark:border-zinc-800 h-full relative ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}
