import React, { useState } from 'react';
import { useApp } from '../AppContext';
import BottomNavBar from './BottomNavBar';

interface TipItem {
  id: string;
  title: string;
  desc: string;
  checked: boolean;
  icon: string;
}

export const DicasMeditacaoScreen: React.FC = () => {
  const { navigate } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [tips, setTips] = useState<TipItem[]>([
    { id: '1', title: "Encontre um lugar tranquilo", desc: "Procure um ambiente sem distrações auditivas ou visuais.", checked: true, icon: "verified" },
    { id: '2', title: "Adote uma postura confortável", desc: "Sente-se com as costas eretas, mas relaxadas.", checked: false, icon: "info" },
    { id: '3', title: "Defina um tempo", desc: "Comece com 5 a 10 minutos por dia.", checked: true, icon: "timer" },
    { id: '4', title: "Foque na respiração", desc: "Sinta o ar entrando e saindo de forma natural.", checked: false, icon: "air" },
    { id: '5', title: "Gerencie os pensamentos", desc: "Observe-os como nuvens passando, sem julgamentos.", checked: false, icon: "psychology" },
    { id: '6', title: "Finalize com calma", desc: "Abra os olhos lentamente e observe como se sente.", checked: false, icon: "done_all" }
  ]);

  const handleToggleTip = (id: string) => {
    setTips((prev) =>
      prev.map((tip) => (tip.id === id ? { ...tip, checked: !tip.checked } : tip))
    );
  };

  const filteredPins = tips.filter(
    (tip) =>
      tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tip.desc.toLowerCase().includes(searchTerm.toLowerCase())
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
            <img
              alt="VitalTask Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2YBLzjN0Qn18nDyMIk1fVmR1bbfJ3k8stG0e3QYUT7Bt-t02IZOY8-p8JMdtnAFUUUPmntoxsG6b5lxGXiQeumcfOGnL1KXYA1Y5JtuWnRthID89jFFizzA2JVf2coKtOKwMjlWthQ1dZVEdGXmj_G4Bezxsd3AbnQmmUmDfF5ZiQfm_PQw0kyBo7hZU8_tKETSwNFqTl9_cIk_3o05Txt5eS_Ko0tDrOaXU5cLPmSmfNQUZjbJOUXCzcwKxYpFWw686lvMB7a0se"
            />
            <span className="font-bold text-lg text-primary">VitalTask</span>
          </div>
        </div>

        <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
          <img
            alt="Profile Avatar"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArM1_7ZXyl-Gwxdm4_JT90ZSoLi47UPWqVaN4kK5b0qNKE-q_cZaptpV5l1M920AM6tIeVTBD0GIsP8MrDWAOHxjxdPQc1mIgBlyKd-1VPcsWm4fGgMpOtvrAU8XzWCDgPoY7Wy_aLE6DDTlvv4mHEWetGZ7-QFUclo5I7bQP0ddItrEXmD9rH7tdJq6yrXJOafIAJZ7Yn0Rjwc1ymTGFKzMH6RopPoSbVFbStFi-QKVSFpBkron7AaDkjcjPm__tvdH5q0PeMS9p2"
          />
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-[1200px] px-6 py-6 mx-auto flex flex-col gap-6">

        {/* Search Widget */}
        <div className="w-full">
          <div className="flex bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 items-center gap-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all shadow-sm">
            <span className="material-symbols-outlined text-outline text-xl">search</span>
            <input
              type="text"
              placeholder="Encontre uma técnica de meditação..."
              className="bg-transparent border-none focus:ring-0 text-sm w-full focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Bento Column Layout on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Content Title Header (Lanscape spanning) */}
          <div className="lg:col-span-12">
            <h1 className="text-2xl font-bold text-primary mb-1">Dicas de Meditação</h1>
            <p className="text-on-surface-variant text-sm max-w-2xl leading-relaxed">
              Pratique estas etapas simples para encontrar seu equilíbrio interior e reduzir o estresse diário.
            </p>
          </div>

          {/* Left Column: Tips List checks */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/35 shadow-sm">
              <div className="space-y-3">
                {filteredPins.map((tip) => (
                  <label
                    key={tip.id}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer group ${
                      tip.checked
                        ? 'bg-primary-container/15 border-primary/20 hover:border-primary'
                        : 'bg-surface-container-low/75 border-transparent hover:border-primary/20'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={tip.checked}
                      onChange={() => handleToggleTip(tip.id)}
                      className="w-5 h-5 rounded border-outline text-primary focus:ring-primary/20 transition-all cursor-pointer shrink-0"
                    />
                    
                    <div className="flex flex-col">
                      <span
                        className={`text-sm font-semibold transition-all ${
                          tip.checked ? 'text-primary-container-variant/60 line-through opacity-70' : 'text-on-surface'
                        }`}
                      >
                        {tip.title}
                      </span>
                      <span className="text-[11px] text-on-surface-variant mt-0.5 leading-relaxed pr-2">
                        {tip.desc}
                      </span>
                    </div>

                    <span className="material-symbols-outlined ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      {tip.icon}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Info cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Visual Landscape Card */}
            <div className="relative h-56 rounded-2xl overflow-hidden shadow-md border border-outline-variant/10 group">
              <img
                alt="Dawn lake reflect balance"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBySvBdSguNd1rWl6FFa5ohtJ_cc854wYY8daC7gZv0m1B2H4EqAiWPtVP_UveeE-yH59DFZXhW_Nl0elC2gqqJ2tKgC3hkjtTk62WsYEf8TPn3f0WaNgc9GiH-cedQQPz9Q45P3oBCkU3Mg7m0Wm45fiiv88jx0ZglTmsv1m8shK9QEP3fffoSlVuz8fyCaTJnBjUijuNSvB-VAamdbPrX2fANjlMNr7Gs3ftzH1hrZ_a-yKcabM6U9n9snrEvQlgqdGyXUq1JpQas"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-transparent flex items-end p-5">
                <div className="text-on-primary">
                  <h3 className="text-base font-bold">Mantenha o Foco</h3>
                  <p className="text-xs opacity-90 leading-normal mt-0.5">A constância é mais importante que a duração.</p>
                </div>
              </div>
            </div>

            {/* Relaxation level charts widget */}
            <div className="bg-primary-container/10 border border-primary-container/20 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold text-on-primary-container/90 uppercase tracking-widest pl-0.5">
                  Seu Progresso de Relaxamento
                </h4>
                <span className="text-primary material-symbols-outlined text-lg leading-0 shrink-0">trending_up</span>
              </div>
              
              <div className="flex items-end gap-2 h-24 mb-3 px-1">
                <div className="flex-1 bg-primary-container/50 rounded-t-sm h-[40%] transition-all"></div>
                <div className="flex-1 bg-primary-container/50 rounded-t-sm h-[60%] transition-all"></div>
                <div className="flex-1 bg-primary-container/50 rounded-t-sm h-[55%] transition-all"></div>
                <div className="flex-1 bg-primary-container/50 rounded-t-sm h-[80%] transition-all"></div>
                <div className="flex-1 bg-primary rounded-t-sm h-[95%] transition-all shadow-sm"></div>
              </div>
              
              <div className="flex justify-between text-[9px] text-on-surface-variant font-bold tracking-wider font-sans">
                <span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span><span>SEX</span>
              </div>
            </div>

            {/* Audio player card */}
            <div className="bg-surface-container rounded-2xl p-5 border border-outline-variant/35 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary rounded-xl text-on-primary shadow-sm flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined leading-0">music_note</span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-bold text-primary">Som Ambiente</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5 mb-4">
                    Ouça sons relaxantes enquanto medita.
                  </p>
                  <button
                    onClick={() => alert('Abrindo player de áudio calmo... \n🎵 Tocando: Brisa do Amanhecer (15Hz Binaural Beats)')}
                    className="bg-primary hover:bg-primary/95 text-on-primary px-5 py-2 rounded-full text-xs font-bold cursor-pointer transition-colors active:scale-95 shadow-sm"
                  >
                    Abrir Player
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </main>

      {/* Shared bottom navigation menu - Profile active */}
      <BottomNavBar activeTab="profile" />
    </div>
  );
};
export default DicasMeditacaoScreen;
