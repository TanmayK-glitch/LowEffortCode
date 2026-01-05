import { Github, Twitter, Info } from 'lucide-react';

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Left: Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        <span className="font-bold text-emerald-500">A</span>
                    </div>
                    <span className="font-bold text-lg tracking-tight">Attendance</span>
                </div>

                {/* Center: About */}
                <button className="hidden sm:flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
                    <Info size={16} />
                    <span>About</span>
                </button>

                {/* Right: Socials */}
                <div className="flex items-center gap-4">
                    <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
