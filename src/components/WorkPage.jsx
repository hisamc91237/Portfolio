import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import CrossLine from './ui/CrossLine';
import ExperienceList from './ExperienceList';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header Section with dots */}
      <div className="w-full">
        <SectionWrapper innerClassName="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="pt-6 md:pt-8 pb-8 px-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-3 group"
            >
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              Back to home
            </Link>
            
            <h1 className="text-2xl md:text-3xl font-medium text-zinc-900 dark:text-zinc-50 mb-3 tracking-tighter">
              Work Experience
            </h1>
            <p className="text-[15px] text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              A comprehensive look at my professional journey, focusing on engineering scalable systems and high-quality user experiences.
            </p>
          </div>
        </SectionWrapper>
      </div>

      <CrossLine />

      {/* Experience List Section */}
      <ExperienceList />

      <CrossLine />
    </div>
  );
}
