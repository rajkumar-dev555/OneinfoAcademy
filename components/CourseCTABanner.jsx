'use client';

import Link from 'next/link';
import { PHONE_TEL, whatsappUrlForCourse } from '@/lib/contact';

export default function CourseCTABanner({ courseTitle, placementHref }) {
  return (
    <section className="my-12 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary to-gray-900 text-white shadow-2xl">
      <p className="text-secondary text-xs font-black uppercase tracking-widest mb-2">Limited seats · Next batch</p>
      <h2 className="text-2xl md:text-3xl font-heading font-black mb-3">
        Ready to start {courseTitle}?
      </h2>
      <p className="text-white/80 mb-6 max-w-xl">
        Book a free demo class, speak to our mentor, or message us on WhatsApp — we respond within a few hours.
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <a
          href="#contact"
          className="inline-flex justify-center items-center px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-2xl transition active:scale-95"
        >
          Book Free Demo Class
        </a>
        <a
          href={whatsappUrlForCourse(courseTitle)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center px-8 py-4 bg-[#25D366] text-white font-bold rounded-2xl transition active:scale-95"
        >
          WhatsApp Enquiry
        </a>
        <a
          href={PHONE_TEL}
          className="inline-flex justify-center items-center px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl transition active:scale-95"
        >
          Call {courseTitle.includes('Cyber') ? 'Cyber Security Team' : 'Admissions'}
        </a>
        {placementHref && (
          <Link
            href={placementHref}
            className="inline-flex justify-center items-center px-8 py-4 text-secondary font-bold underline underline-offset-4"
          >
            View placement outcomes →
          </Link>
        )}
      </div>
    </section>
  );
}
