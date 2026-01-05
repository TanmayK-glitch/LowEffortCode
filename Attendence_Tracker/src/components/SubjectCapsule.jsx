import { calculatePercentage } from '../utils/attendance';

function SubjectCapsule({ subject, onClick }) {
    const { name, attended, conducted } = subject;
    const percentage = parseFloat(calculatePercentage(attended, conducted));

    // Condition Styling: < 75% gets red glow, >= 75% gets emerald glow
    const isDanger = percentage < 75;
    const borderColor = isDanger ? 'border-red-500/50 hover:border-red-400' : 'border-emerald-500/50 hover:border-emerald-400';
    const glowColor = isDanger ? 'shadow-red-900/20 hover:shadow-red-500/20' : 'shadow-emerald-900/20 hover:shadow-emerald-500/20';
    const textColor = isDanger ? 'text-red-400' : 'text-emerald-400';

    return (
        <button
            onClick={onClick}
            className={`
                group relative flex items-center gap-3 px-5 py-3 
                bg-[#111] border ${borderColor} rounded-full 
                transition-all duration-300 hover:-translate-y-1
            `}
        >
            <span className="font-medium text-neutral-200 text-sm">{name}</span>
            <div className={`px-2 py-0.5 rounded-full text-xs font-bold ${isDanger ? 'bg-red-500/10' : 'bg-emerald-500/10'} ${textColor}`}>
                {percentage}%
            </div>
        </button>
    );
}

export default SubjectCapsule;
