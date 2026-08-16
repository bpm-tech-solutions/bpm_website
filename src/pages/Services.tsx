import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { Code, Smartphone, Monitor, Layers, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import MatrixBackground from '../components/MatrixBackground';

export default function Services() {
  const { isWireframe } = useTheme();

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Solutions",
      description: "High-performance, fully responsive web applications built with modern frameworks like React, Next.js, and Node.js. Optimized for SEO and conversions.",
      features: ["Custom UI/UX Design", "E-commerce Platforms", "CMS Integration", "Progressive Web Apps (PWA)"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Android Apps",
      description: "Native and cross-platform mobile applications tailored for the Android ecosystem. We deliver smooth, intuitive experiences for your user base.",
      features: ["Native Android (Kotlin/Java)", "React Native / Flutter", "API Integration", "Play Store Deployment"],
      color: "from-emerald-500 to-teal-400"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Solutions",
      description: "Scalable enterprise software, custom CRM/ERP systems, and API development to streamline your business operations and accelerate growth.",
      features: ["Enterprise Architecture", "Cloud Infrastructure (AWS/GCP)", "Database Design", "Legacy System Modernization"],
      color: "from-indigo-500 to-purple-400"
    }
  ];

  const portfolio = [
    { name: "FinTech Dashboard", category: "Web App", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400" },
    { name: "HealthTrack Mobile", category: "Android App", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=600&h=400" },
    { name: "Logistics ERP", category: "Software", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400" },
    { name: "E-Commerce Store", category: "Web App", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600&h=400" }
  ];

  return (
    <div className={`min-h-screen pt-32 pb-24 relative overflow-hidden transition-colors duration-300 ${isWireframe ? 'bg-white text-black' : 'bg-[#0A0A0C] text-gray-100'}`}>

      {!isWireframe && <MatrixBackground />}

      {isWireframe && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-6 relative z-10 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono mb-6 ${
              isWireframe
                ? 'border-2 border-black bg-neutral-100 text-black font-bold'
                : 'bg-blue-500/10 border border-blue-500/20 text-[#3B82F6]'
            }`}>
              <Zap className="w-3.5 h-3.5" /> CUSTOM DEVELOPMENT
            </div>

            <h1 className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 ${isWireframe ? 'text-black' : 'text-white'}`}>
              We Build <span className={isWireframe ? 'underline decoration-black decoration-4' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500'}>Digital Realities</span>
            </h1>

            <p className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto ${isWireframe ? 'text-neutral-700' : 'text-gray-400'}`}>
              From high-performance websites and intuitive Android apps to complex enterprise software solutions. We transform your ideas into scalable, secure, and modern digital products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 relative z-10 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-2xl transition-all duration-300 group ${
                isWireframe
                  ? 'bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-[#121217]/80 backdrop-blur-sm border border-[#23232E] hover:border-gray-600 shadow-xl'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                isWireframe
                  ? 'bg-neutral-100 border-2 border-black text-black'
                  : `bg-gradient-to-br ${service.color} text-white shadow-lg`
              }`}>
                {service.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${isWireframe ? 'text-black' : 'text-white'}`}>
                {service.title}
              </h3>
              <p className={`mb-6 leading-relaxed ${isWireframe ? 'text-neutral-700' : 'text-gray-400'}`}>
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className={`flex items-center text-sm ${isWireframe ? 'text-black font-medium' : 'text-gray-300'}`}>
                    <CheckCircle2 className={`w-4 h-4 mr-3 ${isWireframe ? 'text-black' : 'text-blue-400'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="container mx-auto px-6 relative z-10 mb-32">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isWireframe ? 'text-black' : 'text-white'}`}>
            Featured Work
          </h2>
          <p className={isWireframe ? 'text-neutral-700' : 'text-gray-400'}>
            A glimpse into our recent digital craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl ${
                isWireframe ? 'border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : 'border border-[#23232E]'
              }`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t ${isWireframe ? 'from-black/80' : 'from-[#0A0A0C]'} via-transparent to-transparent opacity-80`} />
              <div className="absolute bottom-0 left-0 p-8">
                <span className={`inline-block px-3 py-1 text-xs font-bold font-mono mb-3 rounded-full ${
                  isWireframe ? 'bg-white text-black border border-black' : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                }`}>
                  {item.category.toUpperCase()}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact / Order CTA */}
      <section className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`rounded-3xl p-10 md:p-16 text-center overflow-hidden relative ${
            isWireframe
              ? 'bg-neutral-100 border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'
              : 'bg-gradient-to-br from-[#12121A] to-[#0A0A0F] border border-[#23232E]'
          }`}
        >
          {/* Decorative background elements for dark mode */}
          {!isWireframe && (
            <>
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
            </>
          )}

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${isWireframe ? 'text-black' : 'text-white'}`}>
              Ready to build something amazing?
            </h2>
            <p className={`text-lg mb-10 ${isWireframe ? 'text-neutral-700' : 'text-gray-400'}`}>
              Whether you need a cutting-edge website, a robust Android app, or custom enterprise software, our team is ready to deliver excellence.
            </p>

            <a
              href="mailto:business@bpmtsolutions.com"
              className={`inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 group ${
                isWireframe
                  ? 'border-2 border-black bg-black text-white hover:bg-white hover:text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none translate-x-0 translate-y-0 hover:translate-x-[6px] hover:translate-y-[6px]'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:-translate-y-1'
              }`}
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>

            <p className={`mt-6 font-mono text-sm ${isWireframe ? 'text-black font-bold' : 'text-blue-400'}`}>
              business@bpmtsolutions.com
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
