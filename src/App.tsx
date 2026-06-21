import React from 'react';
import { AppProvider, useApp } from './AppContext';
import { motion, AnimatePresence } from 'motion/react';

// Import our modular screen components
import LoginScreen from './components/LoginScreen';
import CadastrarScreen from './components/CadastrarScreen';
import CriarAfazerScreen from './components/CriarAfazerScreen';
import ProgressoSemanalScreen from './components/ProgressoSemanalScreen';
import CriarEventoScreen from './components/CriarEventoScreen';
import DicasExerciciosExpandidaScreen from './components/DicasExerciciosExpandidaScreen';
import ProgressoMensalScreen from './components/ProgressoMensalScreen';
import CalendarioScreen from './components/CalendarioScreen';
import PerfilAtualizadoScreen from './components/PerfilAtualizadoScreen';
import DicasExerciciosScreen from './components/DicasExerciciosScreen';
import DicasMeditacaoScreen from './components/DicasMeditacaoScreen';
import DicasEstudoScreen from './components/DicasEstudoScreen';

const ScreenRenderer: React.FC = () => {
  const { currentScreen, transitionType } = useApp();

  // Define motion transitions based on the spec specifications
  // push: slide right-to-left
  // push_back: slide left-to-right
  // slide_up: slide bottom-to-top
  // none: instant crossfade
  const getVariants = () => {
    switch (transitionType) {
      case 'push':
        return {
          initial: { x: '100vw', opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: '-100vw', opacity: 0 }
        };
      case 'push_back':
        return {
          initial: { x: '-100vw', opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: '100vw', opacity: 0 }
        };
      case 'slide_up':
        return {
          initial: { y: '100vh', opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: '-100vh', opacity: 0 }
        };
      case 'none':
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <LoginScreen />;
      case 'Cadastrar':
        return <CadastrarScreen />;
      case 'Criar Afazer':
        return <CriarAfazerScreen />;
      case 'Progresso Semanal':
        return <ProgressoSemanalScreen />;
      case 'Criar Evento':
        return <CriarEventoScreen />;
      case 'Dicas de Exercícios Expandida':
        return <DicasExerciciosExpandidaScreen />;
      case 'Progresso Mensal':
        return <ProgressoMensalScreen />;
      case 'Calendário':
        return <CalendarioScreen />;
      case 'Perfil Atualizado':
        return <PerfilAtualizadoScreen />;
      case 'Dicas de Exercícios':
        return <DicasExerciciosScreen />;
      case 'Dicas de Meditação':
        return <DicasMeditacaoScreen />;
      case 'Dicas de Estudo':
        return <DicasEstudoScreen />;
      default:
        return <LoginScreen />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentScreen}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={getVariants()}
        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        style={{ width: '100%', minHeight: '100vh' }}
      >
        {renderScreen()}
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <AppProvider>
      <ScreenRenderer />
    </AppProvider>
  );
}
