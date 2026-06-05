import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import TestimonialCard from '@/components/TestimonialCard';
import StudentPrivacyNotice from '@/components/StudentPrivacyNotice';
import { placementFeatures, placementStories } from '@/data/testimonials';
import { pageMetadata, faqJsonLd, breadcrumbJsonLd, SITE_URL } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export const metadata = pageMetadata(
  'IT Job Placement Support in Coimbatore | OneInfo Academy',
  '100% placement-oriented IT training in Coimbatore. Resume building, LinkedIn optimization, mock interviews, and 100+ hiring partners at OneInfo Academy.',
  '/placements'
);

const placementFaqs = [
  {
    question: 'Does OneInfo Academy provide 100% placement support?',
    answer: 'Yes. Every course includes resume optimization, LinkedIn branding, technical mock interviews, and referrals to 100+ hiring partners across India.',
  },
  {
    question: 'Which companies hire OneInfo Academy graduates?',
    answer: 'Our graduates have been placed at Injazat (UAE), FORTUMARS (TIDEL Park, Coimbatore), Thought Makes AI, Smart Tech, and IT companies across India and abroad — in Cyber Security, DevOps, AI, Full Stack, and Cloud roles.',
  },
  {
    question: 'Is this placement-oriented IT training suitable for freshers?',
    answer: 'Absolutely. Our programs are designed as placement-oriented IT training for freshers with internship-style project work that builds interview-ready portfolios.',
  },
];

export default function PlacementsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', url: SITE_URL },
            { name: 'Placements', url: `${SITE_URL}/placements` },
          ]),
          faqJsonLd(placementFaqs),
        ]}
      />
      <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <header className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide border border-secondary/20 uppercase">
                🎯 Career Roadmap
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-black text-primary dark:text-white mb-6">
                Placement Support & <span className="text-secondary">Career Assistance</span>
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Looking for <strong className="text-primary dark:text-white">IT Job Placement in Coimbatore</strong>? We provide expert career guidance and <strong className="text-secondary">100% placement-oriented IT training</strong> to help you command high salaries.
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-2xl font-heading font-bold text-primary dark:text-white mb-4 text-center">
                Recent <span className="text-secondary">Student Placements</span>
              </h2>
              <StudentPrivacyNotice className="mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {placementStories.map((story) => (
                  <TestimonialCard key={story.id} story={story} showProof />
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {placementFeatures.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700">
                  <div className="text-3xl mb-6">{feature.icon}</div>
                  <h2 className="text-xl font-bold text-primary dark:text-white mb-4">{feature.title}</h2>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <section className="bg-primary text-white p-10 rounded-3xl mb-16">
              <h2 className="text-2xl font-bold mb-4">Internship-Style Training Model</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Unlike traditional institutes, OneInfo Academy follows an internship-style model. You don&apos;t just attend classes — you work on production-level projects alongside active industry mentors. This gives you real portfolio pieces and interview stories that recruiters value.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { label: 'Students Mentored', value: '500+' },
                  { label: 'Hiring Partners', value: '100+' },
                  { label: 'Job Readiness', value: '100%' },
                  { label: 'Avg Salary Hike', value: '40%' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-black text-secondary">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">Placement FAQ</h2>
              <div className="space-y-4">
                {placementFaqs.map((faq, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <h3 className="font-bold text-primary dark:text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
