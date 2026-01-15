// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const pathname = usePathname();

//   useEffect(() => {
//     const detectActiveSection = () => {
//     // Use startsWith so it catches /projects AND /projects/project-name
//     if (pathname.startsWith('/projects')) {
//       setActiveSection('projects');
//       return;
//     }

//     // Rest of your logic for scroll detection on the Home page...
//     const aboutSection = document.getElementById('about');
//     if (aboutSection) {
//       const aboutTop = aboutSection.getBoundingClientRect().top;
//       if (aboutTop < window.innerHeight / 2) {
//         setActiveSection('about');
//       } else {
//         setActiveSection('home');
//       }
//     } else {
//       setActiveSection('home');
//     }
//   };

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//       detectActiveSection();
//     };

//     // Call once on mount to set initial state
//     detectActiveSection();
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [pathname]);

//   const links = [
//     { name: 'Home', path: '/', id: 'home' },
//     { name: 'About', path: '/#about', id: 'about' },
//     { name: 'Projects', path: '/projects', id: 'projects' },
//   ];

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
//       <nav
//         className={`transition-all duration-500 ease-in-out flex items-center justify-between border border-transparent px-8 py-3 w-full max-w-5xl ${
//           isScrolled 
//             ? 'bg-zinc-900/80 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]' 
//             : 'bg-transparent'
//         }`}
//       >
//         {/* Logo / Name */}
//         <Link 
//           href="/" 
//           className="group relative flex items-center gap-2"
//         >
//           <span className="text-xl font-bold tracking-tighter text-white">
//             Gabriel <span className="text-[#ea580c]">Caribé</span>
//           </span>
//         </Link>

//         {/* Links */}
//         <div className="hidden md:flex items-center gap-8">
//           {links.map((link) => (
//             <Link
//               key={link.name}
//               href={link.path}
//               className={`relative text-sm font-medium transition-colors hover:text-[#ea580c] ${
//                 activeSection === link.id ? 'text-white' : 'text-zinc-400'
//               }`}
//             >
//               {link.name}
//               {activeSection === link.id && (
//                 <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ea580c] rounded-full" />
//               )}
//             </Link>
//           ))}
          
//           {/* Action Button */}
//           <Link
//             href="mailto:g.caribe@mail.utoronto.ca?subject=Reaching out from your Portfolio"
//             className="ml-4 flex px-5 py-2 justify-center min-w-[60px] bg-white text-black text-sm font-bold rounded-full hover:bg-[#ea580c] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
//           >
//             Contact
//           </Link>
//         </div>

//         {/* Mobile Indicator (Small screen) */}
//         <div className="md:hidden text-zinc-400">
//            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//            </svg>
//         </div>
//       </nav>
//     </div>
//   );
// }


// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const pathname = usePathname();

//   // List of your projects for the dropdown
//   const projectItems = [
//     { name: 'CAN-RGX', path: '/projects/0' },
//     { name: 'Advanced Physics Labs', path: '/projects/1' },
//     { name: 'PID Heating System', path: '/projects/2' },
//     { name: 'Ember Lift', path: '/projects/3' },
//     { name: 'Software Projects', path: '/projects/4' },
//     { name: 'Bridge Design Project', path: '/projects/5' },
//   ];

//   useEffect(() => {
//     const detectActiveSection = () => {
//       if (pathname.startsWith('/projects')) {
//         setActiveSection('projects');
//         return;
//       }

//       const aboutSection = document.getElementById('about');
//       if (aboutSection) {
//         const aboutTop = aboutSection.getBoundingClientRect().top;
//         if (aboutTop < window.innerHeight / 2) {
//           setActiveSection('about');
//         } else {
//           setActiveSection('home');
//         }
//       } else {
//         setActiveSection('home');
//       }
//     };

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//       detectActiveSection();
//     };

//     detectActiveSection();
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [pathname]);

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
//       <nav className={`transition-all duration-500 ease-in-out flex items-center justify-between border border-transparent px-8 py-3 w-full max-w-5xl ${
//           isScrolled ? 'bg-zinc-900/80 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]' : 'bg-transparent'
//         }`}>
        
//         {/* Logo */}
//         <Link href="/" className="group relative flex items-center gap-2">
//           <span className="text-xl font-bold tracking-tighter text-white">
//             Gabriel <span className="text-[#ea580c]">Caribé</span>
//           </span>
//         </Link>

//         {/* Links */}
//         <div className="hidden md:flex items-center gap-8">
//           <Link href="/" className={`relative text-sm font-medium transition-colors hover:text-[#ea580c] ${activeSection === 'home' ? 'text-white' : 'text-zinc-400'}`}>
//             Home
//             {activeSection === 'home' && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ea580c] rounded-full" />}
//           </Link>

//           <Link href="/#about" className={`relative text-sm font-medium transition-colors hover:text-[#ea580c] ${activeSection === 'about' ? 'text-white' : 'text-zinc-400'}`}>
//             About
//             {activeSection === 'about' && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ea580c] rounded-full" />}
//           </Link>

