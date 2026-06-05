import type { Metadata } from 'next';

export const SITE_URL = 'https://oneinfoacademy.com';
export const SITE_NAME = 'OneInfo Academy';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Cyber Security, DevOps & Cloud Training Institute in Coimbatore | OneInfo Academy',
    template: '%s | OneInfo Academy',
  },
  description:
    'Join OneInfo Academy Coimbatore for Cyber Security, DevOps, AWS and Cloud Training with Internship, Real-Time Projects and Placement Assistance.',
  keywords: [
    'Cyber Security course Coimbatore',
    'DevOps training Coimbatore',
    'AWS training Coimbatore',
    'Cloud Computing course Coimbatore',
    'IT training institute Coimbatore',
    'Oneinfo Academy',
  ],
  authors: [{ name: 'OneInfo Academy' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Cyber Security, DevOps & Cloud Training Institute in Coimbatore | OneInfo Academy',
    description:
      'Join OneInfo Academy Coimbatore for Cyber Security, DevOps, AWS and Cloud Training with Internship, Real-Time Projects and Placement Assistance.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'OneInfo Academy - IT Training Institute in Coimbatore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyber Security, DevOps & Cloud Training Institute in Coimbatore | OneInfo Academy',
    description:
      'High-salary IT career training in Coimbatore. Cyber Security, DevOps, AWS, Cloud & Full Stack. 100% Placement Support.',
    images: ['/og-image.png'],
  },
};

interface CourseLike {
  slug: string;
  title: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  image?: string;
}

interface BlogLike {
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
  date?: string;
  author?: string;
}

export function courseMetadata(course: CourseLike): Metadata {
  const title = course.metaTitle ?? `${course.title} in Coimbatore`;
  const description = course.metaDescription ?? course.description;
  const url = `${SITE_URL}/${course.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [{ url: course.image ?? '/og-image.png', alt: course.title }],
    },
    twitter: { title, description },
  };
}

export function blogIndexMetadata(): Metadata {
  const title = 'Blog - IT Career Guides & Tech Trends | OneInfo Academy Coimbatore';
  const description =
    'Cyber Security career guides, DevOps salary insights, AWS vs Azure comparisons, and IT training advice from Coimbatore\'s leading tech academy.';
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/blog` },
    openGraph: { title, description, url: `${SITE_URL}/blog` },
  };
}

export function blogPostMetadata(post: BlogLike): Metadata {
  const title = post.title;
  const description = post.excerpt;
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
  };
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'OneInfo Academy',
    alternateName: ['Oneinfo Academy', 'OneInfoAcademy', 'oneinfo_academy'],
    url: SITE_URL,
    logo: `${SITE_URL}/images/oneinfoacademy.png`,
    description:
      'Premium IT Skill Development Academy in Coimbatore specializing in Cyber Security, DevOps, AWS, Cloud Engineering, and high-salary tech careers.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Coimbatore',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.facebook.com/people/Oneinfo-it-academy/61585760608714/',
      'https://www.instagram.com/oneinfo_academy/',
      'https://www.linkedin.com/company/oneinfoacademy',
    ],
    knowsAbout: ['Cyber Security', 'DevOps', 'AWS', 'Cloud Computing', 'Artificial Intelligence', 'Full Stack Development'],
    telephone: '+91-99408-04524',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-99408-04524',
      contactType: 'admissions',
      availableLanguage: ['English', 'Tamil'],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '27',
      bestRating: '5',
    },
  };
}

export function courseListJsonLd(courses: CourseLike[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'IT Training Courses at OneInfo Academy Coimbatore',
    itemListElement: courses.map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Course',
        name: course.title,
        description: course.description,
        provider: { '@type': 'Organization', name: 'OneInfo Academy', sameAs: SITE_URL },
        url: `${SITE_URL}/${course.slug}`,
      },
    })),
  };
}

export function courseJsonLd(course: CourseLike & { duration?: string; averageSalary?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: { '@type': 'Organization', name: 'OneInfo Academy', sameAs: SITE_URL },
    url: `${SITE_URL}/${course.slug}`,
    ...(course.duration && { timeRequired: course.duration }),
    offers: {
      '@type': 'Offer',
      category: 'Paid',
      availability: 'https://schema.org/InStock',
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function articleJsonLd(post: BlogLike) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Person', name: post.author ?? 'OneInfo Academy' },
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'OneInfo Academy',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/oneinfoacademy.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}