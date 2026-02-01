import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X, ChevronRight, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { Button } from './Button';

const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-sm font-medium transition-colors duration-200 ${
        isActive ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : 'text-slate-400 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-background/80 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              <Zap className="text-white w-6 h-6 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Optimight</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/websites">AI Websites</NavLink>
            <NavLink to="/dashboard">Handwerk App</NavLink>
            <Link to="/contact">
              <Button variant="outline" className="px-6 py-2 h-auto text-xs uppercase tracking-wider">
                Kontakt
              </Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background border-b border-white/10 p-6 md:hidden flex flex-col space-y-4 shadow-2xl">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
            <NavLink to="/websites" onClick={() => setMobileMenuOpen(false)}>AI Websites</NavLink>
            <NavLink to="/dashboard" onClick={() => setMobileMenuOpen(false)}>Handwerk App</NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Kontakt</NavLink>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center">
                  <Zap className="text-white w-4 h-4 fill-current" />
                </div>
                <span className="text-lg font-bold text-white">Optimight</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Wir transformieren Unternehmen und Handwerksbetriebe durch intelligente Web-Lösungen und maßgeschneiderte Software. Die Zukunft ist automatisiert.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><Instagram size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Lösungen</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link to="/websites" className="hover:text-cyan-400 transition-colors">AI Websites</Link></li>
                <li><Link to="/dashboard" className="hover:text-cyan-400 transition-colors">Handwerk Dashboard</Link></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Automatisierung</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">SEO & Analyse</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Unternehmen</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Über Uns</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Karriere</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Kontakt</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start">
                  <MapPin size={16} className="mr-3 mt-1 text-blue-500" />
                  <span>Techpark 1<br />10115 Berlin</span>
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-3 text-blue-500" />
                  <a href="mailto:hello@optimight.de" className="hover:text-white">hello@optimight.de</a>
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-3 text-blue-500" />
                  <span>+49 (0) 30 123 456</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; 2024 Optimight GmbH. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-300">Impressum</a>
              <a href="#" className="hover:text-slate-300">Datenschutz</a>
              <a href="#" className="hover:text-slate-300">AGB</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};