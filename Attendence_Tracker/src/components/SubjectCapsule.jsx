import { calculatePercentage } from '../utils/attendance';

function SubjectCapsule({ subject, onClick }) {
    const { name, attended, conducted } = subject;
    const percentage = parseFloat(calculatePercentage(attended, conducted));


    const isDanger = percentage < 75;
    const borderColor = isDanger ? 'border-red-500/50' : 'border-emerald-500/50';
    const textColor = isDanger ? 'text-red-400' : 'text-emerald-400';

    return (
        <button
            onClick={onClick}
            className={`
                group relative flex items-center gap-3 px-5 py-3 
                bg-[#111] border ${borderColor} rounded-full 
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
