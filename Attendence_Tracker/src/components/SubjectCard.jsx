import { Trash2, Edit2, Plus, Minus } from 'lucide-react';
import { calculatePercentage, calculateSafeBunk, getStatusColor } from '../utils/attendance';

function SubjectCard({ subject, onUpdate, onDelete }) {
    const { id, name, attended, conducted } = subject;
    const percentage = calculatePercentage(attended, conducted);
    const status = calculateSafeBunk(attended, conducted);
    const colorClass = getStatusColor(percentage);

    const handleAttend = () => {
        onUpdate(id, { ...subject, attended: attended + 1, conducted: conducted + 1 });
    };

    const handleBunk = () => {
        onUpdate(id, { ...subject, conducted: conducted + 1 });
    };

    return (
        <div className="relative group bg-neutral-900 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-emerald-500/5">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white tracking-wide">{name}</h3>
                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${colorClass}`}>
                    {percentage}%
                </div>
            </div>

            <div className="mb-6 space-y-1">
                <p className="text-sm text-neutral-400">
                    Attended: <span className="text-white">{attended}</span> / <span className="text-white">{conducted}</span>
                </p>
                <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <div
                        className={`h-full transition-all duration-500 ease-out ${percentage >= 80 ? 'bg-emerald-500' : percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                </div>
                <p className={`text-xs mt-2 ${status.type === 'danger' ? 'text-red-400' : 'text-emerald-400'}`}>
                    {status.message}
                </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                    onClick={handleAttend}
                    className="flex items-center justify-center gap-2 py-2 px-4 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg transition-colors border border-emerald-500/20"
                >
                    <Plus size={16} /> Present
                </button>
                <button
                    onClick={handleBunk}
                    className="flex items-center justify-center gap-2 py-2 px-4 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors border border-red-500/20"
                >
                    <Minus size={16} /> Absent
                </button>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                <button
                    onClick={() => onDelete(id)}
                    className="p-1.5 text-neutral-500 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors"
                >
                    <Trash2 size={14} />
                </button>
            </div>
        </div>
    );
}

export default SubjectCard;
