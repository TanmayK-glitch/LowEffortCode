import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark">
      {/* Top decorative line */}
      <div className="w-full h-px bg-white/10" />

      {/* Main navbar content */}
      <div className="relative px-6 sm:px-10 md:px-14 py-5">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">

          {/* Brand — Left */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-2 h-2 bg-white rounded-full group-hover:bg-coral transition-colors duration-300" />
            <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-white">NODE_LABS</span>
          </a>

          {/* Desktop Nav — Center */}
          <div className="hidden md:flex items-center gap-10 lg:gap-14 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative flex flex-col items-center justify-center"
              >
                <span className="text-[10px] font-mono tracking-[0.18em] text-white/60 group-hover:text-white transition-colors duration-300 uppercase">
                  {link.label}
                </span>
                <span className="w-1.5 h-1.5 bg-coral rounded-full absolute -bottom-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle — Right */}
          <div className="flex items-center gap-6 shrink-0">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center relative px-6 py-2 border border-white/30 text-white text-[10px] font-mono font-bold tracking-[0.15em] uppercase overflow-hidden group transition-all duration-300 hover:border-white hover:text-dark hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <span className="relative z-10">Start Project</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-coral transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="w-full h-px bg-white/10" />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-8 right-6 text-white/50 hover:text-white"
          >
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-mono text-white/80 hover:text-coral tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 px-8 py-3 bg-coral text-white font-mono tracking-widest text-sm hover:bg-white hover:text-dark transition-colors"
          >
            START PROJECT
          </a>
        </div>
      )}
    </nav>
  )
}
