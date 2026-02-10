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
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 sm:px-12 md:py-10 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-2 h-2 bg-white rounded-full group-hover:bg-coral transition-colors duration-300" />
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-white">ACME_LAB</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12 lg:gap-16">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] font-mono tracking-[0.15em] text-white/60 hover:text-white transition-colors duration-300 uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <a
            href="#contact"
            className="hidden sm:inline-block px-6 py-2 bg-white text-dark text-[10px] font-mono font-bold tracking-[0.1em] hover:bg-coral hover:text-white transition-all duration-300 clip-path-slant"
          >
            START PROJECT
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-coral transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8">
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
