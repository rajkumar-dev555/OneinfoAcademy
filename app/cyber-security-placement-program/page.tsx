import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import TestimonialCard from '@/components/TestimonialCard';
import StudentPrivacyNotice from '@/components/StudentPrivacyNotice';
import { testimonials } from '@/data/testimonials';
import { pageMetadata, faqJsonLd, breadcrumbJsonLd, SITE_URL } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export const metadata = pageMetadata(
  'Cyber Security Placement Program Coimbatore | Internship + Job Support',
  'Cyber Security placement training in Coimbatore with real placements, internship projects, salary guidance, recruiter prep & 100% job assistance at OneInfo Academy.',
  '/cyber-security-placement-program'
);

const placementFaqs = [
  {
    question: 'What is the Cyber Security placement program at OneInfo Academy?',
    answer:
      'It is our outcome-focused track for students who want Security Analyst, SOC, or Ethical Hacker roles — combining VAPT labs, internship-style projects, certification guidance, and full placement support.',
  },
  {
    question: 'What salary can I expect after Cyber Security placement training?',
    answer:
      'Freshers typically start at 4–8 LPA as Security Analysts. Penetration testers and experienced SOC analysts reach 8–20+ LPA depending on certifications and portfolio quality.',
  },
  {
    question: 'Do you help with Cyber Security internships in Coimbatore?',
    answer:
      'Yes. Students complete guided security audits and vulnerability assessment reports that simulate corporate internship deliverables — strengthening both resumes and interviews.',
  },
  {
    question: 'Which recruiters hire your Cyber Security graduates?',
    answer:
      'Our network includes IT services firms, product companies, MSSPs, and international employers. Recent outcomes include placements and shortlists in Coimbatore, India-wide remote roles, and UAE opportunities for related cloud/security paths.',
  },
];

export default function CyberSecurityPlacementPage() {
  const stories = testimonials
    .filter((s) => s.courseSlug === 'cyber-security-course-coimbatore')
    .slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', url: SITE_URL },
            { name: 'Cyber Security Placement Program', url: `${SITE_URL}/cyber-security-placement-program` },
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
                🛡️ Outcomes-first
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-black text-primary dark:text-white mb-6">
                Cyber Security <span className="text-secondary">Placement Program</span>
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Students don&apos;t buy syllabi — they buy jobs. This program is built for{' '}
                <strong className="text-primary dark:text-white">Cyber Security placement training in Coimbatore</strong>{' '}
                with internship projects, recruiter prep, and verified placement outcomes.
              </p>
            </header>

            <section className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { label: 'Target roles', value: 'SOC Analyst, VAPT, Ethical Hacker' },
                { label: 'Salary range', value: '5 – 20 LPA' },
                { label: 'Support', value: '100% placement assistance' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 text-center"
                >
                  <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">{item.label}</div>
                  <div className="font-bold text-primary dark:text-white">{item.value}</div>
                </div>
              ))}
            </section>

            <section className="bg-primary text-white p-10 rounded-3xl mb-16">
              <h2 className="text-2xl font-bold mb-4">How the placement process works</h2>
              <ol className="space-y-4 text-white/90 list-decimal list-inside">
                <li>Enroll in the <Link href="/cyber-security-course-coimbatore" className="text-secondary underline">Cyber Security course</Link> — foundations through VAPT labs</li>
                <li>Build 3 portfolio projects including a professional Vulnerability Assessment Report</li>
                <li>Internship-style security scenarios with mentor feedback on reports and presentations</li>
                <li>Resume + LinkedIn optimization for security keywords recruiters search</li>
                <li>Technical mock interviews (network security, OWASP, incident response)</li>
                <li>Referrals to 100+ hiring partners and active interview coordination</li>
              </ol>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-heading font-bold text-primary dark:text-white mb-4 text-center">
                Placement <span className="text-secondary">proof</span>
              </h2>
              <StudentPrivacyNotice className="mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories.map((story) => (
                  <TestimonialCard key={story.id} story={story} showProof />
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">FAQ</h2>
              <div className="space-y-4">
                {placementFaqs.map((faq, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <h3 className="font-bold text-primary dark:text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="text-center flex flex-wrap gap-4 justify-center">
              <Link
                href="/cyber-security-course-coimbatore"
                className="px-8 py-3 bg-secondary text-white font-bold rounded-full"
              >
                View full Cyber Security syllabus
              </Link>
              <Link href="/placements" className="px-8 py-3 border border-primary text-primary dark:text-white font-bold rounded-full">
                All placement stories
              </Link>
            </div>
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
