import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const services = [
  "IT Support & Maintenance",
  "Annual Maintenance Contract (AMC)",
  "CCTV Installation & Monitoring",
  "Network Setup & Cabling",
  "Server Installation & Management",
  "Laptop & Desktop Repair",
  "Printer Support",
  "Remote Technical Support",
  "Other",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="glow-orb h-[500px] w-[500px] bg-primary -bottom-40 -right-40" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] text-electric uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let's discuss your <span className="text-gradient">IT requirements</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tell us about your project — we'll respond within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, label: "Phone", value: "+91 73044 10123", href: "tel:+917304410123" },
              { icon: Mail, label: "Email", value: "krupatechcomputers@gmail.com", href: "mailto:krupatechcomputers@gmail.com" },
              { icon: MapPin, label: "Office", value: "Thane, Mumbai, Navi Mumbai" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href ?? "#"}
                className="block glass rounded-2xl p-6 hover:border-electric/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-electric/15 text-electric border border-electric/30">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="font-display font-semibold mt-1">{c.value}</div>
                  </div>
                </div>
              </a>
            ))}

            <div className="glass-strong rounded-2xl p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Business Hours</div>
              <div className="text-sm">Mon – Sat: 9:30 AM – 7:00 PM</div>
              <div className="text-sm text-muted-foreground mt-1">Emergency support: 24/7</div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 glass-strong rounded-3xl p-6 md:p-10 shadow-card">
            {submitted && (
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-electric/40 bg-electric/10 px-4 py-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-electric" />
                Thank you! We'll be in touch within one business day.
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Name" name="name" required />
              <Field label="Company Name" name="company" />
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required />
              <div className="md:col-span-2">
                <Label>Service Required</Label>
                <select
                  name="service"
                  required
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/30 transition-all"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-navy">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-navy">{s}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <Label>Message</Label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your requirement..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/30 transition-all resize-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-gradient px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant hover:shadow-glow transition-all"
            >
              Send Inquiry
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{children}</label>;
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label>{label}{required && <span className="text-electric"> *</span>}</Label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/30 transition-all"
      />
    </div>
  );
}
