import { courses, getCourseBySlug } from '@/data/courses';
import { localPages, getLocalPageBySlug } from '@/data/localPages';

export function getPageBySlug(slug) {
  const course = getCourseBySlug(slug);
  if (course) return { type: 'course', data: course };
  const local = getLocalPageBySlug(slug);
  if (local) return { type: 'local', data: local };
  return null;
}

export function getAllStaticSlugs() {
  return [
    ...courses.map((c) => c.slug),
    ...localPages.map((p) => p.slug),
  ];
}
