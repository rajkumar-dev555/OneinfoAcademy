import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const WhyChooseUs = () => {
    const [headerRef, headerAnim] = useScrollAnimation();
    const [gridRef, gridAnim] = useScrollAnimation();

    const reasons = [
        {
            title: 'High-Salary MNC Mentors',
            description: 'Learn from active DevSecOps leads in top-tier product MNCs. Our mentors don\'t just teach; they prepare you for global high-paying roles.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: 'Multi-Domain Access',
            description: 'One terminal for multiple domains—AI, DevOps, Security, Data Science, and more.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
        },
        {
            title: 'Project-Driven Learning',
            description: 'We skip the boring slides and focus on building real projects that get you hired.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
        },
        {
            title: 'Personalized vs Standardized',
            description: 'Unlike massive training franchises with standardized curricula, we provide personalized 1-on-1 mentorship led by industry experts who adjust to your speed.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
        {
            title: 'Career Roadmap guidance',
            description: 'Beyond technical skills, we help you with portfolio building, networking, and salary negotiation.',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div ref={headerRef} className={`text-center mb-16 ${headerAnim}`}>
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide border border-secondary/20">
                        💡 Why OneinfoAcademy?
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-primary dark:text-white mb-6 leading-tight">
                        What Makes Us <span className="text-secondary">Different?</span>
                    </h2>
                </div>

                <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ${gridAnim}`}>
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className={`p-10 bg-white dark:bg-gray-800 rounded-[2.5rem] border-2 border-transparent hover:border-secondary/20 hover:shadow-2xl transition-all duration-500 group ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                                }`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary text-secondary flex items-center justify-center mb-8 bg-gradient-to-br from-primary to-gray-800 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary dark:text-white mb-4">{reason.title}</h3>
                            <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
