import { ThemeProvider, useTheme } from './context/ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';

function AppContent() {
  const { isWireframe } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-blue-500/30 selection:text-blue-300 ${
        isWireframe
          ? 'bg-white text-black font-mono'
          : 'bg-[#0A0A0C] text-gray-100'
      }`}
    >
      <BrowserRouter>
        {/* Global Navigation */}
        <Header />

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        {/* Corporate Footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
