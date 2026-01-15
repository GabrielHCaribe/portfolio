'use client';

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-[#fafafa] relative z-10">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Gabriel Caribé
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto">
            Aspiring Engineering Physicist & Problem Solver
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-3 justify-center min-w-[100px] bg-[#ea580c] hover:bg-[#f97316] text-white font-medium rounded-lg transition-colors"
          >
            Get in touch
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 px-6 min-h-[70vh] flex items-center justify-center bg-transparent">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">About Me</h2>

          {/* Main Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            
            {/* Image Container */}
            <div className="flex-shrink-0">
              {/* Changed border to white/10 so it's visible against stars */}
              <div className="w-64 h-80 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="Gabriel Caribé" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="max-w-xl text-center md:text-left flex flex-col gap-10">
              <p className="text-lg text-zinc-300 leading-relaxed">
                I am a dedicated third-year Engineering Science student majoring in Engineering Physics at the University of Toronto. I have a strong passion for problem-solving and a keen interest in applying physics principles to real-world challenges.  
              </p>
              
              <p className="text-lg text-zinc-300 leading-relaxed">
                I want to work towards problems that are immediately relevant and help make a positive impact on others. Whether it's through research, internships, or collaborative projects, I am eager to contribute my skills and enthusiasm to meaningful endeavors.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
