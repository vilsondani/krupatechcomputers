import { Link } from "@tanstack/react-router";
import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/krupatech-logo.png.asset.json";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#about", label: "About" },
  { href: "#industries", label: "Industries" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass-strong shadow-card" : "glass"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-glow overflow-hidden">
              <img src={logo.url} alt="KrupaTech Computers" className="h-9 w-9 object-contain" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Krupa<span className="text-electric">Tech</span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center justify-center rounded-xl bg-primary-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition-opacity"
          >
            Get Consultation
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-up">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block text-center rounded-xl bg-primary-gradient px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Get Consultation
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
