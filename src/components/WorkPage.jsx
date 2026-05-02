import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import Experience from './Experience';

export default function WorkPage() {
  return (
    <div className="pt-20 md:pt-32 pb-20">
      <SectionWrapper>
        <div className="px-4 mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-8 group"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 tracking-tighter">
            Work Experience
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            A comprehensive look at my professional journey, focusing on engineering scalable systems and high-quality user experiences.
          </p>
        </div>
      </SectionWrapper>
      
      <Experience />
    </div>
  );
}
