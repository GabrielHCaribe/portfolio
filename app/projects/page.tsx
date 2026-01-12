'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { projects } from '../../data/projects'; // Ensure this path correctly points to your data folder

export default function Projects() {
  return (
    <div className="min-h-screen bg-transparent text-[#fafafa] relative z-10 flex flex-col">
      <Navigation />

      <main className="flex-grow w-full flex justify-center pb-24" style={{ paddingTop: '4rem' }}>
        <div className="w-full max-w-5xl px-6 flex flex-col items-center">
        
          {/* Header Section */}
          <div className="text-center flex flex-col items-center w-full gap-12" style={{ marginBottom: '4rem' }}>
            <h1 className="text-6xl font-bold tracking-tight">Projects</h1>
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
              A collection of work spanning engineering physics, numerical simulations, and software development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
            {projects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id}>
                <div 
                  className="group bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-3xl overflow-hidden hover:border-[#ea580c]/40 transition-all duration-500 flex flex-col h-full hover:shadow-[0_0_30px_-10px_rgba(234,88,12,0.3)] cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="w-full h-48 bg-zinc-800 flex items-center justify-center overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex flex-col items-center text-center p-8">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#ea580c] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed mb-8">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto justify-center px-8 pb-8">
                    {project.tags.map((tag, tIndex) => (
                      <span 
                        key={tIndex} 
                        className="text-xs font-semibold px-3 py-1 bg-zinc-800/80 text-zinc-300 rounded-full border border-zinc-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}