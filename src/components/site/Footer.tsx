import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/krupatech-logo.png.asset.json";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-navy-deep/60 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-gradient shadow-glow">
                <Cpu className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display text-lg font-bold">
                Krupa<span className="text-electric">Tech</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Reliable Technology. Trusted Support. Helping Indian businesses run on dependable IT infrastructure.
            </p>
            <div className="flex gap-2">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg glass hover:bg-electric/20 hover:text-electric transition-colors"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {["About", "Services", "Why Us", "Process", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "")}`} className="text-muted-foreground hover:text-electric transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-5">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {["IT Support", "AMC Services", "CCTV Solutions", "Networking", "Server Management", "Remote Support"].map((l) => (
                <li key={l}>
                  <a href="#services" className="text-muted-foreground hover:text-electric transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-electric shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="hover:text-electric transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-electric shrink-0 mt-0.5" />
                <a href="mailto:hello@krupatech.in" className="hover:text-electric transition-colors">hello@krupatech.in</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-electric shrink-0 mt-0.5" />
                <span>Ahmedabad, Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div>© {year} KrupaTech Computers. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-electric transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-electric transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
