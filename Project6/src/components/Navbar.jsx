const navItems = [
    {
        name: 'Services',
        dropdown: [
            'Digital Marketing',
            'Web Design',
            'Web Solutions',
            'Mobile Apps',
            'Web Hosting'
        ]
    },
    {
        name: 'Portfolio',
        dropdown: []
    },
    {
        name: 'Insights',
        dropdown: []
    }
];

function Navbar() {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-1 p-1.5 pl-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl">
                {/* Logo Text */}
                <a href="/" className="mr-8 text-sm font-semibold tracking-wide text-[var(--color-text-primary)]">
                    Dimakh Consultants
                </a>

                {/* Navigation Links */}
                <ul className="flex items-center gap-1 list-none">
                    {navItems.map((item) => (
                        <li key={item.name} className="relative group">
                            <button className={`px-5 py-2.5 text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${item.dropdown.length > 0 ? 'pr-6' : ''}`}>
                                {item.name}
                                {item.dropdown.length > 0 && (
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] opacity-50 group-hover:opacity-100 transition-opacity">▾</span>
                                )}
                            </button>

                            {/* Dropdown */}
                            {item.dropdown.length > 0 && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-48 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform origin-top scale-95 group-hover:scale-100 py-3">
                                    <div className="bg-white/98 backdrop-blur-2xl border border-white/40 rounded-2xl shadow-2xl p-2 overflow-hidden ring-1 ring-black/5">
                                        <ul className="flex flex-col gap-1">
                                            {item.dropdown.map((subItem) => (
                                                <li key={subItem}>
                                                    <a href="#" className="block px-3 py-2 text-[11px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-black/5 rounded-lg transition-colors duration-200">
                                                        {subItem}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* CTAs */}
                <div className="relative group ml-4">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-300 via-purple-300 to-teal-300 rounded-full opacity-70 group-hover:opacity-100 blur-[0.5px] transition duration-200"></div>
                    <a
                        href="#contact"
                        className="relative block px-7 py-3 bg-[var(--color-text-primary)] text-white text-xs font-semibold rounded-full hover:bg-[#111] transition-all duration-200 whitespace-nowrap"
                    >
                        Talk to Us
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
