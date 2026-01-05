import { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import SubjectCard from './components/SubjectCard';
import AddSubject from './components/AddSubject';
import { BookOpen } from 'lucide-react';
import './index.css';

// Simple UUID generator fallback if uuid module isn't installed
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

function App() {
  const [subjects, setSubjects] = useLocalStorage('attendance-subjects', []);
  const [isClient, setIsClient] = useState(false);

  // Fix hydration mismatch by only rendering after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  const addSubject = (newSubject) => {
    setSubjects([...subjects, { id: generateId(), ...newSubject }]);
  };

  const updateSubject = (id, updatedSubject) => {
    setSubjects(subjects.map(sub => sub.id === id ? updatedSubject : sub));
  };

  const deleteSubject = (id) => {
    setSubjects(subjects.filter(sub => sub.id !== id));
  };

  if (!isClient) return null;

  const totalClasses = subjects.reduce((acc, sub) => acc + sub.conducted, 0);
  const totalAttended = subjects.reduce((acc, sub) => acc + sub.attended, 0);
  const overallPercentage = totalClasses > 0 ? ((totalAttended / totalClasses) * 100).toFixed(1) : 0;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 font-sans selection:bg-emerald-500/30">
      <div className="max-w-md mx-auto min-h-screen flex flex-col p-6">

        {/* Header */}
        <header className="mb-8 pt-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/20">
              <BookOpen className="text-black" size={24} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Attendance</h1>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-neutral-500 text-sm font-medium">Manage your classes efficiently.</p>
            {subjects.length > 0 && (
              <div className="text-right">
                <span className="text-xs text-neutral-500 uppercase tracking-wider block">Overall</span>
                <span className={`text-xl font-bold ${overallPercentage >= 75 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {overallPercentage}%
                </span>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 flex flex-col gap-4 pb-20">
          {subjects.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12 border-2 border-dashed border-neutral-800 rounded-3xl bg-neutral-900/50">
              <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-neutral-500" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">No subjects yet</h3>
              <p className="text-neutral-500 text-sm max-w-[200px]">Add your subjects to start tracking attendance stats.</p>
            </div>
          ) : (
            subjects.map(subject => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                onUpdate={updateSubject}
                onDelete={deleteSubject}
              />
            ))
          )}

          <AddSubject onAdd={addSubject} />
        </main>

        <footer className="text-center py-6 text-neutral-600 text-xs">
          <p>Stay safe, stay above 75%.</p>
        </footer>

      </div>
    </div>
  )
}

export default App
