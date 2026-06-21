import React, { useState } from 'react';
import { useApp } from '../AppContext';
import BottomNavBar from './BottomNavBar';

interface DetailedExercise {
  name: string;
  desc: string;
  steps: string[];
  duration: string;
  intensity: 'Iniciante' | 'Intermediário' | 'Avançado';
  icon: string;
  color: string;
  expanded: boolean;
}

export const DicasExerciciosExpandidaScreen: React.FC = () => {
  const { navigate } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [exercises, setExercises] = useState<DetailedExercise[]>([
    {
      name: "Agachamento Livre",
      desc: "Mantenha a coluna reta e os calcanhares no chão.",
      steps: [
        "Fique de pé com os pés na largura dos ombros.",
        "Dobre os joelhos empurrando os quadris para trás.",
        "Desça até as coxas ficarem paralelas ao chão.",
        "Empurre o chão com os calcanhares para retornar."
      ],
      duration: "3 séries de 15 reps",
      intensity: "Iniciante",
      icon: "fitness_center",
      color: "bg-primary-container text-on-primary-container",
      expanded: true
    },
    {
      name: "Flexão de Braço Progressiva",
      desc: "Apoie bem as mãos e mantenha o core ativado.",
      steps: [
        "Apoie as mãos no chão ligeiramente mais abertas que os ombros.",
        "Mantenha o corpo alinhado da cabeça aos calcanhares.",
        "Desça o peito em direção ao chão dobrando os cotovelos.",
        "Empurre para cima mantendo a estabilidade do tronco."
      ],
      duration: "3 séries de 10 reps",
      intensity: "Intermediário",
      icon: "exercise",
      color: "bg-secondary-container text-on-secondary-container",
      expanded: false
    },
    {
      name: "Prancha Abdominal Isométrica",
      desc: "Mantenha o corpo alinhado por pelo menos 30 segundos.",
      steps: [
        "Apoie os antebraços e os dedos dos pés no chão.",
        "Mantenha os cotovelos alinhados sob os ombros.",
        "Contraia o abdômen e evite elevar o quadril.",
        "Sustente a posição respirando de forma controlada."
      ],
      duration: "3 sessões de 45 seg",
      intensity: "Iniciante",
      icon: "timer",
      color: "bg-tertiary-container text-on-tertiary-container",
      expanded: false
    },
    {
      name: "Polichinelo Intenso",
      desc: "Coordene braços e pernas em ritmo constante.",
      steps: [
        "Comece em pé com pernas juntas e braços ao lado do corpo.",
        "Salte abrindo as pernas e levantando os braços acima da cabeça.",
        "Salte novamente para retornar à posição inicial."
      ],
      duration: "4 séries de 40 seg",
      intensity: "Iniciante",
      icon: "settings_accessibility",
      color: "bg-surface-container-highest text-primary",
      expanded: false
    }
  ]);

  const toggleExpand = (index: number) => {
    setExercises((prev) =>
      prev.map((ex, idx) => (idx === index ? { ...ex, expanded: !ex.expanded } : ex))
    );
  };

  const filtered = exercises.filter(
    (ex) =>
      ex.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ex.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-32 relative selection:bg-primary-container">
      
      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-50 bg-surface-bright/95 backdrop-blur-md flex justify-between items-center h-16 px-6 md:px-12 border-b border-outline-variant/30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('Perfil Atualizado', 'push_back')}
            className="p-2 rounded-full hover:bg-surface-container transition-all active:scale-95 cursor-pointer flex items-center"
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-primary">Exercícios Expandido</span>
          </div>
        </div>

        <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
          <img
            alt="User avatar"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArM1_7ZXyl-Gwxdm4_JT90ZSoLi47UPWqVaN4kK5b0qNKE-q_cZaptpV5l1M920AM6tIeVTBD0GIsP8MrDWAOHxjxdPQc1mIgBlyKd-1VPcsWm4fGgMpOtvrAU8XzWCDgPoY7Wy_aLE6DDTlvv4mHEWetGZ7-QFUclo5I7bQP0ddItrEXmD9rH7tdJq6yrXJOafIAJZ7Yn0Rjwc1ymTGFKzMH6RopPoSbVFbStFi-QKVSFpBkron7AaDkjcjPm__tvdH5q0PeMS9p2"
          />
        </div>
      </header>

      {/* Main layout container */}
      <main className="w-full max-w-2xl px-6 py-6 mx-auto flex flex-col gap-6">

        {/* Search Input */}
        <div>
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg select-none">
              search
            </span>
            <input
              type="text"
              placeholder="Pesquisar técnicas avançadas..."
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-3.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary focus:outline-none shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Content Header */}
        <section className="mb-2">
          <h2 className="text-2xl font-bold text-primary mb-1">Rotinas de Exercício Expandida</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Consulte o cronograma de alongamentos, intensidade, repetições e passos avançados.
          </p>
        </section>

        {/* Detailed Exercise Bento Grid */}
        <section className="space-y-4">
          {filtered.map((ex, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl overflow-hidden p-5 shadow-sm transition-all"
            >
              <div
                onClick={() => toggleExpand(idx)}
                className="flex items-center gap-4 cursor-pointer select-none"
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl shrink-0 ${ex.color}`}>
                  <span className="material-symbols-outlined text-xl">{ex.icon}</span>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-primary tracking-tight">{ex.name}</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-bold uppercase tracking-wider font-mono">
                      {ex.intensity}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-0.5 leading-snug">
                    {ex.desc}
                  </p>
                </div>
                
                <span className="material-symbols-outlined text-outline/50 transition-transform">
                  {ex.expanded ? 'expand_less' : 'expand_more'}
                </span>
              </div>

              {ex.expanded && (
                <div className="mt-4 pt-4 border-t border-outline-variant/35 text-xs text-on-surface-variant flex flex-col gap-3 font-sans animate-in fade-in duration-300">
                  <div>
                    <h4 className="font-bold text-primary tracking-wide mb-1.5 uppercase text-[10px]">Passo a Passo:</h4>
                    <ol className="list-decimal list-inside space-y-1.5 pl-1 leading-relaxed">
                      {ex.steps.map((step, sIdx) => (
                        <li key={sIdx}>{step}</li>
                      ))}
                    </ol>
                  </div>
                  
                  <div className="flex justify-between items-center bg-surface-container-low p-2.5 rounded-lg border border-outline-variant/20 mt-1 font-mono text-[10px] font-bold text-on-surface-variant/90 tracking-wider">
                    <span>SÉRIES: {ex.duration}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* LifeStyle visual row */}
        <section className="flex flex-col gap-4 mt-2">
          {/* Card 1 */}
          <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm border border-outline-variant/15 group">
            <img
              alt="Gym work"
              className="absolute inset-0 w-full h-full object-cover transition-all group-hover:scale-[1.02] duration-500 brightness-[0.85]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6uZugsggYdWJ2qNaCVHmHCozcagkbc6BjQOc5653Chi4i6y1WzuNwg5MDcgcT3iiyd626SmDXXkmO98U-b7xEvO_zgpZAoHNx6Npdk6tmagNSh8TQ7sWeTCMZEFM5vGcROlT2isZ4oZDUW3JFWUCo_S_-ceJY-SvIKo1TPoF4-HYM-_LAHAMWKsYiDPh8n0I6X-gWTGyRMY7PY9EcEzq0LgdmBJip9I31oxB-UcsmKYX1FJTm9iTrcK5mW7rIkLv9R_k_THuHQhuS"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-5">
              <span className="text-[10px] text-primary-container font-extrabold uppercase tracking-widest pl-0.5">Movimente-se</span>
              <h4 className="text-base font-bold text-on-primary">Sua energia renovada todos os dias.</h4>
            </div>
          </div>
        </section>

      </main>

      {/* Shared bottom navigation menu - Home active */}
      <BottomNavBar activeTab="home" />
    </div>
  );
};
export default DicasExerciciosExpandidaScreen;
