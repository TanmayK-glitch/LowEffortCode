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

        if (!name.trim()) {
            setError("Subject name is required");
            return;
        }

        const att = parseInt(attended) || 0;
        const cond = parseInt(conducted) || 0;

        if (att < 0 || cond < 0) {
            setError("Values cannot be negative");
            return;
        }

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
                className="
                    w-full py-12 px-6 
                    border-2 border-dashed border-neutral-700 hover:border-emerald-500/50 
                    bg-neutral-900/30 hover:bg-neutral-900/60
                    rounded-3xl cursor-pointer transition-all duration-300 group
                    flex flex-col items-center justify-center gap-4
                "
            >
                <div className="p-4 bg-neutral-800 rounded-full group-hover:bg-neutral-700 text-neutral-400 group-hover:text-white transition-colors duration-300">
                    <Plus size={32} />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-bold text-neutral-300 group-hover:text-white transition-colors">Add New Subject</h2>
                    <p className="text-sm text-neutral-500 group-hover:text-neutral-400">Track a new course</p>
                </div>
            </button>
        );
    }

    return (
        <div className="w-full bg-[#111] border border-white/10 rounded-3xl p-8 animate-in fade-in zoom-in-95 duration-300 relative overflow-hidden shadow-2xl">
            {/* Error Toast specific to this form */}
            {error && (
                <div className="absolute top-4 left-0 right-0 mx-auto w-max max-w-[90%] z-50 animate-in slide-in-from-top-2 fade-in duration-300">
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/50 text-red-200 px-4 py-2 rounded-lg shadow-xl backdrop-blur-md">
                        <AlertCircle size={16} className="text-red-400" />
                        <span className="text-xs font-bold uppercase tracking-wide">{error}</span>
                    </div>
                </div>
            )}

            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">New Subject</h3>
                <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white transition-colors">
                    <X size={24} />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-wider">Subject Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Computer Networks"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-neutral-700 text-lg"
                        autoFocus
                    />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-wider">Attended</label>
                        <input
                            type="number"
                            min="0"
                            value={attended}
                            onChange={(e) => setAttended(e.target.value)}
                            placeholder="0"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-neutral-700 text-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-wider">Conducted</label>
                        <input
                            type="number"
                            min="0"
                            value={conducted}
                            onChange={(e) => setConducted(e.target.value)}
                            placeholder="0"
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-neutral-700 text-lg"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-black rounded-xl transition-all font-bold text-lg shadow-lg hover:shadow-emerald-500/20 active:scale-[0.99] mt-2"
                >
                    Create Subject
                </button>
            </form>
        </div>
    );
}

export default AddSubject;
