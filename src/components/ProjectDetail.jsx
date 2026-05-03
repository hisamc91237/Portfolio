import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { PROJECTS } from "../data/projects";
import SectionWrapper from "./ui/SectionWrapper";
import CrossLine from "./ui/CrossLine";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-zinc-500 hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

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
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl font-medium text-zinc-900 dark:text-zinc-50 mb-3 tracking-tighter">
                  {project.title}
                </h1>
                <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-normal">
                  {project.tagline}
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-lg font-bold text-xs hover:opacity-90 transition-all active:scale-95"
                  >
                    View Live <Globe className="size-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center size-9 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-95"
                  >
                    <SiGithub className="size-4.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>

      <CrossLine />

      {/* Main Content */}
      <SectionWrapper>
        <div className="py-8 md:py-10 px-6 md:px-10 flex flex-col gap-10">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full aspect-video rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex flex-col gap-12">
            {/* About & Tech */}
            <div className="flex flex-col gap-6">
              <p className="text-zinc-600 dark:text-zinc-400 leading-normal text-[15px] md:text-[17px] font-medium">
                {project.longDescription}
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <p className="text-zinc-800 dark:text-zinc-200 font-bold text-base shrink-0">
                    Built using
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-all hover:scale-105" title={t.name}>
                        <t.icon className="size-4" style={{ color: t.color }} />
                        <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Points */}
            <ul className="flex flex-col gap-5">
              {project.impact.map((point, i) => {
                const [title, ...rest] = point.split(':');
                const description = rest.join(':');
                return (
                  <li key={i} className="flex gap-4 text-zinc-600 dark:text-zinc-400 text-[14px] md:text-[15px] leading-normal">
                    <span className="text-zinc-300 dark:text-zinc-700 mt-2 shrink-0 size-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                    <span>
                      {description ? (
                        <>
                          <span className="font-bold text-zinc-900 dark:text-zinc-100">{title}:</span>
                          {description}
                        </>
                      ) : (
                        point
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* Explore Links */}
            <div className="flex flex-col gap-5 p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 backdrop-blur-sm overflow-hidden">
              <p className="text-zinc-800 dark:text-zinc-200 font-bold text-lg">
                Ready to see it in action?
              </p>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-4 text-zinc-600 dark:text-zinc-400 group">
                  <Globe className="size-4.5 mt-1 shrink-0 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                  <div className="flex flex-col gap-0.5 min-w-0 w-full overflow-hidden">
                    <span className="font-bold text-[10px] text-zinc-400 uppercase tracking-widest">Live Application</span>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-100 font-medium hover:underline break-all text-[14px] md:text-[15px] block">
                      {project.liveUrl}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-zinc-600 dark:text-zinc-400 group">
                  <SiGithub className="size-4.5 mt-1 shrink-0 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                  <div className="flex flex-col gap-0.5 min-w-0 w-full overflow-hidden">
                    <span className="font-bold text-[10px] text-zinc-400 uppercase tracking-widest">Source Code</span>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-100 font-medium hover:underline break-all text-[14px] md:text-[15px] block">
                      {project.githubUrl}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">The Problem</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-normal text-[14px] md:text-[15px] font-medium">
                  {project.problem}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">The Solution</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-normal text-[14px] md:text-[15px] font-medium">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Optional Key Features Section */}
            {project.keyFeatures && (
              <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-8">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.keyFeatures.map((feature, i) => (
                    <div key={i} className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm transition-all hover:border-zinc-400 dark:hover:border-zinc-600">
                      <h3 className="text-zinc-900 dark:text-zinc-50 font-bold text-base mb-2">{feature.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-[14px] leading-normal font-medium">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>

      <CrossLine />
    </div>
  );
}
