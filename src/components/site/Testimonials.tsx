import { Quote, Star } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

const reviews = [
  {
    quote:
      "KrupaTech transformed our office network and CCTV setup. Their team is responsive, professional and our downtime has dropped to nearly zero.",
    name: "Rajesh Patel",
    role: "Operations Head, Manufacturing Co.",
  },
  {
    quote:
      "The AMC service has been a game-changer. We get fast onsite support and our staff no longer worries about IT issues breaking their day.",
    name: "Priya Sharma",
    role: "Admin Manager, Corporate Office",
  },
  {
    quote:
      "Excellent server setup and ongoing management. KrupaTech understands business priorities — not just technology.",
    name: "Arun Mehta",
    role: "Director, Retail Chain",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-navy-deep/40 overflow-hidden">
      <div className="glow-orb h-96 w-96 bg-primary -left-20 top-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] text-electric uppercase mb-3">
            Testimonials
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            What our <span className="text-gradient">clients say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="glass-strong rounded-2xl p-8 hover:-translate-y-1 transition-transform shadow-card"
            >
              <Quote className="h-8 w-8 text-electric mb-5 opacity-80" />
              <blockquote className="text-foreground/90 leading-relaxed mb-6">
                "{r.quote}"
              </blockquote>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-electric text-electric" />
                ))}
              </div>
              <figcaption>
                <div className="font-display font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
