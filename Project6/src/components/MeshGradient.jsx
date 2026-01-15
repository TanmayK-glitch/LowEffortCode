function MeshGradient() {
    return (
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none bg-[#fafaf9]">
            {/* Static Mesh Gradient Background - No Animations */}
            <div className="absolute inset-0 opacity-60">
                {/* Pink blob - Top Right */}
                <div
                    className="absolute w-[80vw] h-[80vw] rounded-full blur-[120px] -top-[30%] -right-[20%]"
                    style={{ background: 'radial-gradient(circle, var(--color-gradient-pink) 0%, transparent 70%)' }}
                />

                {/* Orange blob - Bottom Left */}
                <div
                    className="absolute w-[70vw] h-[70vw] rounded-full blur-[100px] -bottom-[20%] -left-[10%]"
                    style={{ background: 'radial-gradient(circle, var(--color-gradient-orange) 0%, transparent 70%)' }}
                />

                {/* Teal blob - Bottom Right */}
                <div
                    className="absolute w-[60vw] h-[60vw] rounded-full blur-[100px] bottom-[10%] -right-[10%]"
                    style={{ background: 'radial-gradient(circle, var(--color-gradient-teal) 0%, transparent 70%)' }}
                />

                {/* Darker Pink - Top Left center */}
                <div
                    className="absolute w-[50vw] h-[50vw] rounded-full blur-[90px] top-[10%] left-[10%]"
                    style={{ background: 'radial-gradient(circle, var(--color-gradient-pink-dark) 0%, transparent 70%)' }}
                />
            </div>

            {/* Architectural Wireframe Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                }}
            />

            {/* Heavy Static Noise Overlay */}
            <div
                className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    filter: 'contrast(120%) brightness(100%)'
                }}
            />
        </div>
    );
}

export default MeshGradient;
