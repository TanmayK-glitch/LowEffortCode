import { Trash2, Plus, Minus, X } from 'lucide-react';
import { calculatePercentage, calculateSafeBunk, getStatusColor } from '../utils/attendance';
import { useEffect } from 'react';

function SubjectModal({ subject, isOpen, onClose, onUpdate, onDelete }) {
    if (!isOpen || !subject) return null;

    const { id, name, attended, conducted } = subject;
    const percentage = calculatePercentage(attended, conducted);
    const status = calculateSafeBunk(attended, conducted);
    const colorClass = getStatusColor(percentage);


    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const handleAttend = () => {
        onUpdate(id, { ...subject, attended: attended + 1, conducted: conducted + 1 });
    };

    const handleBunk = () => {
        onUpdate(id, { ...subject, conducted: conducted + 1 });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />


            <div className="relative w-full max-w-md bg-[#111] border border-white/10 rounded-2xl p-6 animate-in zoom-in-95 duration-200">


                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-neutral-500"
                >
                    <X size={20} />
                </button>


                <div className="flex justify-between items-start mb-6 pr-8">
                    <h3 className="text-2xl font-bold text-white tracking-wide">{name}</h3>
                </div>


                <div className="mb-8 space-y-4">
                    <div className="flex justify-between items-center bg-neutral-900/50 p-4 rounded-xl border border-white/5">
                        <span className="text-neutral-400 text-sm">Attendance</span>
                        <div className={`text-2xl font-bold ${percentage >= 75 ? 'text-emerald-400' : 'text-red-400'}`}>
                            {percentage}%
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-neutral-400">
                            <span>Attended: {attended}/{conducted}</span>
                            <span>Target: 75%</span>
                        </div>
                        <div className="h-3 w-full bg-neutral-800 rounded-full overflow-hidden">
                            <div
                                className={`h-full transition-all duration-500 ease-out ${percentage >= 80 ? 'bg-emerald-500' : percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                style={{ width: `${Math.min(percentage, 100)}%` }}
                            />
                        </div>
                        <p className={`text-center font-medium mt-3 ${status.type === 'danger' ? 'text-red-400' : 'text-emerald-400'}`}>
                            {status.message}
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-2 gap-4 mb-6">
                    <button
                        onClick={handleAttend}
                        className="flex flex-col items-center justify-center gap-2 py-4 bg-emerald-500/10 text-emerald-400 rounded-xl transition-all border border-emerald-500/20 active:scale-[0.98]"
                    >
                        <Plus size={24} />
                        <span className="font-semibold">Present</span>
                    </button>
                    <button
                        onClick={handleBunk}
                        className="flex flex-col items-center justify-center gap-2 py-4 bg-red-500/10 text-red-400 rounded-xl transition-all border border-red-500/20 active:scale-[0.98]"
                    >
                        <Minus size={24} />
                        <span className="font-semibold">Absent</span>
                    </button>
                </div>


                <div className="flex justify-center border-t border-white/5 pt-4">
                    <button
                        onClick={() => { onDelete(id); onClose(); }}
                        className="flex items-center gap-2 text-neutral-500 text-sm px-4 py-2 rounded-lg"
                    >
                        <Trash2 size={16} />
                        Delete Subject
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SubjectModal;
