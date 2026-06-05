'use client';

import { PHONE_TEL, whatsappUrl } from '@/lib/contact';

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 shadow-[0_-4px_24px_rgba(0,0,0,0.12)] safe-area-pb">
      <div className="grid grid-cols-3 gap-1 p-2 max-w-lg mx-auto">
        <a
          href={PHONE_TEL}
          className="flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-primary text-white text-[10px] font-bold uppercase tracking-wide"
        >
          <span className="text-lg mb-0.5">📞</span>
          Call Now
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-[#25D366] text-white text-[10px] font-bold uppercase tracking-wide"
        >
          <span className="text-lg mb-0.5">💬</span>
          WhatsApp
        </a>
        <a
          href="/#contact"
          className="flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-secondary text-white text-[10px] font-bold uppercase tracking-wide"
        >
          <span className="text-lg mb-0.5">🎯</span>
          Free Demo
        </a>
      </div>
    </div>
  );
}
