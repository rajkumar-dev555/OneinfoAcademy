'use client';

import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const PlacementSupport = () => {
    const [headerRef, headerAnim] = useScrollAnimation();
    const [gridRef, gridAnim] = useScrollAnimation();

    const features = [
        {
            title: 'Resume & ATS Optimization',
            description: 'Craft a tech-focused resume that passes through tracking systems and gets noticed by recruiters.',
            icon: '📄',
        },
        {
            title: 'LinkedIn Branding',
            description: "Optimize your LinkedIn profile to attract recruiters and build a professional network in your domain.",
            icon: '👤',
        },
        {
            title: 'Technical Mock Interviews',
            description: 'Realistic interview sessions with our expert panel to prepare you for high-pressure technical rounds.',
            icon: '👨‍💻',
        },
        {
            title: 'Soft Skills & Etiquette',
            description: 'Learn how to communicate effectively, handle negotiations, and present your projects confidently.',
            icon: '🗣️',
        },
        {
            title: 'Job Search Strategy',
            description: 'Navigate the modern job market, find hidden opportunities, and apply strategically to dream companies.',
            icon: '🎯',
        },
        {
            title: 'Life-time Career Support',
            description: 'Access our alumni community and get ongoing career advice even after landing your first role.',
            icon: '♾️',
        },
    ];

    return (
        <section id="placement" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div ref={headerRef} className={`text-center mb-16 ${headerAnim}`}>
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide border border-secondary/20 uppercase tracking-widest">
                        🎯 Career Roadmap
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-primary dark:text-white mb-6 leading-tight">
                        Our Job Readiness <span className="text-secondary">Assistance</span>
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Looking for <strong className="text-primary dark:text-white">IT Job Placement in Coimbatore</strong>? We provide expert <strong className="text-secondary">Software Career Guidance</strong> and <strong className="text-primary dark:text-white">100% Placement Courses</strong> to help you command high salaries in the global tech market.
                    </p>
                </div>

                <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ${gridAnim}`}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-xl shadow-primary/5 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-secondary/20 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100px] group-hover:scale-125 transition-transform duration-700"></div>

                            <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform relative z-10">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary dark:text-white mb-4 relative z-10 group-hover:text-secondary transition-colors">{feature.title}</h3>
                            <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed relative z-10 font-medium">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlacementSupport;
