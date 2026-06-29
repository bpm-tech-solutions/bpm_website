import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Menu, X, ArrowDownRight, Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import BpmLogo from './BpmLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isWireframe, toggleWireframe } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Core Engine', href: '#home' },
    { name: 'Brand Assets', href: '#brands' },
    { name: 'Proprietary Tech', href: '#tech' },
    { name: 'Support', href: '#collaboration' },
    { name: 'Contact Portal', href: '#contact' },
  ];

  return (
    <>
      <header
        id="app-navigation-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isWireframe
            ? 'bg-white/95 border-b-2 border-black py-3 text-black'
            : isScrolled
            ? 'bg-[#0A0A0C]/85 backdrop-blur-md border-b border-[#1A1A22] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3 group">
            <BpmLogo 
              isWireframe={isWireframe} 
              className={`w-12 h-12 md:w-14 md:h-14 shrink-0 transition-all duration-300 ease-out transform group-hover:scale-110 ${
                isWireframe 
                  ? 'text-black' 
                  : 'text-blue-400 group-hover:text-blue-300 filter drop-shadow-[0_0_12px_rgba(59,130,246,0.45)]'
              }`} 
            />
            <div>
              <span className={`font-sans font-bold text-lg md:text-xl tracking-tight block ${isWireframe ? 'text-black font-mono' : 'text-white'}`}>
                BPM Tech Solutions
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-mono transition-colors duration-200 ${
                  isWireframe
                    ? 'text-black font-bold hover:underline'
                    : 'text-gray-400 hover:text-blue-400'
                }`}
              >
                {link.name.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* RIGHT BADGE / CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleWireframe}
              className={`p-2.5 border rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center ${
                isWireframe
                  ? 'bg-black text-white border-black hover:bg-neutral-800'
                  : 'bg-[#121217] text-gray-400 border-[#23232E] hover:text-white hover:border-[#353545]'
              }`}
              title={isWireframe ? "Switch to Dark Mode" : "Switch to Light Wireframe"}
            >
              {isWireframe ? (
                <Moon className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ) : (
                <Sun className="w-4 h-4 text-amber-500" />
              )}
            </button>

            <div className={`hidden lg:flex items-center gap-2 px-3 py-1.5 border rounded-lg text-[11px] font-mono ${
              isWireframe
                ? 'bg-neutral-100 border-black text-black'
                : 'bg-[#121217] border border-[#23232E] text-gray-400'
            }`}>
              <Globe className={`w-3.5 h-3.5 ${isWireframe ? 'text-black' : 'text-blue-400'}`} />
              <span>bpmtsolutions.com</span>
              <span className={`h-1.5 w-1.5 rounded-full ${isWireframe ? 'bg-black' : 'bg-blue-400 animate-pulse'}`} />
            </div>

            <a
              href="#contact"
              className={`inline-flex items-center text-xs font-mono px-4 py-2 rounded-lg transition-all duration-200 ${
                isWireframe
                  ? 'border-2 border-black bg-white text-black hover:bg-black hover:text-white font-bold'
                  : 'bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20'
              }`}
            >
              Connect
            </a>
          </div>

          {/* MOBILE TOGGLE & THEME BTN */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleWireframe}
              className={`p-2 border rounded-lg transition-all duration-200 cursor-pointer ${
                isWireframe
                  ? 'bg-neutral-100 border-black text-black'
                  : 'bg-[#121217] border border-[#20202A] text-gray-400'
              }`}
            >
              {isWireframe ? <Moon className="w-4 h-4 text-yellow-500 fill-yellow-500" /> : <Sun className="w-4 h-4 text-amber-500" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border transition-colors ${
                isWireframe
                  ? 'bg-white border-black text-black hover:bg-neutral-100'
                  : 'text-gray-400 hover:text-white hover:bg-[#15151C] border-[#20202A]'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-[65px] z-40 py-6 px-6 shadow-xl flex flex-col gap-5 md:hidden border-b ${
              isWireframe
                ? 'bg-white border-black text-black'
                : 'bg-[#0A0A0C]/95 backdrop-blur-xl border-[#1A1A22]'
            }`}
          >
            <div className="flex flex-col gap-4 text-left">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-mono py-2 border-b block ${
                    isWireframe
                      ? 'text-black border-neutral-200 font-bold'
                      : 'text-gray-300 hover:text-blue-400 border-[#14141A]'
                  }`}
                >
                  {link.name.toUpperCase()}
                </a>
              ))}
            </div>

            {/* Mobile metadata badge */}
            <div className={`flex items-center justify-between p-3.5 border rounded-xl text-xs font-mono ${
              isWireframe
                ? 'bg-neutral-100 border-black text-black'
                : 'bg-[#121217] border border-[#1E1E26] text-gray-400'
            }`}>
              <span className="flex items-center gap-1.5">
                <Globe className={`w-4 h-4 ${isWireframe ? 'text-black' : 'text-blue-400'}`} /> bpmtsolutions.com
              </span>
              <span className={`text-[10px] px-2 py-0.5 rounded border uppercase font-semibold ${
                isWireframe
                  ? 'bg-black text-white border-black'
                  : 'text-blue-400 bg-blue-500/10 border-blue-500/20'
              }`}>
                SECURE
              </span>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-center py-3 font-medium rounded-lg text-sm ${
                isWireframe
                  ? 'border-2 border-black bg-black text-white hover:bg-neutral-800'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold'
              }`}
            >
              Inquire Partnership
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
