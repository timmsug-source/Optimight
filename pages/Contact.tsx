import React from 'react';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen flex flex-col justify-center">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">Lassen Sie uns <br /><span className="text-cyan-400">starten</span>.</h1>
              <p className="text-slate-400 text-lg mb-12">
                Erzählen Sie uns von Ihrer Herausforderung. Wir finden die digitale Lösung, die passt.
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-blue-500">
                    <Mail />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <div className="text-white text-lg font-medium">hello@optimight.de</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-blue-500">
                    <Phone />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Telefon</div>
                    <div className="text-white text-lg font-medium">+49 (0) 30 123 456</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-blue-500">
                    <MapPin />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Büro</div>
                    <div className="text-white text-lg font-medium">Techpark 1, Berlin</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="glass-panel p-8 rounded-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Vorname</label>
                    <input type="text" className="w-full bg-background border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Max" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Nachname</label>
                    <input type="text" className="w-full bg-background border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Mustermann" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Unternehmen</label>
                  <input type="text" className="w-full bg-background border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Firma GmbH" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input type="email" className="w-full bg-background border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="max@firma.de" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Interesse an</label>
                  <select className="w-full bg-background border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors">
                    <option>AI Websites</option>
                    <option>Handwerk Dashboard</option>
                    <option>Allgemeine Beratung</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Nachricht</label>
                  <textarea rows={4} className="w-full bg-background border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Wie können wir helfen?"></textarea>
                </div>

                <Button variant="primary" className="w-full justify-center">Nachricht senden</Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};