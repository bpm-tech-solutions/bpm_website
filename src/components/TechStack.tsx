import { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Radio, RefreshCcw, ShieldCheck, Shield, Code, BookOpen, Printer } from 'lucide-react';
import { TechItem } from '../types';
import { useTheme } from '../context/ThemeContext';

export default function TechStack() {
  const { isWireframe } = useTheme();
  const [activeSystem, setActiveSystem] = useState<string>('cyber-defense');

  const systems: TechItem[] = [
    {
      id: 'cyber-defense',
      name: 'Cyber Security Scanners',
      category: 'Cyber Security',
      description: 'Penetration testing checks that verify active SSL/TLS connections, secure web forms, and server ports for potential security vulnerabilities.',
      iconName: 'Shield',
      level: 95,
    },
    {
      id: 'smart-contract-dev',
      name: 'Smart Contract Auditing',
      category: 'Web3 & dApps',
      description: 'Rigorous testing, validation, and vulnerability verification workflow for Solidity smart contracts prior to deployment.',
      iconName: 'Code',
      level: 90,
    },
    {
      id: 'digital-publishing',
      name: 'Digital Book Publishing Layouts',
      category: 'Book Publishing',
      description: 'Format, compile, and validate e-book layouts, EPUB files, and digital materials tailored to standard digital readers.',
      iconName: 'BookOpen',
      level: 85,
    },
    {
      id: 'web-to-print-router',
      name: 'Poster Print Coordination',
      category: 'Poster Printing',
      description: 'Process raw high-resolution poster files, adjust print layouts, and coordinate print-on-demand fulfillment cues.',
      iconName: 'Printer',
      level: 80,
    },
  ];

  return (
    <section
      id="tech"
      className={`py-24 relative transition-colors duration-300 ${
        isWireframe
          ? 'bg-white border-b-2 border-black text-black'
          : 'bg-[#0A0A0C] border-b border-[#1A1A1E]'
      }`}
    >
      {!isWireframe && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.03),transparent_40%)]" />
      )}

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono mb-4 ${
              isWireframe
                ? 'border-2 border-black bg-neutral-100 text-black font-bold'
                : 'bg-cyan-500/10 border border-cyan-500/20 text-[#06B6D4]'
            }`}
          >
            OPERATIONAL WORKFLOWS
          </motion.div>
          
          <h2 className={`text-3xl md:text-4xl font-sans font-bold tracking-tight mb-4 ${isWireframe ? 'text-black' : 'text-white'}`}>
            Reliable Digital Processes
          </h2>
          
          <p className={`text-base leading-relaxed ${isWireframe ? 'text-neutral-700' : 'text-gray-400'}`}>
            We leverage clean and focused digital workflows to maintain consistency, reliability, and precision across each division.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="tech-interactive-dashboard">
          
          {/* Left: Interactive Navigation Lists */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {systems.map((sys) => {
              const isSelected = activeSystem === sys.id;
              let Icon = Cpu;
              if (sys.iconName === 'Shield') Icon = Shield;
              if (sys.iconName === 'Code') Icon = Code;
              if (sys.iconName === 'BookOpen') Icon = BookOpen;
              if (sys.iconName === 'Printer') Icon = Printer;

              return (
                <button
                  key={sys.id}
                  onClick={() => setActiveSystem(sys.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? isWireframe
                        ? 'bg-neutral-100 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                        : 'bg-[#11161A] border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.05)]'
                      : isWireframe
                      ? 'bg-white border border-neutral-300 hover:border-black'
                      : 'bg-[#111116] border-[#1E1E26] hover:border-[#2B2B38] hover:bg-[#15151C]'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-lg border transition-all ${
                      isSelected
                        ? isWireframe
                          ? 'bg-black text-white border-black'
                          : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                        : isWireframe
                        ? 'bg-neutral-100 border-neutral-300 text-neutral-500'
                        : 'bg-[#181820] border-[#252533] text-gray-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs font-mono uppercase tracking-widest mb-0.5 ${
                      isSelected
                        ? isWireframe
                          ? 'text-black font-bold'
                          : 'text-cyan-400/80'
                        : isWireframe
                        ? 'text-neutral-500'
                        : 'text-gray-500'
                    }`}>
                      {sys.category}
                    </span>
                    <span className={`block font-semibold text-sm transition-colors ${
                      isSelected
                        ? isWireframe
                          ? 'text-black font-bold'
                          : 'text-white'
                        : isWireframe
                        ? 'text-neutral-700'
                        : 'text-gray-400 group-hover:text-white'
                    }`}>
                      {sys.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Live Console System Output */}
          <div className="lg:col-span-8">
            <div className={`h-full p-6 flex flex-col justify-between relative overflow-hidden transition-all ${
              isWireframe
                ? 'bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black'
                : 'bg-[#0E0E12] border border-[#1E1E26] rounded-2xl shadow-[0_15px_40px_rgba(5,5,7,0.7)]'
            }`}>
              {/* Subtle visual grid lines */}
              {!isWireframe && (
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,24,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,24,0.15)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              )}

              <div>
                {/* Console Header */}
                <div className={`flex items-center justify-between pb-4 mb-6 border-b ${
                  isWireframe ? 'border-black' : 'border-[#1E1E26]'
                }`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-2.5 w-2.5 relative">
                      {!isWireframe && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>}
                      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isWireframe ? 'bg-black' : 'bg-cyan-500'}`}></span>
                    </span>
                    <span className={`text-xs font-mono tracking-widest uppercase ${isWireframe ? 'text-black font-bold' : 'text-white'}`}>
                      SYSTEM CONSOLE: LIVE_STATE
                    </span>
                  </div>
                  <div className={`text-[10px] font-mono px-2.5 py-1 rounded border ${
                    isWireframe
                      ? 'bg-neutral-100 border-black text-black font-bold'
                      : 'bg-[#14141B] border-[#22222D] text-gray-500'
                  }`}>
                    SYS_ID: {activeSystem.toUpperCase()}_v1.4
                  </div>
                </div>

                {/* System Content */}
                {systems.map((sys) => {
                  if (sys.id !== activeSystem) return null;

                  return (
                    <motion.div
                      key={sys.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <span className={`text-xs font-mono block mb-1 ${isWireframe ? 'text-black font-bold' : 'text-cyan-400'}`}>
                          [CORE SUITE / {sys.category.toUpperCase()}]
                        </span>
                        <h3 className={`text-2xl font-bold mb-3 ${isWireframe ? 'text-black font-mono' : 'text-white'}`}>
                          {sys.name}
                        </h3>
                        <p className={`text-sm leading-relaxed ${isWireframe ? 'text-neutral-800' : 'text-gray-400'}`}>
                          {sys.description}
                        </p>
                      </div>

                      {/* Visual System Metrics */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <div className={`p-4 rounded-xl border ${
                          isWireframe ? 'bg-neutral-100 border-2 border-black' : 'bg-[#13131A] border-[#20202B]'
                        }`}>
                          <span className={`block text-xs font-mono mb-1.5 uppercase ${isWireframe ? 'text-black font-bold' : 'text-gray-500'}`}>
                            Automation Level
                          </span>
                          <div className="flex items-center gap-3">
                            <div className={`flex-1 h-3 rounded-full overflow-hidden border ${
                              isWireframe ? 'bg-white border-black' : 'bg-[#1C1C26] border-transparent'
                            }`}>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${sys.level}%` }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className={`h-full ${isWireframe ? 'bg-black' : 'bg-gradient-to-r from-cyan-500 to-blue-500'}`}
                              />
                            </div>
                            <span className={`text-sm font-mono font-bold shrink-0 ${isWireframe ? 'text-black font-bold' : 'text-cyan-400'}`}>
                              {sys.level}%
                            </span>
                          </div>
                        </div>

                        <div className={`p-4 rounded-xl flex items-center justify-between border ${
                          isWireframe ? 'bg-neutral-100 border-2 border-black' : 'bg-[#13131A] border-[#20202B]'
                        }`}>
                          <div>
                            <span className={`block text-xs font-mono mb-1 uppercase ${isWireframe ? 'text-black font-bold' : 'text-gray-500'}`}>
                              Active Fail-safe
                            </span>
                            <span className={`text-sm font-semibold ${isWireframe ? 'text-black font-bold' : 'text-white'}`}>
                              Active (0 errors)
                            </span>
                          </div>
                          <ShieldCheck className={`w-6 h-6 shrink-0 ${isWireframe ? 'text-black' : 'text-blue-500'}`} />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Console Footer Code Block Mock */}
              <div className={`mt-8 p-4 rounded-lg border ${
                isWireframe ? 'bg-neutral-100 border-2 border-black' : 'bg-[#09090C] border-[#1C1C24]'
              }`}>
                <div className={`flex items-center justify-between text-[10px] font-mono mb-2 pb-1 border-b ${
                  isWireframe ? 'border-black text-black font-bold' : 'border-[#15151C] text-gray-500'
                }`}>
                  <span>LOG_STREAM</span>
                  <div className="flex items-center gap-1">
                    <Radio className={`w-3 h-3 ${isWireframe ? 'text-black' : 'text-cyan-400 animate-pulse'}`} />
                    <span>Live Webhook Socket</span>
                  </div>
                </div>
                <div className={`space-y-1 font-mono text-[11px] text-left ${
                  isWireframe ? 'text-black font-medium' : 'text-blue-400/80'
                }`}>
                  <p className={isWireframe ? 'text-neutral-600' : 'text-gray-500'}>{"bpmts-ops@core:~$ tail -n 2 logs/operations"}</p>
                  <p>{"[18:37:02] [SECURITY_AUDIT] Completed form audit check for 0xhackops."}</p>
                  <p>{"[18:37:15] [WEB3_AUDIT] Verified Smart Contract compilation check for web3hackers."}</p>
                  <p className={isWireframe ? 'text-black font-bold' : 'text-cyan-400/80'}>{"[18:37:26] [PRINT_QUEUE] Checked layout margins for print queue."}</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
