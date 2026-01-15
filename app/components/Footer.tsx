export default function Footer() {
  return (
    <footer className="w-full py-16 border-t border-zinc-800/50 bg-transparent flex justify-center">
      <div className="max-w-7xl w-full px-10 mx-auto">
        <div className="flex flex-row justify-between items-center">
          
          {/* Left Side: Your Name */}
          <div className="flex-shrink-0">
            <p className="text-zinc-500 text-sm font-bold tracking-widest uppercase">
              © {new Date().getFullYear()} Gabriel Caribé
            </p>
          </div>

          {/* Right Side: Social & Contact Links */}
          <div className="flex gap-10">
            {/* Email Link */}
            <a
              href="mailto:g.caribe@mail.utoronto.ca?subject=Reaching out from your Portfolio"
              className="group flex items-center gap-2 text-zinc-400 hover:text-[#ea580c] transition-all duration-300 text-sm font-semibold"
            >
              <div className="w-1.5 h-1.5 bg-zinc-800 group-hover:bg-[#ea580c] rounded-full transition-colors"></div>
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-caribe/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-zinc-400 hover:text-[#ea580c] transition-all duration-300 text-sm font-semibold"
            >
              <div className="w-1.5 h-1.5 bg-zinc-800 group-hover:bg-[#ea580c] rounded-full transition-colors"></div>
              LinkedIn
            </a>

            <a
              href="https://github.com/gabrielhcaribe"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-zinc-400 hover:text-[#ea580c] transition-all duration-300 text-sm font-semibold"
            >
              <div className="w-1.5 h-1.5 bg-zinc-800 group-hover:bg-[#ea580c] rounded-full transition-colors"></div>
              GitHub
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}