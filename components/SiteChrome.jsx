'use client';

import dynamic from 'next/dynamic';

const WhatsAppWidget = dynamic(() => import('@/components/WhatsAppWidget'), { ssr: false });
const CallWidget = dynamic(() => import('@/components/CallWidget'), { ssr: false });
const StickyCTA = dynamic(() => import('@/components/StickyCTA'), { ssr: false });
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'), { ssr: false });

/** Global CTAs on every page */
export default function SiteChrome() {
  return (
    <>
      <WhatsAppWidget />
      <CallWidget />
      <StickyCTA />
      <ScrollToTop />
      <div className="h-16 md:h-0" aria-hidden="true" />
    </>
  );
}
