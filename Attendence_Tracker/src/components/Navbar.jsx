import { Info } from 'lucide-react';
import { useState } from 'react';
import UserGuide from './UserGuide';

function Navbar() {
    const [isGuideOpen, setIsGuideOpen] = useState(false);

    function logoClick() {
        window.location.reload();
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                <div onClick={logoClick}
                    className="flex items-center gap-2 cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        <span className="font-bold text-emerald-500">P</span>
                    </div>
                    <span className="font-bold text-lg tracking-tight">Proxy</span>
                </div>


                <button
                    onClick={() => setIsGuideOpen(true)}
                    className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                >
                    <Info size={16} />
                    <span>About</span>
                </button>
            </div>

            <UserGuide
                isOpen={isGuideOpen}
                onClose={() => setIsGuideOpen(false)}
            />
        </nav>
    );
}

export default Navbar;
