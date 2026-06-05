import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { directoryBacklinks, napConsistency } from '@/data/directoryBacklinks';
import { localPages } from '@/data/localPages';
import { pageMetadata, breadcrumbJsonLd, SITE_URL } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export const metadata = pageMetadata(
  'Resources & Directory Listings | OneInfo Academy Coimbatore',
  'Official NAP details and recommended directory listings to build backlinks and local SEO for OneInfo Academy IT training in Coimbatore.',
  '/resources'
);

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', url: SITE_URL },
            { name: 'Resources', url: `${SITE_URL}/resources` },
          ]),
        ]}
      />
      <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <header className="mb-12">
              <h1 className="text-4xl font-heading font-black text-primary dark:text-white mb-4">
                Resources & <span className="text-secondary">backlink guide</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Use consistent business details (NAP) when listing OneInfo Academy on directories. Quality citations and social profiles strengthen local SEO and referral traffic alongside your website.
              </p>
            </header>

            <section className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 mb-12">
              <h2 className="text-xl font-bold text-primary dark:text-white mb-4">Official NAP (copy exactly)</h2>
              <dl className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div><dt className="font-semibold inline">Name: </dt><dd className="inline">{napConsistency.name}</dd></div>
                <div><dt className="font-semibold inline">City: </dt><dd className="inline">{napConsistency.city}, {napConsistency.region}</dd></div>
                <div><dt className="font-semibold inline">Website: </dt><dd className="inline"><a href={napConsistency.website} className="text-secondary">{napConsistency.website}</a></dd></div>
                <div><dt className="font-semibold inline">Description: </dt><dd className="inline">{napConsistency.description}</dd></div>
              </dl>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-bold text-primary dark:text-white mb-6">Recommended directory submissions</h2>
              <div className="space-y-4">
                {directoryBacklinks.map((dir) => (
                  <div
                    key={dir.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700"
                  >
                    <div>
                      <div className="font-bold text-primary dark:text-white">{dir.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{dir.note}</div>
                      <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">{dir.priority}</span>
                    </div>
                    <a
                      href={dir.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-sm font-semibold text-secondary hover:underline shrink-0"
                    >
                      Open →
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-bold text-primary dark:text-white mb-4">Key pages to link from listings</h2>
              <ul className="space-y-2 text-secondary font-medium">
                <li><Link href="/cyber-security-course-coimbatore">Cyber Security Course Coimbatore</Link></li>
                <li><Link href="/cyber-security-placement-program">Cyber Security Placement Program</Link></li>
                <li><Link href="/devops-course-coimbatore">DevOps Course Coimbatore</Link></li>
                <li><Link href="/placements">Placements</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary dark:text-white mb-4">Local area pages</h2>
              <div className="flex flex-wrap gap-3">
                {localPages.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border rounded-full text-sm hover:border-secondary"
                  >
                    {p.area}
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
