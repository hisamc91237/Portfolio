import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import CrossLine from './ui/CrossLine';

export default function Contact() {
  return (
    <>
      <SectionWrapper id="contact" className="scroll-mt-20">
        <div className="p-4 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium mb-2">Get in touch</h2>
            <p className="text-zinc-500 font-mono text-sm">Have a project in mind? Let's work together.</p>
          </div>
          <a href="mailto:hisamc2000@gmail.com" className="px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-medium rounded-full hover:scale-105 transition-transform active:scale-95 text-sm">
            Say Hello
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
