import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Bot, CheckCircle, ArrowRight, Ban, UserX, Clock, Activity, TrendingUp, Users, ShieldCheck, Zap, Star } from 'lucide-react';

export const Websites: React.FC = () => {
  return (
    <div className="pt-20">
      
      {/* HEADER / HERO SECTION - Inspired by Screenshot (Clean, Dark, Centered) */}
      <section className="relative py-24 md:py-36 bg-[#020617] overflow-hidden flex flex-col items-center text-center border-b border-white/5">
         
         {/* Background Effects (Subtle AI/Tech feel but clean) */}
         <div className="absolute inset-0 pointer-events-none">
            {/* Central Spotlight Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[700px] bg-blue-900/10 blur-[120px] rounded-full opacity-60"></div>
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
         </div>

         <div className="container mx-auto px-6 relative z-10 max-w-5xl">
            
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight drop-shadow-2xl max-w-4xl mx-auto">
              Ihre Website sollte kein Kostenfaktor sein – <br className="hidden lg:block"/>
              sondern Ihr <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 animate-gradient">effizientester Mitarbeiter</span>.
            </h1>

            {/* Subtext */}
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
               Vergessen Sie statische Visitenkarten. Wir bauen intelligente Web-Systeme, die mitdenken, 
               Kunden rund um die Uhr beraten und Ihr Büro durch KI-Integration radikal entlasten.
            </p>

            {/* Checkmarks Row (Like Screenshot) */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-14 text-slate-300 text-sm md:text-base font-medium">
               <div className="flex items-center bg-white/5 px-5 py-2.5 rounded-full border border-white/5 hover:border-blue-500/30 transition-colors">
                  <CheckCircle className="text-cyan-400 mr-2.5 w-5 h-5" />
                  <span>+10 Jahre Erfahrung</span>
               </div>
               <div className="flex items-center bg-white/5 px-5 py-2.5 rounded-full border border-white/5 hover:border-blue-500/30 transition-colors">
                  <CheckCircle className="text-cyan-400 mr-2.5 w-5 h-5" />
                  <span>Branchenübergreifender B2B-Fokus</span>
               </div>
               <div className="flex items-center bg-white/5 px-5 py-2.5 rounded-full border border-white/5 hover:border-blue-500/30 transition-colors">
                  <CheckCircle className="text-cyan-400 mr-2.5 w-5 h-5" />
                  <span>Über 50 zufriedene Kunden</span>
               </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
               <Link to="/contact">
                  {/* Primary "Action" Button - Cyan to match the high contrast of the screenshot's green */}
                  <Button variant="secondary" className="px-8 py-4 text-lg font-bold min-w-[220px] shadow-[0_0_20px_rgba(6,182,212,0.3)]" icon>
                    Unverbindlichen Webseiten-Entwurf anfordern
                  </Button>
               </Link>
               {/* Outline Button */}
               <Button variant="outline" className="px-10 py-4 text-lg font-medium min-w-[220px] border-slate-600 text-white hover:bg-white/5 hover:border-white">
                 Leistungen ansehen
               </Button>
            </div>
            
            {/* Trust Badges / Logos (Bottom of Hero) */}
            <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center space-x-3 group cursor-default">
                   <div className="bg-white p-1 rounded">
                     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                   </div>
                   <div className="text-left leading-tight">
                     <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Google bewertet</div>
                     <div className="text-white font-bold text-sm flex items-center">4.9/5 <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 ml-1"/></div>
                   </div>
                </div>

                <div className="h-8 w-px bg-white/10 hidden md:block"></div>

                <div className="flex items-center space-x-3 group cursor-default">
                   <ShieldCheck className="w-8 h-8 text-slate-300 group-hover:text-cyan-400 transition-colors" strokeWidth={1.5} />
                   <div className="text-left leading-tight">
                     <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Qualität</div>
                     <div className="text-white font-bold text-sm">Made in Germany</div>
                   </div>
                </div>

                 <div className="h-8 w-px bg-white/10 hidden md:block"></div>

                <div className="flex items-center space-x-3 group cursor-default">
                   <Zap className="w-8 h-8 text-slate-300 group-hover:text-cyan-400 transition-colors" strokeWidth={1.5} />
                   <div className="text-left leading-tight">
                     <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Performance</div>
                     <div className="text-white font-bold text-sm">High-Speed Web</div>
                   </div>
                </div>
            </div>

         </div>
      </section>

      {/* SECTION 1: PAIN POINTS (Red Theme - "Handbremse") - KEPT UNCHANGED */}
      <section className="py-24 bg-gradient-to-b from-[#1a0505] to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-background to-background pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">
              Fühlt sich Ihr Wachstum an, als würden Sie mit <span className="text-red-500">angezogener Handbremse</span> fahren?
            </h2>
            <p className="text-lg text-slate-300">
              Sie sind Meister Ihres Fachs und Ihr Ruf ist exzellent. Trotzdem kommen Sie nicht so voran, wie Sie es sich wünschen. Vielleicht erkennen Sie sich hier wieder:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pain 1 */}
            <div className="bg-red-950/10 border border-red-900/30 p-8 rounded-2xl hover:border-red-500/50 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-6 border border-red-500/20 group-hover:bg-red-500/20">
                <Ban className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Der Zufalls-Generator</h3>
              <p className="text-slate-400 leading-relaxed">
                Neue Aufträge oder Mitarbeiter kommen unregelmäßig durch Empfehlungen. Echte Planbarkeit für die Zukunft? Fehlanzeige. Sie hoffen auf das nächste Projekt, statt es zu steuern.
              </p>
            </div>

            {/* Pain 2 */}
            <div className="bg-red-950/10 border border-red-900/30 p-8 rounded-2xl hover:border-red-500/50 transition-colors duration-300 group">
               <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-6 border border-red-500/20 group-hover:bg-red-500/20">
                <UserX className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Die Unsichtbarkeits-Falle</h3>
              <p className="text-slate-400 leading-relaxed">
                Online sind Ihre Wettbewerber präsenter, obwohl deren Qualität schlechter ist. Sie schnappen Ihnen die besten Projekte oder die motiviertesten Fachkräfte direkt vor der Nase weg.
              </p>
            </div>

            {/* Pain 3 */}
            <div className="bg-red-950/10 border border-red-900/30 p-8 rounded-2xl hover:border-red-500/50 transition-colors duration-300 group">
               <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-6 border border-red-500/20 group-hover:bg-red-500/20">
                <Clock className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Der Zeit-Dieb</h3>
              <p className="text-slate-400 leading-relaxed">
                Sie verbringen wertvolle Zeit mit Akquise oder dem Sichten unpassender Bewerbungen, anstatt sich auf das zu konzentrieren, was Sie lieben und was den Umsatz bringt.
              </p>
            </div>

            {/* Pain 4 */}
            <div className="bg-red-950/10 border border-red-900/30 p-8 rounded-2xl hover:border-red-500/50 transition-colors duration-300 group">
               <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-6 border border-red-500/20 group-hover:bg-red-500/20">
                <Activity className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Das Hamsterrad</h3>
              <p className="text-slate-400 leading-relaxed">
                Sie arbeiten mehr, aber das Unternehmen stagniert. Sie fühlen sich mehr wie ein Angestellter im eigenen Betrieb als ein souveräner Unternehmer, der am System arbeitet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SOLUTION (Blue Theme) - KEPT UNCHANGED */}
      <section className="py-24 bg-gradient-to-b from-background to-[#0f172a] relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 uppercase tracking-tight">
              Ein strategischer Relaunch. <br/> Welches Ziel hat für Sie <span className="text-blue-500">Priorität</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Option A: Customer Machine */}
            <div className="bg-blue-900/10 border border-blue-900/40 p-10 rounded-3xl hover:border-blue-500/50 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingUp size={140} className="text-blue-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6 pr-12">
                Durch den Relaunch wird Ihre Website eine <span className="text-blue-400">24/7-Kunden-Maschine</span>
              </h3>
              
              <p className="text-slate-300 mb-8 leading-relaxed">
                Stell dir vor, dein Kalender füllt sich von selbst mit Anfragen von genau den Kunden, die deine Arbeit wertschätzen und deine Preise verstehen. Wir bauen dir das System.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Schluss mit der Kaltakquise:</strong>
                    <span className="text-slate-400 text-sm">Kunden kommen aktiv auf dich zu.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Nur noch Wunschkunden:</strong>
                    <span className="text-slate-400 text-sm">Das System filtert unpassende Anfragen automatisch.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Option B: Recruiting Machine */}
            <div className="bg-blue-900/10 border border-blue-900/40 p-10 rounded-3xl hover:border-blue-500/50 transition-all duration-300 relative group overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users size={140} className="text-blue-500" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 pr-12">
                Deine Website als ein <span className="text-blue-400">24/7-Bewerber-Magnet</span>
              </h3>
              
              <p className="text-slate-300 mb-8 leading-relaxed">
                Stell dir vor, der Fachkräftemangel ist für dich kein Thema mehr. Während deine Konkurrenz klagt, baust du dein Team mit den besten Leuten der Region aus.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Die besten Köpfe zuerst:</strong>
                    <span className="text-slate-400 text-sm">Fachkräfte sehen dich als Top-Arbeitgeber, bevor sie auf Jobportale gehen.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Schluss mit teuren Anzeigen:</strong>
                    <span className="text-slate-400 text-sm">Unabhängigkeit von Headhuntern und Job-Portalen.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

           <div className="text-center mt-12">
             <Link to="/contact">
              <Button variant="primary" className="text-lg px-10 py-4 h-auto transform hover:scale-105 transition-transform duration-300">
                Unverbindlichen Webseiten-Entwurf anfordern
              </Button>
            </Link>
           </div>
        </div>
      </section>

      {/* SECTION 3: THE PROCESS (Blue Theme + Expert Card) - KEPT UNCHANGED */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 uppercase tracking-tight">
               Website "Irgendwann mal" besser wird – <br/><span className="text-blue-500">SIE HANDELN JETZT</span>
             </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: The Steps */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-900/20 border border-blue-500/30 flex items-center justify-center text-3xl font-bold text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  01
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Hammerscharfe Positionierung & Angebot</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Im ersten Schritt brauchst Du ein unvergleichbares Angebot, mit dem Kunden Dich ganz anders wahrnehmen als Deine Mitbewerber. Das ist das Fundament jeder KI-Integration.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 group">
                 <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-900/20 border border-blue-500/30 flex items-center justify-center text-3xl font-bold text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  02
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Premium Außenauftritt & Branding</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Ein Premium Branding sorgt dafür, dass Kunden sich für Dich & Dein Angebot entscheiden werden und Du Deine Preise gegenüber Mitbewerber durchsetzen kannst.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 group">
                 <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-900/20 border border-blue-500/30 flex items-center justify-center text-3xl font-bold text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  03
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Digitale Akquisemaschine & Paid Ads</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Nachdem das Grundgerüst steht, meistern wir Deine Neukundengewinnung über Meta & Google Ads, damit Du täglich planbar heiße Leads generierst.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: The Expert/Contact Card */}
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute inset-0 bg-blue-500/30 blur-[60px] rounded-full"></div>
              
              <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-20 h-20 bg-white rounded-full p-1 shadow-lg">
                     {/* Placeholder Avatar */}
                     <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                        <Bot size={40} className="text-blue-600" />
                     </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Optimight Team</h3>
                    <p className="text-blue-100 text-sm">KI-Strategie & Web Development</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-blue-100 text-xs uppercase font-semibold tracking-wider">Mögliches Ergebnis</label>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white font-medium mt-1 border border-white/20">
                      Marktführerschaft in Ihrer Region
                    </div>
                  </div>

                  <div>
                    <label className="text-blue-100 text-xs uppercase font-semibold tracking-wider">Technologie</label>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white font-medium mt-1 border border-white/20">
                      React, AI Chatbots, CRM-Sync
                    </div>
                  </div>

                  <div>
                     <label className="text-blue-100 text-xs uppercase font-semibold tracking-wider">Kontakt</label>
                     <a href="tel:+4930123456" className="block bg-white text-blue-600 rounded-lg p-4 font-bold mt-1 text-center hover:bg-blue-50 transition-colors shadow-lg">
                       +49 (0) 30 123 456
                     </a>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/20 text-center">
                  <p className="text-blue-100 text-sm italic">"Wir automatisieren Ihren Erfolg."</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 border-t border-white/5 bg-surface/50">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold text-white mb-6">Genug gelesen?</h2>
           <Link to="/contact">
             <Button variant="primary" className="text-lg px-10 py-4">
               Jetzt Strategiegespräch buchen <ArrowRight className="ml-2" />
             </Button>
           </Link>
        </div>
      </section>

    </div>
  );
};