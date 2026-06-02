import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { z } from "zod";
import {
  ArrowRight,
  Shield,
  Wrench,
  Monitor,
  Network,
  Server,
  Video,
  Phone,
  Clock,
  Award,
  HeadphonesIcon,
  FileCheck,
  Sparkles,
  Send,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/amc")({
  head: () => ({
    meta: [
      { title: "Annual Maintenance Contract (AMC) — KrupaTech Computers" },
      {
        name: "description",
        content:
          "Get an AMC plan with KrupaTech Computers. 18+ years of experience in hardware, networking, CCTV, servers and IT support. Prevent downtime and manage IT costs effectively.",
      },
      {
        property: "og:title",
        content: "Annual Maintenance Contract (AMC) — KrupaTech Computers",
      },
      {
        property: "og:description",
        content:
          "Prevent unexpected IT failures with KrupaTech's AMC services. Hardware, networking, CCTV, servers and IT support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/amc" },
    ],
    links: [{ rel: "canonical", href: "/amc" }],
  }),
  component: AmcPage,
});

const benefits = [
  { icon: Shield, title: "Regular Preventive Maintenance Visits", desc: "Scheduled health checks to catch issues before they become costly problems." },
  { icon: HeadphonesIcon, title: "Priority Technical Support", desc: "Jump the queue with dedicated support channels and faster turnaround times." },
  { icon: Clock, title: "Faster Issue Resolution", desc: "Experienced technicians who diagnose and fix problems quickly, minimizing disruption." },
  { icon: Monitor, title: "Computer, Laptop & Printer Support", desc: "Complete coverage for all your endpoint devices, from desktops to multifunction printers." },
  { icon: Network, title: "Network, Router & Switch Maintenance", desc: "Keep your LAN, Wi-Fi and switching infrastructure running at peak performance." },
  { icon: Server, title: "Server & Firewall Monitoring", desc: "Proactive monitoring of servers and security appliances to prevent breaches and failures." },
  { icon: Video, title: "CCTV System Health Check & Support", desc: "Regular inspections, firmware updates and troubleshooting for your surveillance systems." },
  { icon: Wrench, title: "Remote & On-Site Assistance", desc: "Flexible support model — remote fixes when possible, physical visits when necessary." },
  { icon: FileCheck, title: "Reduced Breakdown & Downtime", desc: "Predictive maintenance and timely replacements keep your operations running smoothly." },
  { icon: Sparkles, title: "Expert Guidance for IT Upgrades", desc: "Strategic advice on when and what to upgrade so your technology stays future-ready." },
  { icon: Award, title: "Cost-Effective IT Management", desc: "Flat-rate AMC plans eliminate surprise repair bills and make budgeting predictable." },
];

const reasons = [
  { icon: Award, title: "18+ Years of Industry Experience", desc: "Nearly two decades of hands-on expertise across every facet of business IT." },
  { icon: HeadphonesIcon, title: "Dedicated IT Support Team", desc: "A committed team that knows your infrastructure and responds like an in-house department." },
  { icon: Clock, title: "Quick Response Time", desc: "We prioritize speed — because every minute of downtime costs your business money." },
  { icon: FileCheck, title: "Professional Service & Documentation", desc: "Detailed service reports and transparent communication after every visit." },
  { icon: Shield, title: "Trusted by Businesses, Offices, Schools & Commercial Establishments", desc: "A diverse client base that renews contracts year after year based on trust." },
];

const amcServices = [
  "Comprehensive IT AMC",
  "Hardware & Desktop AMC",
  "Network & Router AMC",
  "CCTV Surveillance AMC",
  "Server & Firewall AMC",
  "Printer & Peripheral AMC",
  "Multiple Services AMC",
];

const amcSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().trim().min(1, "Company name is required").max(150),
  phone: z.string().trim().regex(/^[0-9\s\-+()]{7,20}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  service: z.string().min(1, "Please select a service type"),
  message: z.string().trim().min(5, "Message must be at least 5 characters").max(1000),
});

type FormErrors = Partial<Record<keyof z.infer<typeof amcSchema>, string>>;

function AmcInquiryForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    const result = amcSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const path = issue.path[0] as keyof FormErrors;
        if (!fieldErrors[path]) fieldErrors[path] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  const clearError = (field: keyof FormErrors) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-6 md:p-10 shadow-card">
        {submitted && (
          <div className="mb-6 flex items-center gap-3 rounded-xl border border-electric/40 bg-electric/10 px-4 py-3 text-sm">
            <CheckCircle2 className="h-5 w-5 text-electric shrink-0" />
            Thank you! We will contact you shortly to discuss your AMC plan.
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Name <span className="text-electric">*</span>
            </label>
            <input
              name="name"
              type="text"
              onChange={() => clearError("name")}
              className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/30 transition-all ${errors.name ? "border-destructive" : "border-white/10"}`}
            />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Company Name <span className="text-electric">*</span>
            </label>
            <input
              name="company"
              type="text"
              onChange={() => clearError("company")}
              className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/30 transition-all ${errors.company ? "border-destructive" : "border-white/10"}`}
            />
            {errors.company && <p className="text-destructive text-xs mt-1">{errors.company}</p>}
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Phone Number <span className="text-electric">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              onChange={() => clearError("phone")}
              className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/30 transition-all ${errors.phone ? "border-destructive" : "border-white/10"}`}
            />
            {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Email <span className="text-electric">*</span>
            </label>
            <input
              name="email"
              type="email"
              onChange={() => clearError("email")}
              className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/30 transition-all ${errors.email ? "border-destructive" : "border-white/10"}`}
            />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Service Type <span className="text-electric">*</span>
            </label>
            <select
              name="service"
              onChange={() => clearError("service")}
              defaultValue=""
              className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/30 transition-all ${errors.service ? "border-destructive" : "border-white/10"}`}
            >
              <option value="" disabled className="bg-navy">Select an AMC service</option>
              {amcServices.map((s) => (
                <option key={s} value={s} className="bg-navy">{s}</option>
              ))}
            </select>
            {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Message <span className="text-electric">*</span>
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your infrastructure, number of devices, and any specific requirements..."
              onChange={() => clearError("message")}
              className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/30 transition-all resize-none ${errors.message ? "border-destructive" : "border-white/10"}`}
            />
            {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-gradient px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant hover:shadow-glow transition-all"
        >
          Request AMC Quote
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
}

function AmcPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="glow-orb h-96 w-96 bg-electric -top-20 -left-20 animate-glow" />
          <div className="glow-orb h-[500px] w-[500px] bg-primary bottom-0 right-0 animate-glow" style={{ animationDelay: "1.5s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-up">
                <span className="h-2 w-2 rounded-full bg-electric animate-pulse" />
                <span className="text-xs font-medium tracking-wide text-muted-foreground">
                  Annual Maintenance Contract
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Uninterrupted IT Operations with{" "}
                <span className="text-gradient">Professional AMC Services</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
                To ensure smooth and uninterrupted operation of your IT infrastructure, we offer our Annual Maintenance Contract (AMC) services. With our <strong className="text-foreground">18+ years of experience</strong> in Hardware, Networking, CCTV, Servers, and IT Support, we help businesses minimize downtime and maintain efficient operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-gradient px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
                >
                  Request AMC Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="tel:+917304410123"
                  className="inline-flex items-center justify-center gap-2 glass rounded-xl px-7 py-4 text-sm font-semibold text-foreground hover:bg-white/10 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call 73044 10123
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="relative py-24 md:py-32">
          <div className="glow-orb h-96 w-96 bg-electric top-40 right-0 opacity-30" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="text-xs font-semibold tracking-[0.2em] text-electric uppercase mb-3">
                What's Included
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
                AMC Service <span className="text-gradient">Benefits</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                A comprehensive maintenance plan that covers every layer of your IT ecosystem.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="group glass rounded-2xl p-6 hover:bg-white/[0.07] hover:-translate-y-1 hover:border-electric/40 transition-all duration-300"
                >
                  <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-electric/15 text-electric border border-electric/30 group-hover:bg-electric/25 transition-colors">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="relative py-24 md:py-32 bg-navy-deep/40">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="text-xs font-semibold tracking-[0.2em] text-electric uppercase mb-3">
                Why KrupaTech
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Why Choose <span className="text-gradient">KrupaTech Computers?</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Decades of trust, built one successful contract at a time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {reasons.map((r) => (
                <div key={r.title} className="glass rounded-2xl p-7 hover:border-electric/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-electric/15 text-electric border border-electric/30">
                      <r.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-1.5">{r.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
          <div className="glow-orb h-[500px] w-[500px] bg-primary -bottom-40 -right-40" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <div className="text-xs font-semibold tracking-[0.2em] text-electric uppercase mb-3">
                Get Started
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Request an <span className="text-gradient">AMC Quote</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Fill in the details below and we will prepare a customized AMC plan for your business.
              </p>
            </div>

            <AmcInquiryForm />
          </div>
        </section>

        {/* Brand Strip */}
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3">
              <span className="font-display text-sm font-bold">KrupaTech Computers</span>
              <span className="h-4 w-px bg-white/20" />
              <span className="text-xs text-muted-foreground">IT Infrastructure &bull; Networking &bull; CCTV &bull; Server Support &bull; Computer Services</span>
            </div>
            <p className="text-muted-foreground text-sm mt-6">
              We look forward to continuing our association and supporting your business with reliable IT services.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
