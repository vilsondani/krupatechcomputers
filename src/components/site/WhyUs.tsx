import { Clock, Award, IndianRupee, Briefcase, MapPin, Star } from "lucide-react";

const items = [
  { icon: Clock, title: "Fast Response Time", desc: "Same-day onsite visits and instant remote support, so downtime never derails your day." },
  { icon: Award, title: "Experienced Technicians", desc: "A senior team with deep expertise across networking, servers, and end-user hardware." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Transparent, business-friendly rates with flexible AMC plans built for Indian SMBs." },
  { icon: Briefcase, title: "Business-Focused Solutions", desc: "Every solution is engineered around your workflow, uptime targets and budget reality." },
  { icon: MapPin, title: "Onsite & Remote Support", desc: "Hybrid support model — at your office when needed, remote when you need it fast." },
  { icon: Star, title: "Trusted by Local Businesses", desc: "A growing roster of manufacturing, retail and corporate clients who renew year after year." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-24 md:py-32 bg-navy-deep/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] text-electric uppercase mb-3">
            Why Choose Us
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Built for <span className="text-gradient">uptime, trust, and growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine technical depth with a service-first mindset that businesses depend on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.title} className="glass rounded-2xl p-7 hover:border-electric/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-electric/15 text-electric border border-electric/30">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1.5">{it.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
