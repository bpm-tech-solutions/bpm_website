import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Building2, Mail, User, Info, ArrowRight, Sparkles } from 'lucide-react';
import { ContactSubmission } from '../types';
import { useTheme } from '../context/ThemeContext';

export default function ContactForm() {
  const { isWireframe } = useTheme();
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    organization: '',
    subject: 'security',
    message: '',
    brandInterest: 'BPMTS Parent Integration',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate an API network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmissionId(`BPMTS-TKT-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isWireframe
          ? 'bg-white border-t-2 border-black text-black'
          : 'bg-[#0D0D11] border-t border-[#1C1C24] text-white'
      }`}
    >
      {/* Background glow triggers in Dark Mode */}
      {!isWireframe && (
        <>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute top-12 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none" />
        </>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Value Proposition */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono ${
                isWireframe
                  ? 'border-2 border-black bg-neutral-100 text-black font-bold'
                  : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
              }`}
            >
              PARTNER NETWORK
            </div>
            
            <h2
              className={`text-3xl md:text-4xl font-sans font-bold tracking-tight ${
                isWireframe ? 'text-black' : 'text-white'
              }`}
            >
              Let’s Secure and Elevate Your Digital Footprint
            </h2>
            
            <p className={`text-sm leading-relaxed ${isWireframe ? 'text-neutral-700' : 'text-gray-400'}`}>
              Whether you are looking to audit your cyber security systems, develop a custom Web3 dApp, publish a new manual or book globally, or set up automated poster print fulfillment queue channels, our advanced team is fully positioned to deliver.
            </p>

              <div className="space-y-4 pt-6" id="partnership-bullet-points">
                <div className="flex gap-4">
                  <div
                    className={`p-2 rounded-lg shrink-0 ${
                      isWireframe ? 'border-2 border-black bg-neutral-100 text-black' : 'bg-[#1A1A22] border border-[#2D2D3A] text-blue-400'
                    }`}
                  >
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-semibold text-sm ${isWireframe ? 'text-black font-bold' : 'text-white'}`}>
                    Secure Audits & App Delivery
                  </h4>
                  <p className={`text-xs mt-0.5 ${isWireframe ? 'text-neutral-600' : 'text-gray-400'}`}>
                    We perform complete pen-testing and deliver robust React & Solidity decentralized web systems tailored to your needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className={`p-2 rounded-lg shrink-0 ${
                    isWireframe ? 'border-2 border-black bg-neutral-100 text-black' : 'bg-[#1A1A22] border border-[#2D2D3A] text-cyan-400'
                  }`}
                >
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-semibold text-sm ${isWireframe ? 'text-black font-bold' : 'text-white'}`}>
                    Publishing & Custom Poster Printing
                  </h4>
                  <p className={`text-xs mt-0.5 ${isWireframe ? 'text-neutral-600' : 'text-gray-400'}`}>
                    Our automated portals convert raw manuscripts to global books, and handle high-res vector graphics scaling to matte/satin posters perfectly.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`pt-6 border-t text-[11px] font-mono flex items-center gap-2 ${
                isWireframe ? 'border-black text-neutral-600' : 'border-[#1C1C24] text-gray-500'
              }`}
            >
              <Info className="w-4 h-4 text-blue-500/80" />
              Secure and SSL encrypted partner endpoints.
            </div>
          </div>

          {/* Right Block: Dynamic Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-8 transition-all ${
                isWireframe
                  ? 'border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-[#121217] border border-[#1E1E26] rounded-2xl shadow-[0_20px_50px_rgba(5,5,8,0.7)]'
              }`}
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                    id="bpmts-partner-form"
                  >
                    <div>
                      <h3 className={`text-xl font-bold mb-1 ${isWireframe ? 'text-black' : 'text-white'}`}>
                        Inquiry Portal
                      </h3>
                      <p className={`text-xs mb-4 ${isWireframe ? 'text-neutral-600' : 'text-gray-400'}`}>
                        Complete the fields below to initiate secure handshake protocols with our project managers.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className={`text-[10px] font-mono uppercase tracking-wider block ${isWireframe ? 'text-black font-bold' : 'text-gray-400'}`}>
                          Your Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`w-full py-2.5 pl-11 pr-4 text-sm focus:outline-none transition-colors ${
                              isWireframe
                                ? 'bg-white border-2 border-black text-black placeholder-neutral-400 focus:border-neutral-700'
                                : 'bg-[#171720] border border-[#252533] focus:border-blue-500/40 rounded-lg text-white placeholder-gray-600'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className={`text-[10px] font-mono uppercase tracking-wider block ${isWireframe ? 'text-black font-bold' : 'text-gray-400'}`}>
                          Your Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="j.doe@domain.com"
                            className={`w-full py-2.5 pl-11 pr-4 text-sm focus:outline-none transition-colors ${
                              isWireframe
                                ? 'bg-white border-2 border-black text-black placeholder-neutral-400 focus:border-neutral-700'
                                : 'bg-[#171720] border border-[#252533] focus:border-blue-500/40 rounded-lg text-white placeholder-gray-600'
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Organization Name */}
                      <div className="space-y-1.5">
                        <label className={`text-[10px] font-mono uppercase tracking-wider block ${isWireframe ? 'text-black font-bold' : 'text-gray-400'}`}>
                          Organization / Business Name
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Enterprise Org"
                          className={`w-full py-2.5 px-4 text-sm focus:outline-none transition-colors ${
                            isWireframe
                              ? 'bg-white border-2 border-black text-black placeholder-neutral-400 focus:border-neutral-700'
                              : 'bg-[#171720] border border-[#252533] focus:border-blue-500/40 rounded-lg text-white placeholder-gray-600'
                          }`}
                        />
                      </div>

                      {/* Partnership Category selection */}
                      <div className="space-y-1.5">
                        <label className={`text-[10px] font-mono uppercase tracking-wider block ${isWireframe ? 'text-black font-bold' : 'text-gray-400'}`}>
                          Inquiry Stream
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full py-2.5 px-4 text-sm focus:outline-none transition-colors appearance-none cursor-pointer ${
                            isWireframe
                              ? 'bg-white border-2 border-black text-black focus:border-neutral-700'
                              : 'bg-[#171720] border border-[#252533] focus:border-blue-500/40 rounded-lg text-white'
                          }`}
                        >
                          <option value="security">Cyber Security Audit & Pen-Testing</option>
                          <option value="development">Web3 dApp & Software Engineering</option>
                          <option value="publishing">Online Editorial & Publishing Syndicate</option>
                          <option value="printing">Custom Poster & Printing Solutions</option>
                          <option value="general">General Enterprise Cooperation</option>
                        </select>
                      </div>
                    </div>

                    {/* Message body */}
                    <div className="space-y-1.5">
                      <label className={`text-[10px] font-mono uppercase tracking-wider block ${isWireframe ? 'text-black font-bold' : 'text-gray-400'}`}>
                        Proposal Details / Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your project, desired security audits, web3 scope, book publishing guidelines, or poster printing specs..."
                        className={`w-full py-2.5 px-4 text-sm focus:outline-none transition-colors resize-none ${
                          isWireframe
                            ? 'bg-white border-2 border-black text-black placeholder-neutral-400 focus:border-neutral-700'
                            : 'bg-[#171720] border border-[#252533] focus:border-blue-500/40 rounded-lg text-white placeholder-gray-600'
                        }`}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full inline-flex items-center justify-center py-3 font-medium text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer ${
                        isWireframe
                          ? 'border-2 border-black bg-black text-white hover:bg-neutral-800 font-bold'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg shadow-[0_4px_15px_rgba(37,99,235,0.15)]'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className={`w-4 h-4 border-2 border-t-transparent rounded-full animate-spin mr-2 ${isWireframe ? 'border-white' : 'border-slate-950'}`} />
                          Executing Secure Handshake...
                        </>
                      ) : (
                        <>
                          Submit Inquiry Stream
                          <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center space-y-6"
                  >
                    <div
                      className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${
                        isWireframe
                          ? 'border-2 border-black bg-neutral-100 text-black'
                          : 'bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.1)]'
                      }`}
                    >
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className={`text-2xl font-bold ${isWireframe ? 'text-black' : 'text-white'}`}>
                        Inquiry Handshake Complete
                      </h3>
                      <p className={`text-sm max-w-md mx-auto ${isWireframe ? 'text-neutral-700' : 'text-gray-400'}`}>
                        Thank you, <span className="text-blue-500 font-semibold">{formData.name}</span>. Your proposal has been securely logged on our server ledger.
                      </p>
                    </div>

                    {/* Simulation logs of encryption */}
                    <div
                      className={`p-4 rounded-lg text-left font-mono text-[11px] space-y-1 max-w-md mx-auto ${
                        isWireframe
                          ? 'border-2 border-black bg-neutral-100 text-black'
                          : 'bg-[#09090C] border border-[#1C1C24] text-gray-500'
                      }`}
                    >
                      <p className="text-blue-500">{"[SECURE_POST] Transmission complete."}</p>
                      <p>{`[REGISTRY] Ticket ID: ${submissionId}`}</p>
                      <p>{`[RECIPIENT] secure_intake@bpmtsolutions.com`}</p>
                      <p>{`[ROUTING] CRM webhook triggered successfully.`}</p>
                      <p className="text-cyan-400">{"[STATUS] Standby. Responses issued within 24 hours."}</p>
                    </div>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          organization: '',
                          subject: 'security',
                          message: '',
                          brandInterest: 'BPMTS Parent Integration',
                        });
                      }}
                      className={`inline-flex items-center text-xs font-mono gap-1 mt-4 hover:underline ${
                        isWireframe ? 'text-black font-bold' : 'text-blue-400'
                      }`}
                    >
                      Submit Another Inquiry <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
