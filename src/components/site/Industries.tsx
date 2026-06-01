import { Factory, Building2, Warehouse, ShoppingBag, GraduationCap, Briefcase } from "lucide-react";

const industries = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Building2, label: "Corporate Offices" },
  { icon: Warehouse, label: "Warehouses" },
  { icon: ShoppingBag, label: "Retail Stores" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: Briefcase, label: "Small & Medium Businesses" },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-24 md:py-32 bg-navy-deep/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] text-electric uppercase mb-3">
            Industries We Serve
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Trusted across <span className="text-gradient">diverse sectors</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From factory floors to corporate boardrooms — solutions adapted to your environment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {industries.map((i) => (
            <div
              key={i.label}
              className="group glass rounded-2xl p-8 text-center hover:bg-white/[0.07] hover:-translate-y-1 transition-all"
            >
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-primary-gradient shadow-glow group-hover:scale-110 transition-transform">
                <i.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="font-display font-semibold">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
