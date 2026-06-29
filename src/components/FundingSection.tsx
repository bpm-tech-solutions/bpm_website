import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Handshake, Coins, ArrowRight, Heart, Sparkles, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function FundingSection() {
  const { isWireframe } = useTheme();
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const tiers = [
    { amount: 5, label: 'Single Shot', desc: 'Fuel a quick security scanner run.' },
    { amount: 15, label: 'Double Espresso', desc: 'Keep our upskilling course plans flowing.' },
    { amount: 50, label: 'Whole Roasted Beans', desc: 'Directly fund our server costs & audits.' },
  ];

  const handleSupport = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setShowThankYou(true);
    }, 1200);
  };

  const resetSimulator = () => {
    setShowThankYou(false);
    setSelectedTier(null);
    setCustomAmount('');
    setDonorName('');
  };

  return (
    <section
      id="collaboration"
      className={`py-24 transition-colors duration-300 relative ${
        isWireframe
          ? 'bg-white border-t-2 border-black text-black'
          : 'bg-[#09090C] border-t border-[#1C1C24] text-white'
      }`}
    >
      {/* Visual background enhancements for Dark Mode */}
      {!isWireframe && (
        <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono mb-4 ${
              isWireframe
                ? 'border-2 border-black bg-neutral-100 text-black font-bold'
                : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
            }`}
          >
            <Heart className="w-3.5 h-3.5 animate-pulse text-red-500 fill-red-500" /> SUPPORT & COOPERATION
          </div>

          <h2
            className={`text-3xl md:text-4xl font-sans font-bold tracking-tight mb-4 ${
              isWireframe ? 'text-black' : 'text-white'
            }`}
          >
            Partner, Fund, or Buy Us a Coffee
          </h2>

          <p className={`text-base ${isWireframe ? 'text-neutral-700' : 'text-gray-400'}`}>
            As an independent sole proprietorship, BPM Tech Solutions operates entirely on organic growth, bootstrapped assets, and direct partnerships. Join us on our journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Box 1: Partnership & Joint Ventures */}
          <div
            className={`lg:col-span-4 p-8 flex flex-col justify-between transition-all ${
              isWireframe
                ? 'border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-[#121217] border border-[#1E1E26] rounded-2xl hover:border-blue-500/30 duration-300'
            }`}
          >
            <div>
              <div
                className={`p-3 rounded-lg w-fit mb-6 ${
                  isWireframe ? 'border-2 border-black bg-neutral-100' : 'bg-blue-500/10 text-blue-400'
                }`}
              >
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isWireframe ? 'text-black' : 'text-white'}`}>
                Strategic Partnerships
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${isWireframe ? 'text-neutral-700' : 'text-gray-400'}`}>
                Looking to deploy 0xhackops scanners, integrate web3hackers smart contract defense, co-publish textbooks, or route custom print fulfillment? Let's discuss integration possibilities.
              </p>
            </div>
            <a
              href="#contact"
              className={`inline-flex items-center justify-center gap-2 text-xs font-mono py-3 px-4 rounded-lg transition-all ${
                isWireframe
                  ? 'border-2 border-black bg-white hover:bg-black hover:text-white font-bold'
                  : 'bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20'
              }`}
            >
              PROPOSE COOPERATION <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Box 2: Growth Funding / Grants */}
          <div
            className={`lg:col-span-4 p-8 flex flex-col justify-between transition-all ${
              isWireframe
                ? 'border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-[#121217] border border-[#1E1E26] rounded-2xl hover:border-cyan-500/30 duration-300'
            }`}
          >
            <div>
              <div
                className={`p-3 rounded-lg w-fit mb-6 ${
                  isWireframe ? 'border-2 border-black bg-neutral-100' : 'bg-cyan-500/10 text-cyan-400'
                }`}
              >
                <Coins className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isWireframe ? 'text-black' : 'text-white'}`}>
                Growth Capital & Grants
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${isWireframe ? 'text-neutral-700' : 'text-gray-400'}`}>
                We are actively seeking non-dilutive web3 grants, corporate cyber security test budgets, and strategic micro-investments to scale our student portal for working professionals.
              </p>
            </div>
            <a
              href="#contact"
              className={`inline-flex items-center justify-center gap-2 text-xs font-mono py-3 px-4 rounded-lg transition-all ${
                isWireframe
                  ? 'border-2 border-black bg-white hover:bg-black hover:text-white font-bold'
                  : 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20'
              }`}
            >
              REQUEST ONE-PAGER <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Box 3: Interactive Buy Us A Coffee */}
          <div
            className={`lg:col-span-4 p-8 transition-all ${
              isWireframe
                ? 'border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-[#121217] border border-[#1E1E26] rounded-2xl'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`p-2.5 rounded-lg ${
                  isWireframe ? 'border-2 border-black bg-neutral-100' : 'bg-amber-500/10 text-amber-400'
                }`}
              >
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className={`text-lg font-bold ${isWireframe ? 'text-black' : 'text-white'}`}>
                Buy Us a Coffee
              </h3>
            </div>

            <AnimatePresence mode="wait">
              {!showThankYou ? (
                <motion.form
                  key="coffee-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSupport}
                  className="space-y-4"
                >
                  <p className={`text-xs ${isWireframe ? 'text-neutral-600' : 'text-gray-400'}`}>
                    Select an amount below to support our independent operations. No actual card will be charged.
                  </p>

                  <div className="grid grid-cols-3 gap-2">
                    {tiers.map((t) => (
                      <button
                        key={t.amount}
                        type="button"
                        onClick={() => {
                          setSelectedTier(t.amount);
                          setCustomAmount('');
                        }}
                        className={`py-2 px-1 text-xs font-mono font-bold rounded border transition-all cursor-pointer ${
                          selectedTier === t.amount
                            ? isWireframe
                              ? 'bg-black text-white border-black'
                              : 'bg-amber-500/20 border-amber-500 text-amber-300'
                            : isWireframe
                            ? 'border-neutral-300 hover:border-black text-black'
                            : 'border-[#23232E] bg-[#16161D] hover:border-amber-500/40 text-gray-400'
                        }`}
                      >
                        ${t.amount}
                      </button>
                    ))}
                  </div>

                  {selectedTier && (
                    <p className={`text-[11px] italic text-center ${isWireframe ? 'text-neutral-500' : 'text-amber-400/80'}`}>
                      {tiers.find((t) => t.amount === selectedTier)?.desc}
                    </p>
                  )}

                  <div className="space-y-2 pt-2">
                    <input
                      type="text"
                      placeholder="Your Name (Optional)"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className={`w-full text-xs py-2 px-3 focus:outline-none transition-colors ${
                        isWireframe
                          ? 'bg-white border-2 border-black text-black placeholder-neutral-400'
                          : 'bg-[#191922] border border-[#252533] focus:border-amber-500/40 rounded-lg text-white placeholder-gray-600'
                      }`}
                    />

                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-gray-500">$</span>
                      <input
                        type="number"
                        placeholder="Custom Amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedTier(null);
                        }}
                        className={`w-full text-xs py-2 pl-6 pr-3 focus:outline-none transition-colors ${
                          isWireframe
                            ? 'bg-white border-2 border-black text-black placeholder-neutral-400'
                            : 'bg-[#191922] border border-[#252533] focus:border-amber-500/40 rounded-lg text-white placeholder-gray-600'
                        }`}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSimulating || (!selectedTier && !customAmount)}
                    className={`w-full py-2.5 px-4 text-xs font-mono transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isWireframe
                        ? 'border-2 border-black bg-black text-white hover:bg-neutral-800 disabled:bg-neutral-200 disabled:text-neutral-400 disabled:border-neutral-200 font-bold'
                        : 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed'
                    }`}
                  >
                    {isSimulating ? (
                      'processing_transaction...'
                    ) : (
                      <>
                        <Coffee className="w-4 h-4" />{' '}
                        {`SEND $${selectedTier || customAmount || '0'} COFFEE`}
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="thank-you"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className={`text-center py-6 space-y-4 ${isWireframe ? 'text-black' : 'text-gray-300'}`}
                >
                  <div className="mx-auto p-2 w-fit bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm">Support Simulation Success</h4>
                    <p className={`text-xs ${isWireframe ? 'text-neutral-600' : 'text-gray-400'}`}>
                      Thank you, <span className="font-bold text-blue-500">{donorName || 'Generous Supporter'}</span>! Your simulated support of ${selectedTier || customAmount} helps us build digital tools.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={resetSimulator}
                    className={`text-[10px] font-mono px-3 py-1.5 transition-colors cursor-pointer ${
                      isWireframe
                        ? 'border-2 border-black bg-white text-black hover:bg-black hover:text-white font-bold'
                        : 'bg-[#1D1D26] hover:bg-[#2A2A38] text-gray-400 border border-[#2B2B38] rounded-md'
                    }`}
                  >
                    [SUPPORT AGAIN]
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
