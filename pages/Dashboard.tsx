import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Hammer, Calendar, FileText, Users, CheckCircle } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-cyan-400 font-mono mb-4">
              <Hammer className="mr-2" size={20} />
              <span>Spezialisiert auf Handwerk & Bau</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Die Baustelle in der <br/><span className="text-cyan-400 neon-text">Hosentasche</span>.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Schluss mit Zettelwirtschaft. Organisieren Sie Aufträge, Mitarbeiter und Dokumentation zentral in einer Cloud-Lösung. Einfach, sicher, effizient.
            </p>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button variant="secondary">Demo anfordern</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase (Dark Cards) */}
      <section className="py-20 bg-surface/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Mockup Representation */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25"></div>
              <div className="relative bg-slate-900 border border-slate-700 rounded-xl p-6 shadow-2xl">
                {/* Fake App Interface */}
                <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-slate-400 text-xs">Dashboard - Sanitär Meier GmbH</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="text-xs text-slate-400 mb-1">Offene Aufträge</div>
                    <div className="text-2xl font-bold text-white">12</div>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="text-xs text-slate-400 mb-1">Umsatz (Woche)</div>
                    <div className="text-2xl font-bold text-cyan-400">€ 14.2k</div>
                  </div>
                </div>

                <div className="space-y-3">
                   <div className="flex items-center justify-between bg-slate-800/50 p-3 rounded border border-slate-700">
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-3" />
                        <span className="text-sm text-slate-200">Baustelle Müllerstr. 45 abgenommen</span>
                      </div>
                      <span className="text-xs text-slate-500">10:30</span>
                   </div>
                   <div className="flex items-center justify-between bg-slate-800/50 p-3 rounded border border-slate-700">
                      <div className="flex items-center">
                        <Calendar size={16} className="text-blue-500 mr-3" />
                        <span className="text-sm text-slate-200">Termin Fam. Weber bestätigen</span>
                      </div>
                      <span className="text-xs text-slate-500">11:15</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Funktionen, die den Rücken freihalten</h2>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Calendar className="text-cyan-400" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-white">Smarte Planung</h3>
                    <p className="text-slate-400 mt-2">Drag & Drop Kalender für alle Mitarbeiter. Automatische Benachrichtigung aufs Handy bei Änderungen.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <FileText className="text-cyan-400" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-white">Digitale Bauakte</h3>
                    <p className="text-slate-400 mt-2">Fotos, Maße und Notizen direkt vor Ort speichern. Nichts geht mehr verloren.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Users className="text-cyan-400" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-white">Zeiterfassung</h3>
                    <p className="text-slate-400 mt-2">Start/Stopp per Knopfdruck. GPS-gestützt (optional) für genaue Abrechnung beim Kunden.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};