//           {/* Projects Dropdown */}
//           <div 
//             className="relative group py-2"
//             onMouseEnter={() => setIsDropdownOpen(true)}
//             onMouseLeave={() => setIsDropdownOpen(false)}
//           >
//             <Link 
//               href="/projects" 
//               className={`relative text-sm font-medium transition-colors group-hover:text-[#ea580c] ${activeSection === 'projects' ? 'text-white' : 'text-zinc-400'}`}
//             >
//               Projects
//               {activeSection === 'projects' && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ea580c] rounded-full" />}
//             </Link>

//             {/* Dropdown Menu */}
//             <div className={`absolute left-0 mt-2 w-34 rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
//               <div className="py-2 px-1">
//                 {projectItems.map((item) => (
//                   <Link
//                     key={item.path}
//                     href={item.path}
//                     className={`block px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
//                       pathname === item.path 
//                         ? 'text-[#ea580c] bg-zinc-800/50' 
//                         : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Action Button */}
//           <Link
//             href="mailto:g.caribe@mail.utoronto.ca"
//             className="ml-4 flex px-7 py-3 justify-center min-w-[60px] bg-white text-black text-sm font-bold rounded-full hover:bg-[#ea580c] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
//           >
//             Contact
//           </Link>
//         </div>
//       </nav>
//     </div>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const pathname = usePathname();

  const projectItems = [
    { name: 'CAN-RGX', path: '/projects/0' },
    { name: 'Advanced Physics Labs', path: '/projects/1' },
    { name: 'PID Heating System', path: '/projects/2' },
    { name: 'Ember Lift', path: '/projects/3' },
    { name: 'Software Projects', path: '/projects/4' },
    { name: 'Bridge Design Project', path: '/projects/5' },
  ];

  useEffect(() => {
    const detectActiveSection = () => {
      if (pathname.startsWith('/projects')) {
        setActiveSection('projects');
      } else if (pathname === '/') {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          const aboutTop = aboutSection.getBoundingClientRect().top;
          setActiveSection(aboutTop < window.innerHeight / 2 ? 'about' : 'home');
        } else {
          setActiveSection('home');
        }
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      detectActiveSection();
    };

    detectActiveSection();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav className={`transition-all duration-500 ease-in-out flex items-center justify-between border border-transparent px-8 py-3 w-full max-w-5xl rounded-full ${
          isScrolled || isMenuOpen ? 'bg-zinc-900/90 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]' : 'bg-transparent'
        }`}>
        
        {/* Logo */}
        <Link href="/" className="z-50 group relative flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-white">
            Gabriel <span className="text-[#ea580c]">Caribé</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={`relative text-sm font-medium transition-colors hover:text-[#ea580c] ${activeSection === 'home' ? 'text-white' : 'text-zinc-400'}`}>
            Home
            {activeSection === 'home' && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ea580c] rounded-full" />}
          </Link>

          <Link href="/#about" className={`relative text-sm font-medium transition-colors hover:text-[#ea580c] ${activeSection === 'about' ? 'text-white' : 'text-zinc-400'}`}>
            About
            {activeSection === 'about' && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ea580c] rounded-full" />}
          </Link>

          {/* Desktop Projects Dropdown */}
          <div className="relative group py-2" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <Link href="/projects" className={`relative text-sm font-medium transition-colors group-hover:text-[#ea580c] ${activeSection === 'projects' ? 'text-white' : 'text-zinc-400'}`}>
              Projects
              {activeSection === 'projects' && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ea580c] rounded-full" />}
            </Link>
            <div className={`absolute left-0 mt-2 w-34 rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
              <div className="py-2 px-1">
                {projectItems.map((item) => (
                  <Link key={item.path} href={item.path} className={`block px-4 py-2 text-xs font-medium rounded-lg transition-colors ${pathname === item.path ? 'text-[#ea580c] bg-zinc-800/50' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="mailto:g.caribe@mail.utoronto.ca?subject=Reaching out from your Portfolio" className="ml-4 flex px-7 py-3 justify-center min-w-[60px] bg-white text-black text-sm font-bold rounded-full hover:bg-[#ea580c] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden z-50 p-2 text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <Link href="/" className="text-2xl font-semibold text-white" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/#about" className="text-2xl font-semibold text-white" onClick={() => setIsMenuOpen(false)}>About</Link>
          <div className="flex flex-col items-center gap-4">
             <Link href="/projects" className="text-2xl font-semibold text-[#ea580c]" onClick={() => setIsMenuOpen(false)}>Projects</Link>
             <div className="flex flex-wrap justify-center gap-3 px-6">
                {projectItems.map(item => (
                  <Link key={item.path} href={item.path} className="text-sm text-zinc-400 px-3 py-1 border border-zinc-800 rounded-full">
                    {item.name}
                  </Link>
                ))}
             </div>
          </div>
          <Link href="mailto:g.caribe@mail.utoronto.ca?subject=Reaching out from your Portfolio" className="mt-4 flex px-10 py-4 justify-center min-w-[80px] bg-white text-black text-lg font-bold rounded-full">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}