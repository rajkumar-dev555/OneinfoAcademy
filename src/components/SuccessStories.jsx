import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Counter from './Counter';

const SuccessStories = () => {
    const [headerRef, headerAnim] = useScrollAnimation();
    const [statsRef, statsAnim] = useScrollAnimation();
    const [storiesRef, storiesAnim] = useScrollAnimation();
    const [activePage, setActivePage] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Realistic stats - Sync with multi-domain
    const stats = [
        { label: 'Students Mentored', value: 500, suffix: '+' },
        { label: 'Skill Domains', value: 12, suffix: '' },
        { label: 'Job Readiness', value: 100, suffix: '%' },
        { label: 'Avg Salary Hike', value: 40, suffix: '%' },
    ];

    const stories = [
        {
            name: 'Nikitha',
            role: 'Cybersecurity Analyst Aspirant',
            image: '/assets/images/testimonials/student1.png',
            quote: "I learned a lot through his guidance during the cybersecurity course. Vignesh doesn't just teach concepts, he explains them with real-time industry examples.",
        },
        {
            name: 'Priya Sharma',
            role: 'Full Stack Developer',
            image: '/assets/images/testimonials/student2.png',
            quote: "The bootcamp was intense but perfect. The real-world projects gave me exactly what I needed to crack my first tech role.",
        },
        {
            name: 'Dharshini Sri',
            role: 'Final Year Student (Project)',
            image: '/assets/images/testimonials/student4.png',
            quote: "Grateful for the support on my final year Blockchain project. Complex concepts like smart contracts were simplified for me.",
        },
        {
            name: 'Yuvasri',
            role: 'Frontend Enthusiast',
            image: '/assets/images/testimonials/student1.png',
            quote: "He understands the student's mindset perfectly. He taught at our level and never disappointed us.",
        },
        {
            name: 'Chitrikaaaa M',
            role: 'Networking Student',
            image: '/assets/images/testimonials/student4.png',
            quote: "My traffic analysis project was explained so clearly. I can now handle complex networking tasks easily.",
        },
    ];

    const ITEMS_PER_PAGE = 3;
    const totalPages = Math.ceil(stories.length / ITEMS_PER_PAGE);

    useEffect(() => {
        if (!isPaused && totalPages > 1) {
            const interval = setInterval(() => {
                setActivePage((prev) => (prev + 1) % totalPages);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isPaused, totalPages]);

    const handleNext = () => {
        setActivePage((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setActivePage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const currentStories = stories.slice(
        activePage * ITEMS_PER_PAGE,
        (activePage + 1) * ITEMS_PER_PAGE
    );

    return (
        <section id="testimonials" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Stats Section */}
                <div ref={statsRef} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 ${statsAnim}`}>
                    {stats.map((stat, index) => (
                        <div key={index} className="relative p-10 bg-gray-50 dark:bg-gray-800 rounded-[2rem] text-center group hover:-translate-y-2 transition-transform duration-500">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-bl-full"></div>
                            <div className="text-4xl font-black text-primary dark:text-secondary mb-2">
                                <Counter end={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em]">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Stories Header */}
                <div ref={headerRef} className={`text-center mb-16 ${headerAnim}`}>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-primary dark:text-white mb-6">
                        Student <span className="text-secondary">Success Stories</span>
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto italic leading-relaxed">
                        "Your success is our ultimate mission. Every milestone here represents a career pivoted and a dream achieved through collective effort."
                    </p>
                </div>

                {/* Carousel */}
                <div
                    className="relative max-w-6xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div ref={storiesRef} className="overflow-hidden py-8">
                        <div key={activePage} className={`grid md:grid-cols-3 gap-8 ${storiesAnim} animate-fade-in-up`}>
                            {currentStories.map((story, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-gray-100 dark:border-gray-700 hover:border-secondary transition-all duration-500 flex flex-col h-full transform">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-2xl flex-shrink-0 overflow-hidden border-2 border-secondary/20">
                                            <img
                                                src={story.image}
                                                alt={story.name}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-primary dark:text-white leading-tight">{story.name}</h3>
                                            <p className="text-xs font-black text-secondary uppercase tracking-widest">{story.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 italic text-[15px] leading-relaxed flex-grow font-medium">"{story.quote}"</p>

                                    <div className="mt-8 flex gap-1">
                                        {[1, 2, 3, 4, 5].map(s => (
                                            <span key={s} className="text-secondary text-lg">★</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-8 gap-3">
                            {Array.from({ length: totalPages }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActivePage(idx)}
                                    className={`h-2.5 rounded-full transition-all duration-500 ${activePage === idx ? 'w-10 bg-secondary' : 'w-2.5 bg-gray-200 dark:bg-gray-700'}`}
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
