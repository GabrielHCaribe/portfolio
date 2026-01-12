import { projects } from '../../../data/projects';
import ProjectClient from './ProjectClient';
import Navigation from '../../../app/components/Navigation';
import Footer from '../../../app/components/Footer';

// This function tells Next.js exactly which IDs to build at compile time
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// In Next.js 16, params is a Promise
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Find the specific project in our data file
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-transparent text-[#fafafa] relative z-10 flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-xl text-zinc-400">Project not found</p>
        </main>
        <Footer />
      </div>
    );
  }

  return <ProjectClient project={project} />;
}