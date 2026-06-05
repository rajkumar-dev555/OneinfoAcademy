'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import Counter from './Counter';
import TestimonialCard from './TestimonialCard';
import StudentPrivacyNotice from './StudentPrivacyNotice';
import { placementStories, googleReviews, placementStats } from '@/data/testimonials';

const SuccessStories = () => {
    const [headerRef, headerAnim] = useScrollAnimation();
    const [statsRef, statsAnim] = useScrollAnimation();
    const [storiesRef, storiesAnim] = useScrollAnimation();
    const [activePage, setActivePage] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const stats = placementStats;
    const stories = googleReviews;
    const ITEMS_PER_PAGE = 3;
    const totalPages = Math.ceil(stories.length / ITEMS_PER_PAGE);

    useEffect(() => {
        if (!isPaused && totalPages > 1) {
            const interval = setInterval(() => {
                setActivePage((prev) => (prev + 1) % totalPages);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isPaused, totalPages]);

    return (
        <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-4">
                <div ref={statsRef} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 ${statsAnim}`}>
                    {stats.map((stat, index) => (
                        <div key={index} className="relative p-10 bg-white dark:bg-gray-800 rounded-2xl text-center group hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-700 shadow-xl shadow-primary/5">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-bl-full"></div>
                            <div className="text-4xl font-black text-primary dark:text-secondary mb-2">
                                <Counter end={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em]">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Real Placements */}
                <div ref={headerRef} className={`mb-16 ${headerAnim}`}>
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold tracking-widest uppercase border border-green-200 dark:border-green-800">
                            ✅ Verified Placements
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-black text-primary dark:text-white mb-6">
                            Real Students, <span className="text-secondary">Real Jobs</span>
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-6">
                            Actual placement updates from our students — UAE, TIDEL Park, Smart Tech, and more.
                        </p>
                        <StudentPrivacyNotice className="mb-8" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8">
                        {placementStories.map((story) => (
                            <TestimonialCard key={story.id} story={story} showProof />
                        ))}
                    </div>
                    <div className="text-center">
                        <Link href="/student-success-stories" className="inline-block text-secondary font-bold hover:underline">
                            View all success stories →
                        </Link>
                    </div>
                </div>

                {/* Google Reviews Carousel */}
                <div className={`text-center mb-16 ${headerAnim}`}>
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-widest uppercase border border-secondary/20">
                        🌟 Google Reviews
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-primary dark:text-white mb-6">
                        Hear From Our <span className="text-secondary">Alumni</span>
                    </h2>
                </div>

                <div
                    className="relative max-w-7xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div ref={storiesRef} className="overflow-hidden py-4">
                        <div
                            key={activePage}
                            className={`flex flex-col md:flex-row gap-8 transition-all duration-1000 ease-in-out ${storiesAnim}`}
                        >
                            {stories.slice(activePage * ITEMS_PER_PAGE, (activePage + 1) * ITEMS_PER_PAGE).map((story) => (
                                <div key={story.id} className="flex-1">
                                    <TestimonialCard story={story} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center mt-12 gap-3">
                            {Array.from({ length: totalPages }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActivePage(idx)}
                                    className={`h-2 rounded-full transition-all duration-700 ${activePage === idx ? 'w-12 bg-secondary' : 'w-2 bg-gray-200 dark:bg-gray-700 hover:bg-secondary/40'}`}
                                    aria-label={`Go to page ${idx + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
