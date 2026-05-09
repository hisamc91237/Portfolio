import React, { useState, useEffect, useRef } from 'react';
import SectionWrapper from './ui/SectionWrapper';
import CrossLine from './ui/CrossLine';
import { Download, ArrowLeft, Eye, ZoomIn, ZoomOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.0);
  const [containerWidth, setContainerWidth] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Get the width of the container, subtracting a small amount to prevent horizontal scrollbars
        const width = containerRef.current.getBoundingClientRect().width;
        setContainerWidth(width - 16); 
        
        // Auto-fit on mobile by default
        if (width < 768) {
          setScale(1.0); 
        }
      }
    };

    // Initial measurement
    updateWidth();
    window.addEventListener('resize', updateWidth);
    const timeoutId = setTimeout(updateWidth, 100);

    return () => {
      window.removeEventListener('resize', updateWidth);
      clearTimeout(timeoutId);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 2.5));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));
  const handleResetZoom = () => setScale(1.0);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <SectionWrapper innerClassName="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="pt-6 pb-6 px-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-4 group"
            >
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              Back to home
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-medium text-zinc-900 dark:text-zinc-50 mb-2 tracking-tighter">
                  Resume
                </h1>
                <p className="text-zinc-500 font-mono text-sm">
                  Curriculum Vitae — Hisamuddin Chandiwala
                </p>
              </div>
              
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 mt-4 md:mt-0 w-full md:w-auto">
                {/* Zoom Controls */}
                <div className="hidden sm:flex items-center gap-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full p-1 shadow-sm h-10">
                  <button 
                    onClick={handleZoomOut}
                    className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-400 transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut className="size-4" />
                  </button>
                  <button 
                    onClick={handleResetZoom}
                    className="px-2 text-xs font-mono font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors min-w-[3rem]"
                    title="Fit to Screen"
                  >
                    {Math.round(scale * 100)}%
                  </button>
                  <button 
                    onClick={handleZoomIn}
                    className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-400 transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="size-4" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 h-10 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-800 rounded-full font-bold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all active:scale-95 shadow-sm"
                  >
                    View <Eye className="size-4" />
                  </a>
                  <a 
                    href="/resume.pdf" 
                    download
                    className="flex items-center justify-center gap-2 px-6 h-10 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-full font-bold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95 shadow-md"
                  >
                    Download <Download className="size-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Mobile Zoom Controls */}
            <div className="flex sm:hidden items-center justify-center gap-4 mt-4 w-full">
               <button 
                  onClick={handleZoomOut}
                  className="p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-full text-zinc-600 dark:text-zinc-400 transition-colors active:scale-95"
                >
                  <ZoomOut className="size-4" />
                </button>
                <button 
                  onClick={handleResetZoom}
                  className="px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-full text-zinc-600 dark:text-zinc-400 transition-colors active:scale-95 text-xs font-bold"
                >
                  FIT ({Math.round(scale * 100)}%)
                </button>
                <button 
                  onClick={handleZoomIn}
                  className="p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-full text-zinc-600 dark:text-zinc-400 transition-colors active:scale-95"
                >
                  <ZoomIn className="size-4" />
                </button>
            </div>
          </div>
        </SectionWrapper>
      <CrossLine />

      <SectionWrapper>
        <div className="py-8 md:py-12 px-2 sm:px-4 flex justify-center">
          <div 
            className="w-full max-w-5xl flex justify-center pb-8" 
            style={{ overflowX: scale > 1 ? 'auto' : 'hidden' }}
            ref={containerRef}
          >
            {/* Resume Preview Container */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-2xl overflow-hidden relative group">
              <Document
                file="/resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="flex flex-col items-center justify-center p-20 text-zinc-400">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zinc-900 dark:border-zinc-100 mb-4"></div>
                    <p className="font-mono text-sm">Loading Resume...</p>
                  </div>
                }
                error={
                  <div className="flex flex-col items-center justify-center p-20 text-red-500">
                    <p className="font-mono text-sm">Failed to load PDF.</p>
                  </div>
                }
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    scale={scale}
                    width={containerWidth ? Math.min(containerWidth, 1024) : undefined}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                    className="mb-4 last:mb-0"
                  />
                ))}
              </Document>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
