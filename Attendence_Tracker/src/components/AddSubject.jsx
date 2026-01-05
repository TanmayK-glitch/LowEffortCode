import { useState, useEffect } from 'react';
import { Plus, AlertCircle, X } from 'lucide-react';

function AddSubject({ onAdd }) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [attended, setAttended] = useState('');
    const [conducted, setConducted] = useState('');
    const [error, setError] = useState(null);

    // clear error after 3 seconds
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic Validation
        if (!name.trim()) {
            setError("Subject name is required");
            return;
        }

        const att = parseInt(attended) || 0;
        const cond = parseInt(conducted) || 0;

        // Logic check: Negatives
        if (att < 0 || cond < 0) {
            setError("Values cannot be negative");
            return;
        }

        // Logic Check: Attended > Conducted
        if (att > cond) {
            setError("Attended classes cannot be more than conducted");
            return;
        }

        onAdd({
            name,
            attended: att,
            conducted: cond
        });

        setName('');
        setAttended('');
        setConducted('');
        setIsOpen(false);
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="w-full py-4 border-2 border-dashed border-neutral-800 rounded-2xl text-neutral-500 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all flex items-center justify-center gap-2 group"
            >
                <div className="p-2 bg-neutral-800 rounded-full group-hover:bg-emerald-500/20 transition-colors">
                    <Plus size={20} />
                </div>
                <span className="font-medium">Add New Subject</span>
            </button>
        );
    }

    return (
        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 animate-in fade-in zoom-in-95 duration-200 relative">

            {/* Error Popup / Toast */}
            {error && (
                <div className="absolute -top-16 left-0 right-0 mx-auto w-max max-w-[90%] z-50 animate-in slide-in-from-bottom-2 fade-in duration-300">
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl shadow-xl backdrop-blur-md">
                        <AlertCircle size={18} className="text-red-400" />
                        <span className="text-sm font-medium">{error}</span>
                        <button onClick={() => setError(null)} className="ml-2 hover:bg-red-500/20 p-1 rounded-full transition-colors">
                            <X size={14} />
                        </button>
                    </div>
                </div>
            )}

            <h3 className="text-lg font-bold text-white mb-4">New Subject</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-xs text-neutral-400 mb-1 uppercase tracking-wider">Subject Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Data Structures"
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-neutral-700"
                        autoFocus
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs text-neutral-400 mb-1 uppercase tracking-wider">Attended</label>
                        <input
                            type="number"
                            min="0"
                            value={attended}
                            onChange={(e) => setAttended(e.target.value)}
                            placeholder="0"
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-neutral-700"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-neutral-400 mb-1 uppercase tracking-wider">Conducted</label>
                        <input
                            type="number"
                            min="0"
                            value={conducted}
                            onChange={(e) => setConducted(e.target.value)}
                            placeholder="0"
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-neutral-700"
                        />
                    </div>
                </div>
                <div className="flex gap-3 pt-2">
                    <button
                        type="button"
                        onClick={() => { setIsOpen(false); setError(null); }}
                        className="flex-1 py-2 px-4 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg transition-colors font-medium text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="flex-1 py-2 px-4 bg-emerald-500 hover:bg-emerald-600 text-black rounded-lg transition-colors font-bold text-sm"
                    >
                        Add Subject
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddSubject;
