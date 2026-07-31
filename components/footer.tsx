import Link from "next/link";
import { Layers, Mail, MapPin, Phone, Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-slate-100 dark:bg-slate-950">
      <div className="container mx-auto px-4 py-12 md:py-16 w-11/12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info Column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center size-9 rounded-xl bg-primary text-primary-foreground shadow-md">
                <Layers className="size-5" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Quantum<span className="text-primary-foreground">Stack</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Quantum Stack Technologies is a parent software engineering firm specializing in modern web applications, custom AI systems, cloud infrastructure, and enterprise solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="size-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-4.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="size-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="size-4.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="size-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-slate-200 tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Portfolio</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-primary/30 text-primary-foreground font-semibold">Featured</span>
                </Link>
              </li>
              <li>
                <Link href="/staff" className="hover:text-white transition-colors">Team Members</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-slate-200 tracking-wider uppercase">Solutions</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Web App Engineering</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Custom AI & LLMs</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Mobile App Development</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Cloud & Security Architecture</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Enterprise System Migration</Link>
              </li>
            </ul>
          </div>

          {/* Contact Snippet Column */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-slate-200 tracking-wider uppercase">Get in Touch</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="size-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@qstack.io" className="hover:text-white transition-colors">info@qstack.io</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="size-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <span>+234 800 QSTACK</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <span>Innovation District, Tech City</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Quantum Stack Technologies LTD. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
