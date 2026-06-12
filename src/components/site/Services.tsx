import {
  Headphones, FileCheck, Camera, Network, Server, Laptop, Printer, MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  { icon: Headphones, title: "IT Support & Maintenance", description: "Proactive monitoring and rapid troubleshooting to keep your systems running without interruption." },
  { icon: FileCheck, title: "Annual Maintenance Contracts", description: "Predictable, all-inclusive AMC packages tailored to your hardware, software and support needs." },
  { icon: Camera, title: "CCTV Installation & Monitoring", description: "End-to-end surveillance design with HD cameras, NVR setup and remote viewing for any premises." },
  { icon: Network, title: "Network Setup & Structured Cabling", description: "Reliable LAN, Wi-Fi and structured cabling built for speed, scale and clean infrastructure." },
  { icon: Server, title: "Server Installation & Management", description: "Server provisioning, configuration, backups and ongoing administration for business workloads." },
  { icon: Laptop, title: "Laptop & Desktop Repair", description: "Hardware diagnostics, component replacement and performance tuning across all major brands." },
  { icon: Printer, title: "Printer Support & Maintenance", description: "Installation, driver setup, cartridge service and AMC for office printers and multifunction units." },
  { icon: MonitorSmartphone, title: "Remote Technical Support", description: "Secure remote desktop assistance that resolves issues in minutes, anywhere in India." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="glow-orb h-96 w-96 bg-electric top-40 right-0 opacity-30" />

      <div className="container mx-auto px-4 relative">
        <Reveal className="max-w-2xl mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] text-electric uppercase mb-3">
            Our Services
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Complete IT solutions, <span className="text-gradient">under one roof</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From everyday support to enterprise infrastructure, we cover the full stack of
            services modern businesses need to stay productive and secure.
          </p>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <StaggerItem
              key={s.title}
              className="group glass rounded-2xl p-6 hover:bg-white/[0.07] hover:-translate-y-1 hover:border-electric/40 transition-all duration-300"
            >
              <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-primary-gradient shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
