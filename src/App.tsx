import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import CommandLineHero from './components/CommandLineHero';
import BrandPortfolio from './components/BrandPortfolio';
import TechStack from './components/TechStack';
import FundingSection from './components/FundingSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

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
      {/* Global Navigation */}
      <Header />

      {/* Main Corporate Sections */}
      <main id="app-main-content">
        <CommandLineHero />
        <BrandPortfolio />
        <TechStack />
        <FundingSection />
        <ContactForm />
      </main>

      {/* Corporate Footer */}
      <Footer />
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
