function Navbar() {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-1 p-1.5 pl-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl">
                {/* Logo Text */}
                <a href="/" className="mr-6 text-sm font-semibold tracking-wide text-[var(--color-text-primary)]">
                    Dimakh Consultants
                </a>

                {/* Navigation Links */}
                <ul className="flex items-center gap-1 list-none">
                    <li>
                        <a href="#services" className="px-4 py-2 text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/10 rounded-full transition-all duration-200">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="px-4 py-2 text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/10 rounded-full transition-all duration-200">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#insights" className="px-4 py-2 text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/10 rounded-full transition-all duration-200">
                            Insights
                        </a>
                    </li>
                </ul>

                {/* CTAs */}
                <a
                    href="#contact"
                    className="ml-2 px-5 py-2.5 bg-[var(--color-text-primary)] text-white text-xs font-semibold rounded-full hover:bg-[var(--color-accent-dark)] transition-all duration-200 shadow-lg"
                >
                    Talk to Us
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
