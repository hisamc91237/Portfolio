import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WorkPage from './components/WorkPage';
import Footer from './components/Footer';
import ThemeToggle from './components/ui/ThemeToggle';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 relative">
        <Navbar />
        
        {/* Theme Toggle Floating Exactly Like Original */}
        <div className="fixed top-0 right-[0vw] sm:right-[6.5vw] md:right-[3vw] lg:right-[5.5vw] z-[999] pointer-events-none h-[260px] w-24 flex justify-center">
          <ThemeToggle />
        </div>

        <main className="w-full min-h-screen relative z-10 pt-14 md:pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<WorkPage />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
