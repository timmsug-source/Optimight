import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, LayoutTemplate, Hammer, TrendingUp, ShieldCheck, Clock, Users, Activity, Compass, Star, Quote, ChevronDown, Plus, Minus } from 'lucide-react';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  // State for FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Was ist der konkrete ROI (Return on Investment) von KI-Automatisierungen?",
      answer: "Der ROI zeigt sich meist in zwei Bereichen: massive Zeitersparnis und Fehlerreduktion. Während ein Mitarbeiter für die manuelle Datenerfassung oder E-Mail-Sortierung Stunden benötigt, erledigt eine KI dies in Sekunden – rund um die Uhr. In der Regel amortisieren sich unsere Automatisierungen bereits innerhalb der ersten 3 bis 6 Monate durch eingesparte Personalkosten und eine höhere Durchlaufgeschwindigkeit Ihrer Prozesse."
    },
    {
      question: "Wie sicher sind meine Unternehmensdaten bei der Nutzung von KI-Tools?",
      answer: "Datenschutz hat für uns oberste Priorität. Wir arbeiten nach DSGVO-Standards und nutzen professionelle API-Schnittstellen (Enterprise-Level). Das bedeutet: Ihre Daten werden nicht zum Training öffentlicher KI-Modelle verwendet. Alle Prozesse finden in verschlüsselten Umgebungen statt, sodass Ihre Geschäftsgeheimnisse zu jedem Zeitpunkt geschützt bleiben."
    },
    {
      question: "Müssen meine Mitarbeiter Experten sein, um die neue App oder Software zu bedienen?",
      answer: "Absolut nicht. Unsere Philosophie ist \"Komplexität im Hintergrund, Einfachheit im Vordergrund\". Wir entwickeln Interfaces, die so intuitiv wie WhatsApp oder eine einfache Kalender-App sind. Besonders bei unserer App für Handwerker achten wir darauf, dass sie im stressigen Arbeitsalltag mit wenigen Klicks bedienbar ist – ohne technische Schulung."
    },
    {
      question: "Können die KI-Lösungen in unsere bestehende Software-Landschaft integriert werden?",
      answer: "Ja, das ist einer unserer Kernvorteile. Wir bauen keine \"Insel-Lösungen\", sondern nutzen moderne Schnittstellen (APIs), um Ihre neue KI direkt mit bestehenden Systemen wie CRM, ERP, Outlook, Slack oder Branchen-Software zu verknüpfen. Ihr Workflow bleibt bestehen, er wird lediglich durch KI beschleunigt."
    },
    {
      question: "Warum sollte ich eine KI-Website bauen lassen, statt einen herkömmlichen Baukasten zu nutzen?",
      answer: "Herkömmliche Websites sind statische digitale Visitenkarten. Eine KI-Website von uns ist ein aktiver Mitarbeiter. Sie kann Besucheranfragen in Echtzeit vorqualifizieren, Inhalte dynamisch an das Interesse des Nutzers anpassen und durch integrierte Agenten komplexe Kundenfragen sofort beantworten. Sie ist darauf optimiert, aus Besuchern aktiv Kunden zu machen – automatisiert."
    },
    {
      question: "Wie lange dauert die Implementierung einer individuellen KI-Automation?",
      answer: "Wir arbeiten agil und ergebnisorientiert. Nach einem ersten Beratungsgespräch erstellen wir meist innerhalb von 14 Tagen einen funktionsfähigen Prototypen (MVP). Die finale Implementierung einer komplexen Automation oder App dauert je nach Umfang in der Regel zwischen 4 und 8 Wochen, sodass Sie schnell von den Vorteilen profitieren können."
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>

        <div className="container mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-ping"></span>
            Neu: AI-driven Workflow Automation 2.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Digitaler Vorsprung <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              durch echte Intelligenz.
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Optimight verbindet High-End Webtechnologie mit Prozessautomatisierung. 
            Für Handwerk und Business – skalierbar, effizient und zukunftssicher.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" icon className="w-full sm:w-auto">Kostenlose Erstberatung</Button>
            </Link>
            <Link to="/websites">
              <Button variant="outline" className="w-full sm:w-auto">Lösungen entdecken</Button>
            </Link>
          </div>

          {/* Trust/Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-white/5 pt-12">
            {[
              { val: '500+', label: 'Digitalisierte Prozesse' },
              { val: '24/7', label: 'Automatisierter Support' },
              { val: '40%', label: 'Mehr Umsatz' },
              { val: '100%', label: 'DSGVO Konform' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: EMOTIONAL CONVERSION SECTION (NOT YOUR FAULT) */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Gradient Mesh */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#020617] via-[#050b1d] to-background z-0"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Copy */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                Es ist nicht <br/><span className="text-blue-500">Ihre Schuld...</span>
              </h2>
              
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  Es ist nicht Ihre Schuld, nicht zu wissen, wie man den KI-Hype von echten, greifbaren Geschäftschancen trennt. Woher sollen Sie wissen, welche Prozesse sich wirklich für eine Implementierung eignen, wenn das operative Tagesgeschäft Ihre volle Aufmerksamkeit fordert?
                </p>
                <p className="border-l-2 border-blue-500 pl-4 text-slate-300">
                  Wir sind hier, um den Druck zu nehmen, den Anschluss zu verlieren. Wir schützen Ihr wertvollstes Kapital – die Zeit Ihrer besten Mitarbeiter – vor repetitiven Aufgaben, damit Ihr Unternehmen bereit ist für echtes Scaling.
                </p>
              </div>

              {/* Pain Points */}
              <div className="mt-8 space-y-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mt-1 border border-blue-500/20">
                    <Activity className="text-blue-400 w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Wettbewerbsdruck</h4>
                    <p className="text-slate-400 text-sm">Die Sorge, technologisch überholt zu werden.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mt-1 border border-blue-500/20">
                    <Clock className="text-blue-400 w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Ineffizienz</h4>
                    <p className="text-slate-400 text-sm">Frustration über manuelle Prozesse, die wertvolle Ressourcen binden.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mt-1 border border-blue-500/20">
                    <Compass className="text-blue-400 w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Orientierungslosigkeit</h4>
                    <p className="text-slate-400 text-sm">Der Anspruch, zukunftsfähig zu sein, ohne nutzlosen Trends nachzulaufen.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-white font-medium italic mb-6">
                  "SIE SIND NICHT ALLEINE. Wir liefern die klare, umsetzbare Lösung für strategische Schritte, die sich wirklich auszahlen. <span className="text-blue-400">Herzlichen Glückwunsch – Sie haben uns gefunden.</span>"
                </p>
                <Link to="/contact">
                  <Button variant="primary" className="shadow-[0_0_20px_rgba(37,99,235,0.4)] animate-pulse hover:animate-none">
                    Jetzt unverbindliches Erstgespräch buchen
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Visual (Abstract Strategy Roadmap) */}
            <div className="relative mt-12 lg:mt-0">
              <div className="glass-panel p-8 rounded-2xl border-t border-t-blue-500/50 relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                 {/* Decorative background within card */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[60px] pointer-events-none"></div>

                 <div className="relative z-10">
                   <div className="flex items-center space-x-3 mb-8">
                     <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                     <h3 className="text-slate-200 font-mono text-sm tracking-widest uppercase">Status Quo Analyse</h3>
                   </div>

                   {/* Roadmap Nodes */}
                   <div className="space-y-8 relative pl-8 border-l border-slate-700 ml-4">
                      {/* Item 1 */}
                      <div className="relative">
                        <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                          <div className="text-slate-400 text-xs mb-1">Problem</div>
                          <div className="text-white font-medium">Manuelle Prozesse & Zeitmangel</div>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="relative">
                         <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-blue-900 border border-blue-500 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        </div>
                        <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                          <div className="text-blue-400 text-xs mb-1">Optimight Strategie</div>
                          <div className="text-white font-medium">KI-Integration & Automatisierung</div>
                        </div>
                      </div>

                      {/* Item 3 */}
                       <div className="relative">
                        <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-cyan-900 border border-cyan-500 flex items-center justify-center">
                           <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                        </div>
                        <div className="bg-gradient-to-r from-cyan-900/20 to-transparent p-4 rounded-lg border border-cyan-500/30">
                          <div className="text-cyan-400 text-xs mb-1">Ergebnis</div>
                          <div className="text-white font-bold">Skalierbares Wachstum</div>
                        </div>
                      </div>
                   </div>

                   {/* Bottom Graph Visual */}
                   <div className="mt-8 pt-6 border-t border-white/5">
                      <div className="flex items-end space-x-2 h-24 opacity-80">
                        <div className="w-1/5 bg-slate-700 h-[30%] rounded-t"></div>
                        <div className="w-1/5 bg-slate-600 h-[45%] rounded-t"></div>
                        <div className="w-1/5 bg-slate-500 h-[40%] rounded-t"></div>
                        <div className="w-1/5 bg-blue-600 h-[75%] rounded-t relative shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-blue-400 text-xs font-bold">+140%</div>
                        </div>
                        <div className="w-1/5 bg-cyan-400 h-[95%] rounded-t shadow-[0_0_20px_rgba(6,182,212,0.6)]"></div>
                      </div>
                   </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PAIN/SOLUTION (FUNNEL ENTRY) */}
      <section className="py-24 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Warum Optimight?</h2>
            <p className="text-slate-400">
              Der Markt wartet nicht. Veraltete Websites und manuelle Papierkram-Prozesse kosten Sie täglich Geld und wertvolle Fachkräfte. Wir schließen diese Lücke.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service A: Web */}
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition-colors duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <LayoutTemplate size={120} />
              </div>
              <div className="w-14 h-14 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6 text-blue-400">
                <Bot size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Intelligente Websites</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Mehr als nur eine Visitenkarte. Unsere KI-gestützten Websites agieren als Ihr bester Vertriebsmitarbeiter – 24/7, mehrsprachig und conversion-optimiert.
              </p>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center"><TrendingUp size={16} className="text-green-400 mr-2"/> Auto-Lead-Qualifizierung</li>
                <li className="flex items-center"><TrendingUp size={16} className="text-green-400 mr-2"/> SEO-Dominanz durch KI</li>
                <li className="flex items-center"><TrendingUp size={16} className="text-green-400 mr-2"/> Integrierte Chatbots</li>
              </ul>
              <Link to="/websites">
                <Button variant="outline" className="w-full">Mehr erfahren <ArrowRight size={16} className="ml-2"/></Button>
              </Link>
            </div>

            {/* Service B: Dashboard (Craft) */}
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500/50 transition-colors duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Hammer size={120} />
              </div>
              <div className="w-14 h-14 rounded-lg bg-cyan-900/30 flex items-center justify-center mb-6 text-cyan-400">
                <LayoutTemplate size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Handwerk Dashboard</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Das Betriebssystem für moderne Handwerker. Vom Aufmaß bis zur Rechnung – alles in einer App. Schluss mit Zettelwirtschaft und Chaos.
              </p>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center"><ShieldCheck size={16} className="text-cyan-400 mr-2"/> Digitale Bauakte</li>
                <li className="flex items-center"><ShieldCheck size={16} className="text-cyan-400 mr-2"/> Mitarbeiter-Planung</li>
                <li className="flex items-center"><ShieldCheck size={16} className="text-cyan-400 mr-2"/> One-Click Rechnungen</li>
              </ul>
              <Link to="/dashboard">
                <Button variant="outline" className="w-full">Zur Demo <ArrowRight size={16} className="ml-2"/></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE / EDUCATIONAL SECTION */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">KI ist kein Trend.<br />Es ist Ihre Lebensversicherung.</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-blue-400">
                    <Clock />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Zeit sparen</h4>
                    <p className="text-slate-400 text-sm">Automatisieren Sie repetitive Aufgaben. Sparen Sie bis zu 15 Stunden Büroarbeit pro Woche.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-blue-400">
                    <Users />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Fachkräfte binden</h4>
                    <p className="text-slate-400 text-sm">Moderne Tools machen attraktive Arbeitgeber. Zeigen Sie, dass Ihr Betrieb in der Zukunft angekommen ist.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-blue-400">
                    <TrendingUp />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Marge erhöhen</h4>
                    <p className="text-slate-400 text-sm">Präzise Nachkalkulation und weniger Fehler bedeuten am Ende des Jahres mehr Gewinn.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Abstract Chart/Graph */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full"></div>
              <div className="glass-panel p-8 rounded-xl relative z-10 border-l-4 border-l-cyan-400">
                <h3 className="text-lg font-mono text-cyan-400 mb-4">ROI Berechnung</h3>
                <div className="space-y-4">
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-600 w-[40%]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Traditionell</span>
                    <span>Effizienz: 40%</span>
                  </div>
                  
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden mt-6">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[95%] shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-cyan-400 font-bold">
                    <span>Mit Optimight</span>
                    <span>Effizienz: 95%</span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white text-3xl font-bold">+ 3.400 €</p>
                  <p className="text-slate-400 text-sm">Durchschnittliche Ersparnis / Monat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION (Moved Up) */}
      <section className="py-32 bg-gradient-to-t from-blue-900/20 to-transparent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Bereit für das Upgrade?</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam herausfinden, wie wir Ihr Unternehmen oder Ihren Handwerksbetrieb auf das nächste Level heben.
          </p>
          <Link to="/contact">
            <Button variant="secondary" className="text-lg px-10 py-4" icon>
              Gespräch vereinbaren
            </Button>
          </Link>
          <p className="mt-4 text-sm text-slate-600">Unverbindlich & Kostenlos. Kein Verkaufsdruck.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-surface/30 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Kunden, die nicht mehr <br/>zurück wollen.</h2>
            <p className="text-slate-400">
              Echte Ergebnisse aus dem Mittelstand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="glass-panel p-8 rounded-xl relative hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 text-blue-500/20" size={48} />
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />)}
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed">
                "Die digitale Bauakte von Optimight hat uns gerettet. Früher verschwanden Zettel im Transporter, heute habe ich jedes Aufmaß sofort im Büro. Wir sparen pro Baustelle locker 2 Stunden."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-white mr-4">MW</div>
                <div>
                  <div className="text-white font-medium text-sm">Markus Weber</div>
                  <div className="text-slate-500 text-xs">Bauunternehmer</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="glass-panel p-8 rounded-xl relative hover:-translate-y-2 transition-transform duration-300 border-t-2 border-t-cyan-400">
              <Quote className="absolute top-6 right-6 text-cyan-500/20" size={48} />
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />)}
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed">
                "Unsere alte Website war tot. Die neue KI-Lösung qualifiziert Anfragen vor, bevor ich überhaupt den Hörer abnehme. Die Qualität der Erstgespräche ist extrem gestiegen."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-white mr-4">SL</div>
                <div>
                  <div className="text-white font-medium text-sm">Sarah Lehmann</div>
                  <div className="text-slate-500 text-xs">Vertriebsleitung</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="glass-panel p-8 rounded-xl relative hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 text-blue-500/20" size={48} />
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />)}
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed">
                "Wir hatten Angst vor der Implementierung, aber das Team hat uns an die Hand genommen. Die Automatisierung der Rechnungsstellung läuft jetzt fehlerfrei im Hintergrund."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-white mr-4">TK</div>
                <div>
                  <div className="text-white font-medium text-sm">Thomas Koch</div>
                  <div className="text-slate-500 text-xs">Geschäftsführer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -z-10"></div>
        
        <div className="container mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Häufig gestellte Fragen</h2>
            <p className="text-slate-400">
              Klarheit schaffen, bevor wir starten.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className={`glass-panel rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-cyan-500/40 bg-slate-800/80' : 'hover:bg-slate-800/50'}`}
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                      {faq.question}
                    </span>
                    <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-500'}`}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  <div 
                    className={`px-6 text-slate-400 text-sm leading-relaxed overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                     <div className="pt-2 border-t border-white/5">
                        {faq.answer}
                     </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};