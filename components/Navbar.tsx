export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-primary rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-white">
              deployed_code
            </span>
          </div>
          <span className="text-xl font-bold tracking-tight"><a href="/">Atticflow</a></span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/services"
          >
            Services
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#ai-solutions"
          >
            AI Solutions
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="portfolio"
          >
            Portfolio
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#process"
          >
            Process
          </a>
        </div>

        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all">
          Book a Free Call
        </button>
      </div>
    </nav>
  );
}