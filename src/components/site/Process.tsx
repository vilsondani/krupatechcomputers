import { MessageSquare, Search, FileText, Wrench } from "lucide-react";

const steps = [
  { n: "01", icon: MessageSquare, title: "Consultation", desc: "We listen to your business goals, current IT pain points and budget expectations." },
  { n: "02", icon: Search, title: "Site Assessment", desc: "Our technicians evaluate your premises, infrastructure and existing hardware in detail." },
  { n: "03", icon: FileText, title: "Solution Planning", desc: "We design a clear, costed proposal mapped to your timeline and growth roadmap." },
  { n: "04", icon: Wrench, title: "Installation & Support", desc: "Professional rollout followed by ongoing support, monitoring and maintenance." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] text-electric uppercase mb-3">
            Our Process
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            A simple <span className="text-gradient">4-step engagement</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Clear, structured and transparent — from first conversation to long-term support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="glass rounded-2xl p-7 h-full hover:border-electric/40 transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-electric/15 text-electric border border-electric/30">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="font-display text-3xl font-bold text-white/10">{s.n}</div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-electric/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
