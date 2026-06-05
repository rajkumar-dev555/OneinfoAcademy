'use client';

import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { whatsappUrl } from '@/lib/contact';

const SEOContent = () => {
    const [ref, anim] = useScrollAnimation();

    return (
        <section className="py-16 bg-gray-50 dark:bg-black transition-colors duration-300">
            <div ref={ref} className={`container mx-auto px-4 max-w-4xl text-center ${anim}`}>
                <h2 className="text-2xl md:text-3xl font-heading font-black text-primary dark:text-white mb-4">
                    IT Training in <span className="text-secondary">Coimbatore</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium mb-6">
                    OneInfo Academy offers hands-on programs in{' '}
                    <Link href="/cyber-security-course-coimbatore" className="text-secondary font-semibold hover:underline">Cyber Security</Link>,{' '}
                    <Link href="/devops-course-coimbatore" className="text-secondary font-semibold hover:underline">DevOps</Link>,{' '}
                    <Link href="/aws-training-coimbatore" className="text-secondary font-semibold hover:underline">AWS</Link>, and{' '}
                    <Link href="/cloud-computing-course-coimbatore" className="text-secondary font-semibold hover:underline">Cloud</Link>{' '}
                    with internship-style projects and dedicated placement support across Saravanampatti, Gandhipuram, and Coimbatore city.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href={whatsappUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-2xl"
                    >
                        WhatsApp — Free Career Consultation
                    </a>
                    <Link href="/placements" className="px-8 py-4 bg-secondary text-white font-bold rounded-2xl">
                        View Placement Stories
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SEOContent;
