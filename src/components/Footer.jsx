import React, { useState, useEffect } from 'react';
import SectionWrapper from './ui/SectionWrapper';

export default function Footer() {
  const [textIndex, setTextIndex] = useState(0);
  const messages = [
    "Seeking the right opportunity. Let's talk.",
    "Open to work and excited to contribute.",
    "Eager to bring value to the right team."
  ];

  const quotes = [
    "Into you hands",
    "will be placed",
    "the exact results",
    "of your own thoughts;",
    "you will receive",
    "that which you earn",
    "no less",
    "no more."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full h-[40vh] md:h-[30vh] border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
      <SectionWrapper innerClassName="h-full flex flex-col md:flex-row justify-between md:items-end p-4 py-8 md:pt-4">
        {/* Left / Bottom on Mobile */}
        <div className="flex flex-col items-center md:items-start md:order-1">
          <a href="#" className="text-xl font-medium text-zinc-900 dark:text-zinc-50 underline hover:text-zinc-600 transition">Rhythm Doshi</a>
          <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition mt-2">Github</a>
          <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition">Linkedin</a>
          <a href="tel:+91-9981603789" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition">+91-9981603789</a>
        </div>

        {/* Right / Top on Mobile */}
        <div className="flex flex-col items-center md:items-end justify-between md:h-full w-full md:w-1/2 md:pt-4 md:order-2 mt-8 md:mt-0">
          <div className="relative h-8 overflow-hidden text-zinc-500 font-medium w-full text-center md:text-right">
            <div 
              className="transition-transform duration-700 ease-out"
              style={{ transform: `translateY(-${textIndex * 2}rem)` }}
            >
              {messages.map((msg, i) => (
                <div key={i} className="h-8 flex items-center justify-center md:justify-end">
                  {msg}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative h-8 overflow-hidden text-zinc-400 text-xs w-full text-right">
              <div 
                className="transition-transform duration-700 ease-out"
                style={{ transform: `translateY(-${(textIndex % quotes.length) * 2}rem)` }}
              >
                {quotes.map((q, i) => (
                  <div key={i} className="h-8 flex items-center justify-end uppercase tracking-widest">
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
}
