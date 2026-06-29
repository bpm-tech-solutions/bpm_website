import { ShieldAlert, FileText, Globe, CheckSquare, ArrowDownRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import BpmLogo from './BpmLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isWireframe } = useTheme();

  return (
    <footer
      id="app-footer"
      className={`py-16 text-left transition-colors duration-300 ${
        isWireframe
          ? 'bg-white border-t-2 border-black text-black'
          : 'bg-[#08080B] border-t border-[#16161C]'
      }`}
    >
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Brand Statement */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <BpmLogo 
                isWireframe={isWireframe} 
                className={`w-10 h-10 md:w-12 md:h-12 shrink-0 transition-all duration-300 ease-out transform group-hover:scale-110 ${
                  isWireframe 
                    ? 'text-black' 
                    : 'text-blue-400 group-hover:text-blue-300 filter drop-shadow-[0_0_10px_rgba(59,130,246,0.35)]'
                }`} 
              />
              <span className={`font-sans font-bold text-base tracking-tight ${isWireframe ? 'text-black font-mono' : 'text-white'}`}>
                BPM Tech Solutions
              </span>
            </a>
            <p className={`text-xs leading-relaxed max-w-sm ${isWireframe ? 'text-neutral-700' : 'text-gray-500'}`}>
              BPM Tech Solutions (bpmtsolutions.com) is an online technology and operating sole proprietorship powering advanced cyber security suites (0xhackops), decentralized Web3 security protocols (web3hackers), digital book publishing, professional upskilling, open-source utilities, and custom printing portals.
            </p>
          </div>

          {/* Column 2: Legal Registry */}
          <div className="md:col-span-4 space-y-3">
            <span className={`block text-[10px] font-mono uppercase tracking-widest font-semibold ${isWireframe ? 'text-black' : 'text-gray-400'}`}>
              Business Registry & GST
            </span>
            <ul className={`space-y-2 text-xs font-mono ${isWireframe ? 'text-black' : 'text-gray-500'}`}>
              <li className="flex items-center gap-1.5">
                <CheckSquare className="w-3.5 h-3.5 text-blue-500/60" /> Trade Name: BPM TECH SOLUTIONS
              </li>
              <li className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-500/60" /> GSTIN: 03IHMPM2893C1Z6
              </li>
              <li className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-500/60" /> Registered: Punjab, India (Kharar)
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-blue-500/60" /> Constitution: Proprietorship
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className={`block text-[10px] font-mono uppercase tracking-widest font-semibold ${isWireframe ? 'text-black' : 'text-gray-400'}`}>
              Security & Policy
            </span>
            <div className={`flex flex-col gap-2 text-xs font-mono ${isWireframe ? 'text-black font-bold' : 'text-gray-500'}`}>
              <a href="#" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1">
                <FileText className="w-3 h-3" /> [Privacy Standard]
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1">
                <FileText className="w-3 h-3" /> [Terms of Association]
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors inline-flex items-center gap-1">
                <FileText className="w-3 h-3" /> [Supplier Handbook]
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono ${
          isWireframe ? 'border-black text-black font-bold' : 'border-[#13131A] text-gray-600'
        }`}>
          <p>
            © {currentYear} BPM Tech Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className={`h-1.5 w-1.5 rounded-full ${isWireframe ? 'bg-black' : 'bg-blue-500/50'}`} /> Secure Sandbox Node
            </span>
            <span>v4.11-Proprietorship</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
