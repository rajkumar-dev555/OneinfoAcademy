import { notFound } from 'next/navigation';
import CourseDetail from '@/components/CourseDetail';
import LocalLanding from '@/components/LocalLanding';
import { getLocalPageBySlug } from '@/data/localPages';
import { getCourseBySlug } from '@/data/courses';
import { getAllStaticSlugs } from '@/lib/pages';
import { courseMetadata, courseJsonLd, faqJsonLd, breadcrumbJsonLd, pageMetadata, SITE_URL } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

const RESERVED = new Set([
  'blog',
  'placements',
  'student-success-stories',
  'cyber-security-placement-program',
  'resources',
]);

export async function generateStaticParams() {
  return getAllStaticSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (course) return courseMetadata(course);
  const local = getLocalPageBySlug(slug);
  if (local) {
    return pageMetadata(local.metaTitle, local.metaDescription, `/${local.slug}`);
  }
  return {};
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (RESERVED.has(slug)) notFound();
  const local = getLocalPageBySlug(slug);
  if (local) {
    return (
      <>
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: 'Home', url: SITE_URL },
              { name: local.title, url: `${SITE_URL}/${local.slug}` },
            ]),
          ]}
        />
        <LocalLanding page={local} />
      </>
    );
  }

  const course = getCourseBySlug(slug);
  if (!course) notFound();
  const schemas: Record<string, unknown>[] = [
    courseJsonLd(course),
    breadcrumbJsonLd([
      { name: 'Home', url: SITE_URL },
      { name: course.title, url: `${SITE_URL}/${course.slug}` },
    ]),
  ];
  if (course.faqs) schemas.push(faqJsonLd(course.faqs));

  return (
    <>
      <JsonLd data={schemas} />
      <CourseDetail course={course} />
    </>
  );
}
