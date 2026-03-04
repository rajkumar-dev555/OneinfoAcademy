import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const WhoShouldJoin = () => {
    const [headerRef, headerAnim] = useScrollAnimation();
    const [gridRef, gridAnim] = useScrollAnimation();

    const audiences = [
        {
            title: 'Final Year Students',
            description: 'Get industry exposure before graduation and land your first tech job with confidence.',
            icon: '🎓',
        },
        {
            title: 'Fresh Graduates',
            description: 'Bridge the gap between academic theory and high-demand industry requirements.',
            icon: '🌱',
        },
        {
            title: 'Non-IT Career Switchers',
            description: 'Transition into the tech world with a guided, mentor-led path tailored for beginners.',
            icon: '🔄',
        },
        {
            title: 'Working Professionals',
            description: 'Upgrade your skills to modern domains like AI or Cloud to unlock higher salary brackets.',
            icon: '💼',
        },
        {
            title: 'Domain Upgraders',
            description: 'Perfect for developers wanting to pivot specifically into Security, DevOps, or AI.',
            icon: '⚡',
        },
    ];

    return (
        <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div ref={headerRef} className={`text-center mb-16 ${headerAnim}`}>
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide border border-secondary/20">
                        🎯 Target Audience
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-primary dark:text-white mb-6 leading-tight">
                        Is This <span className="text-secondary">For You?</span>
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Our programs are designed for individuals who are serious about building a specialized career in the tech industry.
                    </p>
                </div>

                <div ref={gridRef} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${gridAnim}`}>
                    {audiences.map((item, index) => (
                        <div
                            key={index}
                            className={`p-10 rounded-[2rem] bg-gray-50 dark:bg-gray-800/50 border-2 border-transparent hover:border-secondary/30 transition-all duration-500 group relative overflow-hidden ${index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                                }`}
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full group-hover:scale-125 transition-transform duration-700"></div>

                            <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform origin-left">{item.icon}</span>
                            <h3 className="text-xl font-bold text-primary dark:text-white mb-3">{item.title}</h3>
                            <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoShouldJoin;
