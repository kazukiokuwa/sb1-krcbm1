import React from 'react';
import { Mail } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <main className="relative z-10">
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      
      <footer className="bg-[#2D3748] text-white py-8 mt-24">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <p className="text-sm">© 2024 大桑一輝. All rights reserved.</p>
          <a
            href="mailto:kazukiokuwa14@gmail.com"
            className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors"
          >
            <Mail size={16} />
            kazukiokuwa14@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;