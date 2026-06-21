import React, { useState } from 'react';
import { useApp } from '../AppContext';
import BottomNavBar from './BottomNavBar';

export const DicasEstudoScreen: React.FC = () => {
  const { navigate } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const techniques = [
    { title: "Pomodoro", desc: "Estude por 25 min e descanse 5.", icon: "timer", color: "bg-primary-container/20 text-primary" },
    { title: "Mapas Mentais", desc: "Organize ideias visualmente.", icon: "account_tree", color: "bg-tertiary-container/30 text-tertiary" },
    { title: "Revisão Espaçada", desc: "Revise em intervalos crescentes.", icon: "update", color: "bg-secondary-container/30 text-secondary" },
    { title: "Ambiente Calmo", desc: "Elimine distrações externas.", icon: "eco", color: "bg-primary-container/20 text-primary" },
    { title: "Auto-explicação", desc: "Ensine o conteúdo para si mesmo.", icon: "record_voice_over", color: "bg-tertiary-container/30 text-tertiary" }
  ];

  const filteredTech = techniques.filter(
    (t) =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-32 relative selection:bg-primary-container">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-md shadow-sm h-16 flex justify-between items-center px-6 border-b border-outline-variant/30">
        <div className="flex items-center gap-2">
          {/* arrow back fallback trigger */}
          <button
            onClick={() => navigate('Perfil Atualizado', 'push_back')}
            className="p-1 px-1.5 rounded-full text-primary hover:bg-surface-container transition-colors inline-block mr-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg leading-0">arrow_back</span>
          </button>
          <span className="material-symbols-outlined text-primary text-xl">nutrition</span>
          <span className="font-bold text-lg text-primary tracking-tight">VitalTask</span>
        </div>
        
        <div
          onClick={() => navigate('Perfil Atualizado', 'none')}
          className="w-10 h-10 rounded-full bg-secondary-container overflow-hidden border-2 border-primary-container cursor-pointer transition-transform hover:scale-105 active:scale-95"
        >
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArM1_7ZXyl-Gwxdm4_JT90ZSoLi47UPWqVaN4kK5b0qNKE-q_cZaptpV5l1M920AM6tIeVTBD0GIsP8MrDWAOHxjxdPQc1mIgBlyKd-1VPcsWm4fGgMpOtvrAU8XzWCDgPoY7Wy_aLE6DDTlvv4mHEWetGZ7-QFUclo5I7bQP0ddItrEXmD9rH7tdJq6yrXJOafIAJZ7Yn0Rjwc1ymTGFKzMH6RopPoSbVFbStFi-QKVSFpBkron7AaDkjcjPm__tvdH5q0PeMS9p2"
          />
        </div>
      </header>

      {/* Main Container */}
      <main className="pt-24 px-6 max-w-[1140px] mx-auto flex flex-col gap-6">

        {/* Search widget row */}
        <section className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
            <span className="material-symbols-outlined text-xl select-none">search</span>
          </div>
          <input
            type="text"
            placeholder="Pesquisar técnicas de estudo..."
            className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-primary-container focus:border-primary outline-none transition-all duration-300 placeholder:text-on-surface-variant/60 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </section>

        {/* Intro suggestion section */}
        <header className="space-y-1 pl-0.5">
          <h1 className="text-2xl font-bold text-primary">Dicas de Estudo</h1>
          <p className="text-on-surface-variant text-sm max-w-md leading-relaxed">
            Potencialize seu aprendizado com técnicas comprovadas de foco e memorização.
          </p>
        </header>

        {/* Motivational Card and Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Quote Card */}
          <div className="relative overflow-hidden rounded-xl bg-white shadow-[0px_4px_20px_rgba(62,92,82,0.04)] group hover:shadow-md transition-shadow duration-300 min-h-[180px] flex flex-col justify-end p-6 border border-outline-variant/30">
            <div className="absolute inset-0 z-0 select-none">
              <img
                className="w-full h-full object-cover brightness-[0.75] group-hover:scale-105 transition-transform duration-700 font-sans"
                alt="Open book"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXu3pjYS8vI1vyCLU3Rfa9vQSHYWN996uNr4Dm2Eih47MEd3UJafqwRP8By5_6RipS0ukboMGV6NYb_AX_i11E7B6bIt0U-dJWTN0T-QB1Rxgz_gaHP7_7enF0LJMslrhetYf28pgiLLylHhhFTyAEFRUs571pfQMAckHv2EDcwB47hfcWnkiFLbYVUqH2wy-bQJNIMJDWwQpVZgPgI7UU7SeIRgpz8pLQUAJFNAhg1ogEUNwckS7zTHd32c81Dorh3Jchxk5c8m3ImL"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
            </div>
            
            <div className="relative z-10 text-white">
              <p className="text-base font-bold italic leading-tight">
                "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos."
              </p>
              <span className="text-[10px] font-bold mt-2.5 block text-primary-container tracking-widest uppercase font-mono">
                Provérbios 16:3
              </span>
            </div>
          </div>

          {/* Weekly study hour bar chart */}
          <div className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(62,92,82,0.04)] border border-outline-variant/30 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-sm text-on-surface">Tempo de Estudo</h3>
                <span className="text-primary font-bold text-sm tracking-wide font-mono">
                  14.5h <span className="text-on-surface-variant font-normal text-xs uppercase font-sans">/semana</span>
                </span>
              </div>
              
              <div className="flex items-end justify-between h-24 gap-2 pt-1">
                <div className="w-full bg-primary-container rounded-t-lg h-[40%] transition-all hover:bg-primary shadow-inner" title="Segunda"></div>
                <div className="w-full bg-primary-container rounded-t-lg h-[65%] transition-all hover:bg-primary shadow-inner" title="Terça"></div>
                <div className="w-full bg-primary-container rounded-t-lg h-[85%] transition-all hover:bg-primary shadow-inner" title="Quarta"></div>
                <div className="w-full bg-primary-container rounded-t-lg h-[55%] transition-all hover:bg-primary shadow-inner" title="Quinta"></div>
                {/* Friday is highlighted as active */}
                <div className="w-full bg-primary rounded-t-lg h-[95%] transition-all shadow-md" title="Sexta (Hoje)"></div>
                <div className="w-full bg-surface-container hover:bg-primary rounded-t-lg h-[20%] transition-all" title="Sábado"></div>
                <div className="w-full bg-surface-container hover:bg-primary rounded-t-lg h-[10%] transition-all" title="Domingo"></div>
              </div>
              
              <div className="flex justify-between mt-2.5 text-[9px] text-on-surface-variant/90 font-bold font-mono tracking-wider">
                <span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span><span>D</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scrollable listing */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pl-0.5">
            <h2 className="text-base font-bold text-primary font-sans">Técnicas Essenciais</h2>
            <button
              onClick={() => alert('Todas as técnicas já estão resumidas abaixo.')}
              className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1 hover:underline cursor-pointer"
            >
              VER TODAS <span className="material-symbols-outlined text-sm leading-0 text-primary">arrow_forward</span>
            </button>
          </div>

          <div className="space-y-2.5">
            {filteredTech.length === 0 ? (
              <div className="text-center py-6 text-on-surface-variant/60 font-sans text-xs">
                Nenhuma técnica encontrada para seu filtro.
              </div>
            ) : (
              filteredTech.map((tech, idx) => (
                <div
                  key={idx}
                  onClick={() => alert(`Cronograma de estudo para ${tech.title} carregado!`)}
                  className="bg-white p-4 rounded-xl shadow-[0px_4px_20px_rgba(62,92,82,0.02)] flex items-center gap-4 hover:bg-surface-container-low border border-outline-variant/30 hover:border-primary/20 transition-all duration-200 cursor-pointer group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${tech.color} shadow-inner`}>
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {tech.icon}
                    </span>
                  </div>
                  
                  <div className="flex-grow">
                    <h4 className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
                      {tech.title}
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                      {tech.desc}
                    </p>
                  </div>
                  
                  <span className="material-symbols-outlined text-outline-variant/80 text-xl font-bold group-hover:translate-x-1.5 transition-transform">
                    chevron_right
                  </span>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Deep Work Lifestyle Row */}
        <div className="relative overflow-hidden rounded-2xl bg-primary-container/10 p-5 border border-primary-container/20 flex flex-col md:flex-row items-center gap-5 my-2">
          
          <div className="md:w-1/3 w-full aspect-video md:aspect-square rounded-xl overflow-hidden shrink-0 shadow-sm">
            <img
              alt="Deep Work student focus"
              className="w-full h-full object-cover grayscale-[10%]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsgoqKbxlZRUa7liinvvulkRW-VwNaAeoIa93gMqv2QGhZwyF45IM5QqmAbIHSzEsTURTumGuI6VujzEnOFnvQ0letDNdx4hIGlLQJMpvpvr5RdYF2czhbvlCyJM81eRbauSVRZDkfxeeYtS2xKJ8m8QuCVw8-HsMVOVuRABJpVXP10IGM3VjP9mdTlmzp5-SZS_45l4gYfKV5a_CLBXTq_oIXRtXXtyL5PAU0uRSp-F1f_DICAJi_C7Xsr1SviUSbNB1QkTlL9QYv"
            />
          </div>
          
          <div className="space-y-2 text-left">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[9px] font-extrabold tracking-widest uppercase font-mono">
              Foco Semanal
            </span>
            <h3 className="text-base font-bold text-on-surface font-sans">A Arte do Deep Work</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Aprenda como atingir o estado de fluxo eliminando pequenas interrupções. Estudos mostram que levamos até 23 minutos para retomar o foco total após uma única distração.
            </p>
            <button
              onClick={() => alert(`Guia Completo "Deep Work" carregado!\nTópicos inclusos: Bloqueio de tempo, Higiene digital, Ciclos de Atenção.`)}
              className="mt-2 bg-primary text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl hover:bg-primary/95 active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              Ler Guia Completo
            </button>
          </div>

        </div>

      </main>

      {/* Shared bottom navigation menu - Profile active, isStudyTips passes the 'home' span configuration */}
      <BottomNavBar activeTab="profile" isStudyTips={true} />
    </div>
  );
};
export default DicasEstudoScreen;
