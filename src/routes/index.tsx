import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { About } from "@/components/site/About";
import { Industries } from "@/components/site/Industries";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KrupaTech Computers — Reliable IT Solutions & Support in India" },
      {
        name: "description",
        content:
          "KrupaTech Computers delivers IT support, CCTV, networking, AMC, server management and technology consulting for businesses across India.",
      },
      { property: "og:title", content: "KrupaTech Computers — Smart IT Solutions for Modern Businesses" },
      {
        property: "og:description",
        content:
          "Reliable Technology. Trusted Support. IT services, CCTV, networking, server management and AMC for Indian businesses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "KrupaTech Computers",
          description:
            "IT solutions and technology services company offering IT support, CCTV, networking, AMC, and server management.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },
          telephone: "+91-98765-43210",
          email: "krupatechcomputers@gmail.com",
          areaServed: "IN",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Industries />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
