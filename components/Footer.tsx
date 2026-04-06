export default function Footer() {
  return (
    <footer className="py-20 bg-background-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-8 bg-primary rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-white">
                  deployed_code
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Atticflow
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A digital product studio specializing in high-end design, custom
              web applications, and AI-driven automation.
            </p>

            <div className="flex gap-4">
              <a className="text-slate-500 hover:text-primary" href="#">
                <span className="material-symbols-outlined">
                  alternate_email
                </span>
              </a>
              <a className="text-slate-500 hover:text-primary" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a className="text-slate-500 hover:text-primary" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a className="hover:text-primary" href="#">
                  UX/UI Design
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Web Development
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  AI Automation
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Custom Dashboards
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Studio</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a className="hover:text-primary" href="#">
                  Our Process
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Case Studies
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Tech Stack
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">
              Get the latest insights on AI and web dev.
            </p>

            <div className="flex gap-2">
              <input
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary text-sm"
                placeholder="Email"
                type="email"
              />
              <button className="bg-primary px-3 py-2 rounded-lg">
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 Atticflow Agency. All rights reserved.</p>

          <div className="flex gap-6">
            <a className="hover:text-white" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}