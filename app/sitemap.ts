import type { MetadataRoute } from 'next';
import { courses } from '@/data/courses';
import { localPages } from '@/data/localPages';
import { blogPosts } from '@/data/blogPosts';
import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${SITE_URL}/placements`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/student-success-stories`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/cyber-security-placement-program`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${SITE_URL}/resources`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
  ];

  const localAreaPages = localPages.map((page) => ({
    url: `${SITE_URL}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const coursePages = courses.map((course) => ({
    url: `${SITE_URL}/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...localAreaPages, ...coursePages, ...blogPages];
}
