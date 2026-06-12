import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Phone, ShieldCheck, Zap, Users } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      {/* Glow orbs */}
      <div className="glow-orb h-96 w-96 bg-electric -top-20 -left-20 animate-glow" />
      <div className="glow-orb h-[500px] w-[500px] bg-primary bottom-0 right-0 animate-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-electric animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-muted-foreground">
              Reliable Technology. Trusted Support.
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            Smart IT Solutions for{" "}
            <span className="text-gradient">Modern Businesses</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            KrupaTech Computers delivers reliable IT support, CCTV solutions, networking,
            AMC services, server management, and technology consulting for businesses of all sizes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary-gradient px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 glass rounded-xl px-7 py-4 text-sm font-semibold text-foreground hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            {[
              { icon: Zap, label: "Fast Response", value: "24/7" },
              { icon: Users, label: "Happy Clients", value: "200+" },
              { icon: ShieldCheck, label: "Years Experience", value: "10+" },
            ].map((s, idx) => (
              <motion.div
                key={s.label}
                className="glass rounded-2xl p-4 md:p-5"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, delay: idx * 0.4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <s.icon className="h-5 w-5 text-electric mx-auto mb-2" />
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
