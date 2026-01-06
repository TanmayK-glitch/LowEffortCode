import { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Navbar from './components/Navbar';
import AddSubject from './components/AddSubject';
import SubjectCapsule from './components/SubjectCapsule';
import SubjectModal from './components/SubjectModal';
import './index.css';


const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

function App() {
  const [subjects, setSubjects] = useLocalStorage('attendance-subjects', []);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => { setIsClient(true); }, []);

  const addSubject = (newSubject) => {
    setSubjects([...subjects, { id: generateId(), ...newSubject }]);
  };

  const updateSubject = (id, updatedSubject) => {
    const newSubjects = subjects.map(sub => sub.id === id ? updatedSubject : sub);
    setSubjects(newSubjects);

    if (selectedSubject && selectedSubject.id === id) {
      setSelectedSubject(updatedSubject);
    }
  };

  const deleteSubject = (id) => {
    setSubjects(subjects.filter(sub => sub.id !== id));
    if (selectedSubject && selectedSubject.id === id) {
      setSelectedSubject(null);
    }
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-emerald-500/30 pb-20">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-24 flex flex-col items-center">


        <div className="w-full max-w-4xl mb-12">
          <AddSubject onAdd={addSubject} />
        </div>


        {subjects.length > 0 && (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-wrap justify-center gap-4">
              {subjects.map(subject => (
                <SubjectCapsule
                  key={subject.id}
                  subject={subject}
                  onClick={() => setSelectedSubject(subject)}
                />
              ))}
            </div>
          </div>
        )}

      </main>


      <SubjectModal
        subject={selectedSubject}
        isOpen={!!selectedSubject}
        onClose={() => setSelectedSubject(null)}
        onUpdate={updateSubject}
        onDelete={deleteSubject}
      />


      <footer className="fixed bottom-0 left-0 right-0 py-4 text-center bg-[#0A0A0A]/80 backdrop-blur-sm border-t border-white/5 text-neutral-600 text-xs z-40">
        <p className='text-sm'>Designed and Developed by <a href="https://github.com/TanmayK-glitch" target="_blank" rel="noopener noreferrer" className='text-2xl font-bold text-emerald-500'>Tanmay</a></p>
      </footer>
    </div>
  )
}

export default App;
