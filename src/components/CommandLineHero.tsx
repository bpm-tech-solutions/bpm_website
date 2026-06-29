import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, Cpu, ExternalLink, RefreshCw, Layers } from 'lucide-react';
import MatrixBackground from './MatrixBackground';
import { useTheme } from '../context/ThemeContext';

export default function CommandLineHero() {
  const { isWireframe } = useTheme();
  const [typedText, setTypedText] = useState('');
  const [terminalLines, setTerminalLines] = useState<string[]>([
    'BPM(tm) Boot Loader v4.11-proprietorship',
    'Initializing network protocols... OK',
    'Binding to host: bpmtsolutions.com... OK',
    'Type "help" to list available subsystems.',
    '',
  ]);
  const [commandInput, setCommandInput] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState<'typing_bmp' | 'backspacing' | 'typing_full' | 'completed' | 'custom'>('typing_bmp');
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom of terminal when lines change
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLines, typedText]);

  // Main typing animation for "bmp" -> backspace -> "bpm tech solutions"
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const firstWord = 'bmp';
    const finalWord = 'bpm tech solutions';

    if (phase === 'typing_bmp') {
      if (typedText.length < firstWord.length) {
        timer = setTimeout(() => {
          setTypedText(firstWord.slice(0, typedText.length + 1));
        }, 180); // speed of initial typing
      } else {
        // Pause before realizing typo
        timer = setTimeout(() => {
          setPhase('backspacing');
        }, 1000);
      }
    } else if (phase === 'backspacing') {
      if (typedText.length > 1) { // backspace back to 'b'
        timer = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 120); // backspace speed
      } else {
        // Pause after backspacing
        timer = setTimeout(() => {
          setPhase('typing_full');
        }, 600);
      }
    } else if (phase === 'typing_full') {
      const targetText = finalWord;
      if (typedText !== targetText) {
        timer = setTimeout(() => {
          setTypedText(targetText.slice(0, typedText.length + 1));
        }, 100); // typing speed for corrected phrase
      } else {
        // Complete and press enter to insert line
        timer = setTimeout(() => {
          setPhase('completed');
          setTerminalLines((prev) => [
            ...prev,
            `guest@bpmtsolutions:~$ locate --brand ${finalWord}`,
            `[DNS] Resolving bpmtsolutions.com...`,
            `[IP] 104.21.43.208 (Cloudflare Edge Node)`,
            `[HTTPS] SSL Certificate handshake success.`,
            `[PORTAL] Redirecting to premium brand portal.`,
            `[STATUS] System active. Welcome to BPM Tech Solutions.`,
            '',
          ]);
        }, 1500);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, phase]);

  // Handle command submissions in terminal
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = commandInput.trim().toLowerCase();
    if (!cmd) return;

    let response: string[] = [];

    if (cmd === 'help') {
      response = [
        'Available commands:',
        '  brands    - List active brands in the BPMTS portfolio',
        '  metrics   - Read parent operations performance data',
        '  tech      - Query enterprise automation architecture',
        '  about     - View BPM Tech Solutions sole proprietorship profile',
        '  foss      - Learn about our open-source ideology & FOSS values',
        '  clear     - Wipe command terminal cache',
      ];
    } else if (cmd === 'brands') {
      response = [
        '--- BPM Tech Solutions Portfolio ---',
        '  • 0xhackops (0xhackops.com) - Web penetration testing & audits',
        '  • web3hackers (web3hackers.com) - Blockchain & contract security audits',
        '  • Working Learner (workinglearner.com) - Professional upskilling portal',
        '  • Apex Digital Press - Online digital book publishing',
        '  • PrintBPM Custom Posters - Custom poster printing & fulfillment',
        '  • BPM AI Studio - AI music production & algorithmic scoring suite',
        '  • Tricity SolidWood - Localised D2C furniture delivery in Chandigarh, Panchkula & Mohali',
      ];
    } else if (cmd === 'metrics') {
      response = [
        '--- Active Business Sectors ---',
        '  • Cyber Security: Web security auditing services under 0xhackops',
        '  • Web3 Security: Smart contract vulnerability auditing under web3hackers',
        '  • Education: Skills training portal under Working Learner',
        '  • Publishing: Formatting and publishing under Apex Digital Press',
        '  • Printing: Poster printing orders under PrintBPM Custom Posters',
        '  • AI Audio: Automated music scoring & composition under BPM AI Studio',
        '  • E-Commerce: Localised custom solid wood furniture delivery under Tricity SolidWood',
      ];
    } else if (cmd === 'tech') {
      response = [
        '--- Core Operations & Tools ---',
        '  • Security: Web security checkers & automated pen-testing audits',
        '  • Web3: Static smart contract vulnerability analysers',
        '  • Education: Online course player, video portal & student tracking',
        '  • Print: Digital raster file processing and automated poster ordering',
        '  • Publishing: EPUB validation schemas and layout builders',
        '  • Music Algorithms: Custom neural audio generators & MIDI scorers',
        '  • Localised Routing: Intelligent dispatch & local delivery trackers for Tricity',
      ];
    } else if (cmd === 'about') {
      response = [
        'BPM Tech Solutions is an online parent technology and services sole proprietorship.',
        'We manage digital brands in Web3, cyber security, professional training, digital publishing, poster printing, AI music production, and localised e-commerce.',
      ];
    } else if (cmd === 'foss') {
      response = [
        '--- Free and Open Source Software (FOSS) Ideology ---',
        '  At BPM Tech Solutions, we firmly believe that technology and high-quality',
        '  software should not be gatekept or limited to a privileged few.',
        '  We actively write, maintain, and contribute to open-source software,',
        '  empowering developers and users with transparent, self-hostable tools.',
        '  Our digital solutions are open, clean, and community-driven.',
      ];
    } else if (cmd === 'clear') {
      setTerminalLines([]);
      setCommandInput('');
      return;
    } else {
      response = [`Command not found: "${cmd}". Type "help" for valid registers.`];
    }

    setTerminalLines((prev) => [...prev, `guest@bpmtsolutions:~$ ${commandInput}`, ...response, '']);
    setCommandInput('');
    setPhase('custom');
  };

  const resetTerminal = () => {
    setTerminalLines([
      'BPM(tm) Boot Loader v4.11-proprietorship',
      'Initializing network protocols... OK',
      'Binding to host: bpmtsolutions.com... OK',
      'Type "help" to list available subsystems.',
      '',
    ]);
    setTypedText('');
    setPhase('typing_bmp');
    setCommandInput('');
  };

  return (
    <section
      id="home"
      className={`min-h-screen pt-32 pb-24 flex items-center relative overflow-hidden transition-colors duration-300 ${
        isWireframe ? 'bg-white text-black' : 'bg-[#0A0A0C] text-gray-100'
      }`}
    >
      {/* Dynamic Digital Rain Overlay in dark mode only */}
      {!isWireframe && <MatrixBackground />}

      {/* Grid Pattern overlay for light wireframe theme */}
      {isWireframe && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
      )}

      {/* Neon glowing ambient circles in dark mode only */}
      {!isWireframe && (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        </>
      )}

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Heading and Core Copy */}
          <div className="lg:col-span-5 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono ${
                isWireframe
                  ? 'border-2 border-black bg-neutral-100 text-black font-bold'
                  : 'bg-blue-500/10 border border-blue-500/20 text-[#3B82F6]'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" /> ONLINE OPERATIONS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight leading-[1.1] mb-6 ${
                isWireframe ? 'text-black' : 'text-white'
              }`}
            >
              Making the World Better,{' '}
              <span className={isWireframe ? 'underline decoration-black decoration-2' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400'}>
                Bits Per Minute
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg leading-relaxed mb-8 ${isWireframe ? 'text-neutral-800' : 'text-gray-400'}`}
            >
              BPM Tech Solutions is an online technology, services, and open-source sole proprietorship. Guided by our FOSS (Free & Open Source Software) ideology, we believe software should be accessible to all, not limited to a privileged few. We actively build open-source tools alongside managing diverse brand sectors in cyber security, Web3 audits, continuing education, AI music production, digital publishing, poster printing, and local commerce.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#brands"
                id="btn-explore-brands"
                className={`inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-sans font-medium text-sm transition-all duration-300 group ${
                  isWireframe
                    ? 'border-2 border-black bg-black text-white hover:bg-neutral-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:translate-y-0'
                }`}
              >
                <Layers className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                Explore Brand Sectors
              </a>
              <a
                href="#contact"
                id="btn-partner-cta"
                className={`inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-sans font-medium text-sm transition-all duration-300 ${
                  isWireframe
                    ? 'border-2 border-black bg-white text-black hover:bg-neutral-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-[#1A1A1E] border border-[#2D2D35] hover:bg-[#232329] hover:border-[#3D3D49] text-white hover:-translate-y-0.5 active:translate-y-0'
                }`}
              >
                Connect to Portal
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`grid grid-cols-3 gap-6 pt-10 mt-10 border-t text-left ${
                isWireframe ? 'border-black' : 'border-[#1A1A1E]'
              }`}
            >
              <div>
                <span className={`block text-2xl font-bold font-sans ${isWireframe ? 'text-black font-mono' : 'text-white'}`}>99.9%</span>
                <span className={`block text-xs font-mono uppercase tracking-wider mt-1 ${isWireframe ? 'text-black' : 'text-gray-500'}`}>Vulnerability Clear</span>
              </div>
              <div>
                <span className={`block text-2xl font-bold font-sans ${isWireframe ? 'text-black font-mono' : 'text-white'}`}>Web3</span>
                <span className={`block text-xs font-mono uppercase tracking-wider mt-1 ${isWireframe ? 'text-black' : 'text-gray-500'}`}>dApps & App Deploys</span>
              </div>
              <div>
                <span className={`block text-2xl font-mono font-bold ${isWireframe ? 'text-black' : 'text-blue-400'}`}>100%</span>
                <span className={`block text-xs font-mono uppercase tracking-wider mt-1 ${isWireframe ? 'text-black' : 'text-gray-500'}`}>Online & Automated</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Interactive Command Line Terminal */}
          <div className="lg:col-span-7" id="terminal-wrapper-panel">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`w-full overflow-hidden transition-all duration-300 ${
                isWireframe
                  ? 'bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black'
                  : 'bg-[#0C0C0F]/90 backdrop-blur-xl border border-blue-500/20 rounded-xl shadow-[0_20px_50px_rgba(10,10,12,0.8),0_0_30px_rgba(30,58,138,0.08)] focus-within:border-blue-500/40'
              }`}
            >
              {/* Terminal Title Bar */}
              <div className={`px-4 py-3 border-b flex items-center justify-between ${
                isWireframe ? 'bg-neutral-100 border-black' : 'bg-[#131318] border-[#1A1A22]'
              }`}>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${isWireframe ? 'bg-neutral-300 border border-black' : 'bg-red-500/80'}`} />
                  <div className={`w-3 h-3 rounded-full ${isWireframe ? 'bg-neutral-300 border border-black' : 'bg-yellow-500/80'}`} />
                  <div className={`w-3 h-3 rounded-full ${isWireframe ? 'bg-neutral-300 border border-black' : 'bg-blue-500/80'}`} />
                </div>
                <div className={`text-[11px] font-mono hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md border ${
                  isWireframe
                    ? 'bg-white border-black text-black'
                    : 'bg-[#1C1C24] border-[#2D2D3A] text-gray-400'
                }`}>
                  <Terminal className={`w-3.5 h-3.5 ${isWireframe ? 'text-black' : 'text-blue-400 animate-pulse'}`} />
                  shell@bpmtsolutions.com ~ static-dns
                </div>
                <div className="w-12 flex justify-end">
                  <button
                    onClick={resetTerminal}
                    title="Reset typing sequence"
                    className={`transition-colors duration-200 cursor-pointer ${
                      isWireframe ? 'text-black hover:text-neutral-600' : 'text-gray-500 hover:text-blue-400'
                    }`}
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Terminal Display */}
              <div className={`p-6 h-[380px] overflow-y-auto font-mono text-xs md:text-sm text-left space-y-1.5 ${
                isWireframe ? 'bg-white text-black' : 'text-gray-300 bg-transparent'
              }`}>
                {terminalLines.map((line, idx) => (
                  <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                    {line.startsWith('guest@') ? (
                      <span className={isWireframe ? 'text-black font-bold' : 'text-[#38BDF8]'}>{line}</span>
                    ) : line.startsWith('[SUCCESS]') ? (
                      <span className={isWireframe ? 'text-black font-bold' : 'text-blue-400'}>{line}</span>
                    ) : line.startsWith('[SYSTEM]') ? (
                      <span className={isWireframe ? 'text-black font-bold' : 'text-[#FBBF24]'}>{line}</span>
                    ) : line.startsWith('[DNS]') || line.startsWith('[IP]') || line.startsWith('[HTTPS]') ? (
                      <span className={isWireframe ? 'text-black font-bold' : 'text-[#2DD4BF]'}>{line}</span>
                    ) : (
                      line
                    )}
                  </div>
                ))}

                {/* Animated Typing Prompt */}
                {phase !== 'completed' && phase !== 'custom' && (
                  <div className="flex items-center flex-wrap leading-relaxed">
                    <span className={`mr-2 ${isWireframe ? 'text-black font-bold' : 'text-[#38BDF8]'}`}>guest@bpmtsolutions:~$ locate --brand </span>
                    <span className={isWireframe ? 'text-black underline font-bold' : 'text-blue-400 font-bold'}>{typedText}</span>
                    <span
                      className={`inline-block w-2 h-4 ml-1 transition-opacity duration-100 ${
                        isWireframe
                          ? 'bg-black'
                          : 'bg-blue-400'
                      } ${showCursor ? 'opacity-100' : 'opacity-0'}`}
                    />
                  </div>
                )}

                {/* Live Custom Command Prompt */}
                {(phase === 'completed' || phase === 'custom') && (
                  <form onSubmit={handleCommandSubmit} className={`flex items-center pt-2 mt-4 border-t ${
                    isWireframe ? 'border-black' : 'border-[#1D1D26]'
                  }`}>
                    <span className={`mr-2 shrink-0 ${isWireframe ? 'text-black font-bold' : 'text-[#38BDF8]'}`}>guest@bpmtsolutions:~$</span>
                    <input
                      type="text"
                      value={commandInput}
                      onChange={(e) => setCommandInput(e.target.value)}
                      placeholder="Type 'help' for options..."
                      className={`bg-transparent focus:outline-none border-none p-0 flex-1 font-mono text-xs md:text-sm ${
                        isWireframe ? 'text-black placeholder-neutral-400' : 'text-blue-400 placeholder-blue-950/50'
                      }`}
                      autoFocus
                    />
                    <button type="submit" className="hidden">Submit</button>
                  </form>
                )}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Quick Help Bar */}
              <div className={`px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono border-t ${
                isWireframe ? 'bg-neutral-100 border-black text-black' : 'bg-[#111116] border-[#1A1A22] text-gray-500'
              }`}>
                <span className="flex items-center gap-1">
                  <Shield className={`w-3.5 h-3.5 ${isWireframe ? 'text-black' : 'text-blue-500/60'}`} /> Secure Sandbox (HTTPS v1.2)
                </span>
                <div className="flex gap-4 font-bold">
                  <button
                    onClick={() => {
                      setCommandInput('brands');
                      setTerminalLines((prev) => [...prev, 'guest@bpmtsolutions:~$ brands', '--- BPM Tech Solutions Portfolio ---', '  • 0xhackops', '  • web3hackers', '  • Working Learner', '  • Apex Digital Press', '  • PrintBPM Custom Posters', '']);
                      setPhase('custom');
                    }}
                    className="hover:underline cursor-pointer"
                  >
                    [run brands]
                  </button>
                  <button
                    onClick={() => {
                      setCommandInput('metrics');
                      setTerminalLines((prev) => [...prev, 'guest@bpmtsolutions:~$ metrics', '--- Active Business Sectors ---', '  • Cyber Security Scan', '  • Blockchain Audits', '  • Course Portals', '']);
                      setPhase('custom');
                    }}
                    className="hover:underline cursor-pointer"
                  >
                    [run metrics]
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Backdrop reference domain subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="hidden sm:block text-center mt-4"
            >
              <p className={`text-xs font-mono flex items-center justify-center gap-1.5 ${isWireframe ? 'text-black' : 'text-gray-600'}`}>
                <Cpu className="w-3.5 h-3.5" /> Domain Pointer resolving to:
                <a
                  href="https://bpmtsolutions.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-0.5 font-semibold hover:underline ${isWireframe ? 'text-black' : 'text-blue-500'}`}
                >
                  bpmtsolutions.com <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
