import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phone = "917304410123";
  const message = encodeURIComponent("Hi KrupaTech, I'd like to know more about your IT services.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-elegant hover:scale-110 transition-transform">
        <MessageCircle className="h-7 w-7 text-white fill-white" />
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-navy-deep px-3 py-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
        Chat with us
      </span>
    </a>
  );
}
