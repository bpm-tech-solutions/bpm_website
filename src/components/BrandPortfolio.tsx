import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, TrendingUp, Shield, Code, BookOpen, Printer, Globe, Award, GraduationCap, Music, Sofa } from 'lucide-react';
import { Brand } from '../types';
import { useTheme } from '../context/ThemeContext';

export default function BrandPortfolio() {
  const { isWireframe } = useTheme();
  const [selectedType, setSelectedType] = useState<'all' | 'security' | 'web3_security' | 'publishing' | 'printing' | 'education' | 'ai_music' | 'furniture'>('all');

  const brands: Brand[] = [
    {
      id: '0xhackops',
      name: '0xhackops',
      type: 'security',
      description: 'Web application security auditing, threat checking, and penetration testing services.',
      metric: '0xhackops.com',
      metricLabel: 'Web Audits & Cyber Security',
      tags: ['Cyber Security', 'Penetration Testing', 'Web Audits'],
      url: 'https://0xhackops.com',
      iconName: 'Shield',
    },
    {
      id: 'web3hackers',
      name: 'web3hackers',
      type: 'web3_security',
      description: 'Web3 security audits and smart contract evaluations for decentralized applications.',
      metric: 'web3hackers.com',
      metricLabel: 'Web3 Security Services',
      tags: ['Smart Contracts', 'Web3', 'Blockchain Audits'],
      url: 'https://web3hackers.com',
      iconName: 'Code',
    },
    {
      id: 'workinglearner',
      name: 'Working Learner',
      type: 'education',
      description: 'An online upskilling and professional development portal offering tech courses for employed professionals.',
      metric: 'workinglearner.com',
      metricLabel: 'Professional Training Portal',
      tags: ['Courses', 'Upskilling', 'Professional Education'],
      url: 'https://workinglearner.com',
      iconName: 'GraduationCap',
    },
    {
      id: 'apex-publishing',
      name: 'Apex Digital Press',
      type: 'publishing',
      description: 'Online book publishing, e-book formatting, and global digital syndication services.',
      metric: 'Apex Digital Press',
      metricLabel: 'E-Book & Manual Publishing',
      tags: ['E-Book Publishing', 'EPUB Formatting', 'Digital Syndication'],
      iconName: 'BookOpen',
    },
    {
      id: 'print-bpm',
      name: 'PrintBPM Custom Posters',
      type: 'printing',
      description: 'Online web-to-print portal for custom poster printing and digital art reproduction.',
      metric: 'PrintBPM Posters',
      metricLabel: 'Poster Print & Fulfillment',
      tags: ['Custom Posters', 'Print-on-Demand', 'Poster Printing'],
      iconName: 'Printer',
    },
    {
      id: 'bpm-ai-music',
      name: 'BPM AI Studio',
      type: 'ai_music',
      description: 'State-of-the-art AI music production suite offering custom music generation, algorithmic scoring, and automated ambient loops for content creators.',
      metric: 'BPM AI Music',
      metricLabel: 'AI Audio & Scoring Studio',
      tags: ['AI Audio', 'Music Scoring', 'Algorithmic beats'],
      iconName: 'Music',
    },
    {
      id: 'tricity-furniture',
      name: 'Tricity SolidWood',
      type: 'furniture',
      description: 'Localised direct-to-consumer digital storefront offering exquisite custom-designed solid wood furniture with specialized delivery across Chandigarh, Panchkula, and Mohali.',
      metric: 'Tricity Furniture',
      metricLabel: 'Chandigarh • Panchkula • Mohali',
      tags: ['Localised D2C', 'Handcrafted Furniture', 'Solid Wood'],
      iconName: 'Sofa',
    },
  ];

  const filteredBrands = selectedType === 'all'
    ? brands
    : brands.filter((b) => b.type === selectedType);

  return (
    <section
      id="brands"
      className={`py-24 relative transition-colors duration-300 ${
        isWireframe
          ? 'bg-white border-b-2 border-black text-black'
          : 'bg-[#0D0D11] border-b border-[#1A1A1E]'
      }`}
    >
      {!isWireframe && (
        <div className="absolute inset-0 bg-radial-at-t from-blue-950/15 via-transparent to-transparent pointer-events-none" />
      )}

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono mb-4 ${
              isWireframe
                ? 'border-2 border-black bg-neutral-100 text-black font-bold'
                : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
            }`}
          >
            OUR BRANDS & CHANNELS
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl md:text-4xl font-sans font-bold tracking-tight mb-4 ${
              isWireframe ? 'text-black' : 'text-white'
            }`}
          >
            Specialized Digital Subdivisions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-base leading-relaxed ${isWireframe ? 'text-neutral-700' : 'text-gray-400'}`}
          >
            BPM Tech Solutions operates a suite of online services, including cyber security audits, web3 security checks, our learning portal, digital publishing, and custom poster printing.
          </motion.p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex justify-center mb-12">
          <div
            className={`inline-flex flex-wrap justify-center p-1.5 rounded-lg gap-1.5 ${
              isWireframe
                ? 'bg-white border-2 border-black'
                : 'bg-[#131318] border border-[#23232C]'
            }`}
            id="portfolio-filter-toolbar"
          >
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 text-xs font-mono rounded-md transition-all duration-200 cursor-pointer font-bold ${
                selectedType === 'all'
                  ? isWireframe
                    ? 'bg-black text-white border-black'
                    : 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                  : isWireframe
                  ? 'text-black hover:bg-neutral-100'
                  : 'text-gray-400 hover:text-white hover:bg-[#1E1E26]'
              }`}
            >
              [ALL SECTORS]
            </button>
            <button
              onClick={() => setSelectedType('security')}
              className={`px-4 py-2 text-xs font-mono rounded-md transition-all duration-200 cursor-pointer flex items-center gap-1.5 font-bold ${
                selectedType === 'security'
                  ? isWireframe
                    ? 'bg-black text-white border-black'
                    : 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                  : isWireframe
                  ? 'text-black hover:bg-neutral-100'
                  : 'text-gray-400 hover:text-white hover:bg-[#1E1E26]'
              }`}
            >
              <Shield className="w-3.5 h-3.5" /> CYBER SECURITY
            </button>
            <button
              onClick={() => setSelectedType('web3_security')}
              className={`px-4 py-2 text-xs font-mono rounded-md transition-all duration-200 cursor-pointer flex items-center gap-1.5 font-bold ${
                selectedType === 'web3_security'
                  ? isWireframe
                    ? 'bg-black text-white border-black'
                    : 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                  : isWireframe
                  ? 'text-black hover:bg-neutral-100'
                  : 'text-gray-400 hover:text-white hover:bg-[#1E1E26]'
              }`}
            >
              <Code className="w-3.5 h-3.5" /> WEB3 SECURITY
            </button>
            <button
              onClick={() => setSelectedType('education')}
              className={`px-4 py-2 text-xs font-mono rounded-md transition-all duration-200 cursor-pointer flex items-center gap-1.5 font-bold ${
                selectedType === 'education'
                  ? isWireframe
                    ? 'bg-black text-white border-black'
                    : 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                  : isWireframe
                  ? 'text-black hover:bg-neutral-100'
                  : 'text-gray-400 hover:text-white hover:bg-[#1E1E26]'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" /> PROFESSIONAL EDUCATION
            </button>
            <button
              onClick={() => setSelectedType('publishing')}
              className={`px-4 py-2 text-xs font-mono rounded-md transition-all duration-200 cursor-pointer flex items-center gap-1.5 font-bold ${
                selectedType === 'publishing'
                  ? isWireframe
                    ? 'bg-black text-white border-black'
                    : 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                  : isWireframe
                  ? 'text-black hover:bg-neutral-100'
                  : 'text-gray-400 hover:text-white hover:bg-[#1E1E26]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" /> PUBLISHING
            </button>
            <button
              onClick={() => setSelectedType('printing')}
              className={`px-4 py-2 text-xs font-mono rounded-md transition-all duration-200 cursor-pointer flex items-center gap-1.5 font-bold ${
                selectedType === 'printing'
                  ? isWireframe
                    ? 'bg-black text-white border-black'
                    : 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                  : isWireframe
                  ? 'text-black hover:bg-neutral-100'
                  : 'text-gray-400 hover:text-white hover:bg-[#1E1E26]'
              }`}
            >
              <Printer className="w-3.5 h-3.5" /> POSTER PRINT
            </button>
            <button
              onClick={() => setSelectedType('ai_music')}
              className={`px-4 py-2 text-xs font-mono rounded-md transition-all duration-200 cursor-pointer flex items-center gap-1.5 font-bold ${
                selectedType === 'ai_music'
                  ? isWireframe
                    ? 'bg-black text-white border-black'
                    : 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                  : isWireframe
                  ? 'text-black hover:bg-neutral-100'
                  : 'text-gray-400 hover:text-white hover:bg-[#1E1E26]'
              }`}
            >
              <Music className="w-3.5 h-3.5" /> AI MUSIC
            </button>
            <button
              onClick={() => setSelectedType('furniture')}
              className={`px-4 py-2 text-xs font-mono rounded-md transition-all duration-200 cursor-pointer flex items-center gap-1.5 font-bold ${
                selectedType === 'furniture'
                  ? isWireframe
                    ? 'bg-black text-white border-black'
                    : 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                  : isWireframe
                  ? 'text-black hover:bg-neutral-100'
                  : 'text-gray-400 hover:text-white hover:bg-[#1E1E26]'
              }`}
            >
              <Sofa className="w-3.5 h-3.5" /> TRICITY FURNITURE
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="portfolio-brand-grid">
          {filteredBrands.map((brand, index) => {
            // Pick corresponding icon
            let IconComponent = Shield;
            if (brand.iconName === 'Code') IconComponent = Code;
            if (brand.iconName === 'GraduationCap') IconComponent = GraduationCap;
            if (brand.iconName === 'BookOpen') IconComponent = BookOpen;
            if (brand.iconName === 'Printer') IconComponent = Printer;
            if (brand.iconName === 'Globe') IconComponent = Globe;
            if (brand.iconName === 'Award') IconComponent = Award;
            if (brand.iconName === 'Music') IconComponent = Music;
            if (brand.iconName === 'Sofa') IconComponent = Sofa;

            return (
              <motion.div
                key={brand.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative p-6 flex flex-col justify-between transition-all duration-300 ${
                  isWireframe
                    ? 'bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black'
                    : 'bg-[#111116] border border-[#1E1E26] hover:border-blue-500/30 text-white hover:shadow-[0_10px_30px_rgba(10,10,12,0.5),0_0_20px_rgba(59,130,246,0.03)]'
                }`}
              >
                {!isWireframe && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-2.5 rounded-lg transition-colors ${
                        isWireframe
                          ? 'bg-neutral-100 border-2 border-black text-black font-bold'
                          : 'bg-[#181820] border border-[#252533] text-blue-400 group-hover:text-blue-300'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md border ${
                        isWireframe
                          ? 'bg-white border-black text-black font-bold'
                          : 'bg-[#181820] border border-[#252533] text-gray-500'
                      }`}
                    >
                      {brand.type === 'security'
                        ? 'Cyber Security'
                        : brand.type === 'web3_security'
                        ? 'Web3 Security'
                        : brand.type === 'education'
                        ? 'Continuing Ed'
                        : brand.type === 'publishing'
                        ? 'Publishing'
                        : brand.type === 'printing'
                        ? 'Poster Print'
                        : brand.type === 'ai_music'
                        ? 'AI Music Studio'
                        : brand.type === 'furniture'
                        ? 'Tricity Furniture'
                        : 'Online Service'}
                    </span>
                  </div>

                  {/* Brand Meta */}
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors duration-200 ${
                      isWireframe
                        ? 'text-black'
                        : 'text-white group-hover:text-blue-400'
                    }`}
                  >
                    {brand.name}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${isWireframe ? 'text-neutral-700 font-medium' : 'text-gray-400'}`}>
                    {brand.description}
                  </p>
                </div>

                {/* Card Footer: Metrics and Tags */}
                <div>
                  <div
                    className={`rounded-lg p-3.5 border mb-5 flex items-center justify-between ${
                      isWireframe
                        ? 'bg-neutral-100 border-2 border-black'
                        : 'bg-[#171721] border border-[#232330]'
                    }`}
                  >
                    <div>
                      <span
                        className={`block text-base font-bold font-mono tracking-tight ${
                          isWireframe ? 'text-black' : 'text-blue-400'
                        }`}
                      >
                        {brand.metric}
                      </span>
                      <span className={`block text-[10px] font-mono uppercase tracking-wider mt-0.5 ${isWireframe ? 'text-black font-bold' : 'text-gray-500'}`}>
                        {brand.metricLabel}
                      </span>
                    </div>
                    <TrendingUp className={`w-5 h-5 ${isWireframe ? 'text-black' : 'text-blue-500 opacity-60'}`} />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {brand.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          isWireframe
                            ? 'bg-white border-black text-black font-bold'
                            : 'bg-[#14141A] border border-[#20202A] text-gray-400'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Channel Link */}
                  {brand.url && (
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center text-xs font-mono gap-1 mt-1 group/link font-bold ${
                        isWireframe
                          ? 'text-black hover:underline'
                          : 'text-blue-400 hover:text-blue-300'
                      }`}
                    >
                      Access Secure Terminal{' '}
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Integration note banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-16 border rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 ${
            isWireframe
              ? 'bg-white border-2 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              : 'bg-[#111116] border border-[#1E1E26]'
          }`}
          id="brand-integration-banner"
        >
          <div className="flex items-center gap-4 text-left">
            <div
              className={`hidden sm:flex p-3 rounded-lg shrink-0 ${
                isWireframe
                  ? 'border-2 border-black bg-neutral-100 text-black font-bold'
                  : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
              }`}
            >
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className={`font-semibold text-base mb-1 ${isWireframe ? 'text-black font-bold' : 'text-white'}`}>
                FOSS & Open Source Commitment
              </h4>
              <p className={`text-sm max-w-2xl ${isWireframe ? 'text-neutral-700' : 'text-gray-400'}`}>
                We believe tech should not be limited to a few. We are committed to developing open-source solutions and actively supporting FOSS culture. Let us know how we can collaborate, contribute, or co-build accessible digital systems.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className={`text-xs font-mono px-4 py-2.5 rounded-lg whitespace-nowrap shrink-0 transition-colors font-bold ${
              isWireframe
                ? 'border-2 border-black bg-black text-white hover:bg-neutral-800'
                : 'bg-[#1C1C24] hover:bg-[#252530] text-blue-400 border border-[#2D2D3A]'
            }`}
          >
            [PROPOSE COLLABORATION]
          </a>
        </motion.div>

      </div>
    </section>
  );
}
