import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import StudentPrivacyNotice from '@/components/StudentPrivacyNotice';
import { placementStories, googleReviews, placementStats } from '@/data/testimonials';
import { pageMetadata, breadcrumbJsonLd, SITE_URL } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export const metadata = pageMetadata(
  'Student Success Stories & Placements | OneInfo Academy Coimbatore',
  'Real placement stories from OneInfo Academy Coimbatore — FORTUMARS at TIDEL Park, Junior AI Developer roles, Cyber Security, DevOps, and AWS graduates.',
  '/student-success-stories'
);

export default function StudentSuccessStoriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: SITE_URL },
          { name: 'Student Success Stories', url: `${SITE_URL}/student-success-stories` },
        ])}
      />
      <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <header className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold tracking-widest uppercase border border-green-200 dark:border-green-800">
                ✅ Verified Placements
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-black text-primary dark:text-white mb-6">
                Student <span className="text-secondary">Success Stories</span>
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-6">
                Real students placed at Injazat (UAE), FORTUMARS, Thought Makes AI, Smart Tech, and more — plus Google reviews from our alumni.
              </p>
              <StudentPrivacyNotice className="mb-4" />
            </header>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {placementStats.map((stat) => (
                <div key={stat.label} className="bg-white dark:bg-gray-800 p-8 rounded-2xl text-center shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="text-3xl font-black text-secondary">{stat.value}{stat.suffix}</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">{stat.label}</div>
                </div>
              ))}
            </div>

            <section className="mb-20">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary dark:text-white mb-4">
                Recent <span className="text-secondary">Placements</span>
              </h2>
              <StudentPrivacyNotice className="mb-8 text-left mx-0 max-w-none" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {placementStories.map((story) => (
                  <TestimonialCard key={story.id} story={story} showProof />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary dark:text-white mb-8">
                Google <span className="text-secondary">Reviews</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {googleReviews.map((story) => (
                  <TestimonialCard key={story.id} story={story} />
                ))}
              </div>
            </section>

            <div className="mt-16 text-center bg-primary text-white p-10 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">Want to be our next success story?</h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                Join placement-oriented IT training in Coimbatore with internship-style projects and 100% career support.
              </p>
              <Link href="/placements" className="inline-block bg-secondary text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-all">
                Explore Placement Support
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
