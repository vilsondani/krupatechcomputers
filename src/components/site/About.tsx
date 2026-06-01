import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Enterprise-grade networking & structured cabling",
  "Certified server & data infrastructure expertise",
  "End-to-end CCTV design, installation and monitoring",
  "Hardware support across all major brands",
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="glass-strong rounded-3xl p-8 md:p-10 shadow-card relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-electric/30 blur-3xl" />
              <div className="relative">
                <div className="text-xs font-semibold tracking-[0.2em] text-electric uppercase mb-3">
                  Our Story
                </div>
                <div className="font-display text-5xl md:text-6xl font-bold mb-2">10+</div>
                <div className="text-muted-foreground mb-8">years powering Indian businesses</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="font-display text-3xl font-bold text-electric">200+</div>
                    <div className="text-xs text-muted-foreground mt-1">Active Clients</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-electric">5,000+</div>
                    <div className="text-xs text-muted-foreground mt-1">Tickets Resolved</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-electric">99.8%</div>
                    <div className="text-xs text-muted-foreground mt-1">Uptime Delivered</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-electric">24/7</div>
                    <div className="text-xs text-muted-foreground mt-1">Support Window</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.2em] text-electric uppercase mb-3">
              About KrupaTech Computers
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Your dependable <span className="text-gradient">IT infrastructure partner</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              KrupaTech Computers is a trusted IT solutions company helping businesses across
              India build, secure, and operate modern technology infrastructure. Our team
              specialises in networking, server management, CCTV systems and hardware support.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From small offices to multi-location enterprises, we deliver pragmatic, business-ready
              solutions backed by responsive support — so technology becomes an enabler, not a bottleneck.
            </p>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-electric shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
