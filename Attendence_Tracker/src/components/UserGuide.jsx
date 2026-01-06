import { X, BookOpen, CheckCircle, XCircle, Ban } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

function UserGuide({ isOpen, onClose }) {
    if (!isOpen) return null;

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            <div className="relative w-full max-w-lg bg-[#111] border border-white/10 rounded-2xl p-6 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                        <BookOpen size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white tracking-wide">User Guide</h3>
                        <p className="text-neutral-400 text-sm">How to manage your attendance</p>
                    </div>
                </div>


                <div className="space-y-8">


                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Getting Started
                        </h4>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Click <strong>Add New Subject</strong> to start tracking a course. Enter the subject name and your current attendance numbers if you have them.
                        </p>
                    </div>


                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Daily Updates
                        </h4>
                        <div className="grid gap-3">
                            <div className="p-3 rounded-xl bg-neutral-900/50 border border-white/5 flex gap-3">
                                <CheckCircle className="text-emerald-500 shrink-0" size={20} />
                                <div>
                                    <p className="text-white font-medium text-sm">Attended Class</p>
                                    <p className="text-neutral-500 text-xs mt-1">Mark as <strong>Present</strong>. Increases both your 'Attended' and 'Conducted' count.</p>
                                </div>
                            </div>

                            <div className="p-3 rounded-xl bg-neutral-900/50 border border-white/5 flex gap-3">
                                <XCircle className="text-red-400 shrink-0" size={20} />
                                <div>
                                    <p className="text-white font-medium text-sm">Bunked Class</p>
                                    <p className="text-neutral-500 text-xs mt-1">Mark as <strong>Absent</strong>. Increases 'Conducted' count but keeps 'Attended' same.</p>
                                </div>
                            </div>

                            <div className="p-3 rounded-xl bg-neutral-900/50 border border-white/5 flex gap-3">
                                <Ban className="text-neutral-400 shrink-0" size={20} />
                                <div>
                                    <p className="text-white font-medium text-sm">Canceled Class</p>
                                    <p className="text-neutral-500 text-xs mt-1">
                                        If the teacher cancels a class, <strong>do nothing</strong>. Since the class never happened, your attendance stats remain unchanged.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                        <h4 className="text-emerald-400 font-bold text-sm mb-2">💡 Quick Tip</h4>
                        <p className="text-neutral-400 text-xs leading-relaxed">
                            The app automatically calculates if you can afford to bunk (Safe Bunk) or if you need to attend more classes to maintain 75% attendance. Check the status in the subject details!
                        </p>
                    </div>

                </div>
            </div>
        </div>,
        document.body
    );
}

export default UserGuide;
