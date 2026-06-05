'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import CourseCTABanner from '@/components/CourseCTABanner';
import { getCourseBySlug } from '@/data/courses';
import { localPages } from '@/data/localPages';

export default function LocalLanding({ page }) {
  const parentCourse = getCourseBySlug(page.parentCourseSlug);
  const otherLocal = localPages.filter((p) => p.slug !== page.slug && p.parentCourseSlug === page.parentCourseSlug);

  return (
    <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="relative h-[320px] mb-12 overflow-hidden">
          <img src={page.image} alt={page.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/50 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <span className="text-5xl mb-4 block">{page.icon}</span>
              <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-3">{page.title}</h1>
              <p className="text-white/90 max-w-xl mx-auto">Training near {page.area}, Coimbatore</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
            <div
              className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: page.body }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h2 className="font-bold text-primary dark:text-white mb-2">Nearby colleges</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{page.nearbyColleges}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h2 className="font-bold text-primary dark:text-white mb-2">Nearby IT & employers</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{page.nearbyIT}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 md:col-span-2">
              <h2 className="font-bold text-primary dark:text-white mb-2">Transport & access</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{page.transport}</p>
            </div>
          </div>

          <ul className="space-y-3 mb-10">
            {page.localHighlights.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-secondary font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>

          {parentCourse && (
            <CourseCTABanner
              courseTitle={parentCourse.title}
              placementHref={
                parentCourse.slug === 'cyber-security-course-coimbatore'
                  ? '/cyber-security-placement-program'
                  : '/placements'
              }
            />
          )}

          {parentCourse && (
            <div className="bg-secondary/10 border border-secondary/20 rounded-3xl p-8 text-center mb-10">
              <h2 className="text-xl font-bold text-primary dark:text-white mb-3">Full program details</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                View syllabus, tools, salary outcomes, FAQs, and enrollment for our main {page.area} area program.
              </p>
              <Link
                href={`/${parentCourse.slug}`}
                className="inline-block px-8 py-3 bg-secondary text-white font-bold rounded-full hover:opacity-90 transition"
              >
                {parentCourse.title} →
              </Link>
            </div>
          )}

          {otherLocal.length > 0 && (
            <section className="mb-10">
              <h2 className="text-lg font-bold text-primary dark:text-white mb-4">Other areas in Coimbatore</h2>
              <div className="flex flex-wrap gap-3">
                {otherLocal.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/${loc.slug}`}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:border-secondary transition"
                  >
                    {loc.area}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/cyber-security-placement-program" className="text-secondary font-semibold hover:underline">
              Cyber Security placement program
            </Link>
            <span className="text-gray-400">·</span>
            <Link href="/placements" className="text-secondary font-semibold hover:underline">
              All placements
            </Link>
            <span className="text-gray-400">·</span>
            <Link href="/blog" className="text-secondary font-semibold hover:underline">
              Career guides
            </Link>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
