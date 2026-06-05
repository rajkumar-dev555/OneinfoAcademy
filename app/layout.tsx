import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import SiteChrome from '@/components/SiteChrome';
import { defaultMetadata, organizationJsonLd, courseListJsonLd, faqJsonLd } from '@/lib/seo';
import { courses } from '@/data/courses';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = defaultMetadata;

const homepageFaqs = [
  {
    question: 'What makes Oneinfo Academy different from other institutes in Coimbatore?',
    answer:
      'Unlike legacy franchises, Oneinfo Academy offers a dedicated Internship-style environment. Students work alongside active industry developers on production-level projects with 1-on-1 mentorship over massive batch sizes.',
  },
  {
    question: 'Do you provide 100% job assistance?',
    answer:
      'Yes, we provide 100% placement support with access to over 100+ hiring partners. Our support includes resume building, LinkedIn optimization, and mock interviews with MNC industry leads.',
  },
  {
    question: 'Who is the primary trainer at Oneinfo Academy?',
    answer:
      'Training is led by a working DevSecOps Lead with extensive MNC experience, ensuring the curriculum is aligned with current market demands for Cyber Security, DevOps, and Cloud roles.',
  },
];

const GTM_ID = 'GTM-5DQ8N328';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/images/oneinfoacademy.png" />
        <link rel="apple-touch-icon" href="/images/oneinfoacademy.png" />
        <meta name="theme-color" content="#f39200" />
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className={`${inter.variable} ${outfit.variable} bg-light text-dark dark:bg-dark dark:text-light font-sans transition-colors duration-300 antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script id="smartlook-init" strategy="afterInteractive">
          {`window.smartlook||(function(d) {
            var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
            var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
            c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
          })(document);
          smartlook('init', 'e806bdcccf520c06ef4d449f061c7326202992bb', { region: 'eu' });`}
        </Script>
        <JsonLd data={[organizationJsonLd(), courseListJsonLd(courses), faqJsonLd(homepageFaqs)]} />
        {children}
        <SiteChrome />
      </body>
    </html>
  );
}
