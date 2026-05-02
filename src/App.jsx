import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import ThemeToggle from './components/ui/ThemeToggle';
import CrossLine from './components/ui/CrossLine';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 relative">
      <Navbar />
      
      {/* Theme Toggle Floating Exactly Like Original */}
      <div className="fixed top-0 right-[0vw] sm:right-[6.5vw] md:right-[3vw] lg:right-[5.5vw] z-[999] pointer-events-none h-[260px] w-24 flex justify-center">
        <ThemeToggle />
      </div>

      <main className="w-full min-h-screen mt-16 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Footer />
      </main>
    </div>
  );
}

export default App;
