'use client';

import { useRouter } from 'next/navigation';
import Navigation from '../../../app/components/Navigation';
import Footer from '../../../app/components/Footer';
import { Project } from '../../../data/projects';

export default function ProjectClient({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-transparent text-[#fafafa] relative z-10 flex flex-col">
      <Navigation />

      <main className="flex-grow w-full flex justify-center pt-24 pb-24" style={{ paddingTop: '8rem' }}>
        <div className="w-full max-w-5xl px-6 flex flex-col">
          
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-zinc-400 hover:text-[#ea580c] transition-colors mb-12 w-fit"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </button>

          {/* Project Header */}
          <div className="mb-16 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {project.tags.map((tag, index) => (
                <span key={index} className="text-sm font-semibold px-4 py-1.5 bg-zinc-800/80 text-[#ea580c] rounded-full border border-[#ea580c]/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
            {/* Project Image */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="sticky top-32 rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[3/4]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Dynamic Project Content */}
            <div className="md:w-2/3 flex flex-col gap-8">
              {/* This loops through the array in your data file */}
              {project.content.map((paragraph, index) => (
                <p key={index} className="text-xl text-zinc-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              
              {/* If you have a link, it shows a button */}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center px-8 py-4 bg-[#ea580c] text-white font-bold rounded-2xl hover:bg-[#c2410c] transition-all w-fit"
                >
                  View Live Project
                </a>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}