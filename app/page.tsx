'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#18181b] text-[#fafafa]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#18181b]/95 backdrop-blur-sm border-b border-zinc-800' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-semibold hover:text-[#ea580c] transition-colors"
            >
              Gabriel Caribé
            </button>
            <div className="flex gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-sm hover:text-[#ea580c] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm hover:text-[#ea580c] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-sm hover:text-[#ea580c] transition-colors"
              >
                Projects
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Gabriel Caribé
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Aspiring Engineering Physicist & Problem Solver
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-3 bg-[#ea580c] hover:bg-[#f97316] text-white font-medium rounded-lg transition-colors"
          >
            Get in touch
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <div className="w-64 h-64 rounded-lg border-2 border-zinc-700 bg-zinc-800/50 flex items-center justify-center">
                <span className="text-zinc-500 text-sm">Professional Photo</span>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6 hover:border-[#ea580c]/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Project Title 1</h3>
              <p className="text-zinc-400 mb-4">
                Brief description of the project goes here. This is a placeholder for project details.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#ea580c] hover:text-[#f97316] font-medium"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project Card 2 */}
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6 hover:border-[#ea580c]/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Project Title 2</h3>
              <p className="text-zinc-400 mb-4">
                Brief description of the project goes here. This is a placeholder for project details.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#ea580c] hover:text-[#f97316] font-medium"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project Card 3 */}
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6 hover:border-[#ea580c]/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Project Title 3</h3>
              <p className="text-zinc-400 mb-4">
                Brief description of the project goes here. This is a placeholder for project details.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#ea580c] hover:text-[#f97316] font-medium"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project Card 4 */}
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6 hover:border-[#ea580c]/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Project Title 4</h3>
              <p className="text-zinc-400 mb-4">
                Brief description of the project goes here. This is a placeholder for project details.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#ea580c] hover:text-[#f97316] font-medium"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project Card 5 */}
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6 hover:border-[#ea580c]/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Project Title 5</h3>
              <p className="text-zinc-400 mb-4">
                Brief description of the project goes here. This is a placeholder for project details.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#ea580c] hover:text-[#f97316] font-medium"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project Card 6 */}
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6 hover:border-[#ea580c]/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Project Title 6</h3>
              <p className="text-zinc-400 mb-4">
                Brief description of the project goes here. This is a placeholder for project details.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#ea580c] hover:text-[#f97316] font-medium"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} Gabriel Caribé
            </p>
            <div className="flex gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#ea580c] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#ea580c] transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
